'use client';

import React from 'react';
import { ToastProvider } from '../ui/Toast';
import { PageTransitionProvider } from './PageTransitionProvider';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <PageTransitionProvider>
        {children}
      </PageTransitionProvider>
    </ToastProvider>
  );
}
