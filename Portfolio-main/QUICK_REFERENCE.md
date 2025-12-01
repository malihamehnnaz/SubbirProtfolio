# Quick Reference Guide - Extended Project Data

## 🎯 Quick Start

### Import the Data
```typescript
import { extendedProjectData } from '@/lib/projects-extended';
import { getProjectStatistics, getSustainabilityFeatures } from '@/lib/project-utils';
import { ProjectSpecifications } from '@/components/project-specifications';
```

### Use in a Component
```typescript
// Get data for a specific project
const data = extendedProjectData['trade-intercontinental'];

// Display full specifications
<ProjectSpecifications projectSlug="trade-intercontinental" />

// Get statistics
const stats = getProjectStatistics();
```

## 📊 Available Data Fields

### Financial
- `companyProjectValue` - Total project value (e.g., "$111.37M")
- `landValue` - Land value
- `constructionCost` - Construction cost
- `totalCost` - Total project cost
- `sellValue` - Selling value

### Construction & Building
- `company` - Company name
- `companyBuiltArea` - Total company built area
- `construction` - Construction type (RCC, Steel, etc.)
- `buildingType` - Commercial, Residential, Data Center, etc.
- `certified` - Certification (LEED Platinum, LEED Gold, EDGE)

### Project Management
- `duration` - Project duration (e.g., "43 months")
- `subContractors` - Number of subcontractors
- `laborCount` - Labor force size (e.g., "400+")
- `timeSaved` - Time saved percentage (e.g., "7%")

### Technical Systems
- `liftCount` - Lift specifications
- `ac` - AC system type (VRF, Central Chiller, Individual)
- `carParkingCount` - Number of parking spaces
- `glassInstalled` - Glass/curtain wall type

### Safety & Building Systems
- `fireProtection` - "Yes"/"No"
- `fireDetection` - "Yes"/"No"
- `bms` - Building Management System
- `cctv` - CCTV system
- `accessControl` - Access control system
- `paSystem` - PA system
- `pabx` - PABX system
- `forceVentilation` - Force ventilation

### Infrastructure
- `generator` - Generator specifications
- `transformer` - Transformer capacity
- `avr` - AVR specifications
- `rmu` - RMU type
- `bbt` - BBT rating
- `solar` - Solar panel specifications

### Amenities
- `rooms` - Detailed list of amenities and special features

## 🔧 Utility Functions

### Get Project Data
```typescript
import { getExtendedProjectData } from '@/lib/project-utils';

// By slug
const data = getExtendedProjectData('trade-intercontinental');

// By title
const data2 = getExtendedProjectData('Trade Intercontinental (TIC)');
```

### Filter Projects
```typescript
import { getProjectsByCompany, getProjectsByCertification } from '@/lib/project-utils';

// By company
const innstarProjects = getProjectsByCompany('InnStar Ltd');
// Returns: [{slug, ...data}, {slug, ...data}, ...]

// By certification
const leedProjects = getProjectsByCertification('LEED Platinum');
```

### Get Statistics
```typescript
import { getProjectStatistics, getSustainabilityFeatures, getTotalProjectValue } from '@/lib/project-utils';

// Overall statistics
const stats = getProjectStatistics();
// {
//   totalProjects: 10,
//   totalValue: 243.89,
//   totalBuiltArea: "164,431 m²",
//   averageTimeSaved: "6.3%",
//   certifiedProjects: 5,
//   companies: [...],
//   certifications: [...]
// }

// Sustainability metrics
const sustainability = getSustainabilityFeatures();
// {
//   solarProjects: 9,
//   totalSolarPanels: 238,
//   totalSolarCapacity: "154KW",
//   leedProjects: 3,
//   edgeProjects: 1,
//   fireProtection: 8,
//   bmsProjects: 7
// }

// Just the total value
const totalValue = getTotalProjectValue(); // 243.89 (in millions)
```

## 🎨 Component Usage

### Full Specifications Display
```typescript
import { ProjectSpecifications } from '@/components/project-specifications';

// In your project detail page
<ProjectSpecifications projectSlug={params.slug} />
```

### Custom Display
```typescript
import { extendedProjectData } from '@/lib/projects-extended';

const data = extendedProjectData['trade-intercontinental'];

<div>
  <h2>Project Value: {data.companyProjectValue}</h2>
  <p>Duration: {data.duration}</p>
  <p>Time Saved: {data.timeSaved}</p>
  {data.solar && <p>Solar: {data.solar}</p>}
</div>
```

## 📋 Project Slugs Reference

Use these slugs to access project data:

1. `trade-intercontinental` - Trade Intercontinental (TIC)
2. `itc-data-center` - ITC Data Center
3. `one-hatirjheel` - One Hatirjheel
4. `concord-syed-tower` - Concord Syed Tower
5. `terminal-3` - Terminal-3 (Airport)
6. `nassa-diamond` - Nassa Diamond
7. `nassa-heights` - Nassa Heights
8. `sjibl-hq` - Shahjalal Islami Bank HQ
9. `simpletree-hashi` - Simpletree Hashi
10. `karims-icon` - Karim's Icon

## 💡 Common Use Cases

### 1. Show Project Value Badge
```typescript
const data = extendedProjectData[slug];
{data?.companyProjectValue && (
  <Badge variant="outline">Value: {data.companyProjectValue}</Badge>
)}
```

### 2. Show Certification Badge
```typescript
{data?.certified && (
  <Badge variant="secondary">{data.certified}</Badge>
)}
```

### 3. Filter Certified Projects
```typescript
const certifiedProjects = Object.entries(extendedProjectData)
  .filter(([_, data]) => data.certified)
  .map(([slug, data]) => ({ slug, ...data }));
```

### 4. Show Sustainability Badge
```typescript
{data?.solar && (
  <Badge variant="outline" className="text-green-600">
    ☀️ {data.solar}
  </Badge>
)}
```

### 5. Show Time Saved (if significant)
```typescript
{data?.timeSaved && data.timeSaved !== '0%' && (
  <Badge variant="outline" className="text-green-600">
    ⚡ {data.timeSaved} time saved
  </Badge>
)}
```

## 🎯 Integration Checklist

- [ ] Import `ProjectSpecifications` component
- [ ] Add component to project detail page
- [ ] Test with different project slugs
- [ ] Add statistics to homepage/about page
- [ ] Add filters to projects list
- [ ] Add certification badges to project cards
- [ ] Display sustainability metrics
- [ ] Test responsive layout
- [ ] Validate TypeScript types

## 📁 File Locations

- **Extended Data**: `src/lib/projects-extended.ts`
- **Utilities**: `src/lib/project-utils.ts`
- **Component**: `src/components/project-specifications.tsx`
- **Documentation**: `docs/PROJECT_DATA_UPDATE.md`
- **Integration Example**: `INTEGRATION_EXAMPLE.tsx`
- **Summary**: `IMPLEMENTATION_SUMMARY.md`

## ⚡ Performance Tips

- Extended data is tree-shakeable (only imports what you use)
- Component is lazy-loadable if needed
- TypeScript provides full type safety
- No runtime overhead for unused fields

## 🔍 Debugging

If data doesn't show:
1. Check the slug matches exactly (lowercase, hyphens)
2. Verify import paths are correct
3. Check TypeScript errors
4. Ensure component is rendering (check React DevTools)

```typescript
// Debug helper
console.log('Available projects:', Object.keys(extendedProjectData));
console.log('Data for slug:', extendedProjectData[yourSlug]);
```
