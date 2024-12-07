import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaCartPlus } from "react-icons/fa6";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const tabs = [
    {
      link: "/",
      label: "Dashboard",
      icon: <TbLayoutDashboardFilled />,
      active: [""],
    },
    {
      link: "/products",
      label: "Products",
      icon: <FaCartPlus />,
      active: ["products"],
    },
  ];
  return (
    <>
      <div className="tw-flex">
        <Sidebar
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
          tabs={tabs}
          toggleSidebar={toggleSidebar}
        />
        <div className="tw-flex tw-flex-col tw-relative tw-w-full tw-h-[100dvh]">
          <Navbar toggleSidebar={toggleSidebar} />
          <main className=" tw-flex-1 tw-overflow-y-auto tw-h-[calc(100dvh-4rem)]">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
