'use client';

import React from 'react';
import { useTheme } from '../components/theme-provider';
import { clientSideFunction } from '@/utils/clients-utils';

export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFunction();
  return (
    <div className='image-slider-container'>
      <h1
        style={{
          color: theme.colors.primary,
        }}
      >
        Client Route
        <h2>{result}</h2>
      </h1>
    </div>
  );
}
