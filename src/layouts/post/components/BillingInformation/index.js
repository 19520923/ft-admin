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
import { Icon } from "@mui/material";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftPagination from "components/SoftPagination";
import SoftTypography from "components/SoftTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <SoftBox pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Food Post
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1} pb={2} px={2} >
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            fullname="Nguyen Minh Thai"
            username="thaivohinh123"
            date="11/9/2022"
            caption="It's so cool. I do it myself !"
          />
          <Bill
            fullname="Nguyen Nhut Tan"
            username="tannn01"
            date="10/9/2022"
            caption="Welcome everyone"
          />
          <Bill
            fullname="Duong Trung Nguyen"
            username="nguyentrungg"
            date="20/11/2021"
            caption="Oh so pretty !"
            noGutter
          />
        </SoftBox>
      </SoftBox>
      <SoftBox px={30} pb={5}>
        <SoftPagination>
          <SoftPagination item>
            <Icon>keyboard_arrow_left</Icon>
          </SoftPagination>
          <SoftPagination item active>1</SoftPagination>
          <SoftPagination item>2</SoftPagination>
          <SoftPagination item>3</SoftPagination>
          <SoftPagination item>
            <Icon>keyboard_arrow_right</Icon>
          </SoftPagination>
        </SoftPagination>
      </SoftBox>
    </Card>
  );
}

export default BillingInformation;
