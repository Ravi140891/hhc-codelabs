import BoxContainers from "../components/BoxContainers";
import Layout from "../components/Layout";
import { Box } from "@mui/material";
import ValidityContainer from "../components/ValidityContainer";
import CreateStudent from "../assets/Group 59951.png";
import CreateSession from "../assets/Group 59953.png";
import Attendance from "../assets/Group 59942.png";
import List from "../assets/Group 59996.png";
import { ListItems } from "../components/BoxContainers";
import CreateStudentPage from "../pages/CreateStudent";
import { useSelector } from "react-redux";
import { RootState } from "../Slices/createStudentProfile";

const Admin = () => {
  const list: ListItems = {
    activeStudents: 70,
    inActiveStudents: 30,
  };
  const show = useSelector((state: RootState) => state.studentProfile.show);
  return (
    <Layout>
      <Box
        sx={{
          width: "100%",
          padding: "1rem 4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <BoxContainers
          icon={CreateStudent}
          heading1="Create"
          heading2="Student Profile"
          extra={false}
          data={list}
        />
        <BoxContainers
          icon={CreateSession}
          heading1="Create"
          heading2="Session"
          extra={false}
          data={list}
        />
        <BoxContainers
          icon={Attendance}
          heading1="Current"
          heading2="Attendance"
          extra={false}
          data={list}
        />
        <BoxContainers
          icon={List}
          heading1="Student List"
          heading2={"100"}
          extra={true}
          data={list}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          padding: "2rem 4rem",
          justifyContent: "space-between",
        }}
      >
        <ValidityContainer title="Validity For Session" />
        <ValidityContainer title="Validity For Days" />
      </Box>
      {show && <CreateStudentPage />}
    </Layout>
  );
};

export default Admin;
