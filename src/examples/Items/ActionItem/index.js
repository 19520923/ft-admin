import { forwardRef } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// custom styles for the ActionItem
import { menuItem, menuImage } from "examples/Items/ActionItem/styles";

const ActionItem = forwardRef(({ color, image, title, date, icon, ...rest }, ref) => (
  <MenuItem {...rest} ref={ref} sx={(theme) => menuItem(theme)}>
    <Icon
      sx={{
        lineHeight: 1.2,
        mr: 1.5,
      }}
      size="36px"
      color={color}
      fontSize={"medium"}
    >
      {icon}
    </Icon>
    <SoftBox>
      <SoftTypography variant="button" textTransform="capitalize" fontWeight="regular">
        <strong>{title[0]}</strong> {title[1]}
      </SoftTypography>
      <SoftTypography
        variant="caption"
        color={color}
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 0.5,
        }}
      >
        <SoftTypography variant="button" color="secondary"></SoftTypography>
        {date}
      </SoftTypography>
    </SoftBox>
  </MenuItem>
));

// Setting default values for the props of ActionItem
ActionItem.defaultProps = {
  color: "dark",
};

// Typechecking props for the ActionItem
ActionItem.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  image: PropTypes.node.isRequired,
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ActionItem;
