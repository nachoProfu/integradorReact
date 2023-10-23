import { createContext, useContext } from "react";

const ScrollContext = createContext();

export const useScroll = () => {
  return useContext(ScrollContext);
};

export default ScrollContext;
