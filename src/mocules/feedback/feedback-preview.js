import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";
import ReactStars from "react-rating-stars-component";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import ActionItem from "examples/Items/ActionItem";
import { Grid, Menu } from "@mui/material";
import { useState } from "react";

function FeedbackPreview({ fullname, username, date, checkin, caption, value, noGutter }) {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  const ratingProps = {
    size: 30,
    value: value,
    edit: false,
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
        date="View detail post."
        onClick={handleCloseMenu}
      />
      <ActionItem
        icon="hide_image"
        color="disabled"
        title={["Hide"]}
        date="Hide this post temporarily."
        onClick={handleCloseMenu}
      />
      <ActionItem
        icon="delete"
        color="error"
        title={["Delete"]}
        date="Delete this post permanently."
        onClick={handleCloseMenu}
      />
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
      pt={1}
      pb={1}
      pr={2}
      pl={2}
      mb={noGutter ? 0 : 1}
      mt={2}
    >
      <SoftBox width="100%" display="flex" flexDirection="column">
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={0}
        >
          <SoftBox display="flex" alignItems="center">
            <SoftButton variant="outlined" color="success" size="medium" iconOnly circular>
              {/* Return image avatar */}
            </SoftButton>
            <SoftBox display="flex" flexDirection={{ sm: "column" }}>
              <SoftTypography
                ml={1}
                variant="button"
                fontWeight="medium"
                textTransform="capitalize"
              >
                {fullname}
              </SoftTypography>
              <SoftTypography ml={1} variant="caption" color="text">
                {username}
              </SoftTypography>
            </SoftBox>
            <SoftBox mt={1} ml={1.5} display="flex" alignItems={{ xs: "flex-start", sm: "center" }}>
              <ReactStars {...ratingProps} />

              <SoftTypography ml={2} variant="caption" fontWeight="medium">
                {date}
              </SoftTypography>
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
            <SoftButton variant="text" color="dark">
              <Icon onClick={handleOpenMenu}>more_vert</Icon>&nbsp;
              {renderMenu()}
            </SoftButton>
          </SoftBox>
        </SoftBox>
        <SoftBox>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={10}>
              <SoftBox mb={1} lineHeight={0}>
                <SoftTypography variant="h6" fontWeight="medium">
                  {checkin}
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={1} lineHeight={0}>
                <SoftTypography variant="caption">{caption}</SoftTypography>
              </SoftBox>
            </Grid>
            {/* <Grid item xs={12} lg={4} sx={{ position: "relative", ml: "auto" }}>
              <SoftBox>
                <SimpleImageSlider
                  width={"100%"}
                  height={"100%"}
                  images={images}
                  showBullets={true}
                  showNavs={false}
                  autoPlay={true}
                />
              </SoftBox>
              <SoftBox
                height="100%"
                display="grid"
                justifyContent="center"
                alignItems="center"
                bgColor="primary"
                borderRadius="lg"
                variant="gradient"
              >
                <SoftBox
                  component="img"
                  src={wavesWhite}
                  alt="waves"
                  display="block"
                  position="absolute"
                  left={0}
                  width="100%"
                  height="100%"
                />
                <SoftBox component="img" src={rocketWhite} alt="rocket" width="100%" pt={3} />
              </SoftBox>
            </Grid> */}
          </Grid>
        </SoftBox>
      </SoftBox>
    </SoftBox>
  );
}

// Setting default values for the props of Bill
FeedbackPreview.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
FeedbackPreview.propTypes = {
  fullname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  checkin: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default FeedbackPreview;
