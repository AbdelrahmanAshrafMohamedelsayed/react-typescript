type StatusProps = {
  status: "loading" | "success" | "error"; // union of strings using | this is for define specific strings
  // you can only pass these strings
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully!";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return <h2>Status - {message}</h2>;
};
