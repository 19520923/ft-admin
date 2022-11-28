import { Icon } from "@mui/material";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftPagination from "components/SoftPagination";
import SoftTypography from "components/SoftTypography";
import PostPreview from "./post-preview";

function PostList() {
  return (
    <Card id="delete-account">
      <SoftBox pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Food Post
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1} pb={2} px={2} >
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <PostPreview
            fullname="Nguyen Minh Thai"
            username="thaivohinh123"
            date="11/9/2022"
            checkin="Linh Trung ward, Thu Duc district, Ho Chi Minh City"
            caption="It's so cool. I do it myself !"
            noGutter
          />
          <PostPreview
            fullname="Nguyen Nhut Tan"
            username="tannn01"
            date="10/9/2022"
            checkin="224A, Dien Bien Phu street, Vo Thi Sau Ward, district 3"
            caption="Welcome everyone"
            noGutter
          />
          <PostPreview
            fullname="Duong Trung Nguyen"
            username="nguyentrungg"
            date="20/11/2021"
            checkin=""
            caption="Oh so pretty !"
            noGutter
          />
        </SoftBox>
      </SoftBox>
      <SoftBox pr={18} pb={5}>
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

export default PostList;
