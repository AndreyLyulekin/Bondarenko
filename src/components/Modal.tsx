'use client';

import { useEffect, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ open, onClose, children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'white',
          padding: 24,
          borderRadius: 8,
          minWidth: 300,
        }}>
        {children}
      </div>
    </div>,
    document.body,
  );
}
