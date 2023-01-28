// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";

export default function TopUsersData(users) {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <SoftAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `{borderWidth[2]} solid {white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "users", align: "left" },
      { name: "followers", align: "center" },
      { name: "interaction", align: "center" },
    ],

    rows: users.map((user) => ({
      users: [user.avatar_url, user.name],
      followers: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          {user.follower.length}
        </SoftTypography>
      ),
      interaction: (
        <SoftBox width="8rem" textAlign="left">
          <SoftProgress value={100} color="success" variant="gradient" label={false} />
        </SoftBox>
      ),
    })),
  };
}
