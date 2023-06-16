interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 font-semibold text-lg border-2 border-black shadow-sm rounded ${className}`}>
      {children}
    </button>
  );
}
