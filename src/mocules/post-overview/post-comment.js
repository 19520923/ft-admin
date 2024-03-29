import PropTypes from "prop-types";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import IconButton from "@mui/material/IconButton";

function PostComment({ commentDetail }) {
    console.log(commentDetail);
    return (
        <SoftBox
            borderRadius="lg"
            component="ul"
            display="flex"
            flexDirection="column"
            p={0}
            m={0}
            mb={1}
            sx={{ listStyle: "none" }}
            ml={commentDetail.parent !== null ? 10 : 0}
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
                                <SoftTypography
                                    ml={1}
                                    variant="button"
                                    fontWeight="medium"
                                    textTransform="capitalize"
                                >
                                    {commentDetail ? commentDetail.author.name : ''}
                                </SoftTypography>
                                <SoftTypography ml={1} variant="caption" color="secondary">
                                    {commentDetail ? commentDetail.author.username : ''}
                                </SoftTypography>
                            </SoftBox>
                    </SoftBox>
                </SoftBox>
                <SoftTypography variant="caption" color="text">
                    {commentDetail ? commentDetail.created_at.substring(11, 19) + ' - ' + commentDetail.created_at.substring(0, 10) : ''}
                </SoftTypography>
            </SoftBox>
                <SoftBox mt={0} pl={8} width={300}>
                    <SoftTypography variant="caption" color="text">
                    {commentDetail ? commentDetail.content : ''}
                    </SoftTypography>
                </SoftBox>
            </SoftBox>
            <SoftBox
            bgColor="grey-400"
            p={0.05}
            ></SoftBox>
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
    commentDetail: PropTypes.any
};

export default PostComment;
