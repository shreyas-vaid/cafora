/**
 * Test Suite for CAFORA Backend API Endpoints & Section 31 Test Cases
 */

import fs from 'fs';
import cafesHandler from '../api/cafes.js';
import recommendationsHandler from '../api/recommendations.js';
import moodsHandler from '../api/moods.js';
import searchHandler from '../api/search.js';
import evidenceHandler from '../api/evidence.js';
import trustHandler from '../api/trust.js';
import auditHandler from '../api/audit.js';
import { CAFES_DATA } from '../src/data/cafesData.js';
import recPkg from '../server/recommendationService.js';
const { extractIntentFromQuery } = recPkg;

function createMockReqRes(query = {}, method = 'GET') {
  const headers = {};
  let statusCode = 200;
  let responseData = null;

  const req = {
    method,
    query
  };

  const res = {
    setHeader: (key, val) => { headers[key] = val; },
    status: (code) => {
      statusCode = code;
      return res;
    },
    json: (data) => {
      responseData = data;
      return res;
    },
    end: () => res
  };

  return { req, res, getStatus: () => statusCode, getData: () => responseData, getHeaders: () => headers };
}

async function runTests() {
  console.log('🧪 Starting CAFORA Backend API & Recommendation Test Suite...\n');
  let passed = 0;
  let total = 0;

  function assert(condition, message) {
    total++;
    if (condition) {
      console.log(`  ✅ [PASS] ${message}`);
      passed++;
    } else {
      console.error(`  ❌ [FAIL] ${message}`);
    }
  }

  // TEST 1: GET /api/moods
  console.log('--- 1. Testing GET /api/moods ---');
  {
    const { req, res, getData, getStatus } = createMockReqRes();
    await moodsHandler(req, res);
    assert(getStatus() === 200, 'Returns HTTP 200');
    const data = getData();
    assert(data.status === 'success', 'Status is success');
    assert(data.count === 12, 'Returns exactly 12 canonical moods');
    const moodIds = data.moods.map(m => m.id);
    assert(moodIds.includes('good-coffee') && moodIds.includes('work') && moodIds.includes('date'), 'Contains good-coffee, work, and date');
  }

  // TEST 2: GET /api/cafes (all, filter, single)
  console.log('\n--- 2. Testing GET /api/cafes ---');
  {
    const { req, res, getData, getStatus } = createMockReqRes();
    await cafesHandler(req, res);
    assert(getStatus() === 200, 'Returns HTTP 200 for all cafes');
    const data = getData();
    assert(data.total === 87, 'Dataset contains exactly 87 audited cafes');
    assert(data.cafes.length === 87, 'Returns all 87 cafes when unfiltered');

    // Single cafe
    const sampleId = data.cafes[0].id;
    const { req: reqSingle, res: resSingle, getData: getSingleData, getStatus: getSingleStatus } = createMockReqRes({ id: sampleId });
    await cafesHandler(reqSingle, resSingle);
    assert(getSingleStatus() === 200, `Fetches cafe by ID (${sampleId})`);
    assert(getSingleData().cafe.name.length > 0, 'Single cafe has valid name');

    // Sector filter
    const { req: reqSec, res: resSec, getData: getSecData } = createMockReqRes({ sector: 'Sector 8' });
    await cafesHandler(reqSec, resSec);
    const secCafes = getSecData().cafes;
    assert(secCafes.length > 0 && secCafes.every(c => c.sector.includes('8')), 'Sector filter correctly limits to Sector 8');
  }

  // TEST 3: GET /api/recommendations (single & multi-mood)
  console.log('\n--- 3. Testing GET /api/recommendations ---');
  {
    // Single mood
    const { req, res, getData, getStatus } = createMockReqRes({ moods: 'work' });
    await recommendationsHandler(req, res);
    assert(getStatus() === 200, 'Returns HTTP 200 for single mood query');
    const data = getData();
    assert(data.totalConsidered === 87, 'Considers all cafes');
    assert(data.levels.strong.length > 0, 'Level 1 strong matches populated for work mood');
    assert(data.cafes[0].matchScore >= 80, 'Top recommendation has matchScore >= 80%');

    // Multi-mood: date + pretty
    const { req: reqMulti, res: resMulti, getData: getMultiData } = createMockReqRes({ moods: 'date,pretty' });
    await recommendationsHandler(reqMulti, resMulti);
    const multiData = getMultiData();
    assert(multiData.status === 'success', 'Multi-mood recommendations successfully generated');
    assert(multiData.cafes[0].matchScore >= 85, 'Strong multi-mood synergy achieved for top cafe');
  }

  // TEST 4: GET /api/search (Search Intent Mapping)
  console.log('\n--- 4. Testing GET /api/search with Section 31 Intent Scenarios ---');
  {
    // Scenario A: "quiet place to study" -> work, quiet, reading
    const { req: rA, res: resA, getData: dA } = createMockReqRes({ q: 'quiet place to study' });
    await searchHandler(rA, resA);
    const dataA = dA();
    assert(dataA.detectedIntents.includes('work') && dataA.detectedIntents.includes('quiet'), 'Scenario A: "quiet place to study" detected work & quiet');
    assert(dataA.results.cafes.length > 0, 'Scenario A returned recommendations');

    // Scenario B: "romantic cafe with nice ambience" -> date, pretty
    const { req: rB, res: resB, getData: dB } = createMockReqRes({ q: 'romantic cafe with nice ambience' });
    await searchHandler(rB, resB);
    const dataB = dB();
    assert(dataB.detectedIntents.includes('date') && dataB.detectedIntents.includes('pretty'), 'Scenario B: "romantic cafe with nice ambience" detected date & pretty');

    // Scenario C: "good coffee and a slow morning" -> good-coffee, slow-morning
    const { req: rC, res: resC, getData: dC } = createMockReqRes({ q: 'good coffee and a slow morning' });
    await searchHandler(rC, resC);
    const dataC = dC();
    assert(dataC.detectedIntents.includes('good-coffee') && dataC.detectedIntents.includes('slow-morning'), 'Scenario C: "good coffee and a slow morning" detected good-coffee & slow-morning');

    // Scenario D: "somewhere to hang out with 8 friends" -> gang
    const { req: rD, res: resD, getData: dD } = createMockReqRes({ q: 'somewhere to hang out with 8 friends' });
    await searchHandler(rD, resD);
    const dataD = dD();
    assert(dataD.detectedIntents.includes('gang'), 'Scenario D: "somewhere to hang out with 8 friends" detected gang');

    // Scenario E: "coffee after 10pm" -> late-night
    const { req: rE, res: resE, getData: dE } = createMockReqRes({ q: 'coffee after 10pm' });
    await searchHandler(rE, resE);
    const dataE = dE();
    assert(dataE.detectedIntents.includes('late-night'), 'Scenario E: "coffee after 10pm" detected late-night');
  }

  // TEST 5: GET /api/evidence
  console.log('\n--- 5. Testing GET /api/evidence ---');
  {
    const { req, res, getData, getStatus } = createMockReqRes({ id: 'blue-tokai-sec8' });
    await evidenceHandler(req, res);
    assert(getStatus() === 200, 'Returns HTTP 200 for evidence');
    const data = getData();
    assert(data.cafeId === 'blue-tokai-sec8', 'Returns correct cafeId');
    assert(data.evidence && data.evidence.sources.length > 0, 'Returns structured sources array');
    assert(data.characteristics && typeof data.characteristics === 'object', 'Returns characteristic scores');

    // 1. A cafe with a real lastVerified value returns that value
    assert(data.lastVerified === '2026-09-08', 'Cafe with real lastVerified returns that value ("2026-09-08")');

    // 2. A cafe without evidence, characteristics, or lastVerified returns null for each
    CAFES_DATA.push({ id: 'test-cafe-no-verification', name: 'Test Cafe Without Verification' });
    try {
      const { req: reqNull, res: resNull, getData: getNullData } = createMockReqRes({ id: 'test-cafe-no-verification' });
      await evidenceHandler(reqNull, resNull);
      const nullData = getNullData();
      assert(nullData.lastVerified === null, 'Cafe without a lastVerified value returns null');
      assert(nullData.evidence === null, 'Cafe without evidence returns null instead of synthetic fallback object');
      assert(nullData.characteristics === null, 'Cafe without characteristics returns null');
    } finally {
      CAFES_DATA.pop();
    }

    // 3. No hardcoded fallback date or synthetic confidence remains in api/evidence.js
    const evidenceCode = fs.readFileSync(new URL('../api/evidence.js', import.meta.url), 'utf8');
    assert(!evidenceCode.includes('2026-08-20'), 'No hardcoded fallback date ("2026-08-20") remains in api/evidence.js');
    assert(!evidenceCode.includes("'unknown'"), 'No fabricated confidence fallback ("unknown") remains in api/evidence.js');
    assert(evidenceCode.includes('null'), 'api/evidence.js falls back to null');
  }

  // TEST 6: GET /api/trust
  console.log('\n--- 6. Testing GET /api/trust ---');
  {
    const { req, res, getData, getStatus } = createMockReqRes({ id: 'backpackers-cafe-sec9' });
    await trustHandler(req, res);
    assert(getStatus() === 200, 'Returns HTTP 200 for trust endpoint');
    const data = getData();
    assert(typeof data.trustScore === 'number' && data.trustScore >= 0 && data.trustScore <= 100, 'Valid numeric Trust Score returned');
    assert(['high', 'medium', 'low', 'unknown'].includes(data.confidence), `Returns verified confidence status (${data.confidence})`);
  }

  // TEST 7: GET /api/audit
  console.log('\n--- 7. Testing GET /api/audit ---');
  {
    const { req, res, getData, getStatus } = createMockReqRes();
    await auditHandler(req, res);
    assert(getStatus() === 200, 'Returns HTTP 200 for audit report');
    const data = getData();
    assert(data.report.dataset.totalCafes === 87, 'Audit verifies 87 total cafes');
    assert(data.report.provenanceAndIntegrity.cafesWith120SyntheticReviews === 0, 'Zero synthetic 120 review counts detected');
    assert(data.report.provenanceAndIntegrity.cafesWithQuestionableAICopy === 0, 'Zero exaggerated AI claims detected');
    assert(data.report.moodIntegrity.cafesWithOver4Moods === 0, 'Zero cafes exceed 4 moods');
  }

  // TEST 8: INPUT VALIDATION & QUERY PARAMETER ROBUSTNESS
  console.log('\n--- 8. Testing Input Validation & Query Robustness ---');
  {
    // 1. Valid limit works
    const { req: reqLim, res: resLim, getData: getLimData, getStatus: getLimStatus } = createMockReqRes({ limit: '5' });
    await cafesHandler(reqLim, resLim);
    assert(getLimStatus() === 200, 'Valid limit returns HTTP 200');
    assert(getLimData().cafes.length === 5, 'Valid limit ("5") returns exactly 5 cafes');

    // 2. Invalid limit returns 400
    for (const badLimit of ['0', '-5', '2.5', 'abc', '']) {
      const { req, res, getStatus } = createMockReqRes({ limit: badLimit });
      await cafesHandler(req, res);
      assert(getStatus() === 400, `Invalid limit ("${badLimit}") returns HTTP 400`);
    }

    // 3. Empty ID returns 400 where ID is required / provided
    const { req: rEvEmpty, res: resEvEmpty, getStatus: sEvEmpty } = createMockReqRes({ id: '' });
    await evidenceHandler(rEvEmpty, resEvEmpty);
    assert(sEvEmpty() === 400, 'Evidence endpoint rejects empty id with HTTP 400');

    const { req: rEvWs, res: resEvWs, getStatus: sEvWs } = createMockReqRes({ id: '   ' });
    await evidenceHandler(rEvWs, resEvWs);
    assert(sEvWs() === 400, 'Evidence endpoint rejects whitespace-only id with HTTP 400');

    const { req: rTrEmpty, res: resTrEmpty, getStatus: sTrEmpty } = createMockReqRes({ id: '' });
    await trustHandler(rTrEmpty, resTrEmpty);
    assert(sTrEmpty() === 400, 'Trust endpoint rejects empty id with HTTP 400');

    const { req: rTrWs, res: resTrWs, getStatus: sTrWs } = createMockReqRes({ id: '   ' });
    await trustHandler(rTrWs, resTrWs);
    assert(sTrWs() === 400, 'Trust endpoint rejects whitespace-only id with HTTP 400');

    const { req: rCafesWs, res: resCafesWs, getStatus: sCafesWs } = createMockReqRes({ id: '   ' });
    await cafesHandler(rCafesWs, resCafesWs);
    assert(sCafesWs() === 400, 'Cafes endpoint rejects whitespace-only id with HTTP 400');

    // 4. Whitespace is handled correctly
    const { req: rSingleWs, res: resSingleWs, getData: dSingleWs, getStatus: sSingleWs } = createMockReqRes({ id: '  blue-tokai-sec8  ' });
    await cafesHandler(rSingleWs, resSingleWs);
    assert(sSingleWs() === 200 && dSingleWs().cafe.id === 'blue-tokai-sec8', 'ID with padding whitespace is trimmed and resolves');

    const { req: rSecWs, res: resSecWs, getData: dSecWs, getStatus: sSecWs } = createMockReqRes({ sector: '  Sector 8  ' });
    await cafesHandler(rSecWs, resSecWs);
    assert(sSecWs() === 200 && dSecWs().cafes.length > 0 && dSecWs().cafes.every(c => c.sector.includes('8')), 'Sector with whitespace is trimmed and matches correctly');

    const { req: rQWs, res: resQWs, getData: dQWs, getStatus: sQWs } = createMockReqRes({ q: '   ' });
    await searchHandler(rQWs, resQWs);
    assert(sQWs() === 200 && dQWs().detectedIntents.length === 0, 'Whitespace search query is trimmed and produces no spurious intents');

    // 5. Empty mood tokens don't create invalid moods
    const { req: rMoodsEmpty, res: resMoodsEmpty, getData: dMoodsEmpty } = createMockReqRes({ moods: 'work,,quiet' });
    await recommendationsHandler(rMoodsEmpty, resMoodsEmpty);
    assert(dMoodsEmpty().activeMoods.length === 2 && !dMoodsEmpty().activeMoods.includes(''), 'Empty mood tokens ("work,,quiet") are stripped from activeMoods');

    const { req: rMoodsOnlyCommas, res: resMoodsOnlyCommas, getData: dMoodsOnlyCommas } = createMockReqRes({ moods: ' ,  ' });
    await recommendationsHandler(rMoodsOnlyCommas, resMoodsOnlyCommas);
    assert(dMoodsOnlyCommas().activeMoods.length === 0, 'Whitespace/comma-only moods (" , ") resolves to empty activeMoods');
  }

  // TEST 9: HTTP METHOD VALIDATION (GET/OPTIONS allowed, POST/PUT/PATCH/DELETE -> 405)
  console.log('\n--- 9. Testing HTTP Method Validation (Allow: GET, OPTIONS) ---');
  {
    const endpoints = [
      { name: 'GET /api/cafes', handler: cafesHandler, validQuery: {} },
      { name: 'GET /api/evidence', handler: evidenceHandler, validQuery: { id: 'blue-tokai-sec8' } },
      { name: 'GET /api/recommendations', handler: recommendationsHandler, validQuery: { moods: 'work' } },
      { name: 'GET /api/search', handler: searchHandler, validQuery: { q: 'coffee' } },
      { name: 'GET /api/trust', handler: trustHandler, validQuery: { id: 'blue-tokai-sec8' } },
      { name: 'GET /api/audit', handler: auditHandler, validQuery: {} },
      { name: 'GET /api/moods', handler: moodsHandler, validQuery: {} }
    ];

    for (const ep of endpoints) {
      // 1. OPTIONS returns 200
      const { req: rOpt, res: resOpt, getStatus: sOpt } = createMockReqRes(ep.validQuery, 'OPTIONS');
      await ep.handler(rOpt, resOpt);
      assert(sOpt() === 200, `${ep.name} accepts OPTIONS preflight`);

      // 2. Unsupported methods return 405 with { error: "Method not allowed" } and Allow header
      for (const m of ['POST', 'PUT', 'PATCH', 'DELETE']) {
        const { req: rBad, res: resBad, getStatus: sBad, getData: dBad, getHeaders: hBad } = createMockReqRes(ep.validQuery, m);
        await ep.handler(rBad, resBad);
        assert(sBad() === 405, `${ep.name} rejects ${m} with HTTP 405`);
        assert(dBad()?.error === 'Method not allowed', `${ep.name} ${m} returns error "Method not allowed"`);
        assert(hBad()['Allow'] === 'GET, OPTIONS', `${ep.name} ${m} specifies Allow: GET, OPTIONS`);
      }
    }
  }

  // TEST 10: SAFE READ-ONLY CACHE HEADERS (public, s-maxage=300, stale-while-revalidate=60)
  console.log('\n--- 10. Testing Cache-Control Headers ---');
  {
    const expectedCache = 'public, s-maxage=300, stale-while-revalidate=60';

    // 1. GET /api/moods contains expected Cache-Control
    const { req: rMoods, res: resMoods, getStatus: sMoods, getHeaders: hMoods } = createMockReqRes();
    await moodsHandler(rMoods, resMoods);
    assert(sMoods() === 200 && hMoods()['Cache-Control'] === expectedCache, 'GET /api/moods contains public s-maxage=300 cache header');

    // 2. GET /api/cafes contains expected Cache-Control
    const { req: rCafes, res: resCafes, getStatus: sCafes, getHeaders: hCafes } = createMockReqRes();
    await cafesHandler(rCafes, resCafes);
    assert(sCafes() === 200 && hCafes()['Cache-Control'] === expectedCache, 'GET /api/cafes (list) contains public s-maxage=300 cache header');

    // 3. GET /api/cafes?id=... contains expected Cache-Control
    const { req: rCafeSingle, res: resCafeSingle, getStatus: sCafeSingle, getHeaders: hCafeSingle } = createMockReqRes({ id: 'blue-tokai-sec8' });
    await cafesHandler(rCafeSingle, resCafeSingle);
    assert(sCafeSingle() === 200 && hCafeSingle()['Cache-Control'] === expectedCache, 'GET /api/cafes (single) contains public s-maxage=300 cache header');

    // 4. GET /api/evidence?id=... contains expected Cache-Control
    const { req: rEvidence, res: resEvidence, getStatus: sEvidence, getHeaders: hEvidence } = createMockReqRes({ id: 'blue-tokai-sec8' });
    await evidenceHandler(rEvidence, resEvidence);
    assert(sEvidence() === 200 && hEvidence()['Cache-Control'] === expectedCache, 'GET /api/evidence contains public s-maxage=300 cache header');

    // 5. Error responses (400, 404) do not set the public cache header
    const { req: r404, res: res404, getStatus: s404, getHeaders: h404 } = createMockReqRes({ id: 'non-existent-cafe-999' });
    await cafesHandler(r404, res404);
    assert(s404() === 404 && !h404()['Cache-Control'], '404 Cafe not found response does not set Cache-Control');

    const { req: r400, res: res400, getStatus: s400, getHeaders: h400 } = createMockReqRes({ limit: 'invalid' });
    await cafesHandler(r400, res400);
    assert(s400() === 400 && !h400()['Cache-Control'], '400 Invalid limit response does not set Cache-Control');

    // 6. Dynamic endpoints remain uncached
    const { req: rSearch, res: resSearch, getHeaders: hSearch } = createMockReqRes({ q: 'coffee' });
    await searchHandler(rSearch, resSearch);
    assert(!hSearch()['Cache-Control'], 'GET /api/search remains uncached');

    const { req: rRec, res: resRec, getHeaders: hRec } = createMockReqRes({ moods: 'work' });
    await recommendationsHandler(rRec, resRec);
    assert(!hRec()['Cache-Control'], 'GET /api/recommendations remains uncached');

    const { req: rTrust, res: resTrust, getHeaders: hTrust } = createMockReqRes({ id: 'blue-tokai-sec8' });
    await trustHandler(rTrust, resTrust);
    assert(!hTrust()['Cache-Control'], 'GET /api/trust remains uncached');

    const { req: rAudit, res: resAudit, getHeaders: hAudit } = createMockReqRes();
    await auditHandler(rAudit, resAudit);
    assert(!hAudit()['Cache-Control'], 'GET /api/audit remains uncached');
  }

  console.log(`\n========================================`);
  console.log(`🏁 API TEST SUITE FINISHED: ${passed}/${total} assertions passed (${Math.round((passed / total) * 100)}%)`);
  console.log(`========================================\n`);

  if (passed !== total) {
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
