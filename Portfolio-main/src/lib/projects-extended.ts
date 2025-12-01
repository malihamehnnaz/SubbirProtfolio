// Extended project data with comprehensive specifications from project spreadsheet
// This includes detailed technical, financial, and operational data for each project

export interface ExtendedProjectData {
  // Company & Financial
  company?: string;
  companyBuiltArea?: string;
  companyProjectValue?: string;
  landValue?: string;
  constructionCost?: string;
  totalCost?: string;
  sellValue?: string;
  
  // Construction Details
  construction?: string;
  buildingType?: string;
  certified?: string;
  duration?: string;
  subContractors?: number;
  laborCount?: string;
  timeSaved?: string;
  
  // Technical Specifications
  carParkingCount?: number;
  liftCount?: string;
  ac?: string;
  forceVentilation?: string;
  fireProtection?: string;
  fireDetection?: string;
  paSystem?: string;
  cctv?: string;
  accessControl?: string;
  pabx?: string;
  bms?: string;
  
  // Infrastructure
  generator?: string;
  avr?: string;
  transformer?: string;
  rmu?: string;
  bbt?: string;
  solar?: string;
  glassInstalled?: string;
  
  // Amenities
  rooms?: string;
}

export const extendedProjectData: Record<string, ExtendedProjectData> = {
  "trade-intercontinental": {
    company: "InnStar Ltd",
    companyBuiltArea: "59,462 m²",
    companyProjectValue: "$111.37M",
    construction: "100% As Cast RCC",
    buildingType: "Commercial",
    certified: "LEED Platinum",
    carParkingCount: 187,
    liftCount: "7 Passenger + 1 Fireman",
    ac: "VRF System",
    forceVentilation: "Yes",
    fireProtection: "Yes",
    fireDetection: "Yes",
    paSystem: "Yes",
    cctv: "Yes",
    accessControl: "Yes",
    pabx: "Yes",
    bms: "Yes",
    landValue: "$24.55M",
    constructionCost: "$22.8M",
    totalCost: "$47.35M",
    sellValue: "$87.57M",
    duration: "43 months",
    subContractors: 42,
    laborCount: "400+",
    timeSaved: "7%",
    glassInstalled: "Double Glazed Curtain Wall with Combination of both Unitized and Semi Unitized System",
    generator: "4 Nos 800 KVA Diesel",
    avr: "6.35 KV-3",
    transformer: "3200 KVA",
    rmu: "DPDC RMU",
    bbt: "2500 Amp",
    solar: "60 Panel 30KW",
    rooms: "Double Height Drop Off Reception, GYM, BBQ party, Swimming Pool, Helipad, Meeting Room, Conference Room, Community Club, Prayer Room, Indoor and Outdoor Games"
  },
  
  "itc-data-center": {
    company: "InnStar Ltd",
    construction: "Partial As Cast RCC",
    buildingType: "Data Center of 35 Banks",
    certified: "EDGE",
    carParkingCount: 55,
    liftCount: "2 Passenger + 1 Service",
    ac: "VRF System",
    forceVentilation: "Yes",
    fireProtection: "Yes",
    fireDetection: "Yes",
    paSystem: "Yes",
    cctv: "Yes",
    accessControl: "Yes",
    pabx: "Yes",
    bms: "Yes",
    landValue: "$8.82M",
    constructionCost: "$4.1M",
    totalCost: "$12.92M",
    sellValue: "$18.5M",
    duration: "25 months",
    subContractors: 16,
    laborCount: "170+",
    timeSaved: "12%",
    glassInstalled: "Double Glazed Semi Unitized Curtain Wall",
    generator: "3 Nos 1000 KVA Diesel",
    transformer: "2500 KVA",
    rmu: "DPDC RMU",
    bbt: "2500 Amp",
    solar: "50 Panel 25KW",
    rooms: "BBQ party, Meeting Room, Conference Room, Community Club, Prayer Room, Indoor and Outdoor Games"
  },
  
  "one-hatirjheel": {
    company: "InnStar Ltd",
    construction: "Artificial Fair Face",
    buildingType: "Commercial",
    carParkingCount: 8,
    liftCount: "1 Passenger + 1 Car",
    ac: "VRF System",
    fireProtection: "Yes",
    fireDetection: "Yes",
    paSystem: "Yes",
    landValue: "$1.41M",
    constructionCost: "$0.53M",
    totalCost: "$1.94M",
    sellValue: "$5.3M",
    duration: "18 months",
    subContractors: 16,
    laborCount: "110+",
    timeSaved: "7%",
    glassInstalled: "Double Glazed Semi Unitized Curtain Wall",
    generator: "1 Nos 250 KVA Diesel",
    solar: "20 Panel 10KW",
    rooms: "Reception, Conference Room, Meeting Room, Open Terrace"
  },
  
  "concord-syed-tower": {
    company: "Concord Group",
    companyBuiltArea: "44,433 m²",
    companyProjectValue: "$44.53M",
    construction: "RCC, Fairface",
    buildingType: "Residential",
    carParkingCount: 78,
    liftCount: "3 Passenger",
    ac: "Individual",
    forceVentilation: "Yes",
    fireProtection: "Yes",
    fireDetection: "Yes",
    paSystem: "No",
    cctv: "Yes",
    accessControl: "Yes",
    pabx: "Yes",
    bms: "No",
    landValue: "$10.3M",
    constructionCost: "$4.23M",
    totalCost: "$14.53M",
    sellValue: "$17.6M",
    duration: "27 months",
    subContractors: 23,
    laborCount: "150+",
    glassInstalled: "Thai Aluminium",
    generator: "2 Nos 300KVA Diesel",
    transformer: "800 KVA",
    solar: "18 Panel 18 KW",
    rooms: "Double Height Drop off Reception, Waterbody, Gym, Swimming Pool, Basket Ball Ground"
  },
  
  "terminal-3": {
    company: "Concord Group",
    construction: "PARTIAL",
    buildingType: "Airport Terminal",
    duration: "30 months",
    subContractors: 7,
    laborCount: "1100+",
    timeSaved: "3%"
  },
  
  "nassa-diamond": {
    company: "Nassa Group",
    companyBuiltArea: "18,382 m²",
    companyProjectValue: "$45.19M",
    construction: "Steel Building",
    buildingType: "Commercial",
    carParkingCount: 82,
    liftCount: "3 Passenger",
    ac: "VRF System",
    forceVentilation: "Yes",
    fireProtection: "Yes",
    fireDetection: "Yes",
    paSystem: "Yes",
    cctv: "Yes",
    accessControl: "Yes",
    pabx: "Yes",
    bms: "Yes",
    landValue: "$17.2M",
    constructionCost: "$6.83M",
    totalCost: "$24.03M",
    sellValue: "$31.93M",
    duration: "40 months",
    subContractors: 29,
    laborCount: "110+",
    timeSaved: "8%",
    glassInstalled: "Triple Glazed Semi Unitized Fritted Glass",
    generator: "2 Nos 800KVA Diesel",
    avr: "3.8 KV-3",
    transformer: "1600 KVA",
    rmu: "DESCO RMU",
    bbt: "1000 Amp",
    solar: "12 Panel 9.5 KW",
    rooms: "Double Height Drop off Reception, Waterbody, Gym, Conference Room"
  },
  
  "nassa-heights": {
    company: "Nassa Group",
    construction: "Steel Building",
    buildingType: "Commercial",
    carParkingCount: 42,
    liftCount: "2 Passenger + 1 Car",
    ac: "VRF System",
    forceVentilation: "Yes",
    fireProtection: "Yes",
    fireDetection: "Yes",
    paSystem: "Yes",
    cctv: "Yes",
    accessControl: "Yes",
    pabx: "Yes",
    bms: "Yes",
    landValue: "$7.6M",
    constructionCost: "$2.74M",
    totalCost: "$10.34M",
    sellValue: "$13.26M",
    duration: "34 months",
    subContractors: 27,
    laborCount: "80+",
    timeSaved: "0%",
    glassInstalled: "Double Glazed Unitized System Curtain Wall (Fritted)",
    generator: "1 Nos 1000 KVA Diesel",
    transformer: "1600 KVA",
    rmu: "DESCO RMU",
    bbt: "1000 Amp",
    solar: "12 Panel 9.5 KW"
  },
  
  "sjibl-hq": {
    company: "Volumezero Ltd",
    companyBuiltArea: "16,400 m²",
    companyProjectValue: "$36.34M",
    construction: "RCC",
    buildingType: "Commercial",
    certified: "LEED GOLD",
    carParkingCount: 75,
    liftCount: "4 Passenger + 1 Fireman",
    ac: "Central Chiller",
    forceVentilation: "Yes",
    fireProtection: "Yes",
    fireDetection: "Yes",
    paSystem: "Yes",
    cctv: "Yes",
    accessControl: "Yes",
    pabx: "Yes",
    bms: "Yes",
    landValue: "$16.8M",
    constructionCost: "$5.72M",
    totalCost: "$22.52M",
    sellValue: "$30.5M",
    duration: "29 months",
    subContractors: 19,
    laborCount: "140+",
    timeSaved: "2%",
    glassInstalled: "Double Glazed Semi Unitized Curtain Wall",
    generator: "1 Nos 1200 KVA Diesel",
    avr: "3.2 KV-3",
    transformer: "1250 KVA",
    rmu: "DESCO RMU",
    bbt: "1200 Amp",
    solar: "16 Panel 12 KW",
    rooms: "Double Height Drop off Reception, Waterbody, Gym, Private Party Lounge, Swimming Pool, Helipad"
  },
  
  "simpletree-hashi": {
    company: "Volumezero Ltd",
    construction: "100% Fairface & Wood",
    buildingType: "Residential",
    carParkingCount: 24,
    liftCount: "2 Passenger",
    ac: "Individual",
    fireDetection: "Yes",
    paSystem: "Yes",
    cctv: "Yes",
    pabx: "Yes",
    landValue: "$3.53M",
    constructionCost: "$1.03M",
    totalCost: "$4.56M",
    sellValue: "$5.84M",
    duration: "15 months",
    subContractors: 28,
    laborCount: "90+",
    timeSaved: "8%",
    glassInstalled: "Thai Aluminium",
    generator: "1 Nos 200 KVA Diesel",
    transformer: "200 KVA",
    solar: "8 Panel 6 KW",
    rooms: "Reception, Conference Room, Gymnasium, Meeting Room"
  },
  
  "karims-icon": {
    company: "Welcast Properties",
    companyBuiltArea: "4,862 m²",
    companyProjectValue: "$6.32M",
    construction: "RCC",
    buildingType: "Commercial",
    carParkingCount: 14,
    liftCount: "2 Passenger",
    ac: "Individual",
    fireProtection: "Yes",
    fireDetection: "Yes",
    paSystem: "Yes",
    cctv: "Yes",
    accessControl: "Yes",
    pabx: "Yes",
    bms: "No",
    landValue: "$3.21M",
    constructionCost: "$1.38M",
    totalCost: "$4.59M",
    sellValue: "$6.32M",
    duration: "21 months",
    subContractors: 23,
    laborCount: "70+",
    timeSaved: "0%",
    glassInstalled: "Double Glazed Semi Unitized System",
    generator: "1 Nos 800 KVA Diesel",
    transformer: "630 KVA",
    solar: "7 Panel 3.5 KW",
    rooms: "Conference Room, Gymnasium"
  }
};
