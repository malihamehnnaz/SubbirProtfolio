"use client";

import {
  BarChart3, PieChart, TrendingUp, Layers, Car, Ruler, CheckCircle2,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  ChartTooltip,
  ChartLegend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  CategoryScale,
  LinearScale,
  BarElement,
);

const Doughnut = dynamic(() => import('react-chartjs-2').then(m => m.Doughnut), { ssr: false });
const Radar = dynamic(() => import('react-chartjs-2').then(m => m.Radar), { ssr: false });

export default function ProjectCharts({ project }: { project: any }) {
  const area = parseFloat(project.area?.replace(/[^0-9.]/g, '') || '0') || 50;
  const floors = parseFloat(project.floors?.replace(/[^0-9.]/g, '') || '0') || 1;
  const parking = parseFloat(project.parking?.replace(/[^0-9.]/g, '') || '0') || 1;
  const features = project.features ?? [];

  return (
    <div className="space-y-6">
      {/* Quick KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Floors */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-4 rounded-xl border border-orange-200 dark:border-orange-800/40 hover:shadow-lg transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-orange-500 dark:bg-orange-600 rounded-lg group-hover:scale-110 transition-transform">
              <Layers className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <p className="text-xs font-medium text-orange-700 dark:text-orange-300">Floors</p>
          </div>
          <p className="text-lg font-bold text-orange-900 dark:text-orange-100">{floors || 10}</p>
        </div>

        {/* Parking */}
        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 p-4 rounded-xl border border-cyan-200 dark:border-cyan-800/40 hover:shadow-lg transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-cyan-500 dark:bg-cyan-600 rounded-lg group-hover:scale-110 transition-transform">
              <Car className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <p className="text-xs font-medium text-cyan-700 dark:text-cyan-300">Parking</p>
          </div>
          <p className="text-lg font-bold text-cyan-900 dark:text-cyan-100">{parking || 15}</p>
        </div>

        {/* Area */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800/40 hover:shadow-lg transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-purple-500 dark:bg-purple-600 rounded-lg group-hover:scale-110 transition-transform">
              <Ruler className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <p className="text-xs font-medium text-purple-700 dark:text-purple-300">Area</p>
          </div>
          <p className="text-lg font-bold text-purple-900 dark:text-purple-100">{Math.round(area).toLocaleString()} sqft</p>
        </div>

        {/* Features */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-xl border border-green-200 dark:border-green-800/40 hover:shadow-lg transition-all group">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-green-500 dark:bg-green-600 rounded-lg group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <p className="text-xs font-medium text-green-700 dark:text-green-300">Features</p>
          </div>
          <p className="text-lg font-bold text-green-900 dark:text-green-100">{features.length || 0}</p>
        </div>
      </div>
    </div>
  );
}
