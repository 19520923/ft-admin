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
import Bill from "layouts/feedback/components/Bill";

function BillingInformation() {
  const ratingProps = [
    {
      size: 30,
      value: 5,
      edit: false,
    },
    { size: 30, value: 2.5, edit: false },
    { size: 30, value: 3.5, edit: false },
  ];
  return (
    <Card id="delete-account">
      <SoftBox pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Feedbacks
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1} pb={2} px={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            fullname="Nguyen Minh Thai"
            username="thaivohinh123"
            date="11/9/2022"
            checkin="Amazing App"
            caption="It's so cool. I do it myself ! The food is good. I love food"
            ratingProps={ratingProps[0]}
            noGutter
          />
          <Bill
            fullname="Nguyen Nhut Tan"
            username="tannn01"
            date="10/9/2022"
            checkin="Color problem"
            caption="I don't like the colors, they make my eyes hurt"
            ratingProps={ratingProps[1]}
            noGutter
          />
          <Bill
            fullname="Duong Trung Nguyen"
            username="nguyentrungg"
            date="20/11/2021"
            checkin="Good Experience"
            caption="This app is very useful, however it still need to be updated more !"
            ratingProps={ratingProps[2]}
            noGutter
          />
        </SoftBox>
      </SoftBox>
      <SoftBox px={30} pb={5}>
        <SoftPagination>
          <SoftPagination item>
            <Icon>keyboard_arrow_left</Icon>
          </SoftPagination>
          <SoftPagination item active>
            1
          </SoftPagination>
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
