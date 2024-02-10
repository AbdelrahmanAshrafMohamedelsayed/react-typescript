type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends { id: number }>({
  // <T extends { }> work for any type
  // <T extends { id: number }> work for object with id
  // <T extends { id: number, name: string }> work for object with id and name
  // <T extends string> work for string
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.id}
          </div>
        );
      })}
    </div>
  );
};
