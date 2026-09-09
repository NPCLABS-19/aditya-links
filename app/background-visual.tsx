'use client';

import { useEffect, useState } from 'react';

const backgrounds = [
  './backgrounds/visual-01.jpg',
  './backgrounds/visual-02.jpg',
  './backgrounds/visual-03.jpg',
  './backgrounds/visual-04.jpg',
  './backgrounds/visual-05.jpg',
  './backgrounds/visual-06.jpg',
  './backgrounds/visual-07.jpg',
  './backgrounds/visual-08.jpg',
  './backgrounds/visual-09.jpg',
];

const storageKey = 'aditya-links-background';

export function BackgroundVisual() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    let previousIndex = -1;

    try {
      const storedValue = window.sessionStorage.getItem(storageKey);
      if (storedValue !== null) {
        previousIndex = Number.parseInt(storedValue, 10);
      }
    } catch {
      previousIndex = -1;
    }

    const choices = backgrounds
      .map((_, index) => index)
      .filter((index) => index !== previousIndex);
    const nextIndex = choices[Math.floor(Math.random() * choices.length)] ?? 0;

    try {
      window.sessionStorage.setItem(storageKey, String(nextIndex));
    } catch {
      // The visual still rotates when browser storage is unavailable.
    }

    setActiveIndex(nextIndex);
  }, []);

  return (
    <div className="background-visual" aria-hidden="true">
      {activeIndex !== null ? (
        <img key={activeIndex} src={backgrounds[activeIndex]} alt="" />
      ) : null}
    </div>
  );
}
