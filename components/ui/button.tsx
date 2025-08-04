import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={classNames(
        'bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow',
        className
      )}
      {...props}
    />
  );
}
