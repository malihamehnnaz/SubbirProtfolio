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
