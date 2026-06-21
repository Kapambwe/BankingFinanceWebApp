# Country Data Replication Guide

## Overview
This guide explains how to replicate the Zambia/South Africa data structure to other countries using the provided PowerShell scripts.

## What's Been Created

### Zambia (Complete - 37 institutions)
✅ All 9 institution types
✅ 37 institutions with full data
✅ ~250 JSON files
✅ Authentic Zambian context (ZMW, Zambian names, cities)

### South Africa (Pilot - 9 institutions)
✅ 3 institution types (Commercial Banks, Insurance, Microfinance)
✅ 9 institutions with full data
✅ ~108 JSON files
✅ Authentic South African context (ZAR, South African names, cities)

## Replication Scripts

### 1. create-south-africa-data.ps1
**Purpose:** Creates South Africa data from Zambia template  
**Status:** ✅ Completed  
**Output:** 9 institutions, ~108 files  

### 2. replicate-country-data.ps1
**Purpose:** Universal script to create any country's data  
**Status:** ✅ Ready to use  
**Output:** Customizable based on parameters  

## How to Use the Replication Script

### Basic Syntax
```powershell
.\replicate-country-data.ps1 `
    -TargetCountry "CountryName" `
    -Currency "CUR" `
    -Cities @("City1", "City2", "City3") `
    -Names @("Name1", "Name2", "Name3") `
    -PhonePrefix "+XXX"
```

### Parameters

| Parameter | Required | Description | Example |
|-----------|----------|-------------|---------|
| TargetCountry | Yes | Country name | "Kenya" |
| Currency | Yes | ISO currency code | "KES" |
| Cities | Yes | Array of major cities | @("Nairobi", "Mombasa") |
| Names | Yes | Array of common names | @("Kamau", "Wanjiku") |
| PhonePrefix | No | Phone country code | "+254" (default: "+1") |

## Country-Specific Examples

### Kenya
```powershell
.\replicate-country-data.ps1 `
    -TargetCountry "Kenya" `
    -Currency "KES" `
    -Cities @("Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret") `
    -Names @("Kamau", "Wanjiku", "Ochieng", "Akinyi", "Mwangi", "Njeri", "Otieno", "Wambui") `
    -PhonePrefix "+254"
```

### Nigeria
```powershell
.\replicate-country-data.ps1 `
    -TargetCountry "Nigeria" `
    -Currency "NGN" `
    -Cities @("Lagos", "Abuja", "Kano", "Ibadan", "Port Harcourt") `
    -Names @("Adebayo", "Chioma", "Emeka", "Fatima", "Oluwaseun", "Ngozi", "Tunde", "Amina") `
    -PhonePrefix "+234"
```

### Ghana
```powershell
.\replicate-country-data.ps1 `
    -TargetCountry "Ghana" `
    -Currency "GHS" `
    -Cities @("Accra", "Kumasi", "Tamale", "Sekondi-Takoradi") `
    -Names @("Kwame", "Ama", "Kofi", "Akosua", "Yaw", "Abena", "Kwesi", "Efua") `
    -PhonePrefix "+233"
```

### Uganda
```powershell
.\replicate-country-data.ps1 `
    -TargetCountry "Uganda" `
    -Currency "UGX" `
    -Cities @("Kampala", "Entebbe", "Mbarara", "Gulu", "Jinja") `
    -Names @("Mukasa", "Nakato", "Okello", "Akello", "Wasswa", "Babirye", "Kato", "Nambi") `
    -PhonePrefix "+256"
```

### Rwanda
```powershell
.\replicate-country-data.ps1 `
    -TargetCountry "Rwanda" `
    -Currency "RWF" `
    -Cities @("Kigali", "Butare", "Gisenyi", "Ruhengeri") `
    -Names @("Uwimana", "Mugisha", "Ingabire", "Nkurunziza", "Habimana", "Mukamana") `
    -PhonePrefix "+250"
```

### Zimbabwe
```powershell
.\replicate-country-data.ps1 `
    -TargetCountry "Zimbabwe" `
    -Currency "ZWL" `
    -Cities @("Harare", "Bulawayo", "Mutare", "Gweru", "Kwekwe") `
    -Names @("Tendai", "Rudo", "Tapiwa", "Chipo", "Tinashe", "Nyasha", "Farai", "Rumbidzai") `
    -PhonePrefix "+263"
```

### Malawi
```powershell
.\replicate-country-data.ps1 `
    -TargetCountry "Malawi" `
    -Currency "MWK" `
    -Cities @("Lilongwe", "Blantyre", "Mzuzu", "Zomba") `
    -Names @("Chisomo", "Mphatso", "Thoko", "Kondwani", "Chimwemwe", "Pemphero") `
    -PhonePrefix "+265"
```

### Tanzania
```powershell
.\replicate-country-data.ps1 `
    -TargetCountry "Tanzania" `
    -Currency "TZS" `
    -Cities @("Dar es Salaam", "Dodoma", "Mwanza", "Arusha", "Mbeya") `
    -Names @("Juma", "Amina", "Hassan", "Fatuma", "Ally", "Halima", "Rashid", "Zainab") `
    -PhonePrefix "+255"
```

### Ethiopia
```powershell
.\replicate-country-data.ps1 `
    -TargetCountry "Ethiopia" `
    -Currency "ETB" `
    -Cities @("Addis Ababa", "Dire Dawa", "Mekelle", "Gondar", "Bahir Dar") `
    -Names @("Abebe", "Almaz", "Dawit", "Hanna", "Kebede", "Mulu", "Tadesse", "Tigist") `
    -PhonePrefix "+251"
```

### Egypt
```powershell
.\replicate-country-data.ps1 `
    -TargetCountry "Egypt" `
    -Currency "EGP" `
    -Cities @("Cairo", "Alexandria", "Giza", "Sharm El Sheikh", "Luxor") `
    -Names @("Ahmed", "Fatima", "Mohamed", "Aisha", "Omar", "Nour", "Hassan", "Layla") `
    -PhonePrefix "+20"
```

### Morocco
```powershell
.\replicate-country-data.ps1 `
    -TargetCountry "Morocco" `
    -Currency "MAD" `
    -Cities @("Casablanca", "Rabat", "Marrakech", "Fes", "Tangier") `
    -Names @("Youssef", "Fatima", "Mohammed", "Amina", "Karim", "Zineb", "Rachid", "Salma") `
    -PhonePrefix "+212"
```

## Institution Types Covered

The replication script creates institutions for all 9 types:

1. **Commercial Bank** - 3 institutions
2. **Insurance** - 3 institutions
3. **Microfinance** - 3 institutions
4. **Pension** - 3 institutions
5. **Investment** - 3 institutions
6. **Venture Capital** - 3 institutions
7. **Asset Management** - 3 institutions
8. **Mortgage Company** - 3 institutions
9. **Government Institution** - 2 institutions

**Total per country:** 26 institutions

## Files Created Per Institution

Each institution gets 6-12 JSON files depending on type:

### Universal Files (All institutions)
1. institution-info.json
2. customers.json
3. chart-of-accounts.json
4. journal-entries.json
5. invoices.json
6. bills.json

### Type-Specific Files
- **Commercial Banks:** accounts.json, transactions.json, collateral.json, credit-scores.json, fraud-alerts.json, delinquent-accounts.json
- **Insurance:** policies.json, claims.json, quotes.json, underwriting-assessments.json
- **Microfinance:** loans.json, lending-groups.json, collateral.json, credit-scores.json, fraud-alerts.json, delinquent-accounts.json
- **Pension:** members.json, benefit-calculations.json
- **Investment:** portfolios.json, trades.json, trade-orders.json, robo-advisory-recommendations.json
- **Venture Capital:** deals.json, portfolio-companies.json
- **Asset Management:** funds.json, client-accounts.json, trade-orders.json, robo-advisory-recommendations.json
- **Mortgage:** mortgages.json, property-valuations.json, collateral.json, credit-scores.json, fraud-alerts.json, delinquent-accounts.json
- **Government:** development-projects.json, empowerment-loans.json, beneficiaries.json, collateral.json, credit-scores.json, fraud-alerts.json, delinquent-accounts.json

## Data Adaptations

The script automatically adapts:
- ✅ Country names
- ✅ Currency codes
- ✅ City names
- ✅ Person names
- ✅ Phone number formats
- ✅ Realistic amounts (in thousands, not billions)

## Workflow

### Step 1: Research
Gather country-specific information:
- Currency code
- Major cities (4-10)
- Common names (8-20)
- Phone prefix

### Step 2: Run Script
Execute the replication script with your parameters

### Step 3: Customize (Optional)
- Update institution-info.json files with real institution names
- Adjust amounts to match local economic context
- Add country-specific details

### Step 4: Verify
Check that files were created correctly:
```powershell
Get-ChildItem -Path "wwwroot/sample-data/YourCountry" -Recurse -Filter "*.json" | Measure-Object
```

## Estimated Output

Per country:
- **Institutions:** 26
- **JSON Files:** ~250-300
- **Data Records:** ~4,000-5,000
- **Time to create:** 2-5 minutes (automated)

## Tips for Success

1. **Use authentic names** - Research common names in the target country
2. **Include major cities** - Use 5-10 well-known cities
3. **Verify currency codes** - Use ISO 4217 standard codes
4. **Check phone prefixes** - Ensure correct international dialing code
5. **Test with one country first** - Verify output before batch processing

## Batch Processing

To process multiple countries, create a batch script:

```powershell
$countries = @(
    @{Name="Kenya"; Currency="KES"; Cities=@("Nairobi","Mombasa"); Names=@("Kamau","Wanjiku"); Phone="+254"},
    @{Name="Nigeria"; Currency="NGN"; Cities=@("Lagos","Abuja"); Names=@("Adebayo","Chioma"); Phone="+234"}
)

foreach ($country in $countries) {
    .\replicate-country-data.ps1 `
        -TargetCountry $country.Name `
        -Currency $country.Currency `
        -Cities $country.Cities `
        -Names $country.Names `
        -PhonePrefix $country.Phone
}
```

## Troubleshooting

### Issue: Source files not found
**Solution:** Ensure South Africa data was created first using `create-south-africa-data.ps1`

### Issue: Names not replacing correctly
**Solution:** Add more names to the Names array (minimum 8 recommended)

### Issue: Cities repeating too often
**Solution:** Provide more cities in the Cities array (minimum 5 recommended)

### Issue: Phone numbers not formatting correctly
**Solution:** Verify PhonePrefix includes the + symbol (e.g., "+254" not "254")

## Status

- ✅ Zambia: Complete (37 institutions)
- ✅ South Africa: Pilot complete (9 institutions)
- 🔄 Other 31 countries: Ready for replication

## Next Steps

1. Run replication script for priority countries
2. Customize institution names with real institutions
3. Verify data quality
4. Test with application

---

**Created:** February 7, 2026  
**Last Updated:** February 7, 2026  
**Status:** Production Ready ✅
