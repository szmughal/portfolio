'use client';

import React from 'react';
import { metricsData } from '@/data/metrics';
import { MetricCard } from '@/components/ui/MetricCard';

export const MetricsSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" id="metrics">
      {metricsData.map((metric) => (
        <MetricCard
          key={metric.id}
          tag={metric.tag}
          value={metric.value}
          targetNumber={metric.targetNumber}
          suffix={metric.suffix}
          label={metric.label}
          description={metric.description}
          iconName={metric.icon}
          accentColor={metric.accentColor}
        />
      ))}
    </section>
  );
};
