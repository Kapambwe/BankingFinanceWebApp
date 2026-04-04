# Lusaka Ventures - Sample VC Data

This directory contains realistic sample JSON data for the Venture Capital component, with a focus on African/Zambian context. All data is fictional but realistic for demonstration and testing purposes.

## Files Overview

### 1. **vc-funds.json** (11 funds)
Venture Capital funds with realistic characteristics:
- Lusaka Growth Fund I & II (2020, 2023) - Growth Equity, Zambian focus
- Pan-African Fintech Fund (2021) - Early-stage fintech across Africa
- Agritech Innovation Fund (2019) - Agricultural technology with Southern African focus
- Healthtech Africa Fund (2022) - Healthcare technology platforms
- Edtech Impact Fund (2021) - Education technology focused on Zambia
- Infrastructure & Logistics Fund (2020) - Large-scale infrastructure investment
- Cleantech Solutions Fund (2022) - Renewable energy and sustainability
- Female Founder Fund Africa (2021) - Women-led startups
- Secondary Opportunities Fund (2020) - Secondary market acquisitions
- Tech Accelerator Fund (2023) - Early-stage tech startups

**Key Features:**
- Realistic financial metrics (TVPI, DPI, RVPI, IRR)
- Fund lifecycle stages (Fundraising, InvestmentPeriod, HarvestPeriod, WindingDown)
- Multiple strategies and geographies
- USD and ZMW currency tracking

### 2. **capital-calls.json** (11 capital calls)
Capital call records tracking LP contributions:
- Various call statuses (Draft, Issued, PartiallyFunded, FullyFunded, Overdue)
- Realistic fund components (Management fee, Investment, Expenses)
- LP participation counts
- Call tracking numbers and dates

**Sample Call Status Distribution:**
- FullyFunded: 6 calls
- PartiallyFunded: 3 calls
- Issued: 2 calls

### 3. **capital-distributions.json** (10 distributions)
Distribution records from exits, dividends, and recapitalizations:
- Multiple distribution sources (Exit, Dividend, Partial Exit, Recapitalization)
- Realistic gain calculations and component breakdown
- Distribution statuses (Completed, Distributed, Processing, Approved)
- Total distributed capital across funds: $30.8M

**Key Metrics:**
- Return of capital
- Realized gains
- Dividend income
- Interest income

### 4. **portfolio-companies-detail.json** (10 companies)
Portfolio companies across key African sectors:

**Companies by Sector:**
1. **Fintech (3)**: M-Bank Africa, PayZone Africa, TechHub Lusaka
2. **Agritech (2)**: FarmBridge Solutions, AgroConnect Marketplace
3. **Edtech (2)**: MindLeap Academy, SmartSchool Platform
4. **Healthtech (1)**: HealthHub Digital
5. **Cleantech (1)**: SolarConnect Africa
6. **Logistics (1)**: Swift Logistics Hub

**Realistic Company Metrics:**
- Investment stages from Seed to Growth
- Employee counts (18-156 per company)
- Revenue tracking and growth rates (45-120% YoY)
- Founder and CEO information
- MOIC and unrealized value calculations
- Detailed financial health indicators

### 5. **company-financials.json** (10 financial records)
Quarterly and annual financial data for portfolio companies:
- Q1 2024 most recent, with FY2023 annual data
- Revenue, COGS, Gross Profit, Operating Expenses, EBITDA, Net Income
- SaaS metrics (ARR, MRR, CAC, LTV, Churn Rate)
- Balance sheet items (Cash, Assets, Liabilities)
- Customer acquisition and retention metrics

**Key Insights:**
- Profitable companies: M-Bank Africa, HealthHub Digital, SolarConnect Africa, PayZone Africa
- Growth-stage companies: Early revenue, managing burn rate
- Strong unit economics across healthtech and logistics

### 6. **company-milestones.json** (10 milestones)
Milestone tracking across companies:
- Types: Revenue, Product, Team, Market, Regulatory, Funding
- Status tracking: Planned, InProgress, Achieved, Delayed, Cancelled
- Target and achieved dates
- Impact descriptions

**Milestone Examples:**
- M-Bank Africa: Series B Platform Enhancement (Achieved)
- FarmBridge: Farmer Registration Target (InProgress)
- MindLeap Academy: Mobile App Launch (InProgress)
- HealthHub Digital: Profitability Achievement (Achieved)

### 7. **board-meetings.json** (10 board meetings)
Board meeting records for portfolio companies:
- Regular, Special, and Annual meeting types
- Comprehensive agendas and minutes
- Meeting resolutions and attendees
- Board representation tracking

**Meeting Types Distribution:**
- Regular: 8 meetings
- Special: 2 meetings

**Key Governance Items:**
- Quarterly performance reviews
- Strategic expansion approvals
- Budget authorizations
- Board composition decisions

### 8. **ic-meetings.json** (10 IC meetings)
Investment Committee meetings across all funds:
- Meeting types: Regular, Special, Follow-Up
- Proposal review tracking (Reviewed, Approved, Rejected, Deferred)
- Comprehensive minutes and decision rationales
- LC member attendance

**Decision Distribution:**
- Approved: 7 meetings with positive decisions
- Mixed: 3 meetings with varied decisions

### 9. **ic-proposals.json** (10 proposals)
Investment proposals reviewed by IC:
- Multiple stages: Screening, FirstReview, DeepDive, FinalApproval, FollowOn
- Detailed investment theses and risk assessments
- Proposed valuations and ownership percentages
- Exit strategies and financial targets
- Decision tracking with conditions

**Proposal Outcomes:**
- Approved: 7
- Rejected: 1 (AgriLend - unit economics concern)
- Deferred: 2 (EduTech, requiring market validation)

### 10. **ic-votes.json** (20 votes)
Individual IC member votes on proposals:
- Vote types: For, Against, Abstain
- Conviction levels (1-10 scale)
- Member comments and rationale
- Weighted voting records

**Vote Distribution:**
- For: 16 votes
- Against: 4 votes
- Abstain: 0 votes

### 11. **ic-resolutions.json** (10 resolutions)
Formal resolutions from IC meetings:
- Resolution numbers and full text
- Vote counts (For, Against, Abstentions)
- Action items with responsible parties
- Deadline tracking
- Status (Completed, InProgress)

**Resolution Status:**
- Completed: 8
- InProgress: 2 (deferred proposals)

## Data Characteristics

### Geographic Focus
- **Zambia**: 5 funds with dedicated focus
- **Southern Africa**: Regional funds (Zimbabwe, Botswana, Mozambique)
- **Pan-African**: Cross-continental funds

### Sector Distribution
- **Fintech**: 30% of portfolio (payment processing, mobile banking, lending)
- **Agritech**: 20% (farm management, agricultural e-commerce)
- **Logistics**: 10% (last-mile delivery, supply chain)
- **Healthtech**: 10% (telemedicine, diagnostics)
- **Edtech**: 20% (online learning, school management)
- **Cleantech**: 10% (renewable energy, sustainability)

### Realistic Company Names
All company names reflect African context and local naming conventions:
- Zambian/African founders (James Banda, Grace Simwale, Chabota Phiri, etc.)
- Sector-appropriate naming (M-Bank Africa, FarmBridge, SolarConnect, etc.)
- Regional operations (Zambia, Malawi, Zimbabwe, Botswana, Pan-African)

### Financial Realism
- **Fund Sizes**: $15M - $100M target sizes
- **Entry Valuations**: Seed ($1-3M) to Series C ($40M+)
- **Returns**: Target IRRs of 30-55% for early-stage, 22-35% for growth
- **Company Metrics**: Realistic SaaS metrics, burn rates, and growth trajectories

### Governance
- Professional fund management teams
- Independent directors on boards
- Clear investment decision processes
- Detailed minutes and documentation
- Regular performance tracking

## Usage Notes

These files are designed to:
1. Demonstrate realistic VC fund operations in African markets
2. Test and develop UI components for fund management
3. Show realistic data relationships across entities
4. Provide context for training and demonstrations
5. Support integration testing with various data volumes

All data is fictional and created for demonstration purposes only.

---

**Generated**: February 2024
**Data Version**: 1.0
**Format**: JSON (validated)
