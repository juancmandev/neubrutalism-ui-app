interface BlockProps {
  children: React.ReactNode;
  className?: string;
}

export default function Block({ children, className }: BlockProps) {
  return (
    <span
      className={`p-4 flex justify-center items-center font-bold border-2 border-black shadow ${className}`}>
      {children}
    </span>
  );
}
