/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
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

function Foods({ name, user, rate, time }) {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  const images = [
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

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
      pl={2}
      pr={2}
      pt={2}
      pb={2}
      mb={1}
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
            
            <SoftTypography ml={1} variant="button" fontWeight="medium" textTransform="capitalize">
              {name}
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
            <SoftButton variant="text" color="dark">
              <Icon onClick={handleOpenMenu}>more_vert</Icon>&nbsp;
              {renderMenu()}
            </SoftButton>
          </SoftBox>
        </SoftBox>

        <SoftBox p={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <SoftBox mb={1} lineHeight={0}>
                <SoftTypography variant="caption" color="text">
                  Username:&nbsp;&nbsp;&nbsp;
                  <SoftTypography variant="caption" fontWeight="medium">
                    {user}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={1} lineHeight={0}>
                <SoftTypography variant="caption" color="text">
                  Description:&nbsp;&nbsp;&nbsp;
                  <SoftTypography variant="caption" fontWeight="medium">
                    {user}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={1} lineHeight={0}>
                <SoftTypography variant="caption" color="text">
                  Rate:&nbsp;&nbsp;&nbsp;
                  <SoftTypography variant="caption" fontWeight="medium">
                    {rate}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={1} lineHeight={0}>
                <SoftTypography variant="caption" color="text">
                  Date:&nbsp;&nbsp;&nbsp;
                  <SoftTypography variant="caption" fontWeight="medium">
                    {time}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
            </Grid>
            <Grid item xs={12} lg={4} sx={{ position: "relative", ml: "auto" }}>
              <SoftBox>
                <SimpleImageSlider
                  width={"100%"}
                  height={"100%"}
                  images={images}
                  showBullets={false}
                  showNavs={false}
                  autoPlay={true}
                />
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </SoftBox>
  );
}
// Setting default values for the props of Bill
Foods.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Foods.propTypes = {
  name: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Foods;