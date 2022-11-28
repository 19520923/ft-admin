/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import { Icon, Menu } from "@mui/material";
import { useState } from "react";
import ActionItem from "examples/Items/ActionItem";

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

const UsersOverviewData = (users) => ({
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
});

export default UsersOverviewData;
