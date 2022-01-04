import Header from "../Header/Header";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
// import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";

const Layout = ({ children, title }) => {
  return (
    <>
      <Header />
      <NavigationSidebar />
      <div className="main">{children}</div>
    </>
  );
};

export default Layout;
