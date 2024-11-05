'use client';

import { ReactNode } from "react";
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes';

interface Props {
    children: ReactNode;
}

const ThemeToggle = ({children} : Props) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div suppressHydrationWarning>
      <button suppressHydrationWarning onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>{children}</button>
    </div>
  );
};

export default ThemeToggle;
