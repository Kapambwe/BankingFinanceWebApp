# Complete Mock Service Analysis from Banking.Admin.Client.csproj

## Dependencies Analysis

Based on `Banking.Admin.Client.csproj`, the project has the following dependency:
```xml
<ProjectReference Include="..\..\..\Services\Banking.Services.MockData\Banking.Services.MockData.csproj" />
```

## Mock Services from Banking.Services.MockData (15 Total)

All mock service implementations found in `Banking.Services.MockData/Services/`:

1. **MockAdvancedAnalyticsService.cs**
2. **MockBenefitCalculationService.cs**
3. **MockClaimService.cs**
4. **MockCollateralService.cs**
5. **MockCreditScoringService.cs**
6. **MockDealService.cs**
7. **MockDelinquentAccountService.cs**
8. **MockFraudDetectionService.cs**
9. **MockInsuranceQuoteService.cs**
10. **MockLendingGroupService.cs**
11. **MockRoboAdvisoryService.cs**
12. **MockRoleService.cs**
13. **MockTenantService.cs**
14. **MockTradeOrderService.cs**
15. **MockUnderwritingService.cs**

## Institution Types from TestLogin.razor (11 Total)

1. **System (Super Admin)** → Multi-tenant
2. **Commercial Bank**
3. **Government Institution**
4. **Pension Fund**
5. **Insurance Company**
6. **Investment/Mutual Fund**
7. **Venture Capital & Private Equity**
8. **Microfinance**
9. **Asset Management**
10. **Mortgage Company**
11. **CEEC** (Citizen Economic Empowerment Commission)

## Complete Institution to Mock Service & JSON File Mapping

### 1. CEEC
**Mock Services (4):**
- MockCreditScoringService
- MockFraudDetectionService
- MockDelinquentAccountService
- MockCollateralService

**JSON Files (4):**
- ✅ `ceec/credit-scores.json` (50 items)
- ✅ `ceec/fraud-alerts.json` (50 items)
- ✅ `ceec/delinquent-accounts.json` (50 items)
- ✅ `ceec/collateral.json` (50 items)

### 2. Commercial Bank
**Mock Services (4):**
- MockCreditScoringService
- MockFraudDetectionService
- MockDelinquentAccountService
- MockCollateralService

**JSON Files (4):**
- ✅ `commercial-bank/credit-scores.json` (50 items)
- ✅ `commercial-bank/fraud-alerts.json` (50 items)
- ✅ `commercial-bank/delinquent-accounts.json` (50 items)
- ✅ `commercial-bank/collateral.json` (50 items)

### 3. Government Institution (Development Bank)
**Mock Services (4):**
- MockCreditScoringService
- MockFraudDetectionService
- MockDelinquentAccountService
- MockCollateralService

**JSON Files (4):**
- ✅ `government/credit-scores.json` (50 items)
- ✅ `government/fraud-alerts.json` (50 items)
- ✅ `government/delinquent-accounts.json` (50 items)
- ✅ `government/collateral.json` (50 items)

### 4. Insurance Company
**Mock Services (3):**
- MockInsuranceQuoteService
- MockUnderwritingService
- MockClaimService

**JSON Files (3):**
- ✅ `insurance/quotes.json` (50 items)
- ✅ `insurance/underwriting-assessments.json` (50 items)
- ✅ `insurance/claims.json` (50 items)

### 5. Microfinance
**Mock Services (1):**
- MockLendingGroupService

**JSON Files (1):**
- ✅ `microfinance/lending-groups.json` (50 items)

### 6. Pension Fund
**Mock Services (1):**
- MockBenefitCalculationService

**JSON Files (1):**
- ✅ `pension/benefit-calculations.json` (50 items)

### 7. Venture Capital & Private Equity
**Mock Services (1):**
- MockDealService

**JSON Files (1):**
- ✅ `venture-capital/deals.json` (50 items)

### 8. Asset Management
**Mock Services (2):**
- MockTradeOrderService
- MockRoboAdvisoryService

**JSON Files (2):**
- ✅ `asset-management/trade-orders.json` (50 items)
- ✅ `asset-management/robo-advisory-recommendations.json` (50 items)

### 9. Mortgage Company
**Mock Services (4):**
- MockCreditScoringService
- MockFraudDetectionService
- MockDelinquentAccountService
- MockCollateralService

**JSON Files (4):**
- ✅ `mortgage/credit-scores.json` (50 items)
- ✅ `mortgage/fraud-alerts.json` (50 items)
- ✅ `mortgage/delinquent-accounts.json` (50 items)
- ✅ `mortgage/collateral.json` (50 items)

### 10. Multi-Tenant (System)
**Mock Services (3):**
- MockTenantService
- MockRoleService
- MockAdvancedAnalyticsService

**JSON Files (3):**
- ✅ `multi-tenant/tenants.json` (50 items)
- ✅ `multi-tenant/roles.json` (50 items)
- ✅ `multi-tenant/analytics.json` (50 items)

### 11. Investment/Mutual Fund
**Mock Services (2):**
- MockTradeOrderService (shared with Asset Management)
- MockRoboAdvisoryService (shared with Asset Management)

**JSON Files (2):**
- ℹ️ Uses `asset-management/trade-orders.json` (50 items)
- ℹ️ Uses `asset-management/robo-advisory-recommendations.json` (50 items)

## Summary

| Metric | Count |
|--------|-------|
| Total Institution Types | 11 |
| Total Mock Services | 15 |
| Total Unique JSON Files | 27 |
| Total Sample Data Items | 1,350 (50 per file) |
| Institutions with Dedicated Directories | 10 |
| Institutions Sharing Directories | 1 (Investment uses Asset Management) |

## Mock Service to JSON File Name Mapping

| Mock Service | JSON File Name |
|--------------|----------------|
| MockCreditScoringService | credit-scores.json |
| MockFraudDetectionService | fraud-alerts.json |
| MockDelinquentAccountService | delinquent-accounts.json |
| MockCollateralService | collateral.json |
| MockInsuranceQuoteService | quotes.json |
| MockUnderwritingService | underwriting-assessments.json |
| MockClaimService | claims.json |
| MockLendingGroupService | lending-groups.json |
| MockBenefitCalculationService | benefit-calculations.json |
| MockDealService | deals.json |
| MockTradeOrderService | trade-orders.json |
| MockRoboAdvisoryService | robo-advisory-recommendations.json |
| MockTenantService | tenants.json |
| MockRoleService | roles.json |
| MockAdvancedAnalyticsService | analytics.json |

## Verification Checklist

✅ All 15 mock services from Banking.Services.MockData are mapped  
✅ All 11 institution types from TestLogin.razor have corresponding data  
✅ Number of JSON files per institution matches number of mock services  
✅ Each JSON file contains exactly 50 items  
✅ Government Institution (Government Development Bank) now included  
✅ All data uses Zambian financial context (ZMW currency, local names, cities)  
✅ Total: 27 JSON files with 1,350 sample items
