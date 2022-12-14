import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useEffect, useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>UserID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Content</TableCell>
          </TableRow>
        </TableHead>
        {items.map((item) => (
          <TableRow>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.userId}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.body}</TableCell>
          </TableRow>
        ))}
        <TableBody></TableBody>
      </Table>
    </>
  );
}
