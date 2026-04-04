# Sample Data Documentation

## Overview
This directory contains JSON sample data files organized by institution type. The sample data corresponds to the Mock Services available in the `Banking.Services.MockData` project and is designed to be used for testing and demonstration purposes.

## Directory Structure

```
wwwroot/sample-data/
├── ceec/                          (CEEC - Citizen Economic Empowerment Commission)
│   ├── credit-scores.json         (Credit scoring data - 50 items)
│   ├── fraud-alerts.json          (Fraud detection alerts - 50 items)
│   ├── delinquent-accounts.json   (Delinquent loan accounts - 50 items)
│   ├── collateral.json            (Loan collateral information - 50 items)
│   └── campaigns.json             (CRM marketing campaigns - 3 items)
├── commercial-bank/               (Commercial Banking)
│   ├── credit-scores.json         (Customer credit assessments - 50 items)
│   ├── fraud-alerts.json          (Transaction fraud detection - 50 items)
│   ├── delinquent-accounts.json   (Collections and delinquent accounts - 50 items)
│   ├── collateral.json            (Loan security details - 50 items)
│   ├── campaigns.json             (CRM marketing campaigns - 6 items)
│   ├── segments.json              (CRM audience segments - 6 items)
│   └── journeys.json              (CRM customer journeys - 4 items)
├── government/                    (Government Development Bank)
│   ├── credit-scores.json         (Development project credit assessments - 50 items)
│   ├── fraud-alerts.json          (Government disbursement fraud detection - 50 items)
│   ├── delinquent-accounts.json   (Development loan collections - 50 items)
│   └── collateral.json            (Government asset collateral - 50 items)
├── insurance/                     (Insurance Company)
│   ├── quotes.json                (Insurance quotations - 50 items)
│   ├── claims.json                (Insurance claims - 50 items)
│   ├── underwriting-assessments.json (Underwriting risk assessments - 50 items)
│   ├── campaigns.json             (CRM marketing campaigns - 4 items)
│   ├── segments.json              (CRM audience segments - 3 items)
│   └── journeys.json              (CRM customer journeys - 2 items)
├── microfinance/                  (Microfinance Institution)
│   ├── lending-groups.json        (Group lending structures - 50 items)
│   ├── campaigns.json             (CRM marketing campaigns - 3 items)
│   ├── segments.json              (CRM audience segments - 1 item)
│   └── journeys.json              (CRM customer journeys - 1 item)
├── pension/                       (Pension Fund)
│   ├── benefit-calculations.json  (Retirement benefit calculations - 50 items)
│   ├── campaigns.json             (CRM marketing campaigns - 3 items)
│   ├── segments.json              (CRM audience segments - 2 items)
│   └── journeys.json              (CRM customer journeys - 2 items)
├── venture-capital/               (Venture Capital & Private Equity)
│   └── deals.json                 (Investment deals pipeline - 50 items)
├── asset-management/              (Asset Management & Mutual Funds)
│   ├── trade-orders.json          (Fund trading orders - 50 items)
│   ├── robo-advisory-recommendations.json (AI-powered investment advice - 50 items)
│   ├── campaigns.json             (CRM marketing campaigns - 3 items)
│   ├── segments.json              (CRM audience segments - 2 items)
│   └── journeys.json              (CRM customer journeys - 1 item)
├── mortgage/                      (Mortgage Company)
│   ├── credit-scores.json         (Mortgage applicant credit scores - 50 items)
│   ├── fraud-alerts.json          (Mortgage fraud detection - 50 items)
│   ├── delinquent-accounts.json   (Delinquent mortgage accounts - 50 items)
│   └── collateral.json            (Property collateral - 50 items)
└── multi-tenant/                  (Cross-institutional)
    ├── tenants.json               (Multi-tenant configurations - 50 items)
    ├── roles.json                 (Role-based access control - 50 items)
    └── analytics.json             (Advanced analytics and insights - 50 items)
```

## Institution Type Mapping

### 1. CEEC (Citizen Economic Empowerment Commission)
**Purpose:** Government-backed development finance for Zambian citizens and businesses
**Services:**
- Credit Scoring Service (for SME loan applications)
- Fraud Detection Service (for grant/loan disbursements)
- Delinquent Account Service (collections management)
- Collateral Service (business assets and property)

**Test Login:** `admin.ceec` or `officer.ceec`

### 2. Commercial Bank
**Purpose:** Traditional retail and corporate banking
**Services:**
- Credit Scoring Service (consumer and business lending)
- Fraud Detection Service (transaction monitoring)
- Delinquent Account Service (loan collections)
- Collateral Service (loan security management)

**Test Login:** `admin.commercialbank`, `manager.commercialbank`, or `teller.commercialbank`

### 3. Insurance Company
**Purpose:** Life, motor, and health insurance products
**Services:**
- Insurance Quote Service (product quotations)
- Claim Service (claims processing)
- Underwriting Service (risk assessment)

**Test Login:** `admin.insurance`, `underwriter.insurance`, or `claims.insurance`

### 4. Microfinance
**Purpose:** Group lending and financial inclusion
**Services:**
- Lending Group Service (village banking groups with member management)

**Test Login:** `admin.microfinance` or `loanofficer.microfinance`

### 5. Pension Fund
**Purpose:** Retirement savings and benefits management
**Services:**
- Benefit Calculation Service (retirement benefit computations)

**Test Login:** `admin.pension` or `manager.pension`

### 6. Venture Capital
**Purpose:** Early-stage and growth equity investments
**Services:**
- Deal Service (investment pipeline and due diligence)

**Test Login:** `admin.vc` or `partner.vc`

### 7. Asset Management
**Purpose:** Investment fund management and advisory
**Services:**
- Trade Order Service (fund unit trading)
- Robo Advisory Service (AI-powered portfolio recommendations)

**Test Login:** `admin.assetmanagement`

### 8. Mortgage Company
**Purpose:** Residential and commercial property financing
**Services:**
- Credit Scoring Service (mortgage applicant assessment)
- Fraud Detection Service (mortgage fraud prevention)
- Delinquent Account Service (mortgage collections)
- Collateral Service (property valuation and management)

**Test Login:** `admin.mortgage`

### 9. Government Development Bank
**Purpose:** Government-backed development finance for national projects
**Services:**
- Credit Scoring Service (development project assessment)
- Fraud Detection Service (disbursement fraud prevention)
- Delinquent Account Service (development loan recovery)
- Collateral Service (government asset management)

**Test Login:** `admin.government`

### 10. Multi-Tenant (Cross-Institutional)
**Purpose:** Shared services across all institution types
**Services:**
- Tenant Service (institution configurations)
- Role Service (RBAC across all types)
- Advanced Analytics Service (business intelligence)

**Test Login:** `superadmin` (System level)

## Sample Data Characteristics

### Data Volume
Each JSON file contains **50 realistic sample records** with:
- Zambian context (currency: ZMW, locations, names)
- Complete nested structures matching C# model classes
- Realistic business scenarios and values
- Timestamp data for temporal analysis
- Varied data across all 50 items to support testing and development

### Data Relationships
The sample data includes cross-references:
- Institution types match TestLogin.razor user accounts
- Member data includes detailed group structures
- Financial calculations show full breakdowns
- Risk assessments include detailed factors

### Data Quality
All files:
- Are valid JSON (validated programmatically)
- Follow camelCase property naming convention
- Include realistic Zambian business context
- Match the C# model structures in `Banking.Services.MockData`

## Usage with TestLogin

The sample data is organized to match the institution types available in TestLogin.razor:

1. **Login as a specific institution type** (e.g., `admin.ceec`)
2. **Access the corresponding folder** (e.g., `sample-data/ceec/`)
3. **Load relevant JSON files** based on the user's permissions and role

Example flow:
```
User logs in as: admin.ceec
Institution Type: CEEC
Available Data:
  - /sample-data/ceec/credit-scores.json
  - /sample-data/ceec/fraud-alerts.json
  - /sample-data/ceec/delinquent-accounts.json
  - /sample-data/ceec/collateral.json
  - /sample-data/multi-tenant/* (shared)
```

## Extending Sample Data

To add new sample data:

1. **Identify the institution type** from the InstitutionType enum
2. **Check existing Mock Services** in `Banking.Services.MockData/Services/`
3. **Create JSON file** in the appropriate institution folder
4. **Follow the data structure** from the corresponding C# model
5. **Use Zambian context** (ZMW currency, local names, businesses)
6. **Validate JSON** using `python3 -m json.tool filename.json`

## File Count Summary

| Institution Type | File Count | Items per File | Services Covered |
|-----------------|------------|----------------|------------------|
| CEEC | 4 | 50 each | Credit, Fraud, Collections, Collateral |
| Commercial Bank | 4 | 50 each | Credit, Fraud, Collections, Collateral |
| Government | 4 | 50 each | Credit, Fraud, Collections, Collateral |
| Insurance | 3 | 50 each | Quotes, Claims, Underwriting |
| Microfinance | 1 | 50 | Group Lending |
| Pension | 1 | 50 | Benefits Calculation |
| Venture Capital | 1 | 50 | Deal Pipeline |
| Asset Management | 2 | 50 each | Trading, Robo-Advisory |
| Mortgage | 4 | 50 each | Credit, Fraud, Collections, Collateral |
| Multi-Tenant | 3 | 50 each | Tenants, Roles, Analytics |
| **Total** | **27** | **1,350 total items** | **15 Mock Services** |

## Notes

- Sample data is for **development and testing only**
- All personal information is **fictional**
- Financial values are **representative only**
- Data structure matches the **C# models** in the codebase
- Files are **statically served** from wwwroot
