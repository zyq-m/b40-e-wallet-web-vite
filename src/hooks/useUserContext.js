import { useContext } from "react";
import UserContext from "../contex/UserContext";

export default function useUserContext() {
  const { user, setUser } = useContext(UserContext);
  return { user, setUser };
}
