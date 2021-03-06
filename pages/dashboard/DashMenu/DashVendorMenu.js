import {
  BellIcon,
  LogoutIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useFirebase from "../../../src/Authenticaion/hooks/useFirebase";
import { useRouter } from "next/router";
import {
  FaToggleOn,
  FaHome,
  FaPlusSquare,
  FaUserCircle,
  FaElementor,
} from "react-icons/fa";

// BiToggleRight
const DashVendorMenu = () => {
  const router = useRouter();
  // const path = router.asPath;
  const [isActive, setActive] = useState("false");
  const [isAActive, setAActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  // for mobile device
  const handleMenu = () => {
    setAActive(!isAActive);
  };

  const user = useSelector((state) => state.states.user);
  const { logOut } = useFirebase();
  const [control, setControl] = useState(false);
  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    setLoading(true);
    setControl(true);
    axios.get("/api/users").then((response) => {
      setUsers(response.data);
      setLoading(false);
    });
  }, [control, user?.email]);

  const email = user?.email;
  const userNow = users.filter((user) => user.email === email)[0];

  const vendorMenu = [
    {
      menuId: 1,
      menuName: "Add Product",
      pageLink: "/dashboard/admin/add-product",
      icons: <FaPlusSquare />,
    },
    {
      menuId: 2,
      menuName: "Your Profile",
      pageLink: "/dashboard/admin/user-profile",
      icons: <FaUserCircle />,
    },
  ];

  return (
    <div>
      <style jsx>
        {`
          ::-webkit-scrollbar {
            width: 1px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: darkcyan;
          }
        `}
      </style>

      {/* top bar */}
      <div
        id="top-bar"
        className="h-20 z-10 bg-white shadow-sm pr-8 lg:pl-80 pl-8 fixed w-full top-0 left-0 flex items-center"
      >
        {/* menu button */}
        <div
          id="hambarg"
          onClick={handleToggle}
          className="w-8 cursor-pointer lg:hidden"
        >
          <MenuIcon className="primary-color" />
        </div>
        {/* toggole button for sidebar */}
        <div className="mr-4 hidden lg:table border rounded">
          <FaToggleOn className="w-6 cursor-pointer primary-color hover:text-green-600" />
        </div>
        <div className="relative hidden lg:flex flex-col">
          <h1 className="font-semibold text-lg">Analytics</h1>
          <h1 className="text-sm">
            Welcome Back <span className="capitalize">{userNow?.role}</span> !
          </h1>
        </div>
        <div className="ml-auto lg:flex hidden items-center">
          <div className="ml-4 relative flex  items-center flex-row gap-4">
            <div className="w-8 h-8 rounded-full border">
              <img
                className="rounded-full"
                src={user?.photoURL}
                alt="profile image"
              />
            </div>
            <h1 className="font-medium uppercase">{userNow?.name}</h1>
          </div>
        </div>
      </div>

      {/* side bar */}
      <div
        id="side-bar"
        className={`${
          isActive ? "hidden md:block" : "active"
        } fixed flex flex-col left-0 top-0 w-72 h-full bg-gray-200 shadow-sm z-10 transition-all`}
      >
        <div className="relative text-dark font-bold text-xl uppercase text-left py-6 bg-gray-200 border-b-4 border-white">
          <h1 className="primary-color ml-6 flex items-center gap-4">
            <FaElementor />
            <Link href="/">
              <a href="">
                food<span className="text-orange-400">Mart</span>
              </a>
            </Link>
          </h1>
          <XIcon
            onClick={handleToggle}
            id="sideBar-close"
            className="absolute block lg:hidden w-6 right-3 top-5 cursor-pointer"
          />
        </div>
        <div className="flex overflow-y-auto h-full flex-col justify-between flex-grow">
          <div className="py-5">
            <Link href="/dashboard/dashboard">
              <a
                className={`flex gap-4 items-center my-1 px-6 py-3 hover:text-white border-l-4 border-transparent transition ${
                  router.asPath == "/dashboard/dashboard"
                    ? "primary-bg-color border-orange-500 text-white"
                    : "text-black"
                } hover:border-orange-500 hover:bg-lime-700`}
              >
                <FaHome /> <span>Home</span>
              </a>
            </Link>
            {vendorMenu?.map((menu) => (
              <div key={menu.menuId}>
                <Link href={`${menu.pageLink}`}>
                  <a
                    className={`flex gap-4 items-center my-1 px-6 py-3  hover:text-white border-l-4 hover:border-orange-500 ${
                      router.asPath == menu.pageLink
                        ? "primary-bg-color border-orange-500 text-white "
                        : "text-black"
                    } hover:bg-lime-700`}
                  >
                    {menu.icons} <span>{menu.menuName}</span>
                  </a>
                </Link>
              </div>
            ))}

            {/* for mobile device */}
            <a
              onClick={logOut}
              className="flex gap-4 items-center my-1 px-6 py-3 text-dark hover:text-white border-l-4 border-transparent transition hover:border-orange-500 hover:bg-lime-700 cursor-pointer"
            >
              <LogoutIcon className="w-5" />
              Logout
            </a>
          </div>
          <div className="lg:hidden block">
            {/* seach box for mobile device */}
            <div className="relative mx-5 mb-5">
              <SearchIcon className="absolute left-2 top-2 w-6 primary-color" />
              <input
                type="text"
                className="block pl-11 pr-2 w-full border-none rounded-3xl focus:outline-none focus:ring-green-500 py-2 bg-gray-300 text-base text-dark"
                placeholder="Search for products"
              />
            </div>
            {/* user profile for mobil device */}
            <div className="border-t border-gray-400 flex items-center py-4 px-5">
              <div
                onClick={handleMenu}
                className="relative cursor-pointer mr-4"
              >
                <UserCircleIcon className="h-8 w-8 primary-color rounded-full" />
                <div
                  className={`absolute ${
                    isAActive ? "hidden" : ""
                  } ml-10 rounded shadow-lg w-48 bottom-0 bg-white`}
                >
                  <div className="px-4 py-2 text-xs text-gray-400">
                    Manage Account
                  </div>
                  <a
                    href="#"
                    className="block px-4 text-sm leading-5 py-2 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 text-sm leading-5 py-2 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Settings
                  </a>
                </div>
              </div>
              {/* <a href="#" className="text-dark text-md capitalize">
                                Admin
                            </a> */}
              <div className="ml-auto">
                <BellIcon className="w-6 cursor-pointer primary-color hover:text-gray-900" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main content */}
      {/* <div id="main-content" className="pt-24 pr-8 pl-8 lg:pl-80">
                    <h1 className="text-3xl text-gray-700 font-bold">
                        Welcome to Dashboard
                    </h1>
                </div> */}
    </div>
  );
};

export default DashVendorMenu;
