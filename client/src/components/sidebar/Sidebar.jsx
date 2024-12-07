import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/* eslint-disable react/prop-types */
const Sidebar = ({ isOpen, setIsOpen, toggleSidebar, tabs = [] }) => {
  const sidebarRef = useRef();
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        window.innerWidth < 1024 &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);
  return (
    <>
      <div
        className={`tw-bg-gray-800 tw-absolute lg:tw-static tw-h-[100dvh] tw-z-[40] tw-transition-width tw-duration-300 tw-text-white tw-flex tw-flex-col ${
          isOpen ? "tw-w-64" : "lg:tw-w-20 tw-w-0"
        }`}
        ref={sidebarRef}
      >
        <div
          className={`tw-h-16 tw-py-5  ${
            isOpen ? "tw-flex" : "tw-hidden lg:tw-flex"
          } tw-items-center tw-justify-between tw-px-5 tw-bg-gray-900`}
        >
          <div
            className={`tw-flex tw-items-center tw-animate-fade tw-animate-duration-300 ${
              isOpen ? "tw-justify-start tw-space-x-5" : "tw-justify-center"
            }`}
          >
            <span className="tw-text-3xl">
              <Avatar>
                <AvatarImage
                  src={`${import.meta.env.VITE_BACKEND_URL}imgs/logo.png`}
                />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </span>
            <span
              className={`${
                isOpen ? "tw-block" : "tw-hidden"
              } tw-text-2xl tw-animate-fade tw-animate-duration-300`}
            >
              Jakkash
            </span>
          </div>
          <div
            onClick={toggleSidebar}
            className={`${
              isOpen ? "tw-block lg:tw-hidden" : "tw-hidden"
            } tw-text-2xl tw-cursor-pointer tw-animate-fade tw-animate-duration-400`}
          >
            <IoClose />
          </div>
        </div>
        <nav
          className={`${
            isOpen ? "tw-flex" : "tw-hidden lg:tw-flex"
          } tw-flex-col tw-p-4 tw-space-y-2`}
        >
          {tabs.map((tab) => (
            <Link
              key={tab.link}
              to={tab.link}
              className={`tw-py-2 tw-flex tw-items-center tw-justify-between tw-px-3 tw-cursor-pointer hover:tw-bg-gray-700 tw-rounded ${
                tab?.active?.includes(path) &&
                "tw-bg-blue-500 hover:tw-bg-blue-600"
              } `}
            >
              <div
                className={`tw-flex tw-items-center tw-animate-fade tw-animate-duration-300 ${
                  isOpen ? "tw-justify-start tw-space-x-5" : "tw-justify-center"
                }`}
              >
                <span className="tw-text-2xl">{tab.icon}</span>
                <span
                  className={`${
                    isOpen ? "tw-block" : "tw-hidden"
                  }  tw-animate-fade tw-animate-duration-300`}
                >
                  {tab.label}
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
