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

// @mui material components
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Billing page components
import Transaction from "layouts/billing/components/Transaction";
import rocketWhite from "assets/images/illustrations/rocket-white.png";
import wavesWhite from "assets/images/shapes/waves-white.svg";
import SoftButton from "components/SoftButton";
import SimpleImageSlider from "react-simple-image-slider";

export const images = [
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
];

function Transactions() {

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <SoftBox >
          <SoftButton variant="outlined" color="error" size="medium" iconOnly circular>
            {/* Return image avatar */}
          </SoftButton>
        </SoftBox>
        <SoftTypography ml={-42} variant="h6" fontWeight="medium" textTransform="capitalize">
          Recipe
        </SoftTypography>

        <SoftBox display="flex" alignItems="flex-start">
          <SoftBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              star
            </Icon>
          </SoftBox>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            9.5
          </SoftTypography>
        </SoftBox>
      </SoftBox>

      <SoftBox pt={3} pb={2} px={2}>

        <SoftBox >
          <SimpleImageSlider
            width={"95%"}
            height={350}
            images={images}
            showBullets={false}
            showNavs={false}
            navMargin={10}
          />
        </SoftBox>

        <SoftBox display="flex">
          <SoftTypography mr={2} mt={2} variant="h6" fontWeight="medium" textTransform="capitalize">
            Ingredients
          </SoftTypography>
        </SoftBox>
        <SoftBox 
          p={0}
          m={0} 
          ml={6}
          lineHeight={0}>
          <SoftTypography variant="caption" color="text">
              1g Nguyên liệu 1
            </SoftTypography>
        </SoftBox>
        <SoftBox 
          p={0}
          m={0} 
          ml={6}
          lineHeight={0}>
          <SoftTypography variant="caption" color="text">
            2g Nguyên liệu 2
          </SoftTypography>
        </SoftBox>
    
        <SoftBox display="flex">
          <SoftTypography mr={2} mt={2} variant="h6" fontWeight="medium" textTransform="capitalize">
            Process
          </SoftTypography>
        </SoftBox>
        <SoftBox 
          p={0}
          m={0} 
          ml={6}
          lineHeight={0}>
          <SoftTypography variant="caption" color="text">
              1. Quy trình 1
            </SoftTypography>
        </SoftBox>
        <SoftBox 
          p={0}
          m={0} 
          ml={6}
          lineHeight={0}>
          <SoftTypography variant="caption" color="text">
            2. Quy trình 2
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Transactions;