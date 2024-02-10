type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  let x = 10;
  let y: typeof x;
  // y type in this case is number
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};
