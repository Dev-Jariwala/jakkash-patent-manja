/* eslint-disable react/prop-types */
// src/components/Navbar.js
import { AiOutlineMenu } from "react-icons/ai";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/authProvider";
import ActiveCollectionSelect from "./components/ActiveCollectionSelect";

const Navbar = ({ toggleSidebar }) => {
  const { setToken } = useAuth();
  return (
    <div className=" tw-text-gray-800 tw-sticky tw-z-99 tw-bg-white tw-top-0 tw-left-0 tw-border-b tw-border-gray-200 tw-h-16 tw-flex tw-items-center tw-justify-between tw-px-4">
      <div className="tw-flex tw-items-center tw-space-x-3">
        <button onClick={toggleSidebar} className="tw-text-lg tw-font-semibold">
          <AiOutlineMenu />
        </button>
        <ActiveCollectionSelect />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setToken()}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
