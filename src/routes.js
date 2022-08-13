/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Users from "layouts/users";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

//avatar
import SoftAvatar from "components/SoftAvatar";
import burceMars from "assets/images/bruce-mars.jpg";

// Soft UI Dashboard React icons
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PeopleIcon from "@mui/icons-material/People";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import Cube from "examples/Icons/Cube";
import Post from "layouts/post";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <ShowChartIcon />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Users",
    key: "users",
    route: "/users/overview",
    icon: <PeopleIcon />,
    component: <Users />,
    noCollapse: true,
    collapse: [
      {
        name: "Overview",
        key: "users-overview",
        route: "/users/overview",
        component: <Users />,
      },
      {
        name: "Reported",
        key: "users-reported",
        route: "/users/reported",
        component: <Users />,
      },
      {
        name: "Blocked",
        key: "users-blocked",
        route: "/users/blocked",
        component: <Users />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Posts",
    key: "posts",
    route: "/posts/overview",
    icon: <NewspaperIcon />,
    component: <Post />,
    noCollapse: true,
    collapse: [
      {
        name: "Overview",
        key: "posts-overview",
        route: "/posts/overview",
        component: <Post />,
      },
      {
        name: "Reported",
        key: "posts-reported",
        route: "/posts/reported",
        component: <Post />,
      },
      {
        name: "Blocked",
        key: "posts-blocked",
        route: "/posts/blocked",
        component: <Post />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Foods",
    key: "foods",
    route: "/foods/overview",
    icon: <FastfoodIcon />,
    component: <Post />,
    noCollapse: true,
    collapse: [
      {
        name: "Overview",
        key: "foods-overview",
        route: "/foods/overview",
        component: <Post />,
      },
      {
        name: "Reported",
        key: "foods-reported",
        route: "/foods/reported",
        component: <Post />,
      },
      {
        name: "Blocked",
        key: "foods-blocked",
        route: "/foods/blocked",
        component: <Post />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Virtual Reality",
    key: "virtual-reality",
    route: "/virtual-reality",
    icon: <Cube size="12px" />,
    component: <VirtualReality />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "RTL",
    key: "rtl",
    route: "/rtl",
    icon: <Settings size="12px" />,
    component: <RTL />,
    noCollapse: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: (
      <SoftAvatar src={burceMars} alt="profile-image" variant="rounded" size="sm" shadow="sm" />
    ),
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
];

export default routes;
