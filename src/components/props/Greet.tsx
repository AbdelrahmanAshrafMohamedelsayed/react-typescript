type GreetProps = {
  // always the props are objects
  name: string; // required props.name : type
  messageCount?: number; // optional with ?
  isLoggedIn: boolean; // required
};
// always use type
export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props; // when try to destructure the optional props 0 is the default value
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Hey {props.name}! You have {messageCount} unread messages
        </h2>
      ) : (
        <h2>Welcome Guest</h2>
      )}
    </div>
  );
};
