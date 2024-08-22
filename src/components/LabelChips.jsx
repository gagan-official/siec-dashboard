export default function LabelChips({ className, children, ...props }) {
  return (
    <div
      className={`cursor-pointer hover:opacity-85 text-xs text-center text-[--color] min-w-20 font-semibold rounded-full px-3 py-[0.35rem] bg-[--chipsBg] ${className ?? ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
