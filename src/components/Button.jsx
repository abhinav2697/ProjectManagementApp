export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-cyan-900 text-stone-100 hover:bg-amber-600 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
}