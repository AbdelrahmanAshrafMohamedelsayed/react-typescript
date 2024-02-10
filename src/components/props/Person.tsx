import { PersonProps } from "./Person.types";
type PersonProp = {
  name: {
    // pass the object
    first: string;
    last: string;
  };
};
export const Person = (props: PersonProp) => {
  return (
    <h2>
      {props.name.first} {props.name.last}
    </h2>
  );
};
