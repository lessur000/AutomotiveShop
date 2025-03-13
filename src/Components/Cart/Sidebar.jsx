
import { SidebarContext } from "./Context/SidebarContext";
import useSidebar from "./Hooks/useSidebar";
import PropTypes from "prop-types"; // Import PropTypes

const SidebarProvider = ({ children }) => {
 const sidebar = useSidebar()
  return (
    <SidebarContext.Provider value={sidebar}>
      {children}
    </SidebarContext.Provider>
  );
};
SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarProvider;
