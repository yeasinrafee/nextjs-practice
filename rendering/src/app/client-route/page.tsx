'use client';

import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '../components/theme-provider';

export default function ClientRoutePage() {
  const theme = useTheme();
  return (
    <div className='image-slider-container'>
      <h1
        style={{
          color: theme.colors.primary,
        }}
      >
        Client Route
      </h1>
    </div>
  );
}
