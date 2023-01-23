import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import ActionItem from "examples/Items/ActionItem";
import { Menu } from "@mui/material";
import { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import SoftAvatar from "components/SoftAvatar";
import IconButton from "@mui/material/IconButton";
import noimage from "../../assets/images/no-image.png";
import { RootStore } from "store/RootStore";
import { observer } from "mobx-react-lite";
import SoftBadge from "components/SoftBadge";

function PostPreview({blockPost, unblockPost, detailPost, avatar, fullname, username, date, checkin, caption, noGutter, photos, is_active }) {
  const {
    setSelectedPost
  } = RootStore;
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);
  const handleViewPost = () => {
    console.log("view Post: ", detailPost.toJSON())
    setSelectedPost(detailPost.toJSON())
  }
  const [isActive, setIsActive] = useState(is_active);

  const eventBlockPost = () => {
    setIsActive(false)
    blockPost()
  };

  const eventUnblockPost = () => {
    setIsActive(true)
    unblockPost()
  };

  const renderMenu = () => (
    <Menu Menu
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
        date="View detail post."
        onClick={handleViewPost}
      />
      {!isActive ? (
        <ActionItem
          icon="delete"
          color="error"
          title={["Unblock"]}
          date="Unblock this post from block list."
          onClick={eventUnblockPost}
        />
      ) : (
        <ActionItem
          icon="delete"
          color="error"
          title={["Block"]}
          date="Block this post from community."
          onClick={eventBlockPost}
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
      mb={noGutter ? 0 : 1}
      mt={2}
    >
      <SoftBox width="100%" display="flex" flexDirection="column">
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={2}
        >
          <SoftBox >
            <IconButton
              size="small"
              color="inherit"
            //onClick={handleConfiguratorOpen}
            >
              <SoftAvatar
                src={avatar}
                alt="profile-image"
                variant="rounded"
                size="m"
                shadow="sm"
              />
            </IconButton>
            <SoftTypography ml={1} variant="button" fontWeight="medium" textTransform="capitalize">
              {fullname}
            </SoftTypography>
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
            {
              !is_active ? (
                <SoftBadge variant="gradient" badgeContent="blocked" color="error" size="xs" container />
              ) : detailPost.num_report > 0 ? (
                <SoftBadge variant="gradient" badgeContent="reported" color="warning" size="xs" container />
              ) : (
                <SoftBadge variant="gradient" badgeContent="active" color="success" size="xs" container />
              )
            }
            <SoftButton variant="text" color="dark">
              <Icon onClick={handleOpenMenu}>more_vert</Icon>&nbsp;
              {renderMenu()}
            </SoftButton>
          </SoftBox>
        </SoftBox>
        <SoftBox display='flex' p={2}>
          <SoftBox width={250}>
            <SoftBox mb={1} lineHeight={0}>
              <SoftTypography variant="caption" color="text">
                Username:&nbsp;&nbsp;&nbsp;
                <SoftTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                  {username}
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1} lineHeight={0}>
              <SoftTypography variant="caption" color="text">
                Date:&nbsp;&nbsp;&nbsp;
                <SoftTypography variant="caption" fontWeight="medium">
                  {date.substring(0, 10)}
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1} lineHeight={0}>
              <SoftTypography variant="caption" color="text">
                Check-in:&nbsp;&nbsp;&nbsp;
                <SoftTypography variant="caption" fontWeight="medium">
                  {checkin}
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1} lineHeight={0}>
              <SoftTypography variant="caption" color="text">
                Caption:&nbsp;&nbsp;&nbsp;
                <SoftTypography variant="caption" fontWeight="medium">
                  {caption}
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox>
            {
              photos.length > 0 ?
                <SimpleImageSlider
                  width={150}
                  height={120}
                  images={photos}
                  showBullets={true}
                  showNavs={false}
                  autoPlay={true}
                />
                :
                <SimpleImageSlider
                  width={150}
                  height={120}
                  images={[noimage]}
                  showBullets={false}
                  showNavs={false}
                  autoPlay={true}
                />
            }
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </SoftBox>
  );
}

// Setting default values for the props of Bill
PostPreview.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
PostPreview.propTypes = {
  detailPost: PropTypes.object,
  avatar: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  checkin: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
  photos: PropTypes.arrayOf(PropTypes.string),
  is_active: PropTypes.bool,
  blockPost: PropTypes.any,
  unblockPost: PropTypes.any,
};

export default observer(PostPreview);
