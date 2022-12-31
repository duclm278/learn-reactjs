import { useState } from "react";
import "./App.css";
import RegisterPopupDialog from "./PopupDialog";

const App = () => {
  const [open, setOpen] = useState(false);

  // Call API
  function handleRegister(username, password) {
    alert(`Registered: username = ${username} | password = ${password}`);
  }

  return (
    <div>
      <button onClick={() => setOpen(true)}>Register</button>
      <RegisterPopupDialog
        open={open}
        setOpen={setOpen}
        onRegister={handleRegister}
      />
    </div>
  );
};

export default App;
