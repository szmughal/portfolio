import React from 'react';
import { GlassCard } from './GlassCard';
import { cn } from '@/lib/utils';
import { Layers, Zap, Cpu, Globe, LucideIcon } from 'lucide-react';

export interface MetricCardProps {
  tag: string;
  value: string;
  targetNumber?: number;
  suffix?: string;
  label: string;
  description: string;
  iconName?: string;
  accentColor?: 'indigo' | 'cyan' | 'amber';
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  bolt: Zap,
  precision_manufacturing: Cpu,
  public: Globe,
};

export const MetricCard: React.FC<MetricCardProps> = ({
  tag,
  value,
  targetNumber,
  suffix = '',
  label,
  description,
  iconName = 'layers',
  accentColor = 'indigo',
  className,
}) => {
  const IconComponent = iconMap[iconName] || Layers;

  const colorStyles = {
    indigo: {
      text: 'text-slate-900',
      label: 'text-indigo-700',
      icon: 'text-indigo-600',
      borderHover: 'hover:border-indigo-400',
    },
    cyan: {
      text: 'text-cyan-700',
      label: 'text-slate-800',
      icon: 'text-cyan-600',
      borderHover: 'hover:border-cyan-400',
    },
    amber: {
      text: 'text-amber-600',
      label: 'text-slate-800',
      icon: 'text-amber-600',
      borderHover: 'hover:border-amber-400',
    },
  };

  const style = colorStyles[accentColor];

  return (
    <GlassCard
      hoverEffect
      className={cn(
        'p-6 flex flex-col justify-between transition-all duration-300',
        style.borderHover,
        className
      )}
    >
      <div className="flex items-center justify-between text-slate-500">
        <span className="font-mono text-[11px] uppercase tracking-wider font-semibold">
          {tag}
        </span>
        <IconComponent className={cn('w-5 h-5', style.icon)} />
      </div>

      <div className="py-4">
        <div
          className={cn(
            'text-[44px] font-bold tracking-tight font-mono leading-none counter-metric',
            style.text
          )}
          data-target={targetNumber}
        >
          {value}
        </div>
        <p className={cn('text-sm font-semibold mt-2 font-mono', style.label)}>{label}</p>
      </div>

      <p className="text-xs text-slate-600 border-t border-slate-100 pt-3 leading-relaxed">
        {description}
      </p>
    </GlassCard>
  );
};
