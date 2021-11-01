import React, { Children, FC, ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
}

const Dropdown: FC<Props> = ({ children }) => {
  const firstChild = Children.toArray(children)[0];
  const contentChidl = Children.toArray(children)[1];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div className="relative" ref={wrapperRef}>
      <div className="select-none" onClick={handleClick}>
        {firstChild}
      </div>
      <div
        className={`absolute top-full right-0 z-50 bg-white shadow-md rounded-md mt-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {contentChidl}
      </div>
    </div>
  );
};

export default Dropdown;
