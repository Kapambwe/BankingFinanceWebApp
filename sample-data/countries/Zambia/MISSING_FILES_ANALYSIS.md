# Missing Data Files Analysis for Zambia Institutions

## Analysis Date
February 7, 2026

## Summary
Based on the Mock Service Analysis, the following files are missing from Zambia institution folders:

## Insurance Companies (5 institutions)
**Missing Files:**
- `quotes.json` - Insurance quotes (needed by MockInsuranceQuoteService)
- `underwriting-assessments.json` - Underwriting assessments (needed by MockUnderwritingService)

**Institutions Affected:**
1. ZSIC General Insurance
2. Madison General Insurance
3. Prudential Life Assurance
4. Madison Life Insurance
5. National Health Insurance Management Authority

**Current Files:** policies.json, claims.json ✅

## Investment Firms (3 institutions)
**Missing Files:**
- `trade-orders.json` - Trade orders (needed by MockTradeOrderService)
- `robo-advisory-recommendations.json` - Robo-advisory recommendations (needed by MockRoboAdvisoryService)

**Institutions Affected:**
1. Stockbrokers Zambia
2. Investrust Bank
3. LuSE Securities

**Current Files:** portfolios.json, trades.json ✅

## Asset Management (3 institutions)
**Missing Files:**
- `trade-orders.json` - Trade orders (needed by MockTradeOrderService)
- `robo-advisory-recommendations.json` - Robo-advisory recommendations (needed by MockRoboAdvisoryService)

**Institutions Affected:**
1. Pangaea Securities
2. Madison Asset Management
3. African Alliance Zambia

**Current Files:** funds.json, client-accounts.json ✅

## Microfinance (4 institutions)
**Status:** All required files present ✅
- lending-groups.json ✅

## Pension Funds (3 institutions)
**Status:** All required files present ✅
- benefit-calculations.json ✅

## Venture Capital (3 institutions)
**Status:** All required files present ✅
- deals.json ✅

## Commercial Banks (11 institutions)
**Status:** All required files present ✅
- collateral.json ✅
- credit-scores.json ✅
- fraud-alerts.json ✅
- delinquent-accounts.json ✅

## Mortgage Companies (3 institutions)
**Status:** All required files present ✅
- collateral.json ✅
- credit-scores.json ✅
- fraud-alerts.json ✅
- delinquent-accounts.json ✅

## Government Institutions (2 institutions)
**Status:** All required files present ✅
- collateral.json ✅
- credit-scores.json ✅
- fraud-alerts.json ✅
- delinquent-accounts.json ✅

## Action Plan

### Phase 1: Insurance Companies (5 institutions × 2 files = 10 files)
Create `quotes.json` and `underwriting-assessments.json` for each insurance company

### Phase 2: Investment Firms (3 institutions × 2 files = 6 files)
Create `trade-orders.json` and `robo-advisory-recommendations.json` for each investment firm

### Phase 3: Asset Management (3 institutions × 2 files = 6 files)
Create `trade-orders.json` and `robo-advisory-recommendations.json` for each asset management company

## Total Missing Files
**22 files** need to be created across 11 institutions

## Next Steps
1. ✅ Create insurance quotes and underwriting assessments with Zambian context
2. ✅ Create trade orders and robo-advisory recommendations with Zambian context
3. ✅ Update DATA_FILES_SUMMARY.md with complete file list
4. Test data loading with mock services

## Implementation Status
**IN PROGRESS** - Creating all 22 missing JSON files across 11 institutions
