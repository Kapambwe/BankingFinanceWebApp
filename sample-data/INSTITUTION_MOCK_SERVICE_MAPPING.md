# Institution Types and Mock Services Mapping

This document provides a complete mapping between institution types defined in TestLogin.razor and the mock services available in the Banking.Services.MockData project.

## Institutions from TestLogin.razor

The following 11 institution types are available for testing via the TestLogin page:

1. **System** (Super Admin) → Multi-tenant services
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

## Mock Services (15 Total)

All mock services are located in `Banking.Services.MockData/Services/`:

1. **MockBenefitCalculationService** - Pension benefit calculations
2. **MockRoleService** - Role-based access control
3. **MockTradeOrderService** - Trading order management
4. **MockDelinquentAccountService** - Delinquent account tracking
5. **MockAdvancedAnalyticsService** - Business analytics
6. **MockRoboAdvisoryService** - AI-powered investment recommendations
7. **MockClaimService** - Insurance claims processing
8. **MockUnderwritingService** - Insurance underwriting
9. **MockFraudDetectionService** - Fraud detection and alerts
10. **MockCollateralService** - Collateral management
11. **MockInsuranceQuoteService** - Insurance quotes
12. **MockLendingGroupService** - Microfinance group lending
13. **MockDealService** - Venture capital deal pipeline
14. **MockCreditScoringService** - Credit score calculations
15. **MockTenantService** - Multi-tenant management

## Institution to Mock Service Mapping

### CEEC (4 services = 4 JSON files)
- MockCreditScoringService → `credit-scores.json` (50 items)
- MockFraudDetectionService → `fraud-alerts.json` (50 items)
- MockDelinquentAccountService → `delinquent-accounts.json` (50 items)
- MockCollateralService → `collateral.json` (50 items)

### Commercial Bank (4 services = 4 JSON files)
- MockCreditScoringService → `credit-scores.json` (50 items)
- MockFraudDetectionService → `fraud-alerts.json` (50 items)
- MockDelinquentAccountService → `delinquent-accounts.json` (50 items)
- MockCollateralService → `collateral.json` (50 items)

### Insurance Company (3 services = 3 JSON files)
- MockInsuranceQuoteService → `quotes.json` (50 items)
- MockUnderwritingService → `underwriting-assessments.json` (50 items)
- MockClaimService → `claims.json` (50 items)

### Microfinance (1 service = 1 JSON file)
- MockLendingGroupService → `lending-groups.json` (50 items)

### Pension Fund (1 service = 1 JSON file)
- MockBenefitCalculationService → `benefit-calculations.json` (50 items)

### Venture Capital (1 service = 1 JSON file)
- MockDealService → `deals.json` (50 items)

### Asset Management (2 services = 2 JSON files)
- MockTradeOrderService → `trade-orders.json` (50 items)
- MockRoboAdvisoryService → `robo-advisory-recommendations.json` (50 items)

### Mortgage Company (4 services = 4 JSON files)
- MockCreditScoringService → `credit-scores.json` (50 items)
- MockFraudDetectionService → `fraud-alerts.json` (50 items)
- MockDelinquentAccountService → `delinquent-accounts.json` (50 items)
- MockCollateralService → `collateral.json` (50 items)

### Government Development Bank (4 services = 4 JSON files)
- MockCreditScoringService → `credit-scores.json` (50 items)
- MockFraudDetectionService → `fraud-alerts.json` (50 items)
- MockDelinquentAccountService → `delinquent-accounts.json` (50 items)
- MockCollateralService → `collateral.json` (50 items)

### Multi-Tenant/System (3 services = 3 JSON files)
- MockTenantService → `tenants.json` (50 items)
- MockRoleService → `roles.json` (50 items)
- MockAdvancedAnalyticsService → `analytics.json` (50 items)

### Government Development Bank (4 services = 4 JSON files)
- MockCreditScoringService → `credit-scores.json` (50 items)
- MockFraudDetectionService → `fraud-alerts.json` (50 items)
- MockDelinquentAccountService → `delinquent-accounts.json` (50 items)
- MockCollateralService → `collateral.json` (50 items)

### Investment/Mutual Fund (shares with Asset Management)
*Note: Investment/Mutual Fund uses the same mock services as Asset Management (Trading and Robo-Advisory).*

## Summary Statistics

- **Total Institution Types:** 11 (from TestLogin.razor)
- **Total Mock Services:** 15 (from Banking.Services.MockData)
- **Total JSON Files:** 27
- **Total Sample Items:** 1,350 (50 items per file)
- **Institutions with Sample Data:** 10
- **Institutions without Sample Data:** 1 (Investment shares with Asset Management)

## File Structure Verification

Each institution type directory contains JSON files that match 1:1 with the mock services applicable to that institution type:

```
sample-data/
├── ceec/ (4 files)
├── commercial-bank/ (4 files)
├── government/ (4 files)
├── insurance/ (3 files)
├── microfinance/ (1 file)
├── pension/ (1 file)
├── venture-capital/ (1 file)
├── asset-management/ (2 files)
├── mortgage/ (4 files)
└── multi-tenant/ (3 files)
```

## Usage with TestLogin

When logging in via TestLogin.razor:
1. Select an institution type (e.g., "Bank Admin" for Commercial Bank)
2. The system loads sample data from the corresponding directory
3. Mock services use this data to populate the UI components
4. Each file contains 50 realistic items with Zambian context (ZMW currency, local names, cities)

## Data Generation

All sample data was programmatically generated using Python scripts to ensure:
- Consistency across all 50 items per file
- Realistic Zambian financial context
- Proper JSON structure matching C# models
- Varied data for comprehensive testing
