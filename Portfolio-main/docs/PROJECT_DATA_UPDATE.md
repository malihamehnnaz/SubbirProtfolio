# Project Data Comprehensive Update

## Overview
This document details the comprehensive project specifications added to the portfolio based on the project spreadsheet data.

## New Extended Data Structure

A new file `src/lib/projects-extended.ts` has been created containing detailed specifications for all projects including:

### Financial Data
- Company project value
- Land value
- Construction cost
- Total cost
- Sell value

### Technical Specifications
- Construction type (RCC, Steel, Fair Face, etc.)
- Building certification (LEED Platinum, LEED Gold, EDGE)
- Car parking count
- Lift specifications
- AC system type
- Fire protection & detection systems
- BMS, CCTV, PA systems
- Access control & PABX

### Infrastructure Details
- Generator specifications
- Transformer capacity
- AVR specifications
- RMU type
- BBT ratings
- Solar panel installations
- Glass/curtain wall types

### Project Management
- Duration (months)
- Number of subcontractors
- Labor count
- Time saved percentage

### Amenities
- Detailed room/facility descriptions

## Projects with Extended Data

### 1. Trade Intercontinental (TIC)
- **Company**: InnStar Ltd
- **Value**: $111.37M
- **Type**: 100% As Cast RCC, Commercial
- **Certification**: LEED Platinum
- **Key Stats**: 
  - 46,593 m² built area
  - 42 subcontractors, 400+ labor
  - 7% time savings
  - 187 car parking
  - 7 Passenger + 1 Fireman lifts
  - VRF AC System
  - 4×800 KVA diesel generators
  - 3200 KVA transformer
  - 60 solar panels (30KW)

### 2. ITC Data Center
- **Company**: InnStar Ltd
- **Type**: Data Center for 35 Banks, Partial RCC
- **Certification**: EDGE
- **Key Stats**:
  - 10,806 m² built area
  - 16 subcontractors, 170+ labor
  - 12% time savings
  - 3×1000 KVA diesel generators
  - 50 solar panels (25KW)

### 3. One Hatirjheel
- **Company**: InnStar Ltd
- **Type**: Commercial, Artificial Fair Face
- **Key Stats**:
  - 2,063 m² built area
  - 16 subcontractors, 110+ labor
  - 7% time savings
  - 250 KVA diesel generator
  - 20 solar panels (10KW)

### 4. Concord Syed Tower
- **Company**: Concord Group
- **Value**: $44.53M
- **Type**: Residential, RCC Fairface
- **Key Stats**:
  - 10,000 m² built area
  - 23 subcontractors, 150+ labor
  - 78 car parking
  - 3 passenger lifts
  - 2×300KVA diesel generators
  - 18 solar panels (18KW)
  - Amenities: Double height reception, waterbody, gym, swimming pool, basketball ground

### 5. Terminal-3 (Hazrat Shahjalal Airport)
- **Company**: Concord Group
- **Type**: Airport Terminal (Partial supervision)
- **Key Stats**:
  - 34,433 m² built area
  - 7 subcontractors, 1100+ labor
  - 3% time savings

### 6. Nassa Diamond
- **Company**: Nassa Group
- **Value**: $45.19M
- **Type**: Commercial, Steel Building
- **Key Stats**:
  - 12,082 m² (18,382 m² company total)
  - 29 subcontractors, 110+ labor
  - 8% time savings
  - 82 car parking
  - VRF AC System
  - 2×800KVA diesel generators
  - 1600 KVA transformer
  - Triple glazed fritted glass
  - 12 solar panels (9.5KW)

### 7. Nassa Heights
- **Company**: Nassa Group
- **Type**: Commercial, Steel Building
- **Key Stats**:
  - 6,300 m² built area
  - 27 subcontractors, 80+ labor
  - 42 car parking
  - 1×1000 KVA diesel generator
  - 1600 KVA transformer
  - 12 solar panels (9.5KW)

### 8. SJIBL HQ Building
- **Company**: Volumezero Ltd
- **Value**: $36.34M
- **Type**: Commercial RCC
- **Certification**: LEED GOLD
- **Key Stats**:
  - 13,277 m² built area
  - 19 subcontractors, 140+ labor
  - 2% time savings
  - 75 car parking
  - 4 Passenger + 1 Fireman lifts
  - Central Chiller AC
  - 1×1200 KVA diesel generator
  - 1250 KVA transformer
  - 16 solar panels (12KW)
  - Amenities: Reception, waterbody, gym, private lounge, swimming pool, helipad

### 9. Simpletree Hashi
- **Company**: Volumezero Ltd
- **Type**: Residential, 100% Fairface & Wood
- **Key Stats**:
  - 3,123 m² built area
  - 28 subcontractors, 90+ labor
  - 8% time savings
  - 24 car parking
  - 2 passenger lifts
  - Individual AC
  - 200 KVA diesel generator
  - 8 solar panels (6KW)

### 10. Karim's Icon
- **Company**: Welcast Properties
- **Value**: $6.32M
- **Type**: Commercial RCC
- **Key Stats**:
  - 4,862 m² built area
  - 23 subcontractors, 70+ labor
  - 14 car parking
  - 2 passenger lifts
  - Individual AC
  - 800 KVA diesel generator
  - 630 KVA transformer
  - 7 solar panels (3.5KW)

## Usage

The extended project data can be imported and used alongside the existing project data:

```typescript
import { projects } from '@/lib/data';
import { extendedProjectData } from '@/lib/projects-extended';

// Get extended data for a project
const projectSlug = 'trade-intercontinental';
const extended = extendedProjectData[projectSlug];

console.log(extended.companyProjectValue); // "$111.37M"
console.log(extended.solar); // "60 Panel 30KW"
```

## Next Steps

1. Update project detail pages to display extended specifications
2. Add filtering/sorting by certification, company, value
3. Create comparison views for technical specifications
4. Add visualizations for project statistics (costs, timelines, sustainability features)
5. Integrate extended data into search and filter functionality

## Data Source

All data sourced from the official project specification spreadsheet dated November 2025.
