import React from 'react';
import GlobalHeader from '../components/GlobalHeader';

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <>
      <GlobalHeader />
      {children}
    </>
  );
}
