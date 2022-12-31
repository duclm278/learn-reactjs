import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";

const data = [
  { id: "1", name: "username1" },
  { id: "2", name: "username2" },
  { id: "3", name: "username3" },
];

const App = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let tmp = data.map((d) => ({
      ...d,
      checked: false,
    }));
    setUsers(tmp);
  }, []);

  function handleCheckOne(e) {
    const { id, checked } = e.target;
    let tmp = users.map((u) => (u.id === id ? { ...u, checked: checked } : u));
    setUsers(tmp);

    let cnt = 0;
    for (let i = 0; i < users.length; i++) {
      if (tmp[i].checked) cnt++;
    }

    if (cnt === users.length) setCheckAll(true);
    else setCheckAll(false);
  }

  function handleCheckAll() {
    if (checkAll) {
      let tmp = data.map((d) => ({
        ...d,
        checked: false,
      }));
      console.log(structuredClone(tmp));
      setUsers(tmp);
    } else {
      let tmp = data.map((d) => ({
        ...d,
        checked: true,
      }));
      console.log(structuredClone(tmp));
      setUsers(tmp);
    }
    setCheckAll(!checkAll);
  }

  function handleProcess() {
    console.log("Processed:", users);
  }

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox checked={checkAll} onChange={handleCheckAll} />
              <label>Check All</label>
            </TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((u) => (
            <TableRow key={u.id}>
              <TableCell>
                <Checkbox
                  id={u.id}
                  checked={u.checked}
                  onChange={handleCheckOne}
                />
              </TableCell>
              <TableCell>{u.id}</TableCell>
              <TableCell>{u.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" color="secondary" onClick={handleProcess}>
        Process
      </Button>
    </>
  );
};

export default App;
