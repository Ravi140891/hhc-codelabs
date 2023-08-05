import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowRight from "../assets/arrow-right-circle.png";

interface ValidityContainerProps {
  title: string;
}

function createData(studentName: string, studentID: string, session: string) {
  return { studentName, studentID, session };
}

const rows = [
  createData("Asdfgh", "001", "1 Session"),
  createData("Asdfgh", "002", "1 Session"),
  createData("Asdfgh", "003", "1 Session"),
  createData("Asdfgh", "004", "1 Session"),
  createData("Asdfgh", "005", "1 Session"),
  createData("Asdfgh", "006", "1 Session"),
  createData("Asdfgh", "007", "1 Session"),
  createData("Asdfgh", "008", "1 Session"),
  createData("Asdfgh", "009", "1 Session"),
  createData("Asdfgh", "010", "1 Session"),
];

const ValidityContainer: React.FC<ValidityContainerProps> = ({ title }) => {
  return (
    <Box
      sx={{
        width: "48%",
        borderRadius: "20px",
        bgcolor: "#fff",
        overflow: "hidden",
        boxShadow: "5px 5px 12px 8px lightgrey",
      }}
    >
      <Box
        sx={{
          padding: "2rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontSize: "24px", fontFamily: "Poppins", fontWeight: 400 }}
        >
          {title}
        </Typography>
        <img src={ArrowRight} alt="arrow right" />
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          padding: "1rem",
          width: "100%",
          height: "400px",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#F6E7FF",
            borderRadius: "5px",
          },
        }}
        elevation={0}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#F6E7FF",
                borderRadius: "10px",
              }}
            >
              <TableCell
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                }}
                align="center"
              >
                Student Name
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                }}
                align="center"
              >
                Student ID
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                }}
                align="center"
              >
                Validity Session
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.studentID}
                sx={{
                  "&:last-child td": {
                    borderBottom: 0,
                  },
                  borderRadius: "10px",
                }}
              >
                <TableCell align="center">{row.studentName}</TableCell>
                <TableCell align="center">{row.studentID}</TableCell>
                <TableCell align="center">{row.session}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ValidityContainer;
