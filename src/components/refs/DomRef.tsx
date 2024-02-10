import { useRef, useEffect } from "react";

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);
  // useRef(null) => this will return only null type
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
