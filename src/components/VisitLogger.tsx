'use client';

import { useEffect } from 'react';

export function VisitLogger() {
  useEffect(() => {
    fetch('/api/visit', {
      method: 'POST',
      keepalive: true,
      cache: 'no-store',
    }).catch((error) => {
      console.error('Failed to register visit:', error);
    });
  }, []);

  return null;
}
