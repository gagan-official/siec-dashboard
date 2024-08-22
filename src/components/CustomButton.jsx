export default function CustomButton({ className, children, ...props }) {
  return (
    <button className={`hover:opacity-85 text-center text-xs px-3 py-2 bg-[--color] text-[--bg] font-medium rounded-[3px] ${className ?? ""}`} {...props}>
      {children}
    </button>
  );
}
