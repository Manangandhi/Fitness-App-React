import Header from "../Header/Header";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
// import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";

const Layout = ({ children, title }) => {
  return (
    <>
      {/* <NavigationSidebar /> */}
      {/* <div className="main"> */}
      <Header />
      <NavigationSidebar />
      {/* {title && <PageTitle title={title} />} */}
      <div className="main">{children}</div>
    </>
  );
};

export default Layout;
