export default function Button({ children }) {
  return (
    <button className="bg-[#EE6F4B] text-[#fff] rounded-md py-2.5 w-full hover:bg-[#e75d37]">
      {children}
    </button>
  );
}
