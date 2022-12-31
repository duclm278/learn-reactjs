import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Form from "./Form";

const RegisterPopupDialog = (props) => {
  const { open, setOpen, onRegister } = props;

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>Register Information</DialogTitle>
        <DialogContent>
          <Form onRegister={onRegister} setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegisterPopupDialog;
