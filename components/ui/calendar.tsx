'use client';
import { format } from 'date-fns';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function Calendar({ onChange }: { onChange: (date: Date) => void }) {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date: Date) => {
    setStartDate(date);
    onChange(date);
  };

  return (
    <div className="p-2">
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        className="border rounded p-2 w-full"
      />
    </div>
  );
}
