/**
 * Example component showing how to display extended project data
 * This can be integrated into the project detail page
 */

import { extendedProjectData } from '@/lib/projects-extended';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Sun, 
  Battery, 
  Plug, 
  BatteryCharging, 
  Gauge,
  Frame,
  Building2,
  Shield,
  Video,
  Lock,
  Bell,
  Phone,
  Activity,
  Wind,
  Flame,
  Users,
  Timer,
  TrendingUp
} from 'lucide-react';

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
      {(data.landValue || data.constructionCost || data.sellValue) && (
        <Card>
          <CardHeader>
            <CardTitle>Financial Overview</CardTitle>
                     </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.landValue && (
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Land Value</p>
                    <p className="text-lg font-bold">{data.landValue}</p>
                  </div>
                </div>
              )}
              {data.constructionCost && (
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg">
                    <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Construction Cost</p>
                    <p className="text-lg font-bold">{data.constructionCost}</p>
                  </div>
                </div>
              )}
              {data.sellValue && (
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Sell Value</p>
                    <p className="text-lg font-bold">{data.sellValue}</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Project Management */}
      {(data.duration || data.subContractors || data.laborCount) && (
        <Card>
          <CardHeader>
            <CardTitle>Project Management</CardTitle>
                    </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.duration && (
                <div className="flex items-start gap-3">
                  <Timer className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="text-xl font-bold">{data.duration}</p>
                  </div>
                </div>
              )}
              {data.subContractors && (
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-purple-500 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Subcontractors</p>
                    <p className="text-xl font-bold">{data.subContractors}</p>
                  </div>
                </div>
              )}
              {data.laborCount && (
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Labor Force</p>
                    <p className="text-xl font-bold">{data.laborCount}</p>
                  </div>
                </div>
              )}
              {data.timeSaved && data.timeSaved !== '0%' && (
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Time Saved</p>
                    <p className="text-xl font-bold text-green-600">{data.timeSaved}</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Infrastructure & Power */}
      {(data.generator || data.transformer || data.solar) && (
        <Card>
          <CardHeader>
            <CardTitle>Infrastructure & Power Systems</CardTitle>
               </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.glassInstalled && (
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Frame className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Glass/Curtain Wall</p>
                    <p className="font-semibold text-sm">{data.glassInstalled}</p>
                  </div>
                </div>
              )}
              {data.generator && (
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Zap className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Generator</p>
                    <p className="font-semibold text-sm">{data.generator}</p>
                  </div>
                </div>
              )}
              {data.avr && (
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Gauge className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">AVR (Voltage Regulator)</p>
                    <p className="font-semibold text-sm">{data.avr}</p>
                  </div>
                </div>
              )}
              {data.transformer && (
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Plug className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Transformer</p>
                    <p className="font-semibold text-sm">{data.transformer}</p>
                  </div>
                </div>
              )}
              {data.rmu && (
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <BatteryCharging className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">RMU (Ring Main Unit)</p>
                    <p className="font-semibold text-sm">{data.rmu}</p>
                  </div>
                </div>
              )}
              {data.bbt && (
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Battery className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">BBT (Bus Bar Trunking)</p>
                    <p className="font-semibold text-sm">{data.bbt}</p>
                  </div>
                </div>
              )}
              {data.solar && (
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Sun className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Solar Power</p>
                    <p className="font-semibold text-sm">{data.solar}</p>
                  </div>
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
              </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {data.fireProtection === 'Yes' && (
              <Badge variant="secondary" className="flex items-center gap-2 justify-center py-2">
                <Flame className="w-4 h-4" />
                Fire Protection
              </Badge>
            )}
            {data.fireDetection === 'Yes' && (
              <Badge variant="secondary" className="flex items-center gap-2 justify-center py-2">
                <Bell className="w-4 h-4" />
                Fire Detection
              </Badge>
            )}
            {data.bms === 'Yes' && (
              <Badge variant="secondary" className="flex items-center gap-2 justify-center py-2">
                <Activity className="w-4 h-4" />
                BMS
              </Badge>
            )}
            {data.cctv === 'Yes' && (
              <Badge variant="secondary" className="flex items-center gap-2 justify-center py-2">
                <Video className="w-4 h-4" />
                CCTV
              </Badge>
            )}
            {data.accessControl === 'Yes' && (
              <Badge variant="secondary" className="flex items-center gap-2 justify-center py-2">
                <Lock className="w-4 h-4" />
                Access Control
              </Badge>
            )}
            {data.paSystem === 'Yes' && (
              <Badge variant="secondary" className="flex items-center gap-2 justify-center py-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                PA System
              </Badge>
            )}
            {data.pabx === 'Yes' && (
              <Badge variant="secondary" className="flex items-center gap-2 justify-center py-2">
                <Phone className="w-4 h-4" />
                PABX
              </Badge>
            )}
            {data.forceVentilation === 'Yes' && (
              <Badge variant="secondary" className="flex items-center gap-2 justify-center py-2">
                <Wind className="w-4 h-4" />
                Force Ventilation
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
