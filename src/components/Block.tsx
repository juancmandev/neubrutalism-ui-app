interface BlockProps {
  children: React.ReactNode;
  className?: string;
}

export default function Block({ children, className }: BlockProps) {
  return (
    <div
      className={`w-10 h-10 p-2 flex justify-center items-center text-lg font-bold border-2 border-black shadow ${className}`}>
      {children}
    </div>
  );
}
