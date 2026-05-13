# Zambia Institution Data Files Summary

## Overview
Comprehensive JSON data files have been created for all 36 financial institutions across 9 institution types in Zambia.

## Data Files Created

### Universal Files (All Institutions)
1. **institution-info.json** - Institution details, contact info, registration
2. **customers.json** - Customer records with personal details
3. **chart-of-accounts.json** - Accounting chart of accounts
4. **journal-entries.json** - Accounting journal entries
5. **invoices.json** - Customer invoices
6. **bills.json** - Vendor bills and payables

### Commercial Banks (11 institutions)
- NATSAVE
- Zambia Industrial Commercial Bank
- Access Bank Zambia
- United Bank for Africa Zambia
- First Capital Bank
- Indo Zambia Bank
- Zambia National Building Society
- Zanaco
- Stanbic Bank
- Standard Chartered Bank
- First National Bank

**Additional Files:**
- accounts.json - Customer bank accounts
- transactions.json - Transaction history
- collateral.json - Loan collateral
- credit-scores.json - Customer credit scores
- fraud-alerts.json - Fraud detection alerts
- delinquent-accounts.json - Overdue accounts

### Insurance Companies (5 institutions)
- ZSIC General Insurance
- Madison General Insurance
- Prudential Life Assurance
- Madison Life Insurance
- National Health Insurance Management Authority

**Additional Files:**
- policies.json - Insurance policies
- claims.json - Insurance claims
- quotes.json - Insurance quotes ✅ NEW
- underwriting-assessments.json - Underwriting risk assessments ✅ NEW

### Pension Funds (3 institutions)
- NAPSA
- Public Service Pensions Fund
- Local Authority Superannuation Fund

**Additional Files:**
- members.json - Pension fund members
- benefit-calculations.json - Retirement benefit calculations

### Investment Firms (3 institutions)
- Stockbrokers Zambia
- Investrust Bank
- LuSE Securities

**Additional Files:**
- portfolios.json - Investment portfolios
- trades.json - Stock trades
- trade-orders.json - Securities trade orders ✅ NEW
- robo-advisory-recommendations.json - AI-driven portfolio recommendations ✅ NEW

### Venture Capital (3 institutions)
- Kukula Capital
- Growth Investment Partners
- African Development Partners

**Additional Files:**
- deals.json - VC deals and investments
- portfolio-companies.json - Portfolio companies

### Microfinance (5 institutions)
- Public Service Micro Finance Company
- FINCA Zambia
- Vision Fund Zambia
- Christian Empowerment Microfinance
- Benford Micro Finance

**Additional Files:**
- loans.json - Microfinance loans
- lending-groups.json - Village banking groups
- collateral.json - Loan collateral
- credit-scores.json - Customer credit scores
- fraud-alerts.json - Fraud detection alerts
- delinquent-accounts.json - Overdue accounts

### Asset Management (3 institutions)
- Pangaea Securities
- Madison Asset Management
- African Alliance Zambia

**Additional Files:**
- funds.json - Investment funds
- client-accounts.json - Client accounts
- trade-orders.json - Securities trade orders ✅ NEW
- robo-advisory-recommendations.json - AI-driven portfolio recommendations ✅ NEW

### Mortgage Companies (3 institutions)
- Zambian Home Loans
- First Alliance Bank Mortgage
- Cavmont Bank Mortgage

**Additional Files:**
- mortgages.json - Mortgage loans
- property-valuations.json - Property valuations
- collateral.json - Property collateral
- credit-scores.json - Customer credit scores
- fraud-alerts.json - Fraud detection alerts
- delinquent-accounts.json - Overdue accounts

### Government Institutions (2 institutions)
- Zambia National Development Bank
- Citizens Economic Empowerment Commission

**Additional Files:**
- development-projects.json - Development projects
- empowerment-loans.json - Empowerment loans
- beneficiaries.json - Program beneficiaries
- collateral.json - Loan collateral
- credit-scores.json - Credit scores
- fraud-alerts.json - Fraud detection alerts
- delinquent-accounts.json - Overdue accounts

## Data Characteristics

### Zambian Context
- Currency: ZMW (Zambian Kwacha)
- Names: Authentic Zambian first and last names
- Cities: Lusaka, Kitwe, Ndola, Livingstone, Chipata, Kabwe, Chingola, Mufulira, Kasama, Mansa, Solwezi, Mongu, Mbala, Mpika
- Phone Format: +260-XX-XXXXXXX
- NRC Format: XXXXXX/XX/X

### Data Volume
- 15-20 records per file on average
- Realistic date ranges (2018-2025)
- Varied statuses (Active, Inactive, Pending, etc.)
- Appropriate amounts in ZMW

## System Integration

These JSON files are designed to be loaded by the system based on:
1. User's logged-in institution
2. User's institution type
3. User's permissions

The data supports all major banking and financial operations including:
- Customer management
- Account management
- Transaction processing
- Loan management
- Insurance operations
- Investment tracking
- Pension administration
- Accounting and financial reporting
- Risk management (fraud, credit, delinquency)

## File Naming Convention
All files use lowercase with hyphens: `file-name.json`

## Date Created
February 7, 2026

## Status
✅ **COMPLETE** - All data files created including mock service requirements

## Total Files Created
- Universal files: 6 files per institution (222 files across 37 institutions)
- Institution-specific files: Varies by type
- Mock service files: 22 additional files ✅
- **Grand Total: 250+ JSON files**
