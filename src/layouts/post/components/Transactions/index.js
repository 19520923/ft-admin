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

function Transactions() {

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <SoftBox >
          <SoftButton variant="outlined" color="error" size="medium" iconOnly circular>
            {/* Return image avatar */}
          </SoftButton>
        </SoftBox>
        <SoftTypography ml={-17} variant="h6" fontWeight="medium" textTransform="capitalize">
          nguyentrungg&apos;s Detail Post
        </SoftTypography>

        <SoftBox display="flex" alignItems="flex-start">
          <SoftBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </SoftBox>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            22/10/2022
          </SoftTypography>
        </SoftBox>
      </SoftBox>

      <SoftBox pt={3} pb={2} px={2}>
        <SoftBox mb={2} lineHeight={0}>
          <SoftTypography variant="caption" fontWeight="medium" textTransform="uppercase">
            caption:&nbsp;&nbsp;&nbsp;
            <SoftTypography variant="caption" color="text">
              Oh so pretty !
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={2} lineHeight={0}>
          <SoftTypography variant="caption" fontWeight="medium" textTransform="uppercase">
            check-in:&nbsp;&nbsp;&nbsp;
            <SoftTypography variant="caption" color="text">
              310 Huynh Tan Phat, Tan Thuan Tay, District 7, HCM City
            </SoftTypography>
          </SoftTypography>
        </SoftBox>

        <SoftBox
          height="100"
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

        <SoftBox display="flex">
          <SoftTypography mr={2} mt={2} variant="h6" fontWeight="medium" textTransform="capitalize">
            Likes (25)
          </SoftTypography>
          <SoftTypography mt={2} variant="h6" fontWeight="medium" textTransform="capitalize">
            comments (2)
          </SoftTypography>
        </SoftBox>

        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Dang Duy Bang"
            description="Wow! Congratulation"
            value="00:59 - 22/10/2022"
          />
        </SoftBox>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          ml={6}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="error"
            icon="arrow_disward"
            name="Nguyen Minh Thai"
            description="Yeh, I think so. Can you give me phone number?"
            value="00:59 - 22/10/2022"
          />
        </SoftBox>
        {/* <Transaction
            color="success"
            icon="arrow_upward"
            name="Apple"
            description="27 March 2020, at 04:30 AM"
            value="+ $ 2,000"
          /> */}
        {/* <SoftBox mt={1} mb={2}>
          <SoftTypography
            variant="caption"
            color="text"
            fontWeight="bold"
            textTransform="uppercase"
          >
            yesterday
          </SoftTypography>
        </SoftBox>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Stripe"
            description="26 March 2020, at 13:45 PM"
            value="+ $ 750"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="HubSpot"
            description="26 March 2020, at 12:30 PM"
            value="+ $ 1,000"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Creative Tim"
            description="26 March 2020, at 08:30 AM"
            value="+ $ 2,500"
          />
          <Transaction
            color="dark"
            icon="priority_high"
            name="Webflow"
            description="26 March 2020, at 05:00 AM"
            value="Pending"
          />
        </SoftBox>  */}
      </SoftBox>
    </Card>
  );
}

export default Transactions;
