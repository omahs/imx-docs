import React from 'react';

interface Props {
  children: React.ReactNode;
}

// Default implementation, that you can customize
export default function Root({ children }: Props) {
  return children;
}
