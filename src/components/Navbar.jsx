import React from "react";
import Logo from '../assets/SpeedLoc (2).png'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  HomeIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
TruckIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";

// profile menu component
const profileMenuItems = [
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 "
          >
            <Avatar
                variant="circular"
                size="sm"
                alt="tania andrew"
                className="border border-gray-900 p-0.5"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
                <MenuItem
                    key={label}
                    onClick={closeMenu}
                    className={`flex items-center gap-0 rounded ${
                        isLastItem
                            ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                            : ""
                    }`}
                >
                  {React.createElement(icon, {
                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                    strokeWidth: 2,
                  })}
                  <Typography
                      as="span"
                      variant="small"
                      className="font-normal"
                      color={isLastItem ? "red" : "inherit"}
                  >
                    {label}
                  </Typography>
                </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
  );
}

// nav list menu




// nav list component
const navListItems = [
  {
    label: "Home",
    icon: HomeIcon,
    route: "/"
  },
  {
    label: "Track",
    icon: TruckIcon,
    route: "track"
  },
  {
    label: "Settings",
    icon: Cog6ToothIcon,
    route: "settings"
  },
];

function NavList() {
  return (

      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        {navListItems.map(({ label, icon, route}, key) => (
            <Typography
                key={label}
                as="a"
                href="#"
                variant="small"
                color="gray"
                className="font-medium text-blue-gray-500"
            >
           <Link to={route}>

             <MenuItem className="flex items-center gap-2 lg:rounded-full">
               {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
               <span className="text-gray-900"> {label}</span>
             </MenuItem>
           </Link>
            </Typography>
        ))}
      </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);



  return (
      <div className="px-5 py-3  shadow" >
        <div className=" w-full gap-5  place-items-center justify-between flex text-blue-gray-900">
 
<img src={Logo} className="w-28" />
        <div className="flex flex-row gap-5">  
          <NavList />

<ProfileMenu /></div>
        </div>
</div>
   
  );
}