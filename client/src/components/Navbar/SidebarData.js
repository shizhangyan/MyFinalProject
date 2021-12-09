import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FcIcons from "react-icons/fc";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Daily Plan",
        path: "/plan",
        icon: <IoIcons.IoIosPaper />,
        cName: "nav-text"
    },
    {
        title: "Recipes",
        path: "/recipe",
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text"
    },
    {
        title: "Cuisine",
        path: "/cuisine",
        icon: <IoIcons.IoMdPeople />,
        cName: "nav-text"
    },
    {
        title: "Profile",
        path: "/profile",
        icon: <AiIcons.AiFillProfile />,
        cName: "nav-text"
    },
    {
        title: "About",
        path: "/about",
        icon: <FcIcons.FcAbout />,
        cName: "nav-text"
    },
]