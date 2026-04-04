# Zambia Financial Institutions - Complete Data Set

## Overview
This directory contains comprehensive JSON data files for 37 financial institutions across 9 institution types in Zambia. All data uses authentic Zambian context including ZMW currency, Zambian names, and local cities.

## Institution Coverage

### Commercial Banks (11)
NATSAVE, Zambia Industrial Commercial Bank, Access Bank Zambia, United Bank for Africa Zambia, First Capital Bank, Indo Zambia Bank, Zambia National Building Society, Zanaco, Stanbic Bank, Standard Chartered Bank, First National Bank

### Insurance Companies (5)
ZSIC General Insurance, Madison General Insurance, Prudential Life Assurance, Madison Life Insurance, National Health Insurance Management Authority

### Pension Funds (3)
NAPSA, Public Service Pensions Fund, Local Authority Superannuation Fund

### Investment Firms (3)
Stockbrokers Zambia, Investrust Bank, LuSE Securities

### Venture Capital (3)
Kukula Capital, Growth Investment Partners, African Development Partners

### Microfinance (5)
Public Service Micro Finance Company, FINCA Zambia, Vision Fund Zambia, Christian Empowerment Microfinance, Benford Micro Finance

### Asset Management (3)
Pangaea Securities, Madison Asset Management, African Alliance Zambia

### Mortgage Companies (3)
Zambian Home Loans, First Alliance Bank Mortgage, Cavmont Bank Mortgage

### Government Institutions (2)
Zambia National Development Bank, Citizens Economic Empowerment Commission

## Data Files

### Universal Files (All 36 Institutions)
- `institution-info.json` - Institution details
- `customers.json` - Customer records (20 per institution)
- `chart-of-accounts.json` - Accounting chart of accounts (25 accounts)
- `journal-entries.json` - Journal entries (15 entries)
- `invoices.json` - Customer invoices (10 invoices)
- `bills.json` - Vendor bills (10 bills)

### Institution-Specific Files

**Commercial Banks:**
- accounts.json, transactions.json, collateral.json, credit-scores.json, fraud-alerts.json, delinquent-accounts.json

**Insurance:**
- policies.json, claims.json, quotes.json, underwriting-assessments.json

**Pension:**
- members.json, benefit-calculations.json

**Investment:**
- portfolios.json, trades.json, trade-orders.json, robo-advisory-recommendations.json

**Venture Capital:**
- deals.json, portfolio-companies.json

**Microfinance:**
- loans.json, lending-groups.json, collateral.json, credit-scores.json, fraud-alerts.json, delinquent-accounts.json

**Asset Management:**
- funds.json, client-accounts.json, trade-orders.json, robo-advisory-recommendations.json

**Mortgage:**
- mortgages.json, property-valuations.json, collateral.json, credit-scores.json, fraud-alerts.json, delinquent-accounts.json

**Government:**
- development-projects.json, empowerment-loans.json, beneficiaries.json, collateral.json, credit-scores.json, fraud-alerts.json, delinquent-accounts.json

## Mock Service Support

All 15 mock services have corresponding data files:
✅ MockInsuranceQuoteService → quotes.json
✅ MockUnderwritingService → underwriting-assessments.json
✅ MockClaimService → claims.json
✅ MockTradeOrderService → trade-orders.json
✅ MockRoboAdvisoryService → robo-advisory-recommendations.json
✅ MockCreditScoringService → credit-scores.json
✅ MockFraudDetectionService → fraud-alerts.json
✅ MockDelinquentAccountService → delinquent-accounts.json
✅ MockCollateralService → collateral.json
✅ MockLendingGroupService → lending-groups.json
✅ MockBenefitCalculationService → benefit-calculations.json
✅ MockDealService → deals.json
✅ MockTenantService → tenants.json (base folder)
✅ MockRoleService → roles.json (base folder)
✅ MockAdvancedAnalyticsService → analytics.json (base folder)

## Data Characteristics

- **Currency:** ZMW (Zambian Kwacha)
- **Names:** Authentic Zambian names
- **Cities:** Lusaka, Kitwe, Ndola, Livingstone, Chipata, Kabwe, Chingola, Mufulira, Kasama, Mansa, Solwezi, Mongu, Mbala, Mpika
- **Phone Format:** +260-XX-XXXXXXX
- **NRC Format:** XXXXXX/XX/X
- **Date Range:** 2018-2025
- **Records:** 15-20 per file

## Total Files
- **250+ JSON files** across all institutions
- **4,200+ data records** with realistic Zambian context

## Documentation
- `DATA_FILES_SUMMARY.md` - Complete file listing by institution
- `MISSING_FILES_ANALYSIS.md` - Analysis of required mock service files
- `DATA_COMPLETION_SUMMARY.md` - Implementation guide and templates
- `IMPLEMENTATION_COMPLETE.md` - Final completion report

## Status
✅ **COMPLETE** - All data files created and ready for use

## Usage
These files are automatically loaded by the mock services when users log in with Zambian institution credentials. The system filters data by tenant ID to ensure proper multi-tenancy support.

## Testing
Login with institution-specific test credentials to verify data loading:
- Insurance: `admin.insurance@test.com`
- Investment: `admin.investment@test.com`
- Asset Management: `admin.assetmanagement@test.com`

Default password: `Test@123`
