/**
 * Utility to merge extended project data with base project information
 */

import { extendedProjectData, type ExtendedProjectData } from './projects-extended';

/**
 * Generate slug from project title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Get extended data for a project by title or slug
 */
export function getExtendedProjectData(titleOrSlug: string): ExtendedProjectData | undefined {
  // Try direct lookup first
  if (extendedProjectData[titleOrSlug]) {
    return extendedProjectData[titleOrSlug];
  }
  
  // Try generating slug from title
  const slug = generateSlug(titleOrSlug);
  return extendedProjectData[slug];
}

/**
 * Format currency value
 */
export function formatCurrency(value?: string): string {
  if (!value) return 'N/A';
  return value;
}

/**
 * Format percentage
 */
export function formatPercentage(value?: string): string {
  if (!value || value === '0%') return 'N/A';
  return value;
}

/**
 * Get all projects with their extended data
 */
export function getAllProjectsWithExtendedData() {
  return Object.entries(extendedProjectData).map(([slug, data]) => ({
    slug,
    ...data
  }));
}

/**
 * Get projects by company
 */
export function getProjectsByCompany(company: string) {
  return Object.entries(extendedProjectData)
    .filter(([_, data]) => data.company === company)
    .map(([slug, data]) => ({ slug, ...data }));
}

/**
 * Get projects by certification
 */
export function getProjectsByCertification(certification: string) {
  return Object.entries(extendedProjectData)
    .filter(([_, data]) => data.certified === certification)
    .map(([slug, data]) => ({ slug, ...data }));
}

/**
 * Get total project value for all projects
 */
export function getTotalProjectValue(): number {
  return Object.values(extendedProjectData)
    .reduce((total, data) => {
      if (!data.companyProjectValue) return total;
      const value = parseFloat(data.companyProjectValue.replace(/[$M,]/g, ''));
      return total + (isNaN(value) ? 0 : value);
    }, 0);
}

/**
 * Get total built area for all projects
 */
export function getTotalBuiltArea(): string {
  let totalSqm = 0;
  Object.values(extendedProjectData).forEach(data => {
    if (!data.companyBuiltArea) return;
    const match = data.companyBuiltArea.match(/[\d,]+/);
    if (match) {
      const value = parseFloat(match[0].replace(/,/g, ''));
      if (!isNaN(value)) totalSqm += value;
    }
  });
  return `${totalSqm.toLocaleString()} m²`;
}

/**
 * Get project statistics
 */
export function getProjectStatistics() {
  const projects = Object.values(extendedProjectData);
  
  return {
    totalProjects: projects.length,
    totalValue: getTotalProjectValue(),
    totalBuiltArea: getTotalBuiltArea(),
    averageTimeSaved: (
      projects
        .filter(p => p.timeSaved && p.timeSaved !== '0%')
        .reduce((sum, p) => sum + parseFloat(p.timeSaved!.replace('%', '')), 0) /
      projects.filter(p => p.timeSaved && p.timeSaved !== '0%').length
    ).toFixed(1) + '%',
    certifiedProjects: projects.filter(p => p.certified).length,
    companies: [...new Set(projects.map(p => p.company).filter(Boolean))],
    certifications: [...new Set(projects.map(p => p.certified).filter(Boolean))]
  };
}

/**
 * Get sustainability features summary
 */
export function getSustainabilityFeatures() {
  const projects = Object.values(extendedProjectData);
  
  const solarProjects = projects.filter(p => p.solar).length;
  const totalSolarPanels = projects.reduce((sum, p) => {
    if (!p.solar) return sum;
    const match = p.solar.match(/(\d+)\s*Panel/i);
    return sum + (match ? parseInt(match[1]) : 0);
  }, 0);
  
  const totalSolarCapacity = projects.reduce((sum, p) => {
    if (!p.solar) return sum;
    const match = p.solar.match(/(\d+(?:\.\d+)?)\s*KW/i);
    return sum + (match ? parseFloat(match[1]) : 0);
  }, 0);
  
  return {
    solarProjects,
    totalSolarPanels,
    totalSolarCapacity: `${totalSolarCapacity}KW`,
    leedProjects: projects.filter(p => p.certified?.includes('LEED')).length,
    edgeProjects: projects.filter(p => p.certified === 'EDGE').length,
    fireProtection: projects.filter(p => p.fireProtection === 'Yes').length,
    bmsProjects: projects.filter(p => p.bms === 'Yes').length
  };
}
