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
import { useState } from "react";
import "./App.css";
import data from "./data.json";

export default function App() {
  const [students, setStudents] = useState(data);
  const [formAddData, setFormAddData] = useState({
    id: -1,
    name: "",
    birthday: "",
    email: "",
  });

  const handleFormAddChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormAddData = { ...formAddData };
    newFormAddData[fieldName] = fieldValue;
    setFormAddData(newFormAddData);
  };

  const handleFormAddSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      id: parseInt(formAddData.id),
      name: formAddData.name,
      birthday: formAddData.birthday,
      email: formAddData.email,
    };
    const newStudents = [...students, newStudent];
    setStudents(newStudents);
    event.target.reset();
  };

  const handleDeleteClick = (studentId) => {
    const newStudents = [...students];
    const index = students.findIndex((student) => student.id === studentId);
    newStudents.splice(index, 1);
    setStudents(newStudents);
  };

  return (
    <Stack sx={{ p: 4 }} spacing={2}>
      <Box
        component="form"
        sx={{ "& > :not(style)": { my: 1 } }}
        onSubmit={handleFormAddSubmit}
      >
        <Stack direction="row" spacing={3}>
          <TextField
            required
            id="outlined-required"
            label="ID"
            name="id"
            onChange={handleFormAddChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Name"
            name="name"
            onChange={handleFormAddChange}
          />
        </Stack>
        <Stack direction="row" spacing={3}>
          <TextField
            required
            id="outlined-required"
            label="Birthday"
            name="birthday"
            onChange={handleFormAddChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            name="email"
            onChange={handleFormAddChange}
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
                <TableCell>{student.birthday}</TableCell>
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
  );
}
