// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";

export const photo = [
    "https://i.pinimg.com/564x/67/6d/84/676d849e498d5fb2e9810c9a35daf20b.jpg",
    "https://i.pinimg.com/564x/62/23/7a/62237a0e77af85429217d5d5d0bb429f.jpg",
    "https://i.pinimg.com/564x/7a/e4/d5/7ae4d5d54ae076e3525fd1868b36207d.jpg",
    "https://i.pinimg.com/564x/67/6d/84/676d849e498d5fb2e9810c9a35daf20b.jpg",
    "https://i.pinimg.com/564x/67/6d/84/676d849e498d5fb2e9810c9a35daf20b.jpg",
    "https://i.pinimg.com/564x/67/6d/84/676d849e498d5fb2e9810c9a35daf20b.jpg"
]

export default function TopUsersData() {
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

    rows: [
      {
        users: [photo[0], "Dang Duy Bang"],
        followers: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            14,000
          </SoftTypography>
        ),
        interaction: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={100} color="success" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        users: [photo[1], "Nguyen Nhut Tan"],
        followers: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            3,000
          </SoftTypography>
        ),
        interaction: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={100} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        users: [photo[2], "Duong Trung Nguyen"],
        followers: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            300
          </SoftTypography>
        ),
        interaction: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={100} color="success" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        users: [photo[3], "Nguyen Minh Thai"],
        followers: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            20,500
          </SoftTypography>
        ),
        interaction: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={100} color="success" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
      {
        users: [photo[4], "Leonel Messi"],
        followers: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            500
          </SoftTypography>
        ),
        interaction: (
          <SoftBox width="8rem" textAlign="left">
            <SoftProgress value={100} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
      },
    ],
  };
}
