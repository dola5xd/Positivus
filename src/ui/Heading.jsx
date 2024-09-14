function Heading({ children, className }) {
  return (
    <span
      className={`text-[2.5rem] before:rounded-xl w-full relative block before:left-0 font-bold before:absolute before:h-full before:-z-10 before:content-[''] before:bg-brand_1 before:w-full ${className}`}
    >
      {children}
    </span>
  );
}

export default Heading;
