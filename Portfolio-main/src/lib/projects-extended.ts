// Extended project data with comprehensive specifications from project spreadsheet
// This includes detailed technical, financial, and operational data for each project

// Company logo mapping
export const companyLogos: Record<string, string> = {
  "InnStar Ltd": "/logos/innstar.jpg",
  "Concord Group": "/logos/concord.png",
  "Nassa Group": "/logos/nassa.png",
  "Volumezero Ltd": "/logos/volumezero.png",
  "Welcast Properties": "/logos/welcast.png",
};

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
    companyBuiltArea: "46,593 m²",
    companyProjectValue: "$111.37M",
    construction: "100% As Cast RCC",
    buildingType: "Commercial",
    certified: "LEED Platinum",
    carParkingCount: 187,
    liftCount: "8 Passenger Lifts",
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
    sellValue: "$87.57M",
    duration: "43 months",
    subContractors: 42,
    laborCount: "400+",
    timeSaved: "7%",
    glassInstalled: "Double Glazed Curtain Wall (Unitized and Semi Unitized System)",
    generator: "4 Nos 800 KVA Diesel",
    avr: "6.35 KV-3",
    transformer: "3200 KVA",
    rmu: "DPDC RMU",
    bbt: "2500 Amp",
    solar: "60 Panel 30KW",
  },
  
  "itc-data-center": {
    company: "InnStar Ltd",
    companyBuiltArea: "10,806 m²",
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
    companyBuiltArea: "2,063 m²",
    construction: "Artificial Fair Face",
    buildingType: "Commercial",
    carParkingCount: 8,
    liftCount: "1 Passenger",
    ac: "VRF System",
    fireProtection: "Yes",
    fireDetection: "Yes",
    paSystem: "Yes",
    cctv: "Yes",
    landValue: "$1.41M",
    constructionCost: "$0.53M",
    sellValue: "$5.3M",
    duration: "18 months",
    subContractors: 16,
    laborCount: "110+",
    timeSaved: "7%",
    glassInstalled: "Double Glazed Semi Unitized Curtain Wall",
    generator: "1 Nos 350 KVA Diesel",
    solar: "20 Panel 10KW",
    rooms: "Reception, Conference Room, Meeting Room, Open Terrace"
  },
  
  "concord-syed-tower": {
    company: "Concord Group",
    companyBuiltArea: "10,000 m²",
    construction: "RCC, Fairface",
    buildingType: "Residential",
    carParkingCount: 78,
    liftCount: "3 Passenger",
    ac: "Individual",
    forceVentilation: "Yes",
    fireProtection: "Yes",
    fireDetection: "Yes",
    cctv: "Yes",
    accessControl: "Yes",
    pabx: "Yes",
    landValue: "$10.3M",
    constructionCost: "$4.23M",
    sellValue: "$17.6M",
    duration: "27 months",
    subContractors: 23,
    laborCount: "150+",
    timeSaved: "0%",
    glassInstalled: "Thai Aluminium",
    generator: "2 Nos 300KVA Diesel",
    transformer: "800 KVA",
    solar: "18 Panel 18 KW",
    rooms: "Double Height Drop off Reception, Waterbody, Gymnasium, Swimming Pool, Basketball Ground"
  },
  
  "hazrat-shahjalal-international-airport-terminal-3": {
    company: "Concord Group",
    companyBuiltArea: "34,433 m²",
    buildingType: "Airport Terminal (Supervision)",
    duration: "7 months",
    subContractors: 4,
    laborCount: "1100+",
    timeSaved: "3%"
  },
  
  "nassa-diamond": {
    company: "Nassa Group",
    companyBuiltArea: "12,082 m²",
    construction: "Steel Building",
    buildingType: "Commercial",
    carParkingCount: 82,
    liftCount: "4 Passenger",
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
    sellValue: "$31.93M",
    duration: "40 months",
    subContractors: 29,
    laborCount: "110+",
    timeSaved: "8%",
    glassInstalled: "Triple Glazed Semi Unitized Fritted Glass",
    generator: "2×800 KVA Diesel",
    avr: "3.8 KV-3",
    transformer: "1600 KVA",
    rmu: "DESCO RMU",
    bbt: "1000 Amp",
    solar: "12 Panel 9.5 KW",
    rooms: "Double Height Drop off Reception, Waterbody, Gymnasium, Conference Room"
  },
  
  "nassa-heights": {
    company: "Nassa Group",
    companyBuiltArea: "6,300 m²",
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
  
  "shahjalal-islami-bank-hq-building": {
    company: "Volumezero Ltd",
    companyBuiltArea: "13,277 m²",
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
    companyBuiltArea: "3,123 m²",
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
  },

  "pohela-boishakh": {
    company: "Signature11",
    companyBuiltArea: "7,000 m²",
    construction: "RCC, As-Cast",
    buildingType: "Residential (21 Luxury Appartment)",
    carParkingCount: 48,
    liftCount: "2 Passenger",
    ac: "Individual",
    forceVentilation: "Yes",
    fireProtection: "Yes",
    fireDetection: "Yes",
    cctv: "Yes",
    accessControl: "Yes",
    pabx: "Yes",
    landValue: "$0M",
    constructionCost: "$0M",
    sellValue: "$0M",
    duration: "0 months",
    subContractors: 0,
    laborCount: "0+",
    timeSaved: "0%",
    glassInstalled: "Thai Aluminium",
    generator: "1 Nos 400KVA Diesel",
    transformer: "400 KVA",
    solar: "12 Panel 12KW",
    rooms: "Reception, GYM, Prayer Room, Indoor Games, Meeting Room, Community Room, Roof Top BBQ room"
  },

  "gulzar-e-rahmat": {
    company: "Signature11",
    companyBuiltArea: "6,000 m²",
    construction: "RCC, As-Cast",
    buildingType: "Residential (16 Luxury Appartment)",
    carParkingCount: 36,
    liftCount: "2 Passenger",
    ac: "Individual",
    cctv: "Yes",
    accessControl: "Yes",
    pabx: "Yes",
    landValue: "$0M",
    constructionCost: "$0M",
    sellValue: "$0M",
    duration: "0 months",
    subContractors: 0,
    laborCount: "0+",
    timeSaved: "0%",
    glassInstalled: "Thai Aluminium",
    generator: "1 Nos 300KVA Diesel",
    transformer: "315 KVA",
    solar: "12 Panel 09KW",
    rooms: "Reception, GYM, Prayer Room, Indoor Games, Meeting Room, Community Room, Roof Top BBQ room"
  },

  "itc-tower": {
    company: "InnStar Ltd",
    companyBuiltArea: "10,806 m²",
    construction: "Partial As Cast RCC",
    buildingType: "Commercial",
    certified: "EDGE",
    carParkingCount: 55,
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
    glassInstalled: "Double Glazed Semi Unitized Curtain Wall",
    generator: "3 Nos 1000 KVA Diesel",
    transformer: "2500 KVA",
    rmu: "DPDC RMU",
    bbt: "2500 Amp",
    solar: "50 Panel 25KW",
    rooms: "BBQ party, Meeting Room, Conference Room, Community Club, Prayer Room, Indoor and Outdoor Games"
  }
};

