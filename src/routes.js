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
import SignIn from "layouts/authentication/sign-in";

// Soft UI Dashboard React icons
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PeopleIcon from "@mui/icons-material/People";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Document from "examples/Icons/Document";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  DashboardPage,
  UsersOverviewPage,
  UsersReportedPage,
  UsersBlockedPage,
  PostOverviewPage,
  PostReportedPage,
  PostBlockedPage,
  FoodOverviewPage,
  FoodReportedPage,
  FoodBlockedPage,
  ChatPage,
  SettingsPage,
  FeedbackPage,
} from "pages";

const routes = [
  /* 
    Dashboard Drawer 
  */
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <ShowChartIcon />,
    component: <DashboardPage />,
    noCollapse: true,
  },
  /* 
   User Drawer 
 */
  {
    type: "collapse",
    name: "Users",
    key: "users",
    route: "/users/overview",
    icon: <PeopleIcon />,
    component: <UsersOverviewPage />,
    noCollapse: true,
    collapse: [
      {
        name: "Overview",
        key: "users-overview",
        route: "/users/overview",
        component: <UsersOverviewPage />,
      },
      {
        name: "Reported",
        key: "users-reported",
        route: "/users/reported",
        component: <UsersReportedPage />,
      },
      {
        name: "Blocked",
        key: "users-blocked",
        route: "/users/blocked",
        component: <UsersBlockedPage />,
      },
    ],
  },
  /* 
   Post Drawer 
 */
  {
    type: "collapse",
    name: "Posts",
    key: "posts",
    route: "/posts/overview",
    icon: <NewspaperIcon />,
    component: <PostOverviewPage />,
    noCollapse: true,
    collapse: [
      {
        name: "Overview",
        key: "posts-overview",
        route: "/posts/overview",
        component: <PostOverviewPage />,
      },
      {
        name: "Reported",
        key: "posts-reported",
        route: "/posts/reported",
        component: <PostReportedPage />,
      },
      {
        name: "Blocked",
        key: "posts-blocked",
        route: "/posts/blocked",
        component: <PostBlockedPage />,
      },
    ],
  },
  /* 
   Food Drawer 
 */
  {
    type: "collapse",
    name: "Foods",
    key: "foods",
    route: "/foods/overview",
    icon: <FastfoodIcon />,
    component: <FoodOverviewPage />,
    noCollapse: true,
    collapse: [
      {
        name: "Overview",
        key: "foods-overview",
        route: "/foods/overview",
        component: <FoodOverviewPage />,
      },
      {
        name: "Reported",
        key: "foods-reported",
        route: "/foods/reported",
        component: <FoodReportedPage />,
      },
      {
        name: "Blocked",
        key: "foods-blocked",
        route: "/foods/blocked",
        component: <FoodBlockedPage />,
      },
    ],
  },
  /* 
    Chat Drawer 
  */
  {
    type: "collapse",
    name: "Chats",
    key: "chats",
    route: "/chats",
    icon: <QuestionAnswerIcon />,
    component: <ChatPage />,
    noCollapse: true,
  },
  /* 
    Feedback Drawer 
  */
  {
    type: "collapse",
    name: "Feedbacks",
    key: "feedbacks",
    route: "/feedbacks",
    icon: <Document size="16px" />,
    component: <FeedbackPage />,
    noCollapse: true,
  },

  // {
  //   type: "collapse",
  //   name: "Virtual Reality",
  //   key: "virtual-reality",
  //   route: "/virtual-reality",
  //   icon: <Cube size="12px" />,
  //   component: <VirtualReality />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   route: "/profile",
  //   icon: (
  //     <SoftAvatar src={burceMars} alt="profile-image" variant="rounded" size="sm" shadow="sm" />
  //   ),
  //   component: <Profile />,
  //   noCollapse: true,
  // },

  { type: "title", title: "Account Pages", key: "account-pages" },

  /* 
   Setting Drawer 
 */
  {
    type: "collapse",
    name: "Settings",
    key: "settings",
    route: "/settings",
    icon: <SettingsIcon />,
    component: <SettingsPage />,
    noCollapse: true,
  },
  /* 
  LogOut Drawer 
*/
  {
    type: "collapse",
    name: "Log Out",
    key: "log-out",
    route: "/authentication/sign-in",
    icon: <LogoutIcon />,
    component: <SignIn />,
    noCollapse: true,
    noShowDrawer: true,
  },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   route: "/authentication/sign-up",
  //   icon: <SpaceShip size="12px" />,
  //   component: <SignUp />,
  //   noCollapse: true,
  // },
];

export default routes;
