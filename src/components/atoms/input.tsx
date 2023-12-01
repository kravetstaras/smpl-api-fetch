export default function Input({
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
  return <input></input>;
}
