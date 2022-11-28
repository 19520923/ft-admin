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
import SoftButton from "components/SoftButton";
import SimpleImageSlider from "react-simple-image-slider";
import PostComment from "./post-comment";

export const images = [
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=600",
];

function PostDetail() {
    return (
        <Card sx={{ height: "100%" }}>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
                <SoftBox >
                    <SoftButton variant="outlined" color="error" size="medium" iconOnly circular>
                        {/* Return image avatar */}
                    </SoftButton>
                </SoftBox>
                <SoftTypography ml={-15} variant="h6" fontWeight="medium" textTransform="capitalize">
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

                <SoftBox >
                    <SimpleImageSlider
                        width={"95%"}
                        height={350}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        navMargin={10}
                    />
                </SoftBox>
                <SoftBox display="flex">
                    <SoftTypography mr={2} mt={2} variant="h6" fontWeight="medium" textTransform="capitalize">
                        Likes (25)
                    </SoftTypography>
                    <SoftTypography mt={2} variant="h6" fontWeight="medium" textTransform="capitalize">
                        comments (2)
                    </SoftTypography>
                </SoftBox>

                <PostComment
                    color="success"
                    icon="arrow_upward"
                    name="Dang Duy Bang"
                    description="Wow! Congratulation"
                    datetime="00:59 - 22/10/2022"
                />
                <PostComment
                    color="error"
                    icon="arrow_disward"
                    name="Nguyen Minh Thai"
                    description="Yeh, I think so. Can you give me phone number?"
                    datetime="00:59 - 22/10/2022"
                />
            </SoftBox>
        </Card>
    );
}

export default PostDetail;
