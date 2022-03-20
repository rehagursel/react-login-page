import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const ctx = useContext(AuthContext)         //context hook

  return (
 /*    <AuthContext.Consumer>   //context consumer method
      {(ctx) => {
        return ( */
            <nav className={classes.nav}>
              <ul>
                {ctx.isLoggedIn && (
                  <li>
                    <a href="/">Users</a>
                  </li>
                )}
                {ctx.isLoggedIn && (
                  <li>
                    <a href="/">Admin</a>
                  </li>
                )}
                {ctx.isLoggedIn && (
                  <li>
                    <button onClick={props.onLogout}>Logout</button>
                  </li>
                )}
              </ul>
            </nav>
        /*  )
      }}
    </AuthContext.Consumer> */
  );
};

export default Navigation;
