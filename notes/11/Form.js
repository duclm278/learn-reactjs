import { Button, TextField } from "@mui/material";
import { useState } from "react";

const Form = ({ onRegister, setOpen }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>
        <TextField
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
        ></TextField>
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
      </div>
      <div>
        <Button onClick={() => onRegister(username, password)}>Register</Button>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
      </div>
    </div>
  );
};

export default Form;
