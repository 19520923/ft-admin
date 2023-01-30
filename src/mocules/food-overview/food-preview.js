import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import ActionItem from "examples/Items/ActionItem";
import { Grid, Menu } from "@mui/material";
import { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import IconButton from "@mui/material/IconButton";
import SoftAvatar from "components/SoftAvatar";
import { RootStore } from "store/RootStore";
import noimage from "../../assets/images/no-image.png";
import { observer } from "mobx-react-lite";
import SoftBadge from "components/SoftBadge";

function FoodPreview({
  blockFood,
  unblockFood,
  detailFood,
  avatar_url,
  name,
  user,
  rate,
  time,
  photo,
  is_active,
}) {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);
  const { setSelectedFood } = RootStore;

  const handleViewPost = () => {
    setSelectedFood(detailFood.toJSON());
    console.log("view Food in store: ", detailFood.toJSON());
  };

  const [isActive, setIsActive] = useState(is_active);

  const eventBlockFood = () => {
    setIsActive(false);
    blockFood();
  };

  const eventUnblockFood = () => {
    setIsActive(true);
    unblockFood();
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
        icon="description"
        color="View"
        title={["View"]}
        date="View detail food."
        onClick={handleViewPost}
      />
      {!isActive ? (
        <ActionItem
          icon="restore_from_trash"
          color="error"
          title={["Unblock"]}
          date="Unblock this food from block list."
          onClick={eventUnblockFood}
        />
      ) : (
        <ActionItem
          icon="delete"
          color="error"
          title={["Block"]}
          date="Block this food from community."
          onClick={eventBlockFood}
        />
      )}
    </Menu>
  );

  return (
    <SoftBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor="grey-100"
      borderRadius="lg"
      pl={2}
      pr={2}
      pt={2}
      pb={2}
      mt={2}
    >
      <SoftBox width="100%" display="flex" flexDirection="column">
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={1}
        >
          <SoftBox display="flex">
            <IconButton
              size="small"
              color="inherit"
              //onClick={handleConfiguratorOpen}
            >
              <SoftAvatar
                src={avatar_url}
                alt="profile-image"
                variant="rounded"
                size="m"
                shadow="sm"
              />
            </IconButton>
            <SoftBox display="flex" flexDirection={{ sm: "column" }}>
              <SoftTypography
                ml={1}
                variant="button"
                fontWeight="medium"
                textTransform="capitalize"
              >
                {detailFood.author.name}
              </SoftTypography>
              <SoftTypography ml={1} variant="caption" color="text">
                {detailFood.author.username}
              </SoftTypography>
              <SoftBox ml={0.5} display="flex" alignItems="center">
                <Icon color="primary" fontSize="small">
                  star
                </Icon>
                <SoftTypography
                  ml={0.25}
                  mt={0.25}
                  variant="caption"
                  fontWeight="medium"
                  color="primary"
                >
                  {rate}
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          </SoftBox>

          <SoftBox
            display="flex"
            alignItems="center"
            mt={{ xs: 2, sm: 0 }}
            ml={{ xs: -1.5, sm: 0 }}
          >
            <SoftBox mr={1}>
              <SoftButton variant="text" color="secondary">
                {/* <Icon>subtitles_off</Icon>&nbsp;hide */}
              </SoftButton>
            </SoftBox>
            {!is_active ? (
              <SoftBadge
                variant="gradient"
                badgeContent="blocked"
                color="error"
                size="xs"
                container
              />
            ) : detailFood.num_report > 0 ? (
              <SoftBadge
                variant="gradient"
                badgeContent="reported"
                color="warning"
                size="xs"
                container
              />
            ) : (
              <SoftBadge
                variant="gradient"
                badgeContent="active"
                color="success"
                size="xs"
                container
              />
            )}
            <SoftButton variant="text" color="dark">
              <Icon onClick={handleOpenMenu}>more_vert</Icon>&nbsp;
              {renderMenu()}
            </SoftButton>
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" pl={1} flexDirection="column">
          <SoftTypography variant="subtitle2" fontWeight="medium" textTransform="uppercase">
            {name}
          </SoftTypography>
          <SoftTypography variant="caption" fontWeight="medium">
            {detailFood.desciption}
          </SoftTypography>
          <SoftTypography variant="caption" color="text">
            Created at {time.substring(0, 10)} - {detailFood.num_rate} rate
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </SoftBox>
  );
}
// Setting default values for the props of Bill
FoodPreview.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
FoodPreview.propTypes = {
  detailFood: PropTypes.object,
  avatar_url: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  is_active: PropTypes.bool,
  blockFood: PropTypes.any,
  unblockFood: PropTypes.any,
};

export default observer(FoodPreview);
