'use client';

import { serverSideFunction } from '@/utils/server-utils';

export default function ClientRoutePage() {
  console.log('Client route rendered.');
  const result = serverSideFunction();
  return (
    <div>
      <h1>ClientRoutePage</h1>
      <p>{result}</p>
    </div>
  );
}
