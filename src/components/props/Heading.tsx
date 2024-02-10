// children prop
type HeadingProps = {
  children: string;
};
// take string as children
export const Heading = (props: HeadingProps) => {
  return <h2>{props.children}</h2>;
};
