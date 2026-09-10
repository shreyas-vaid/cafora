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

function createMockReqRes(query = {}) {
  const headers = {};
  let statusCode = 200;
  let responseData = null;

  const req = {
    method: 'GET',
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

  return { req, res, getStatus: () => statusCode, getData: () => responseData };
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
