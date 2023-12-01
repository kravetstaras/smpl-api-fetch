import cn from 'classnames';

export default function ActionButton({
  icon,
  label,
  onClick,
  className,
  type = 'button',
  active,
}: {
  icon?: string;
  label?: string;
  onClick: () => void;
  className?: string;
  type?: 'button' | 'submit';
  active?: boolean;
}): JSX.Element {
  return (
    <button
      className={cn(
        'rounded-[28px] p-[5px]',
        active ? 'bg-blue-300' : 'bg-white border-[2px] border-blue-300',
        className,
      )}
      onClick={onClick}
      type={type}
    >
      {label}
      <img src={icon} alt="sort icon" className="w-[20px] h-[20px]" />
    </button>
  );
}
