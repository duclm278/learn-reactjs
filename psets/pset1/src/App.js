import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment";
import { useState } from "react";
import "./App.css";
import data from "./data.json";

export default function App() {
  const [students, setStudents] = useState(data);
  const [currentStudent, setCurrentStudent] = useState({
    id: "",
    name: "",
    birthday: new moment().toISOString(),
    email: "",
  });

  const handleFormChange = (fieldName, fieldValue) => {
    const newStudent = { ...currentStudent };
    newStudent[fieldName] = fieldValue;
    setCurrentStudent(newStudent);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      id: parseInt(currentStudent.id),
      name: currentStudent.name,
      birthday: currentStudent.birthday,
      email: currentStudent.email,
    };
    const newStudents = [...students, newStudent];
    setStudents(newStudents);
    setCurrentStudent({
      id: "",
      name: "",
      birthday: new moment().toISOString(),
      email: "",
    });
  };

  const handleDeleteClick = (studentId) => {
    const newStudents = [...students];
    const index = students.findIndex((student) => student.id === studentId);
    newStudents.splice(index, 1);
    setStudents(newStudents);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Stack sx={{ p: 4 }} spacing={2}>
        <Box
          component="form"
          sx={{ "& > :not(style)": { my: 1 } }}
          onSubmit={handleFormSubmit}
        >
          <Stack direction="row" spacing={2}>
            <TextField
              required
              name="id"
              label="ID"
              value={currentStudent.id}
              onChange={(e) => handleFormChange("id", e.target.value)}
            />
            <TextField
              required
              name="name"
              label="Name"
              value={currentStudent.name}
              onChange={(e) => handleFormChange("name", e.target.value)}
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <DesktopDatePicker
              required
              label="Birthday"
              name="birthday"
              inputFormat="YYYY/MM/DD"
              value={moment(currentStudent.birthday)}
              onChange={(v) => {
                // Reset local time to 00:00:00.000
                v = v?.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
                handleFormChange("birthday", v?.toISOString());
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <TextField
              required
              label="Email"
              name="email"
              value={currentStudent.email}
              onChange={(e) => handleFormChange("email", e.target.value)}
            />
          </Stack>
          <Button variant="contained" size="medium" type="submit">
            Add
          </Button>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Birthday</TableCell>
                <TableCell>Email</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={student.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>
                    {moment(student.birthday).local().format("YYYY-MM-DD")}
                  </TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      size="small"
                      type="button"
                      onClick={() => handleDeleteClick(student.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </LocalizationProvider>
  );
}
