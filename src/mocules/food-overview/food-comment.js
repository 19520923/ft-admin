import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function FoodComment({ color, icon, name, description, value, star }) {
    return (
        <SoftBox
            component="ul"
            display="flex"
            flexDirection="column"
            p={0}
            m={0}
            sx={{ listStyle: "none" }}
        >
            <SoftBox key={name} component="li" py={1} pr={2} mb={1}>
                <SoftBox display="flex" justifyContent="space-between" alignItems="center">
                    <SoftBox display="flex" alignItems="center">

                        <SoftBox display="flex" flexDirection="column">
                            <SoftBox alignItems={'center'} display="flex" mr={2}  >
                                <SoftButton variant="outlined" color={color} size="medium" iconOnly circular>
                                </SoftButton>
                                <SoftTypography ml={1} mr={2} variant="button" fontWeight="medium" gutterBottom>
                                    {name}
                                </SoftTypography>
                                <SoftBox display="flex">
                                    <SoftTypography variant="button" color="text" fontWeight="regular">
                                        {star}
                                    </SoftTypography>
                                    <SoftBox color="text" mr={0.5} lineHeight={0}>
                                        <Icon color="primary" fontSize="small">
                                            star
                                        </Icon>
                                    </SoftBox>
                                </SoftBox>
                            </SoftBox>

                            <SoftBox mb={1} lineHeight={0} pl={6} width={300}>
                                <SoftTypography variant="caption" color="text">
                                    {description}
                                </SoftTypography>
                            </SoftBox>

                        </SoftBox>
                    </SoftBox>
                    <SoftTypography variant="caption" color="text">
                        {value}
                    </SoftTypography>
                </SoftBox>
            </SoftBox>
        </SoftBox>
    );
}

// Typechecking props of the Transaction
FoodComment.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
    ]).isRequired,
    icon: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    star: PropTypes.string.isRequired,
};

export default FoodComment;
