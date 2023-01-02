/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";
import { Icon, Menu } from "@mui/material";
import { useState } from "react";
import ActionItem from "examples/Items/ActionItem";
import { Link } from "react-router-dom";
import { RootStore } from "store/RootStore";

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

function IconAction({ param, block }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isBlock, setIsBlock] = useState(block);
  const { users: { all: { getUserById } } } = RootStore

  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  const eventBlock = () => {
    if (!isBlock) {
      setIsBlock(true)
      getUserById(param.profile._id).blockUser()
    } else {
      setIsBlock(false)
      getUserById(param.profile._id).activeUser()
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
      <Link
        to={"/users/profile-user/"}
        state={param.toJSON()}
      >
        <ActionItem
          icon="person"
          color="secondary"
          title={["View"]}
          date="View profile of this user."
          onClick={handleCloseMenu}
        />
      </Link>
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

const UsersData = (data) => ({
  columns: [
    { name: "username", align: "left" },
    { name: "email", align: "left" },
    { name: "status", align: "center" },
    { name: "created", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: data.rows.map((user) => ({
    username: <Username avatar={user.profile.avatar_url} fullname={user.profile.name} username={user.profile.username} />,
    email: (
      <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        {user.profile.email}
      </SoftTypography>
    ),
    status: !user.profile.is_active ? (
      <SoftBadge variant="gradient" badgeContent="blocked" color="error" size="xs" container />
    ) : user.profile.num_report > 0 ? (
      <SoftBadge variant="gradient" badgeContent="reported" color="warning" size="xs" container />
    ) : (
      <SoftBadge variant="gradient" badgeContent="active" color="success" size="xs" container />
    ),
    created: (
      <SoftTypography variant="caption" color="secondary" fontWeight="medium">
        {user.profile.created_at.substring(0, 10)}
      </SoftTypography>
    ),
    action: <IconAction param={user} block={!user.profile.is_active} />,
  })),
});

export default UsersData;
