import React, { useContext } from "react";
import LoginContext from "../contexts/loginContext";
type AuthenticatedProps = {
  children: React.ReactNode;
};
function Authenticated(props: AuthenticatedProps) {
  const { isLoggedIn } = useContext(LoginContext);
  return <div>{isLoggedIn ? props.children : null}</div>;
}
export default Authenticated;
