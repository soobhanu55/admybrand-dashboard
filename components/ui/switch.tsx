'use client';
import { useState } from 'react';

export function Switch({ onToggle }: { onToggle: (state: boolean) => void }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={enabled}
          onChange={() => {
            setEnabled(!enabled);
            onToggle(!enabled);
          }}
        />
        <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
            enabled ? 'translate-x-full' : ''
          }`}
        ></div>
      </div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-100">
        {enabled ? 'Dark' : 'Light'} Mode
      </span>
    </label>
  );
}
