type OscarProps = {
  children: React.ReactNode; // jsx element
};
// take jsx element as children
export const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};
