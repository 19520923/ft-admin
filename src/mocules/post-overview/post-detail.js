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
import PropTypes from "prop-types";
import SoftAvatar from "components/SoftAvatar";
import IconButton from "@mui/material/IconButton";
import noimage from "../../assets/images/no-image.png";
import { RootStore } from "store/RootStore";
import { observer } from "mobx-react-lite";

export const images = [
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=600",
];

function PostDetail() {
  const { selectedPost } = RootStore;
  const post = selectedPost.toJSON()

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <SoftBox display="flex" alignItems="center">
          <IconButton
            size="small"
            color="inherit"
          //onClick={handleConfiguratorOpen}
          >
            <SoftAvatar
              src={post.author.avatar_url}
              alt="profile-image"
              //variant="rounded"
              size="m"
              shadow="sm"
            />
          </IconButton>
          <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            {post.author.name}
          </SoftTypography>
        </SoftBox>

        <SoftBox display="flex" alignItems="flex-start">
          <SoftBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </SoftBox>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            {post.created_at.substring(0, 10)}
          </SoftTypography>
        </SoftBox>
      </SoftBox>

      <SoftBox pt={3} pb={2} px={2}>
        <SoftBox mb={2} lineHeight={0}>
          <SoftTypography variant="caption" fontWeight="medium" textTransform="uppercase">
            caption:&nbsp;&nbsp;&nbsp;
            <SoftTypography variant="caption" color="text">
              {post.content}
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
        <SoftBox mb={2} lineHeight={0}>
          <SoftTypography variant="caption" fontWeight="medium" textTransform="uppercase">
            check-in:&nbsp;&nbsp;&nbsp;
            <SoftTypography variant="caption" color="text">
              {post.location.name + ' ' + post.location.lat + ' ' + post.location.lng}
            </SoftTypography>
          </SoftTypography>
        </SoftBox>

        <SoftBox>
          {
            post.photos.length > 0 ?
              <SimpleImageSlider
                width={"95%"}
                height={350}
                images={post.photos}
                showBullets={true}
                showNavs={true}
                navMargin={10}
              />
              :
              <SimpleImageSlider
                width={"95%"}
                height={350}
                images={[noimage]}
                showBullets={false}
                showNavs={false}
                navMargin={10}
              />
          }

        </SoftBox>
        <SoftBox display="flex">
          <SoftTypography mr={2} mt={2} variant="h6" fontWeight="medium" textTransform="capitalize">
            Likes ({post.reactions.length})
          </SoftTypography>
          <SoftTypography mt={2} variant="h6" fontWeight="medium" textTransform="capitalize">
            comments ({post.num_comment})
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

export default observer(PostDetail);

PostDetail.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar_url: PropTypes.string
    }),
    created_at: PropTypes.string,
    content: PropTypes.string,
    location: PropTypes.shape({
      name: PropTypes.string,
      lat: PropTypes.string,
      lng: PropTypes.string,
    }),
    photos: PropTypes.arrayOf(PropTypes.string),
    num_comment: PropTypes.number,
    reactions: PropTypes.arrayOf(PropTypes.string)
  }),
};
