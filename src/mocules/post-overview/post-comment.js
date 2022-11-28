import PropTypes from "prop-types";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

function PostComment({ color, name, description, datetime }) {
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
                            <SoftBox mr={2}>
                                <SoftButton variant="outlined" color={color} size="medium" iconOnly circular>
                                    {/* <Icon sx={{ fontWeight: "bold" }}>{icon}</Icon> */}
                                </SoftButton>
                                <SoftTypography ml={1} variant="button" fontWeight="medium" gutterBottom>
                                    {name}
                                </SoftTypography>
                            </SoftBox>

                            <SoftBox mb={1} lineHeight={0} pl={6} width={300}>
                                <SoftTypography variant="caption" color="text">
                                    {description}
                                </SoftTypography>
                            </SoftBox>

                        </SoftBox>
                    </SoftBox>
                    <SoftTypography variant="caption" color="text">
                        {datetime}
                    </SoftTypography>
                </SoftBox>
            </SoftBox>
        </SoftBox>
    );
}

// Typechecking props of the Transaction
PostComment.propTypes = {
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
    datetime: PropTypes.string.isRequired,
};

export default PostComment;