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
import FbImageLibrary from "react-fb-image-grid";

// Billing page components
import Transaction from "layouts/billing/components/Transaction";

function Transactions() {
  const images = [
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          nguyentrungg&apos;s Detail Post
        </SoftTypography>

        <SoftBox display="flex" alignItems="flex-start">
          <SoftBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </SoftBox>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            23 - 30 March 2020
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox pt={2} pb={2} px={7}>
        <SoftBox>
          <SoftTypography color="text" fontWeight="bold" fontSize="18px">
            <img
              width={40}
              height={40}
              alt="avatar"
              src={"https://i.pinimg.com/564x/62/23/7a/62237a0e77af85429217d5d5d0bb429f.jpg"}
            />
            Trunnuyen
          </SoftTypography>
        </SoftBox>
        <SoftTypography variant="button" color="text" fontWeight="regular" fontSize="16px">
          Content dsahfishfgewgfhi iehrtfiewrht h fgihgiwg ash hfdyas asdy8y weywuy fhsfh ashf
          asfasifh ashfd
        </SoftTypography>
        <SoftBox height="400px">
          <FbImageLibrary hideOverlay={true} images={images} />
        </SoftBox>
        <SoftBox>
          <SoftTypography color="text" fontWeight="regular" fontSize="18px">
            <img
              width={30}
              height={30}
              alt="love reaction"
              src={"https://cdn-icons-png.flaticon.com/512/3128/3128313.png"}
            />
            150 people
          </SoftTypography>
        </SoftBox>

        {/* <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="error"
            icon="arrow_downward"
            name="Netflix"
            description="27 March 2020, at 12:30 PM"
            value="- $ 2,500"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Apple"
            description="27 March 2020, at 04:30 AM"
            value="+ $ 2,000"
          />
        </SoftBox>
        <SoftBox mt={1} mb={2}>
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
        </SoftBox> */}
      </SoftBox>
    </Card>
  );
}

export default Transactions;
