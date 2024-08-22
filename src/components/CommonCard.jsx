export default function CommonCard({ className, children, ...props }) {
  return (
    <div
      className={`card shadow-lg bg-[--bg] rounded-[--roundedCommon] ${className ?? ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
