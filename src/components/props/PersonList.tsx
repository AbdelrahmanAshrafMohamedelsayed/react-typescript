import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[]; // array of objects
};
// to define array of objects you can do the following
// 1. type Name = {}
// 2. type PersonListProps = { names: Name[] }
// array of objects: {}[]
// when map no need to use type
export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
