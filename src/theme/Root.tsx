import React from 'react';
// import GlobalHeader from '../components/GlobalHeader';

interface Props {
  children: React.ReactNode;
}

// Default implementation, that you can customize
export default function Root({ children }: Props) {
  return (
    <>
      {/* Not including GlobalHeader until icons are fixed */}
      {/* <GlobalHeader /> */}
      {children}
    </>
  );
}
