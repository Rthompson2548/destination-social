/** createContext(): 
 * designed to share data that can be considered “global” for a tree 
 * of React components, such as the current authenticated user, theme, 
 * or preferred language 
 */
import { createContext } from "react";

/** createContext(defaultValue, method(s)) */
export const userContext = createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {}
});