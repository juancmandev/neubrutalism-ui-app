interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function Button({ className, children }: ButtonProps) {
  return (
    <button className='w-max outline-none pt-1 pl-1 button-animation'>
      <div
        className={`px-4 py-2 relative font-semibold text-lg border-2 border-black rounded ${className}`}>
        {children}
      </div>
    </button>
  );
}
