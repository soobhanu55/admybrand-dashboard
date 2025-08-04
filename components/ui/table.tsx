import { useState } from 'react';

export function DataTable({ data }: { data: any[] }) {
  const [search, setSearch] = useState('');

  const filtered = data.filter(item =>
    JSON.stringify(item).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="overflow-x-auto">
      <input
        type="text"
        placeholder="Search..."
        className="mb-4 p-2 border rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="min-w-full bg-white dark:bg-gray-900 text-sm">
        <thead>
          <tr>
            {Object.keys(data[0] || {}).map((key) => (
              <th key={key} className="text-left p-2 border-b">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filtered.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-100 dark:hover:bg-gray-800">
              {Object.values(row).map((val, i) => (
                <td key={i} className="p-2 border-b">
                  {val as string}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
