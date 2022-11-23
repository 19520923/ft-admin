/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import SoftButton from "components/SoftButton";
import { Icon, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import Fastfood from "@mui/icons-material/Fastfood";
import ActionItem from "examples/Items/ActionItem";
import { RootStore } from "store/RootStore";

const dataUser = [
  {
    id: 0,
    avatar: "https://i.pinimg.com/564x/62/23/7a/62237a0e77af85429217d5d5d0bb429f.jpg",
    fullname: "Dang Duy Bang",
    username: "bang-ftAdmin",
    email: "dangbang0001@gmail.com",
    status: true,
    created_at: "23/08/2021",
    is_active: false,
  },
  {
    id: 1,
    avatar: "https://i.pinimg.com/564x/67/6d/84/676d849e498d5fb2e9810c9a35daf20b.jpg",
    fullname: "Nguyen Nhut Tan",
    username: "tan-ngnAd",
    email: "tangnguyenn@gmail.com",
    status: false,
    created_at: "23/08/2021",
    is_active: true,
  },
  {
    id: 2,
    avatar: "https://i.pinimg.com/564x/7a/e4/d5/7ae4d5d54ae076e3525fd1868b36207d.jpg",
    fullname: "Thai Thuy Han Uyen",
    username: "gv-doan2",
    email: "uyentth@uit.edu.vn",
    status: true,
    created_at: "23/08/2021",
    is_active: false,
  },
];

const dataBlockedUser = [
  {
    id: 0,
    avatar: "https://i.pinimg.com/564x/94/c8/db/94c8db599cb8704119f34b26bc8ac078.jpg",
    fullname: "Hatake Kakashi",
    username: "kakashi-konoha",
    email: "shikaka@konoha.com",
    status: true,
    createdDate: "23/08/2021",
    isBlock: true,
  },
  {
    id: 1,
    avatar: "https://i.pinimg.com/564x/9e/e6/7b/9ee67b8cd08a08f8c83e76f696e8e35e.jpg",
    fullname: "Uzumaki Naruto",
    username: "ke-sieu-ngoc",
    email: "uzu_naruto@konoha.com",
    status: false,
    createdDate: "23/08/2021",
    isBlock: true,
  },
];

function Username({ avatar, fullname, username }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={avatar} alt={username} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {fullname}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {username}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Action({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const iconAction = "more_horiz";

function IconAction({ block }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isBlock, setIsBlock] = useState(block);

  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  const eventBlock = () => {
    if (isBlock === true) {
      setIsBlock(false);
    } else if (isBlock === false) {
      setIsBlock(true);
    }
  };

  const renderMenu = () => (
    <Menu
      Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <ActionItem
        icon="person"
        color="secondary"
        title={["View"]}
        date="View profile of this user."
        onClick={handleCloseMenu}
      />
      <ActionItem
        icon="chat"
        color="secondary"
        title={["Chat"]}
        date="Send messages to this user."
        onClick={handleCloseMenu}
      />
      {isBlock ? (
        <ActionItem
          icon="no_accounts"
          color="error"
          title={["Unblock"]}
          date="Unblock this user account."
          onClick={eventBlock}
        />
      ) : (
        <ActionItem
          icon="block"
          color="error"
          title={["Block"]}
          date="Block this user account."
          onClick={eventBlock}
        />
      )}

      {/* <SoftBox display="flex" flexDirection="column">
        <SoftButton variant="caption" fontWeight="medium" color='secondary'>
          <Icon sx={{ fontWeight: "bold" }} color={'secondary'} fontSize={'medium'}>person</Icon>
          {spaceJa}view
        </SoftButton>
        <SoftButton variant="caption" fontWeight="medium" color='secondary'>
          <Icon sx={{ fontWeight: "bold" }} color={'secondary'} fontSize={'medium'}>chat</Icon>
          {spaceJa}chat
        </SoftButton>
        <SoftButton variant="caption" fontWeight="medium" color='error' onClick={eventBlock}>
          {
            isBlock ?
              <>
                <Icon sx={{ fontWeight: "bold" }} color={'error'} fontSize={'medium'}>no_accounts</Icon>
                {spaceJa}unblock
              </>
              :
              <>
                <Icon sx={{ fontWeight: "bold" }} color={'error'} fontSize={'medium'}>block</Icon>
                {spaceJa}block
              </>
          }
        </SoftButton>
      </SoftBox> */}
    </Menu>
  );

  return (
    <SoftBox display={{ xs: "none", lg: "inline-block" }}>
      <Icon
        sx={{ fontWeight: "bold" }}
        color={"secondary"}
        fontSize={"medium"}
        onClick={handleOpenMenu}
      >
        {iconAction}
      </Icon>
      {renderMenu()}
    </SoftBox>
  );
}

const authorsTableData = (users) => ({
  columns: [
    { name: "username", align: "left" },
    { name: "email", align: "left" },
    { name: "status", align: "center" },
    { name: "created", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: users.all.rows.map((user) => ({
    username: <Username avatar={user.avatar_url} fullname={user.name} username={user.username} />,
    email: (
      <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        {user.email}
      </SoftTypography>
    ),
    status: user.is_current ? (
      <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
    ) : (
      <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
    ),
    created: (
      <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        {user.created_at}
      </SoftTypography>
    ),
    action: <IconAction block={user.is_current} />,
  })),

  rowsBlock: dataBlockedUser.map((user) => ({
    username: <Username avatar={user.avatar} fullname={user.fullname} username={user.username} />,
    email: (
      <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        {user.email}
      </SoftTypography>
    ),
    status: user.status ? (
      <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
    ) : (
      <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
    ),
    created: (
      <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        {user.createdDate}
      </SoftTypography>
    ),
    action: <IconAction block={user.isBlock} />,
  })),

  // rows: [
  //   {
  //     author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
  //     about: (
  //       <SoftTypography variant="caption" color="secondary" fontWeight="medium">
  //         I want to share food
  //       </SoftTypography>
  //     ),
  //     status: (
  //       <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
  //     ),
  //     created: (
  //       <SoftTypography variant="caption" color="secondary" fontWeight="medium">
  //         23/04/18
  //       </SoftTypography>
  //     ),
  //     action: (
  //       <IconAction />
  //     ),
  //   },
  //   {
  //     author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
  //     about: (
  //       <SoftTypography variant="caption" color="secondary" fontWeight="medium">
  //         I want to share food
  //       </SoftTypography>
  //     ),
  //     status: (
  //       <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
  //     ),
  //     created: (
  //       <SoftTypography variant="caption" color="secondary" fontWeight="medium">
  //         11/01/19
  //       </SoftTypography>
  //     ),
  //     action: (
  //       <IconAction />
  //     ),
  //   },
  //   {
  //     author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
  //     about: (
  //       <SoftTypography variant="caption" color="secondary" fontWeight="medium">

  //       </SoftTypography>
  //     ),
  //     status: (
  //       <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
  //     ),
  //     created: (
  //       <SoftTypography variant="caption" color="secondary" fontWeight="medium">
  //         19/09/17
  //       </SoftTypography>
  //     ),
  //     action: (
  //       <IconAction />
  //     ),
  //   },
  //   {
  //     author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
  //     about: (
  //       <SoftTypography variant="caption" color="secondary" fontWeight="medium">
  //         I want to share food
  //       </SoftTypography>
  //     ),
  //     status: (
  //       <SoftBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
  //     ),
  //     created: (
  //       <SoftTypography variant="caption" color="secondary" fontWeight="medium">
  //         24/12/08
  //       </SoftTypography>
  //     ),
  //     action: (
  //       <IconAction />
  //     ),
  //   },
  //   {
  //     author: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
  //     about: (
  //       <SoftTypography variant="caption" color="secondary" fontWeight="medium">
  //         I want to share food
  //       </SoftTypography>
  //     ),
  //     status: (
  //       <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
  //     ),
  //     created: (
  //       <SoftTypography variant="caption" color="secondary" fontWeight="medium">
  //         04/10/21
  //       </SoftTypography>
  //     ),
  //     action: (
  //       <IconAction />
  //     ),
  //   },
  //   {
  //     author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
  //     about: (
  //       <SoftTypography variant="caption" color="secondary" fontWeight="medium">
  //         I want to share food
  //       </SoftTypography>
  //     ),
  //     status: (
  //       <SoftBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
  //     ),
  //     created: (
  //       <SoftTypography variant="caption" color="secondary" fontWeight="medium">
  //         14/09/20
  //       </SoftTypography>
  //     ),
  //     action: (
  //       <IconAction />
  //     ),
  //   },
  // ],
});

export default authorsTableData;
