interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  className,
  children,
  type,
  disabled,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      className='outline-none pt-1 pl-1 button-animation'>
      <div
        className={`px-4 py-2 relative font-semibold text-lg border-2 border-black rounded ${className}`}>
        {children}
      </div>
    </button>
  );
}
