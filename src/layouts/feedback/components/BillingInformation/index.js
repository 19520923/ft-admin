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

import React, { useState } from "react";
// @mui material components
import { Icon } from "@mui/material";
import Card from "@mui/material/Card";
import Pagination from "react-custom-pagination";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftPagination from "components/SoftPagination";
import SoftTypography from "components/SoftTypography";

// Billing page components
import Bill from "layouts/feedback/components/Bill";

function BillingInformation() {
  const ratingProps = [
    5, 3.5, 4
  ];

  const posts = [
    {
      id: "1",
      fullname: "Duong Trung Nguyen",
      username: "trunnuyen",
      date: "11/9/2022",
      checkin: "Amazing App",
      caption: "It's so cool. I do it myself ! The food is good. I love food",
      value: ratingProps[0].toString(),
    },
    {
      id: "2",
      fullname: "Nguyen Minh Thai",
      username: "thaidui123",
      date: "11/9/2022",
      checkin: "The best customers lift you up with great reviews ",
      caption:
        "Nothing compares to the exhilaration of receiving a review where a customer details how your business improved their lives. Responding to positive reviews increases a customer’s brand loyalty.",
      value: ratingProps[2].toString(),
    },
    {
      id: "3",
      fullname: "Nguyen Nhut Tan",
      username: "tannn",
      date: "11/9/2022",
      checkin: "Gives specific & constructive feedback",
      caption:
        "A good review constructively highlights the issues the customer had. Accept constructive criticism with open arms. It can be upsetting, no one likes criticism, but constructive criticism is a good thing. You can’t grow if you don’t know where you’re growing wrong.",
      value: ratingProps[0].toString(),
    },
    {
      id: "4",
      fullname: "Dang Duy Bang",
      username: "bang12",
      date: "11/9/2022",
      checkin: "Amazing App",
      caption: "It's so cool. I do it myself ! The food is good. I love food",
      value: ratingProps[1].toString(),
    },
    {
      id: "5",
      fullname: "John Cina",
      username: "cinajhon",
      date: "11/9/2022",
      checkin: "Gives you details on their customer experience",
      caption:
        "A customer that details their journey (in words, ratings, or visual contextual feedback) means they had a memorable experience (good or bad). At Usersnap, we believe that it is every business’s goal to understand experiences and help your users have better ones over time.",
      value: ratingProps[0].toString(),
    },
    {
      id: "6",
      fullname: "The Wok",
      username: "wok69",
      date: "11/9/2022",
      checkin: "Amazing App",
      caption: "It's so cool. I do it myself ! The food is good. I love food",
      value: ratingProps[2].toString(),
    },
    {
      id: "7",
      fullname: "Duong Trung Nguyen",
      username: "trunnuyen",
      date: "11/9/2022",
      checkin: "Amazing App",
      caption: "It's so cool. I do it myself ! The food is good. I love food",
      value: ratingProps[0].toString(),
    },
    {
      id: "8",
      fullname: "Nguyen Minh Thai",
      username: "thaidui123",
      date: "11/9/2022",
      checkin: "The best customers lift you up with great reviews ",
      caption:
        "Nothing compares to the exhilaration of receiving a review where a customer details how your business improved their lives. Responding to positive reviews increases a customer’s brand loyalty.",
      value: ratingProps[2].toString(),
    },
    {
      id: "9",
      fullname: "Nguyen Nhut Tan",
      username: "tannn",
      date: "11/9/2022",
      checkin: "Gives specific & constructive feedback",
      caption:
        "A good review constructively highlights the issues the customer had. Accept constructive criticism with open arms. It can be upsetting, no one likes criticism, but constructive criticism is a good thing. You can’t grow if you don’t know where you’re growing wrong.",
      value: ratingProps[0].toString(),
    },
    {
      id: "10",
      fullname: "Dang Duy Bang",
      username: "bang12",
      date: "11/9/2022",
      checkin: "Amazing App",
      caption: "It's so cool. I do it myself ! The food is good. I love food",
      value: ratingProps[1].toString(),
    },
    {
      id: "11",
      fullname: "John Cina",
      username: "cinajhon",
      date: "11/9/2022",
      checkin: "Gives you details on their customer experience",
      caption:
        "A customer that details their journey (in words, ratings, or visual contextual feedback) means they had a memorable experience (good or bad). At Usersnap, we believe that it is every business’s goal to understand experiences and help your users have better ones over time.",
      value: ratingProps[0].toString(),
    },
    {
      id: "12",
      fullname: "The Wok",
      username: "wok69",
      date: "11/9/2022",
      checkin: "Amazing App",
      caption: "It's so cool. I do it myself ! The food is good. I love food",
      value: ratingProps[2].toString(),
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  //get current Posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // when user clicks on number this function will execute

  const paginate = (number) => {
    setCurrentPage(number);
  };

  // return (
  //   <>
  //     <div
  //       style={{
  //         width: "500px",
  //         textAlign: "center",
  //         marginTop: "50px",
  //         height: "200px",
  //       }}
  //     >
  //       <h1 style={{ textAlign: "center", color: "green" }}>Pagination Example</h1>
  //       {currentPosts.map((item) => {
  //         return (
  //           <p key={item.id} style={{ color: "red" }}>
  //             {item.name}
  //           </p>
  //         );
  //       })}
  //     </div>
  //     <div style={{ width: "500px" }}>
  //       <Pagination
  //         totalPosts={posts.length}
  //         postsPerPage={postsPerPage}
  //         paginate={paginate}
  //         view={5}
  //         showLast={true}
  //         showFirst={true}
  //         showIndex={true}
  //       />
  //     </div>
  //   </>
  // );

  return (
    <Card id="delete-account">
      <SoftBox pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Feedbacks
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1} pb={2} px={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {currentPosts.map((item) => {
            return (
              <Bill
                key={item.id}
                fullname={item.fullname}
                username={item.username}
                date={item.date}
                checkin={item.checkin}
                caption={item.caption}
                value={item.value}
                noGutter
              ></Bill>
            );
          })}
          {/* <Bill
            fullname="Nguyen Minh Thai"
            username="thaivohinh123"
            date="11/9/2022"
            checkin="Amazing App"
            caption="It's so cool. I do it myself ! The food is good. I love food"
            value={ratingProps[0]}
            noGutter
          />
          <Bill
            fullname="Nguyen Nhut Tan"
            username="tannn01"
            date="10/9/2022"
            checkin="Color problem"
            caption="I don't like the colors, they make my eyes hurt"
            value={ratingProps[1]}
            noGutter
          />
          <Bill
            fullname="Duong Trung Nguyen"
            username="nguyentrungg"
            date="20/11/2021"
            checkin="Good Experience"
            caption="This app is very useful, however it still need to be updated more !"
            value={ratingProps[2]}
            noGutter
          /> */}
        </SoftBox>
      </SoftBox>
      <SoftBox px={50} pb={5} alignItems="center">
        {/* <SoftPagination item>
            <Icon>keyboard_arrow_left</Icon>
          </SoftPagination>
          <SoftPagination item active>
            1
          </SoftPagination>
          <SoftPagination item>2</SoftPagination>
          <SoftPagination item>3</SoftPagination>
          <SoftPagination item>
            <Icon>keyboard_arrow_right</Icon>
          </SoftPagination> */}
        <Pagination
          totalPosts={posts.length}
          postsPerPage={postsPerPage}
          paginate={paginate}
          view={5}
          showLast={true}
          showFirst={true}
          showIndex={true}
          selectColor={"#FF7B00"}
          bgColor={"#344767"}
          indexbgColor={"#82d616"}
          indexBorderRadius={"3%"}
        />
      </SoftBox>
    </Card>
  );
}

export default BillingInformation;
