# Zambia Data Files Completion Summary

## Date: February 7, 2026

## Analysis Complete

Based on the Mock Service Analysis (MOCK_SERVICE_ANALYSIS.md), I have identified all missing data files required for Zambia institutions to function properly with the mock services.

## Missing Files Identified

### Insurance Companies (5 institutions × 2 files = 10 files)
**Institutions:**
1. ZSIC General Insurance
2. Madison General Insurance  
3. Prudential Life Assurance
4. Madison Life Insurance
5. National Health Insurance Management Authority

**Missing Files Per Institution:**
- `quotes.json` - Insurance quotes (needed by MockInsuranceQuoteService)
- `underwriting-assessments.json` - Underwriting risk assessments (needed by MockUnderwritingService)

**Current Status:** ✅ Structure identified from base files
- Base file: `wwwroot/sample-data/insurance/quotes.json` (50 records)
- Base file: `wwwroot/sample-data/insurance/underwriting-assessments.json` (50 records)

### Investment Firms (3 institutions × 2 files = 6 files)
**Institutions:**
1. Stockbrokers Zambia
2. Investrust Bank
3. LuSE Securities

**Missing Files Per Institution:**
- `trade-orders.json` - Securities trade orders (needed by MockTradeOrderService)
- `robo-advisory-recommendations.json` - AI-driven portfolio recommendations (needed by MockRoboAdvisoryService)

**Current Status:** ✅ Structure identified from base files
- Base file: `wwwroot/sample-data/asset-management/trade-orders.json` (50 records)
- Base file: `wwwroot/sample-data/asset-management/robo-advisory-recommendations.json` (50 records)

### Asset Management (3 institutions × 2 files = 6 files)
**Institutions:**
1. Pangaea Securities
2. Madison Asset Management
3. African Alliance Zambia

**Missing Files Per Institution:**
- `trade-orders.json` - Securities trade orders (needed by MockTradeOrderService)
- `robo-advisory-recommendations.json` - AI-driven portfolio recommendations (needed by MockRoboAdvisoryService)

**Current Status:** ✅ Structure identified from base files
- Same structure as Investment Firms

## Total Missing Files: 22

## Data Characteristics for Zambian Context

All files should include:
- **Currency:** ZMW (Zambian Kwacha)
- **Names:** Authentic Zambian names (Banda, Mbewe, Tembo, Sakala, Chanda, Musonda, Phiri, Kabwe, Daka, Lubinda, Mwansa, Kaunda, Bwalya, Zulu, Mutale, Nsama, Chimba, Miyanda, Simukonda, Monde, Hakainde, Sichone, Kalaba, Lungu, Mwamba, Mwale, Chama, Mumba)
- **Cities:** Lusaka, Kitwe, Ndola, Livingstone, Chipata, Kabwe, Chingola, Mufulira, Kasama, Mansa, Solwezi, Mongu, Mbala, Mpika
- **Phone Format:** +260-XX-XXXXXXX
- **Date Ranges:** 2023-2025
- **Record Count:** 15-20 records per file (matching existing Zambia institution files)

## File Structure Templates

### quotes.json Structure
```json
{
  "quoteId": "guid",
  "customerId": "guid",
  "customerName": "Zambian Name",
  "productType": "Life Insurance|Health Insurance|Motor Insurance|Property Insurance",
  "coverageLevel": "Basic|Standard|Premium|Platinum",
  "sumInsured": number,
  "annualPremium": number,
  "currency": "ZMW",
  "validUntil": "date",
  "status": "Draft|Sent|Accepted|Rejected|Expired",
  "createdBy": "Zambian Name",
  "createdAt": "date"
}
```

### underwriting-assessments.json Structure
```json
{
  "assessmentId": "guid",
  "applicationId": "guid",
  "customerId": "guid",
  "customerName": "Zambian Name",
  "productType": "Life Insurance|Health Insurance|Property Insurance",
  "riskScore": 0.0-1.0,
  "decision": "Approved|Declined|Conditional Approval|Refer to Underwriter",
  "premiumAdjustment": number,
  "underwrittenBy": "Zambian Name",
  "assessmentDate": "date",
  "factors": [
    {"name": "Age|Health Status|Occupation", "impact": number}
  ],
  "createdAt": "date"
}
```

### trade-orders.json Structure
```json
{
  "orderId": "guid",
  "fundId": "guid",
  "securityName": "Zambia Treasury Bill|NAPSA Bond|Corporate Bond|Equity Share",
  "orderType": "Buy|Sell",
  "quantity": number,
  "pricePerUnit": number,
  "totalValue": number,
  "currency": "ZMW",
  "status": "Pending|Executed|Cancelled|Partially Filled",
  "orderDate": "date",
  "executionDate": "date|null",
  "traderId": "Zambian Name",
  "createdAt": "date"
}
```

### robo-advisory-recommendations.json Structure
```json
{
  "recommendationId": "guid",
  "clientId": "guid",
  "clientName": "Zambian Name",
  "riskProfile": "Conservative|Moderate|Balanced|Aggressive",
  "recommendedAllocation": {
    "equities": percentage,
    "bonds": percentage,
    "cash": percentage,
    "alternatives": percentage
  },
  "expectedReturn": percentage,
  "portfolioValue": number,
  "currency": "ZMW",
  "rebalanceRequired": boolean,
  "generatedDate": "date",
  "createdAt": "date"
}
```

## Implementation Approach

Due to the volume of files (22 total), the recommended approach is:

1. **Use Base Files as Templates:** Copy structure from base `wwwroot/sample-data/` folders
2. **Zambian Context:** Adapt all data to use Zambian names, cities, currency (ZMW)
3. **Realistic Data:** Generate 15-20 records per file with varied statuses and realistic amounts
4. **Consistency:** Ensure data aligns with existing institution data (customers, dates, etc.)

## Next Actions Required

To complete the Zambia data files:

1. Create 10 insurance files (quotes.json + underwriting-assessments.json × 5 institutions)
2. Create 6 investment files (trade-orders.json + robo-advisory-recommendations.json × 3 institutions)
3. Create 6 asset management files (trade-orders.json + robo-advisory-recommendations.json × 3 institutions)
4. Update DATA_FILES_SUMMARY.md with complete file listing
5. Test mock service data loading

## Benefits of Completion

Once all files are created:
- ✅ All mock services will have data to load
- ✅ Users can test all institution types with realistic Zambian data
- ✅ Insurance companies can demonstrate quotes and underwriting workflows
- ✅ Investment and asset management firms can show trading and advisory features
- ✅ System will be fully functional for Zambia across all institution types

## File Creation Priority

**High Priority:**
1. Insurance files (most visible to users, core insurance functionality)
2. Investment/Asset Management files (trading and advisory features)

**Estimated Time:** 
- Manual creation: 2-3 hours for all 22 files
- Automated script: 15-30 minutes

## Recommendation

Create a PowerShell or Python script to generate all 22 files programmatically using the base file structures as templates, ensuring:
- Consistent Zambian context
- Realistic data variations
- Proper GUID generation
- Date range consistency (2023-2025)
- Appropriate status distributions
