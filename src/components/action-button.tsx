import cn from 'classnames';

export default function ActionButton({
  icon,
  label,
  onClick,
  className,
  type = 'button',
  active,
}: {
  icon: string;
  label: string;
  onClick: () => void;
  className: string;
  type: 'button' | 'submit';
  active: boolean;
}): JSX.Element {
  return (
    <button
      className={cn(
        'text-[16px] leading-[22px] l:text-[18px] font-[600] l:leading-[28px] uppercase rounded-[28px]',
        active
          ? 'bg-blue fill-white'
          : 'bg-white text-blue border-[2px] border-blue',
        className,
      )}
      onClick={onClick}
      type={type}
    >
      {label}
      <img src={icon} alt="sort icon" />
    </button>
  );
}
