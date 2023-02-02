import PropTypes from "prop-types";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

function FoodComment({ commentDetail }) {
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
                        <SoftBox display="flex">
                            <IconButton
                            size="small"
                            color="inherit"
                            //onClick={handleConfiguratorOpen}
                            >
                                <SoftAvatar src={commentDetail ? commentDetail.author.avatar_url : ''} alt="profile-image" variant="rounded" size="m" shadow="sm" />
                            </IconButton>
                            <SoftBox display="flex" flexDirection={{ sm: "column" }}>
                                <SoftBox ml={0.5} display="flex" alignItems="center">
                                    <SoftTypography
                                        mr={2}
                                        ml={1}
                                        variant="button"
                                        fontWeight="medium"
                                        textTransform="capitalize"
                                    >
                                        {commentDetail ? commentDetail.author.name : ''}
                                </SoftTypography>
                                <SoftBox ml={0.5} display="flex" alignItems="center">
                                    <SoftTypography
                                        ml={0.25}
                                        mt={0.25}
                                        variant="caption"
                                        fontWeight="medium"
                                        color="primary"
                                    >
                                        {commentDetail ? commentDetail.score : ''}
                                    </SoftTypography>
                                    <Icon color="primary" fontSize="small">
                                        star
                                    </Icon>
                                </SoftBox>
                            </SoftBox>
                                <SoftTypography ml={1} variant="caption" color="text">
                                    {commentDetail ? commentDetail.author.username : ''}
                                </SoftTypography>
                            </SoftBox>
                    </SoftBox>
                </SoftBox>
                <SoftTypography variant="caption" color="text">
                    {commentDetail ? commentDetail.created_at.substring(11, 19) + ' - ' + commentDetail.created_at.substring(0, 10) : ''}
                </SoftTypography>
            </SoftBox>
                <SoftBox mt={1} lineHeight={0} pl={6} width={300}>
                    <SoftTypography variant="caption" color="text">
                    {commentDetail ? commentDetail.content : ''}
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
    commentDetail: PropTypes.any
};

export default FoodComment;
