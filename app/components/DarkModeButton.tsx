'use client';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

type Props = {};

const DarkModeButton = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <SunIcon
          onClick={() => setTheme('light')}
          className='h-8 w-8 cursor-pointer text-yellow-500'
        />
      ) : (
        <MoonIcon
          onClick={() => setTheme('dark')}
          className='h-8 w-8 cursor-pointer text-gray-500'
        />
      )}
    </div>
  );
};

export default DarkModeButton;
