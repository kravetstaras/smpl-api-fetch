import { ChangeEvent } from 'react';
import cn from 'classnames';

export default function Input({
  label,
  className,
  value,
  onChange,
}: {
  label?: string;
  className?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element {
  return (
    <input
      name="search-user"
      placeholder={label}
      onChange={onChange}
      value={value}
      className={cn(
        'border-[2px] border-blue-300 rounded-[26px] px-[20px] bg-white',
        className,
      )}
    />
  );
}
