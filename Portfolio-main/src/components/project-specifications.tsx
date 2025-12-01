/**
 * Example component showing how to display extended project data
 * This can be integrated into the project detail page
 */

import { extendedProjectData } from '@/lib/projects-extended';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectSpecificationsProps {
  projectSlug: string;
}

export function ProjectSpecifications({ projectSlug }: ProjectSpecificationsProps) {
  const data = extendedProjectData[projectSlug];
  
  if (!data) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Financial Overview */}
      {(data.companyProjectValue || data.totalCost || data.sellValue) && (
        <Card>
          <CardHeader>
            <CardTitle>Financial Overview</CardTitle>
            <CardDescription>Project cost and value breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.companyProjectValue && (
                <div>
                  <p className="text-sm text-muted-foreground">Project Value</p>
                  <p className="text-2xl font-bold">{data.companyProjectValue}</p>
                </div>
              )}
              {data.constructionCost && (
                <div>
                  <p className="text-sm text-muted-foreground">Construction Cost</p>
                  <p className="text-2xl font-bold">{data.constructionCost}</p>
                </div>
              )}
              {data.totalCost && (
                <div>
                  <p className="text-sm text-muted-foreground">Total Cost</p>
                  <p className="text-2xl font-bold">{data.totalCost}</p>
                </div>
              )}
              {data.sellValue && (
                <div>
                  <p className="text-sm text-muted-foreground">Sell Value</p>
                  <p className="text-2xl font-bold">{data.sellValue}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Technical Specifications */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Specifications</CardTitle>
          <CardDescription>Building systems and infrastructure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.construction && (
              <div>
                <p className="text-sm text-muted-foreground">Construction Type</p>
                <p className="font-medium">{data.construction}</p>
              </div>
            )}
            {data.certified && (
              <div>
                <p className="text-sm text-muted-foreground">Certification</p>
                <Badge variant="secondary">{data.certified}</Badge>
              </div>
            )}
            {data.liftCount && (
              <div>
                <p className="text-sm text-muted-foreground">Lifts</p>
                <p className="font-medium">{data.liftCount}</p>
              </div>
            )}
            {data.ac && (
              <div>
                <p className="text-sm text-muted-foreground">AC System</p>
                <p className="font-medium">{data.ac}</p>
              </div>
            )}
            {data.carParkingCount && (
              <div>
                <p className="text-sm text-muted-foreground">Parking</p>
                <p className="font-medium">{data.carParkingCount} Cars</p>
              </div>
            )}
            {data.glassInstalled && (
              <div className="md:col-span-2">
                <p className="text-sm text-muted-foreground">Glass/Curtain Wall</p>
                <p className="font-medium">{data.glassInstalled}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Infrastructure & Power */}
      {(data.generator || data.transformer || data.solar) && (
        <Card>
          <CardHeader>
            <CardTitle>Infrastructure & Power</CardTitle>
            <CardDescription>Electrical and energy systems</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.generator && (
                <div>
                  <p className="text-sm text-muted-foreground">Generator</p>
                  <p className="font-medium">{data.generator}</p>
                </div>
              )}
              {data.transformer && (
                <div>
                  <p className="text-sm text-muted-foreground">Transformer</p>
                  <p className="font-medium">{data.transformer}</p>
                </div>
              )}
              {data.solar && (
                <div>
                  <p className="text-sm text-muted-foreground">Solar Power</p>
                  <p className="font-medium">{data.solar}</p>
                </div>
              )}
              {data.avr && (
                <div>
                  <p className="text-sm text-muted-foreground">AVR</p>
                  <p className="font-medium">{data.avr}</p>
                </div>
              )}
              {data.bbt && (
                <div>
                  <p className="text-sm text-muted-foreground">BBT</p>
                  <p className="font-medium">{data.bbt}</p>
                </div>
              )}
              {data.rmu && (
                <div>
                  <p className="text-sm text-muted-foreground">RMU</p>
                  <p className="font-medium">{data.rmu}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Safety & Systems */}
      <Card>
        <CardHeader>
          <CardTitle>Safety & Building Systems</CardTitle>
          <CardDescription>Security and life safety features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {data.fireProtection === 'Yes' && <Badge>Fire Protection</Badge>}
            {data.fireDetection === 'Yes' && <Badge>Fire Detection</Badge>}
            {data.bms === 'Yes' && <Badge>BMS</Badge>}
            {data.cctv === 'Yes' && <Badge>CCTV</Badge>}
            {data.accessControl === 'Yes' && <Badge>Access Control</Badge>}
            {data.paSystem === 'Yes' && <Badge>PA System</Badge>}
            {data.pabx === 'Yes' && <Badge>PABX</Badge>}
            {data.forceVentilation === 'Yes' && <Badge>Force Ventilation</Badge>}
          </div>
        </CardContent>
      </Card>

      {/* Project Management */}
      {(data.duration || data.subContractors || data.laborCount) && (
        <Card>
          <CardHeader>
            <CardTitle>Project Management</CardTitle>
            <CardDescription>Timeline and workforce</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.duration && (
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="text-xl font-bold">{data.duration}</p>
                </div>
              )}
              {data.subContractors && (
                <div>
                  <p className="text-sm text-muted-foreground">Subcontractors</p>
                  <p className="text-xl font-bold">{data.subContractors}</p>
                </div>
              )}
              {data.laborCount && (
                <div>
                  <p className="text-sm text-muted-foreground">Labor Force</p>
                  <p className="text-xl font-bold">{data.laborCount}</p>
                </div>
              )}
              {data.timeSaved && data.timeSaved !== '0%' && (
                <div>
                  <p className="text-sm text-muted-foreground">Time Saved</p>
                  <p className="text-xl font-bold text-green-600">{data.timeSaved}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Amenities */}
      {data.rooms && (
        <Card>
          <CardHeader>
            <CardTitle>Amenities & Features</CardTitle>
            <CardDescription>Building facilities and special features</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">{data.rooms}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
