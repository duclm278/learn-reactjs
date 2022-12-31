import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const TableCustomer = (customers, onDelete, onEdit) => {
  return (
    <>
      {customers.map((customer, index) => (
        <TableRow>
          <TableCell>{customer.id}</TableCell>
          <TableCell>{customer.name}</TableCell>
          <TableCell>{customer.address}</TableCell>
          <TableCell>{customer.phone}</TableCell>
          <button onClick={() => onDelete(index)}>Delete</button>
          <button onClick={() => onEdit(index)}>Edit</button>
        </TableRow>
      ))}
    </>
  );
};

export default function List(props) {
  const customers = props.customers;
  const setCustomers = props.setCustomers;
  const navigate = useNavigate();

  function handleEdit(index) {
    navigate("/edit/" + index);
  }

  function handleDelete(index) {
    let id = customers[index].id;
    let newCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(newCustomers);
  }

  return (
    <>
      List of customers
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers ? TableCustomer(customers, handleDelete, handleEdit) : ""}
        </TableBody>
      </Table>
    </>
  );
}
