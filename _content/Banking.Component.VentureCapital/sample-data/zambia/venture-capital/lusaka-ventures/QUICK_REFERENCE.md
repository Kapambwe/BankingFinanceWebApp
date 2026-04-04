# Quick Reference Guide - Lusaka Ventures Sample Data

## File Access Paths

```
src/WebApps/Components/Banking.Component.VentureCapital/
└── wwwroot/sample-data/zambia/venture-capital/lusaka-ventures/
    ├── vc-funds.json
    ├── capital-calls.json
    ├── capital-distributions.json
    ├── portfolio-companies-detail.json
    ├── company-financials.json
    ├── company-milestones.json
    ├── board-meetings.json
    ├── ic-meetings.json
    ├── ic-proposals.json
    ├── ic-votes.json
    ├── ic-resolutions.json
    └── README.md
```

## Data Models Mapping

### Fund Management
- **VCFund** → `vc-funds.json` (11 records)
- **CapitalCall** → `capital-calls.json` (11 records)
- **CapitalDistribution** → `capital-distributions.json` (10 records)
- **FundVehicle** → Embedded in vc-funds.json structure

### Portfolio Companies
- **PortfolioCompanyDetail** → `portfolio-companies-detail.json` (10 records)
- **CompanyFinancial** → `company-financials.json` (10 records)
- **CompanyMilestone** → `company-milestones.json` (10 records)
- **BoardMeeting** → `board-meetings.json` (10 records)

### Investment Committee
- **ICMeeting** → `ic-meetings.json` (10 records)
- **ICProposal** → `ic-proposals.json` (10 records)
- **ICVote** → `ic-votes.json` (20 records)
- **ICResolution** → `ic-resolutions.json` (10 records)

## Key Entities and IDs

### Funds (11 total)
```
550e8400-e29b-41d4-a716-446655440001  Lusaka Growth Fund I
550e8400-e29b-41d4-a716-446655440002  Pan-African Fintech Fund
550e8400-e29b-41d4-a716-446655440003  Agritech Innovation Fund
550e8400-e29b-41d4-a716-446655440004  Healthtech Africa Fund
550e8400-e29b-41d4-a716-446655440005  Edtech Impact Fund
550e8400-e29b-41d4-a716-446655440006  Infrastructure & Logistics Fund
550e8400-e29b-41d4-a716-446655440007  Cleantech Solutions Fund
550e8400-e29b-41d4-a716-446655440008  Lusaka Growth Fund II
550e8400-e29b-41d4-a716-446655440009  Female Founder Fund Africa
550e8400-e29b-41d4-a716-446655440010  Secondary Opportunities Fund
550e8400-e29b-41d4-a716-446655440011  Tech Accelerator Fund
```

### Portfolio Companies (10 total)
```
880e8400-e29b-41d4-a716-446655440001  M-Bank Africa (Fintech)
880e8400-e29b-41d4-a716-446655440002  FarmBridge Solutions (Agritech)
880e8400-e29b-41d4-a716-446655440003  MindLeap Academy (Edtech)
880e8400-e29b-41d4-a716-446655440004  HealthHub Digital (Healthtech)
880e8400-e29b-41d4-a716-446655440005  SolarConnect Africa (Cleantech)
880e8400-e29b-41d4-a716-446655440006  Swift Logistics Hub (Logistics)
880e8400-e29b-41d4-a716-446655440007  PayZone Africa (Fintech)
880e8400-e29b-41d4-a716-446655440008  TechHub Lusaka (Fintech)
880e8400-e29b-41d4-a716-446655440009  AgroConnect Marketplace (Agritech)
880e8400-e29b-41d4-a716-446655440010  SmartSchool Platform (Edtech)
```

## Enum Values Reference

### Fund Status
- `Fundraising` - Fund raising capital
- `InvestmentPeriod` - Actively investing
- `HarvestPeriod` - Focusing on exits
- `WindingDown` - Closing positions
- `Closed` - Fund terminated

### Call Status
- `Draft` - Not yet issued
- `Issued` - Sent to LPs
- `PartiallyFunded` - Some LPs contributed
- `FullyFunded` - All capital received
- `Overdue` - Past due date
- `Cancelled` - Withdrawn

### Distribution Status
- `Draft` - Being prepared
- `Approved` - Approved by fund
- `Processing` - Being executed
- `Distributed` - Sent to LPs
- `Completed` - All distributed

### Investment Stage
- `PreSeed` - Pre-seed stage
- `Seed` - Seed funding
- `SeriesA` - Series A
- `SeriesB` - Series B
- `SeriesC` - Series C
- `Growth` - Growth stage
- `PreIPO` - Pre-IPO
- `Buyout` - Buyout/Acquisition

### Company Status
- `Active` - Operating company
- `Exited` - Successful exit
- `WrittenOff` - Loss/writeoff
- `Restructuring` - Being restructured
- `Dormant` - Not active

### IC Decision
- `Pending` - Awaiting decision
- `Approved` - Approved
- `ApprovedWithConditions` - Conditional approval
- `Rejected` - Not approved
- `Deferred` - Postponed
- `MoreInfoRequired` - Needs more data

## Key Data Relationships

### Fund → Companies
- Multiple companies invest per fund
- Use `fundId` to link PortfolioCompanyDetail to fund

### Company → Financials
- Multiple financial records per company
- Q1 2024 and FY2023 data available
- Use `companyId` to link

### Company → Milestones
- Multiple milestones per company
- Track progress and completion status
- Use `companyId` to link

### Fund → Capital Calls → Capital Distributions
- Calls represent LP contributions
- Distributions represent returns to LPs
- Use `fundId` to link

### Fund → IC Meetings → IC Proposals → IC Votes → IC Resolutions
- Meetings contain proposal reviews
- Each proposal tracked with votes
- Resolutions document final decisions
- Use `fundId`, `meetingId`, `proposalId` to link

## Sector Distribution

| Sector | Count | Companies |
|--------|-------|-----------|
| Fintech | 3 | M-Bank Africa, PayZone Africa, TechHub Lusaka |
| Agritech | 2 | FarmBridge Solutions, AgroConnect Marketplace |
| Edtech | 2 | MindLeap Academy, SmartSchool Platform |
| Healthtech | 1 | HealthHub Digital |
| Cleantech | 1 | SolarConnect Africa |
| Logistics | 1 | Swift Logistics Hub |

## Financial Summary

### Total Committed Capital
- 11 funds with $418.5M total committed
- Called capital: $212.3M
- Distributed capital: $30.8M

### Fund Returns
- TVPI Range: 1.03 - 3.2
- DPI Range: 0.0 - 0.29
- NetIRR Range: 18% - 45%

### Portfolio Companies
- Total invested: $15.3M
- Valuations: $4.5M - $42.8M
- MOIC: 1.1x - 3.2x

## Testing Use Cases

### Fund Performance Analysis
- Use `vc-funds.json` for fund metrics
- Link to `capital-calls.json` and `capital-distributions.json`
- Calculate LP returns using capital flows

### Portfolio Company Tracking
- Use `portfolio-companies-detail.json` for company overview
- Link to `company-financials.json` for detailed financials
- Track progress with `company-milestones.json`

### Board Governance
- Use `board-meetings.json` for board decisions
- Verify board composition and resolutions
- Track action items and deadlines

### Investment Decision Process
- Review proposal with `ic-proposals.json`
- Track individual votes in `ic-votes.json`
- Verify formal resolution in `ic-resolutions.json`
- Connect to `ic-meetings.json` for context

### Data Integrity
- All GUIDs are unique and properly formatted
- Dates follow realistic sequence
- Cross-references use consistent IDs
- All enum values are valid

---

**Last Updated**: February 2024
**Data Format**: JSON
**Character Encoding**: UTF-8
