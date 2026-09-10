import { useMemo, useState } from "react";
import { UserContext } from "./UserContextValue";
import userData from "../data/userData";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(userData);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
