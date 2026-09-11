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
import healthHandler from '../api/health.js';
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

  // TEST 11: HEALTH ENDPOINT (/api/health)
  console.log('\n--- 11. Testing GET /api/health ---');
  {
    // 1. GET /api/health returns HTTP 200
    const { req: rGet, res: resGet, getStatus: sGet, getData: dGet, getHeaders: hGet } = createMockReqRes();
    await healthHandler(rGet, resGet);
    assert(sGet() === 200, 'GET /api/health returns HTTP 200');

    // 2. Response status === "ok"
    assert(dGet() && dGet().status === 'ok', 'Response status === "ok"');

    // 3. Response service === "cafora-api"
    assert(dGet() && dGet().service === 'cafora-api', 'Response service === "cafora-api"');

    // 4. OPTIONS works
    const { req: rOpt, res: resOpt, getStatus: sOpt } = createMockReqRes({}, 'OPTIONS');
    await healthHandler(rOpt, resOpt);
    assert(sOpt() === 200, 'OPTIONS /api/health returns HTTP 200');

    // 5. POST -> 405
    const { req: rPost, res: resPost, getStatus: sPost, getData: dPost, getHeaders: hPost } = createMockReqRes({}, 'POST');
    await healthHandler(rPost, resPost);
    assert(sPost() === 405 && dPost()?.error === 'Method not allowed' && hPost()['Allow'] === 'GET, OPTIONS', 'POST /api/health returns HTTP 405');

    // 6. PUT -> 405
    const { req: rPut, res: resPut, getStatus: sPut, getData: dPut, getHeaders: hPut } = createMockReqRes({}, 'PUT');
    await healthHandler(rPut, resPut);
    assert(sPut() === 405 && dPut()?.error === 'Method not allowed' && hPut()['Allow'] === 'GET, OPTIONS', 'PUT /api/health returns HTTP 405');

    // 7. PATCH -> 405
    const { req: rPatch, res: resPatch, getStatus: sPatch, getData: dPatch, getHeaders: hPatch } = createMockReqRes({}, 'PATCH');
    await healthHandler(rPatch, resPatch);
    assert(sPatch() === 405 && dPatch()?.error === 'Method not allowed' && hPatch()['Allow'] === 'GET, OPTIONS', 'PATCH /api/health returns HTTP 405');

    // 8. DELETE -> 405
    const { req: rDel, res: resDel, getStatus: sDel, getData: dDel, getHeaders: hDel } = createMockReqRes({}, 'DELETE');
    await healthHandler(rDel, resDel);
    assert(sDel() === 405 && dDel()?.error === 'Method not allowed' && hDel()['Allow'] === 'GET, OPTIONS', 'DELETE /api/health returns HTTP 405');

    // 9. No public Cache-Control header is added
    assert(!hGet()['Cache-Control'], 'GET /api/health does not contain Cache-Control header');
  }

  // TEST 12: NATURAL-LANGUAGE INTENT & TYPO TOLERANCE
  console.log('\n--- 12. Testing Natural-Language Intent Detection & Typo Tolerance ---');
  {
    // 1. Minimum Required Typo Cases from Specification
    assert(extractIntentFromQuery('nght cafe').includes('late-night'), 'Typo: "nght cafe" -> late-night');
    assert(extractIntentFromQuery('cofee').includes('good-coffee'), 'Typo: "cofee" -> good-coffee');
    assert(extractIntentFromQuery('coffe').includes('good-coffee'), 'Typo: "coffe" -> good-coffee');
    assert(extractIntentFromQuery('romntic cafe').includes('date'), 'Typo: "romntic cafe" -> date');
    assert(extractIntentFromQuery('quiter cafe').includes('quiet'), 'Typo: "quiter cafe" -> quiet');
    assert(extractIntentFromQuery('brnch').includes('brunch'), 'Typo: "brnch" -> brunch');
    assert(extractIntentFromQuery('outdor seating').includes('outdoor'), 'Typo: "outdor seating" -> outdoor');
    assert(extractIntentFromQuery('readng cafe').includes('reading'), 'Typo: "readng cafe" -> reading');
    assert(extractIntentFromQuery('wrk cafe').includes('work'), 'Typo: "wrk cafe" -> work');
    assert(extractIntentFromQuery('aesthtic').includes('pretty'), 'Typo: "aesthtic" -> pretty');
    assert(extractIntentFromQuery('dessrt').includes('sweet-tooth'), 'Typo: "dessrt" -> sweet-tooth');

    // 2. All 12 Canonical Intents (Exact Keyword, Synonym, Natural Phrase, Typo)
    // 1. good-coffee
    assert(extractIntentFromQuery('coffee').includes('good-coffee'), 'Intent coffee: exact "coffee"');
    assert(extractIntentFromQuery('specialty espresso latte').includes('good-coffee'), 'Intent coffee: synonym "espresso"');
    assert(extractIntentFromQuery('pour over coffee from roastery').includes('good-coffee'), 'Intent coffee: natural phrase "pour over"');

    // 2. work
    assert(extractIntentFromQuery('work').includes('work'), 'Intent work: exact "work"');
    assert(extractIntentFromQuery('study with laptop and wifi').includes('work'), 'Intent work: synonym "laptop" & "wifi"');
    assert(extractIntentFromQuery('remote work with power outlets').includes('work'), 'Intent work: phrase "remote work" & "power outlets"');

    // 3. date
    assert(extractIntentFromQuery('date').includes('date'), 'Intent date: exact "date"');
    assert(extractIntentFromQuery('romantic spot for couples').includes('date'), 'Intent date: synonym "romantic"');
    assert(extractIntentFromQuery('candlelight date spot').includes('date'), 'Intent date: phrase "date spot"');

    // 4. quiet
    assert(extractIntentFromQuery('quiet').includes('quiet'), 'Intent quiet: exact "quiet"');
    assert(extractIntentFromQuery('peaceful and calm corner').includes('quiet'), 'Intent quiet: synonym "peaceful"');
    assert(extractIntentFromQuery('somewhere quiet with low noise').includes('quiet'), 'Intent quiet: phrase "low noise"');

    // 5. pretty (aesthetic)
    assert(extractIntentFromQuery('aesthetic').includes('pretty'), 'Intent aesthetic: exact "aesthetic"');
    assert(extractIntentFromQuery('beautiful photogenic interior').includes('pretty'), 'Intent aesthetic: synonym "photogenic"');
    assert(extractIntentFromQuery('cute cafe with natural light').includes('pretty'), 'Intent aesthetic: phrase "cute cafe"');

    // 6. sweet-tooth (dessert)
    assert(extractIntentFromQuery('dessert').includes('sweet-tooth'), 'Intent dessert: exact "dessert"');
    assert(extractIntentFromQuery('pastry croissant and brownie').includes('sweet-tooth'), 'Intent dessert: synonym "pastry" & "brownie"');
    assert(extractIntentFromQuery('sweet tooth with baked goods').includes('sweet-tooth'), 'Intent dessert: phrase "sweet tooth"');

    // 7. gang (groups)
    assert(extractIntentFromQuery('gang').includes('gang'), 'Intent groups: exact "gang"');
    assert(extractIntentFromQuery('large group of friends').includes('gang'), 'Intent groups: synonym "friends"');
    assert(extractIntentFromQuery('hang out with the gang').includes('gang'), 'Intent groups: phrase "hang out"');

    // 8. late-night (lateNight)
    assert(extractIntentFromQuery('midnight').includes('late-night'), 'Intent lateNight: exact "midnight"');
    assert(extractIntentFromQuery('open late afterhours').includes('late-night'), 'Intent lateNight: synonym "open late"');
    assert(extractIntentFromQuery('night cafe after 11pm').includes('late-night'), 'Intent lateNight: phrase "night cafe"');

    // 9. reading
    assert(extractIntentFromQuery('reading').includes('reading'), 'Intent reading: exact "reading"');
    assert(extractIntentFromQuery('book and novel').includes('reading'), 'Intent reading: synonym "book"');
    assert(extractIntentFromQuery('read quietly in reading cafe').includes('reading'), 'Intent reading: phrase "read quietly"');

    // 10. brunch
    assert(extractIntentFromQuery('brunch').includes('brunch'), 'Intent brunch: exact "brunch"');
    assert(extractIntentFromQuery('breakfast with sourdough eggs and toast').includes('brunch'), 'Intent brunch: synonym "breakfast"');
    assert(extractIntentFromQuery('morning food at breakfast cafe').includes('brunch'), 'Intent brunch: phrase "breakfast cafe"');

    // 11. outdoor
    assert(extractIntentFromQuery('outdoor').includes('outdoor'), 'Intent outdoor: exact "outdoor"');
    assert(extractIntentFromQuery('patio and garden terrace').includes('outdoor'), 'Intent outdoor: synonym "patio"');
    assert(extractIntentFromQuery('open air outdoor escape').includes('outdoor'), 'Intent outdoor: phrase "open air"');

    // 12. slow-morning
    assert(extractIntentFromQuery('unrushed').includes('slow-morning'), 'Intent slowMorning: keyword "unrushed"');
    assert(extractIntentFromQuery('relaxed morning').includes('slow-morning'), 'Intent slowMorning: synonym "relaxed morning"');
    assert(extractIntentFromQuery('slow morning with no rush').includes('slow-morning'), 'Intent slowMorning: phrase "slow morning"');

    // 3. Multi-Intent Queries (Exact + Typo Variants)
    const m1 = extractIntentFromQuery('I want a quiet cafe where I can work');
    assert(m1.includes('quiet') && m1.includes('work'), 'Multi-intent: "quiet cafe where I can work" -> quiet + work');

    const m2 = extractIntentFromQuery('pretty cafe for a date');
    assert(m2.includes('pretty') && m2.includes('date'), 'Multi-intent: "pretty cafe for a date" -> pretty + date');

    const m3 = extractIntentFromQuery('good coffee and somewhere to read');
    assert(m3.includes('good-coffee') && m3.includes('reading'), 'Multi-intent: "good coffee and somewhere to read" -> good-coffee + reading');

    const m4 = extractIntentFromQuery('late night cafe with dessert');
    assert(m4.includes('late-night') && m4.includes('sweet-tooth'), 'Multi-intent: "late night cafe with dessert" -> late-night + sweet-tooth');

    const m5 = extractIntentFromQuery('nght cafe with cofee');
    assert(m5.includes('late-night') && m5.includes('good-coffee'), 'Multi-intent with typos: "nght cafe with cofee" -> late-night + good-coffee');

    const m6 = extractIntentFromQuery('quiter place to work');
    assert(m6.includes('quiet') && m6.includes('work'), 'Multi-intent with typos: "quiter place to work" -> quiet + work');

    const m7 = extractIntentFromQuery('romntic date night');
    assert(m7.includes('date'), 'Multi-intent with typo: "romntic date night" -> date');

    const m8 = extractIntentFromQuery('brnch and cofee');
    assert(m8.includes('brunch') && m8.includes('good-coffee'), 'Multi-intent with typos: "brnch and cofee" -> brunch + good-coffee');

    // 4. Negative Guard Tests (Fuzzy matching false-positive prevention)
    const neg1 = extractIntentFromQuery('networking event');
    assert(!neg1.includes('work'), 'Negative test: "networking event" must NOT trigger work');

    const neg2 = extractIntentFromQuery('database');
    assert(!neg2.includes('date'), 'Negative test: "database" must NOT trigger date');

    const neg3 = extractIntentFromQuery('weekend');
    assert(!neg3.includes('work'), 'Negative test: "weekend" must NOT trigger work');

    const neg4 = extractIntentFromQuery('readable menu');
    assert(!neg4.includes('reading'), 'Negative test: "readable menu" must NOT trigger reading');

    // Short unrelated words produce zero spurious intents
    const negShort = extractIntentFromQuery('to in on at an a is it my me we he so no up by');
    assert(negShort.length === 0, 'Short unrelated words produce zero intents');

    const negUnrelated = extractIntentFromQuery('car bus cat dog sun sea sky');
    assert(negUnrelated.length === 0, 'Unrelated common words produce zero intents');

    // End-to-end /api/search endpoint integration verification
    const { req: rSearchTypo, res: resSearchTypo, getData: dSearchTypo } = createMockReqRes({ q: 'nght cafe with cofee' });
    await searchHandler(rSearchTypo, resSearchTypo);
    const searchData = dSearchTypo();
    assert(searchData.detectedIntents.includes('late-night') && searchData.detectedIntents.includes('good-coffee'), '/api/search endpoint detects multi-intent with typos');
    assert(searchData.results.cafes.length > 0, '/api/search returns recommended cafes based on typo-resolved intents');
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
