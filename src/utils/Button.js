export default function Button({ children }) {
  return (
    <div className="rounded-lg">
      <button className="border-2 border-purple-900 bg-purple-500 text-white font-bold p-2 rounded-full shadow-lg w-60 h-12 text-xl mb-2 transition-transform transform-gpu hover:scale-110 animate-pulse hover:animate-none">
        {children}
      </button>
    </div>
  );
}
