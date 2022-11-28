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
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftPagination from "components/SoftPagination";
import SoftTypography from "components/SoftTypography";
import FoodPreview from "./food-preview";

function FoodList() {
    return (
        <Card id="list_food">
            <SoftBox pt={3} px={2}>
                <SoftTypography variant="h6" fontWeight="medium">
                    Recipes
                </SoftTypography>
            </SoftBox>
            <SoftBox pt={1} pb={2} px={2} >
                <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
                    <FoodPreview
                        name="Cơm chiên"
                        user="thaivohinh123"
                        rate="9.0"
                        time="11/09/2022"
                    />
                    <FoodPreview
                        name="Bún bò kho"
                        user="tannn01"
                        rate="8.0"
                        time="10/09/2022"
                    />
                    <FoodPreview
                        name="Phở Hà Nội"
                        user="nguyentrungg"
                        rate="0.0"
                        time="20/11/2021"
                    />
                </SoftBox>
            </SoftBox>
            <SoftBox px={18} pb={5}>
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


export default FoodList;