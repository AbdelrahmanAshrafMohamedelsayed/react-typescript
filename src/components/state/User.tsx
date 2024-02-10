import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  // if we know that the type of the user is always AuthUser then we can use the type assertion
  // const [user, setUser] = useState<AuthUser>({} as AuthUser);
  // you know better than the TS
  // here we can access the user.name and user.email without the optional chaining ?
  const handleLogin = () => {
    setUser({
      name: "Vishwas",
      email: "vishwas@example.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
    </div>
  );
};
