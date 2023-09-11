import NavBar from "./NavBar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen grid place-items-center grid-rows-[max-content_1fr] bg-[#FFF7D9] bg-2">
      <NavBar />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
