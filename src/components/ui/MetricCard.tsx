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
  accentColor?: 'cobalt' | 'emerald' | 'slate';
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
  label,
  description,
  iconName = 'layers',
  accentColor = 'cobalt',
  className,
}) => {
  const IconComponent = iconMap[iconName] || Layers;

  const colorStyles = {
    cobalt: {
      topBar: 'bg-[#0369A1]',
      value: 'text-[#0369A1]',
      label: 'text-[#0F172A]',
      icon: 'text-[#0369A1]',
    },
    emerald: {
      topBar: 'bg-[#059669]',
      value: 'text-[#059669]',
      label: 'text-[#0F172A]',
      icon: 'text-[#059669]',
    },
    slate: {
      topBar: 'bg-[#0F172A]',
      value: 'text-[#0F172A]',
      label: 'text-[#0F172A]',
      icon: 'text-[#475569]',
    },
  };

  const style = colorStyles[accentColor];

  return (
    <GlassCard
      hoverEffect
      className={cn(
        'relative overflow-hidden p-6 flex flex-col justify-between transition-all duration-200',
        className
      )}
    >
      <div className={cn('absolute inset-x-0 top-0 h-[2px]', style.topBar)} aria-hidden="true" />

      <div className="flex items-center justify-between text-[#475569]">
        <span className="font-mono text-[11px] uppercase tracking-wider font-semibold">
          {tag}
        </span>
        <IconComponent className={cn('w-4 h-4 shrink-0', style.icon)} aria-hidden="true" />
      </div>

      <div className="py-5">
        <div
          className={cn(
            'text-4xl sm:text-[44px] font-bold tracking-tight font-mono tabular-nums leading-none counter-metric',
            style.value
          )}
          data-target={targetNumber}
        >
          {value}
        </div>
        <p className={cn('font-headline text-base font-semibold mt-2.5', style.label)}>
          {label}
        </p>
      </div>

      <p className="text-xs sm:text-[13px] text-[#475569] border-t border-slate-100 pt-3 leading-relaxed">
        {description}
      </p>
    </GlassCard>
  );
};
