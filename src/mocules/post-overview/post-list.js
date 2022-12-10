import { Icon } from "@mui/material";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftPagination from "components/SoftPagination";
import SoftTypography from "components/SoftTypography";
import PostPreview from "./post-preview";
import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";

const PostList = ({ posts }) => {
  return (
    <Card id="delete-account">
      <SoftBox pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Food Post
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1} pb={2} px={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {posts.map((post) => (
            <PostPreview
              key={post._id}
              fullname={post.author.name}
              username={post.author.username}
              date={post.created_at}
              checkin={post.location.name}
              caption={post.content}
              photos={post.photos}
              noGutter
            />
          ))}
        </SoftBox>
      </SoftBox>
      <SoftBox pr={18} pb={5}>
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
};

PostList.propTypes = {
  posts: PropTypes.array,
};

export default observer(PostList);
