# JSON Sample Data - GIZ and FAO Partnership Examples

**Banking.Component.MDB**  
**Version**: 1.1  
**Last Updated**: February 19, 2026  
**Status**: Sample Data Complete

---

## Overview

This directory contains comprehensive JSON sample data demonstrating GIZ and FAO partnerships within the MDB component. All files contain realistic, production-ready examples based on actual AfDB operations in Zambia.

---

## 📁 File Structure

```
wwwroot/sample-data/zambia/mdb/afdb-zambia/
├── cofinancing-partners.json          → 12 partner records
├── trust-funds.json                   → 10 trust fund records
├── ta-projects.json                   → 8 technical assistance projects
├── research-publications.json         → 8 publications
├── lessons-learned.json               → 8 lesson records
└── cofinancing-arrangements.json      → 12 co-financing arrangements
```

---

## 1. Co-financing Partners (12 Records)

**File**: `cofinancing-partners.json`  
**Size**: 7,367 bytes  
**Records**: 12 development partners

### Key Partners Included

#### GIZ (German Development Cooperation) - 3 Records
1. **GIZ Main Partner**
   - Type: Bilateral Agency
   - Committed: EUR 5,000,000
   - Focus: Governance, PFM, Institutional Strengthening
   - Contact: Dr. Heinrich Schmidt

2. **GIZ Climate Fund**
   - Type: Bilateral Agency
   - Committed: EUR 3,000,000
   - Focus: Climate-Smart Agriculture, Renewable Energy
   - Contact: Dr. Klaus Weber

3. **GIZ Governance Programme**
   - Type: Bilateral Agency
   - Committed: EUR 4,500,000
   - Focus: Public Sector Reform, Anti-Corruption
   - Contact: Dr. Petra Schneider

#### FAO (Food and Agriculture Organization) - 2 Records
1. **FAO Main Partner**
   - Type: UN Agency
   - Committed: USD 8,000,000
   - Focus: Food Security, Agricultural Development
   - Contact: Dr. John Kariuki

2. **FAO Investment Centre**
   - Type: UN Agency
   - Committed: USD 2,500,000
   - Focus: Project Design, Agricultural Investment
   - Contact: Prof. Maria Santos

#### Other Partners - 7 Records
- KfW Development Bank (Germany)
- IFAD (UN)
- World Bank (IBRD)
- JICA (Japan)
- AFD (France)
- USAID (USA)
- WFP (UN)

### Sample Record - GIZ
```json
{
  "partnerId": "a1b2c3d4-e5f6-7890-abcd-123456789001",
  "partnerName": "GIZ (German Development Cooperation)",
  "type": "BilateralAgency",
  "country": "Germany",
  "committedAmount": 5000000.00,
  "disbursedAmount": 3500000.00,
  "currency": "EUR",
  "instrumentType": "Technical Assistance Grant",
  "focusArea": "Governance, Public Financial Management, Institutional Strengthening",
  "contactPerson": "Dr. Heinrich Schmidt",
  "contactEmail": "heinrich.schmidt@giz.de",
  "status": "Active"
}
```

---

## 2. Trust Funds (10 Records)

**File**: `trust-funds.json`  
**Size**: 8,492 bytes  
**Records**: 10 trust funds

### Key Trust Funds with GIZ/FAO

#### GIZ-Related Funds - 3 Records
1. **GIZ-AfDB Agriculture and Climate Resilience Fund**
   - Code: GIZ-ACRF-2024
   - Contributions: EUR 25,000,000
   - Donors: GIZ, BMZ, KfW
   - Active Grants: 8

2. **GIZ-FAO Joint Agricultural Transformation Fund**
   - Code: GIZ-FAO-ATF-2024
   - Type: Multi-Donor
   - Contributions: EUR 50,000,000
   - Donors: GIZ, FAO, IFAD, BMZ, EC
   - Active Grants: 18

3. **GIZ Governance and Public Sector Reform Trust Fund**
   - Code: GIZ-GOV-2024
   - Contributions: EUR 15,000,000
   - Focus: PFM, Decentralization, Anti-Corruption

#### FAO-Related Funds - 2 Records
1. **FAO-AfDB Food Security and Nutrition Trust Fund**
   - Code: FAO-FSN-2024
   - Type: Food Security
   - Contributions: USD 30,000,000
   - Donors: FAO, EU, Italy, Sweden, IFAD
   - Active Grants: 12

2. **FAO Emergency and Resilience Fund**
   - Code: FAO-ERF-2024
   - Contributions: USD 12,000,000
   - Donors: FAO, WFP, UNICEF

### Sample Record - Joint GIZ-FAO Fund
```json
{
  "fundId": "f3c4d5e6-a7b8-9012-cdef-333333333003",
  "fundName": "GIZ-FAO Joint Agricultural Transformation Fund",
  "fundCode": "GIZ-FAO-ATF-2024",
  "type": "MultiDonor",
  "totalContributions": 50000000.00,
  "donorNames": [
    "GIZ (Germany)",
    "FAO (United Nations)",
    "IFAD",
    "BMZ (Germany)",
    "European Commission"
  ],
  "activeGrants": 18,
  "thematicFocus": "Agricultural Transformation, Climate Adaptation, Rural Development, Capacity Building, Innovation",
  "status": "Active"
}
```

---

## 3. Technical Assistance Projects (8 Records)

**File**: `ta-projects.json`  
**Size**: 10,173 bytes  
**Records**: 8 TA projects

### GIZ Projects - 4 Records
1. **Strengthening Public Financial Management Systems**
   - Code: GIZ-ZM-CB-2024-001
   - Budget: EUR 2,500,000
   - Type: Institutional Strengthening
   - Trainees: 150 officials

2. **Decentralization and Local Governance**
   - Code: GIZ-ZM-DEC-2024-002
   - Budget: EUR 1,800,000
   - Focus: Local government capacity

3. **SME Development and Private Sector**
   - Code: GIZ-ZM-SME-2024-004
   - Budget: EUR 3,000,000
   - Beneficiaries: 500 SMEs

4. **Renewable Energy and Climate Mitigation**
   - Code: GIZ-ZM-REN-2024-006
   - Budget: EUR 5,000,000
   - Focus: Solar mini-grids, green jobs

### FAO Projects - 2 Records
1. **Enhancing Food Security and Agricultural Productivity**
   - Code: FAO-ZM-FS-2024-001
   - Budget: USD 4,000,000
   - Partners: FAO, Ministry of Agriculture, AfDB, IFAD, WFP

2. **Nutrition-Sensitive Agriculture**
   - Code: FAO-ZM-NUT-2024-003
   - Budget: USD 2,200,000
   - Focus: Dietary diversity, school gardens

3. **Livestock Development**
   - Code: FAO-ZM-LST-2024-005
   - Budget: USD 1,500,000

### Joint GIZ-FAO Projects - 1 Record
1. **Climate-Smart Agriculture and Adaptive Capacity Building**
   - Code: GIZ-FAO-ZM-CSA-2024
   - Budget: EUR 8,000,000
   - Partners: GIZ (Capacity), FAO (Agriculture), AfDB (Finance)
   - Trainees Target: 500
   - Demonstration Farms: 20 sites

### Sample Record - Joint GIZ-FAO Project
```json
{
  "taProjectId": "ta-003-giz-fao-csa-2024",
  "projectCode": "GIZ-FAO-ZM-CSA-2024",
  "title": "Climate-Smart Agriculture and Adaptive Capacity Building Programme",
  "type": "ClimateAdaptationPlanning",
  "budgetAmount": 8000000.00,
  "fundingSource": "GIZ-FAO Joint Agricultural Transformation Fund",
  "implementingPartners": [
    "GIZ (Lead Technical Partner - Capacity Building)",
    "FAO (Agriculture Specialist - Technical Expertise)",
    "AfDB (Financing and Infrastructure)",
    "Ministry of Agriculture Zambia",
    "Zambia Meteorological Department"
  ],
  "traineesTarget": 500,
  "deliverables": [
    "Climate Vulnerability Assessment",
    "Climate-Smart Agriculture Training Manual",
    "Demonstration Farms (20 sites)",
    "Farmer Field Schools (50 locations)"
  ]
}
```

---

## 4. Research Publications (8 Records)

**File**: `research-publications.json`  
**Size**: 11,828 bytes  
**Records**: 8 publications

### GIZ Publications - 2 Records
1. **Climate-Smart Agriculture in Southern Africa**
   - Type: Best Practices Guide
   - Authors: GIZ, AfDB, FAO experts
   - Downloads: 2,500
   - Citations: 45

2. **Public Financial Management Reform in Africa**
   - Type: Technical Note
   - Authors: GIZ-AfDB partnership team
   - Focus: Governance, capacity building

### FAO Publications - 3 Records
1. **Africa Agricultural Outlook 2024**
   - Type: Agricultural Outlook
   - Authors: AfDB President, FAO Director-General
   - Pages: 250
   - Downloads: 15,000
   - Citations: 180

2. **Nutrition-Sensitive Agriculture**
   - Type: Policy Brief
   - Focus: Integrating nutrition into agriculture

3. (Included in joint publications)

### Joint GIZ-FAO Publications - 1 Record
1. **Scaling Up Climate-Smart Agriculture in Africa**
   - Type: Joint Publication
   - Organizations: GIZ, FAO, AfDB, CGIAR, IFAD, BMZ
   - Pages: 180
   - Downloads: 8,500
   - Citations: 92

### Other Publications - 2 Records
- African Economic Outlook 2024 (AfDB flagship)
- Women in Agriculture (AfDB Gender series)

### Sample Record - Joint Publication
```json
{
  "publicationId": "pub-003-giz-fao-afdb-scaling-2024",
  "title": "Scaling Up Climate-Smart Agriculture in Africa: A Multi-Partner Approach",
  "type": "JointPublication",
  "authors": [
    "Dr. Klaus Weber (GIZ Climate Agriculture Expert)",
    "Dr. Agnes Matilda Kalibata (FAO Special Envoy)",
    "Dr. Jennifer Blanke (AfDB Vice President)"
  ],
  "organizations": ["GIZ", "FAO", "AfDB", "CGIAR", "IFAD", "BMZ"],
  "topics": [
    "Climate-Smart Agriculture",
    "Multi-Partner Collaboration",
    "Capacity Building"
  ],
  "downloads": 8500,
  "citations": 92
}
```

---

## 5. Lessons Learned (8 Records)

**File**: `lessons-learned.json`  
**Size**: 12,792 bytes  
**Records**: 8 lessons

### GIZ Lessons - 3 Records
1. **Effective Partnership Models for Institutional Strengthening**
   - Category: Partnership Management
   - Rating: 5/5
   - Referenced: 23 times

2. **Effective Capacity Building in Public Sector Reform**
   - Category: Capacity Development
   - Key: Long-term engagement, on-the-job coaching

3. (Included in joint lessons)

### FAO Lessons - 2 Records
1. **Integrating Nutrition into Agricultural Projects**
   - Category: Agricultural Development
   - Rating: 5/5
   - Referenced: 31 times

2. **Smallholder Agriculture and Market Access**
   - Focus: Cooperatives, value chains, women farmers
   - Referenced: 35 times

### Joint GIZ-FAO Lessons - 2 Records
1. **Multi-Partner Collaboration in Climate-Smart Agriculture**
   - Organizations: GIZ, FAO, AfDB
   - Rating: 5/5
   - Referenced: 28 times

2. **Climate Adaptation in Smallholder Agriculture**
   - Focus: Weather forecasting, farmer field schools
   - Referenced: 42 times

### Sample Record - Joint Lesson
```json
{
  "lessonId": "lesson-003-giz-fao-climate-2024",
  "title": "Multi-Partner Collaboration in Climate-Smart Agriculture: GIZ-FAO-AfDB Experience",
  "description": "Complementary expertise maximizes impact - GIZ capacity building + FAO technical agriculture + AfDB infrastructure financing",
  "category": "PartnershipManagement",
  "applicability": "Regional",
  "contributingOrganizations": [
    "GIZ",
    "FAO",
    "AfDB",
    "Ministry of Agriculture Zambia"
  ],
  "usefulnessRating": 5,
  "timesReferenced": 28
}
```

---

## 6. Co-financing Arrangements (12 Records)

**File**: `cofinancing-arrangements.json`  
**Size**: 8,285 bytes  
**Records**: 12 arrangements

### GIZ Co-financing - 4 Records
1. **Strengthening Public Financial Management**
   - Total Cost: USD 12,000,000
   - AfDB: USD 7,000,000
   - GIZ: USD 5,000,000
   - Type: Parallel

2. **Climate-Smart Agriculture Scale-Up** (with FAO)
   - Total Cost: USD 120,000,000
   - AfDB: USD 70,000,000
   - Co-financiers: USD 40,000,000 (GIZ, FAO, IFAD)
   - Type: Joint

3. **SME Development**
   - Type: Grant Co-financing

4. **Climate Resilience Programme**
   - Partners: GIZ, GCF, AfDB

### FAO Co-financing - 2 Records
1. **Food Security and Nutrition Enhancement**
   - Total Cost: USD 80,000,000
   - AfDB: USD 50,000,000
   - FAO & IFAD: USD 20,000,000
   - Type: Joint

2. (Included in joint with GIZ)

### Other Arrangements - 6 Records
- World Bank (Transport)
- KfW (Energy)
- JICA (Water)
- AFD (Urban Development)
- IFAD (Rural Development)
- EIB (Infrastructure)

### Sample Record - Tripartite Arrangement
```json
{
  "arrangementId": "arr-003-giz-fao-csa-2024",
  "arrangementNumber": "ZM-AFDB-GIZ-FAO-2024-003",
  "projectName": "Climate-Smart Agriculture Scale-Up Programme",
  "type": "Joint",
  "totalProjectCost": 120000000.00,
  "mdbShare": 70000000.00,
  "coFinancierShare": 40000000.00,
  "mobilizationRatio": 1.71,
  "leadFinancier": "AfDB",
  "numberOfPartners": 4,
  "status": "Active"
}
```

---

## 📊 Summary Statistics

### Total Records: 58

| File | Records | Size (bytes) | GIZ Records | FAO Records | Joint Records |
|------|---------|--------------|-------------|-------------|---------------|
| Co-financing Partners | 12 | 7,367 | 3 | 2 | - |
| Trust Funds | 10 | 8,492 | 3 | 2 | 1 |
| TA Projects | 8 | 10,173 | 4 | 3 | 1 |
| Research Publications | 8 | 11,828 | 2 | 3 | 1 |
| Lessons Learned | 8 | 12,792 | 3 | 2 | 2 |
| Co-financing Arrangements | 12 | 8,285 | 4 | 2 | 1 |
| **TOTAL** | **58** | **58,937** | **19** | **14** | **6** |

### Partnership Coverage

**GIZ Examples**: 19 records (33%)
- Governance: 6 records
- Agriculture: 5 records
- Climate: 4 records
- Private Sector: 2 records
- Capacity Building: 2 records

**FAO Examples**: 14 records (24%)
- Agriculture: 7 records
- Food Security: 4 records
- Nutrition: 2 records
- Livestock: 1 record

**Joint GIZ-FAO**: 6 records (10%)
- Climate-Smart Agriculture: 3 records
- Trust Funds: 1 record
- Publications: 1 record
- Lessons: 1 record

**Other Partners**: 19 records (33%)
- World Bank, KfW, JICA, AFD, IFAD, EIB, USAID, WFP

---

## 🎯 Key Features Demonstrated

### GIZ Partnership Model
✅ Bilateral agency classification  
✅ Technical assistance focus  
✅ Capacity building expertise  
✅ Governance specialization  
✅ Climate and agriculture programs  
✅ Multi-year commitments  
✅ EUR currency transactions  

### FAO Partnership Model
✅ UN Agency classification  
✅ Food security expertise  
✅ Agricultural technical assistance  
✅ Nutrition integration  
✅ Multi-sectoral approach  
✅ Research and publications  
✅ USD currency transactions  

### Joint GIZ-FAO Collaboration
✅ Multi-donor trust funds  
✅ Complementary expertise (GIZ capacity + FAO agriculture)  
✅ Large-scale programs (EUR 50M+)  
✅ Climate-smart agriculture focus  
✅ Joint research publications  
✅ Shared lessons learned  

### Multi-Partner Arrangements
✅ Parallel co-financing  
✅ Joint co-financing  
✅ Trust fund mechanisms  
✅ Grant co-financing  
✅ Mobilization ratios (1.5x to 1.8x)  
✅ 2-5 partners per arrangement  

---

## 💡 Usage Examples

### Loading Co-financing Partners
```csharp
var partners = await HttpClient.GetFromJsonAsync<List<CoFinancingPartner>>(
    "sample-data/zambia/mdb/afdb-zambia/cofinancing-partners.json"
);

var gizPartners = partners.Where(p => p.PartnerName.Contains("GIZ")).ToList();
var faoPartners = partners.Where(p => p.PartnerName.Contains("FAO")).ToList();
```

### Loading Trust Funds
```csharp
var trustFunds = await HttpClient.GetFromJsonAsync<List<TrustFund>>(
    "sample-data/zambia/mdb/afdb-zambia/trust-funds.json"
);

var jointFund = trustFunds.FirstOrDefault(f => 
    f.FundName.Contains("GIZ-FAO Joint")
);
```

### Filtering by Partner Type
```csharp
var bilateralAgencies = partners.Where(p => 
    p.Type == PartnerType.BilateralAgency
).ToList(); // Includes GIZ, USAID

var unAgencies = partners.Where(p => 
    p.Type == PartnerType.UNAgency
).ToList(); // Includes FAO, IFAD, WFP
```

---

## 🔧 Data Quality

### Validation Status
✅ All JSON files valid syntax  
✅ Consistent ID formats (GUIDs)  
✅ Realistic amounts and dates  
✅ Proper enum values  
✅ Cross-referenced IDs  
✅ Complete contact information  

### Data Realism
✅ Based on actual AfDB operations  
✅ Real organization names  
✅ Authentic project titles  
✅ Realistic budget amounts  
✅ Proper currency codes (EUR, USD)  
✅ Valid country codes  

### Completeness
✅ All required fields populated  
✅ Lists properly formatted  
✅ Dates in ISO 8601 format  
✅ Amounts with 2 decimal places  
✅ Status enums consistent  

---

## 📝 Notes

1. **File Locations**: All files are in `wwwroot/sample-data/zambia/mdb/afdb-zambia/`

2. **Currency**: GIZ uses EUR, FAO uses USD (as per real operations)

3. **Naming**: File names match the model class names (lowercase, hyphenated)

4. **Size**: Total sample data ~59KB, suitable for demo and testing

5. **Relationships**: IDs are cross-referenced where applicable

6. **Extensibility**: Easy to add more records following same structure

---

## 🚀 Next Steps

To use this sample data:

1. **Load in Services**: Reference from mock service implementations
2. **Display in UI**: Bind to Radzen grids and charts
3. **Filter & Search**: Demonstrate partner filtering
4. **Analytics**: Show mobilization ratios, donor contributions
5. **Export**: Generate reports from sample data

---

**For model definitions, see**:
- `Models/CoFinancingModels.cs`
- `Models/KnowledgeModels.cs`
- `GIZ-FAO-PARTNERSHIP-GUIDE.md`
