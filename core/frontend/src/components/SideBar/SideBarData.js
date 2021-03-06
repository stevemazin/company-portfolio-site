import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import React from "react";

export const SidebarData = [
  {
    title: "Home",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "About",
        path: "/overview",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Contact Us",
        path: "/overview",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Login",
    path: "/login",
  },
  {
    title: "Shop",
    path: "/shop",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Products",
        path: "/products",
        icons: <FaIcons.FaCartPlus />,
      },
      {
        title: "Orders",
        path: "/overview",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },

  {
    title: "Partners",
    path: "/partners",
    icons: <FaIcons.FaCartPlus />,
  },
  {
    title: "Blog",
    path: "/blog",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
    subNav: [
      {
        title: "Latest Posts",
        path: "/latest-posts",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Popular Posts",
        path: "/popular-posts",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
