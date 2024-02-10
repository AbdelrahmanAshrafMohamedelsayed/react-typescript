type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  // if it does not return anything then use void
  // if it doesn't accept any argument then use ()
  // ()=>void
};
// event type for button click
export const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
  );
};
