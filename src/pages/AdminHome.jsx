import React from "react";
import SidebarAdmin from "../component/SidebarAdmin";
import { Heading } from "@chakra-ui/react";

const AdminHome = () => {
  return (
    <div>
      <SidebarAdmin />
      <div style={{ margin: "auto", marginLeft: "20%" }}>
        <Heading textAlign={"center"} mt={"50px"} mb={"50px"}>
          Welcome Admin!
        </Heading>
      </div>
    </div>
  );
};

export default AdminHome;
