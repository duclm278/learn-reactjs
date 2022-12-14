import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import FormAdd from "./FormAdd";
import FormEdit from "./FormEdit";
import List from "./List";

export default function App() {
  const [customers, setCustomers] = useState([]);
  const [maxId, setMaxId] = useState(0);

  return (
    <div className="container">
      <Router>
        <ul>
          <li>
            <Link to="/list">List of customers</Link>{" "}
          </li>
          <li>
            <Link to="/add">Add a new customer</Link>
          </li>
        </ul>
        <Routes>
          <Route
            path="/list"
            element={<List customers={customers} setCustomers={setCustomers} />}
          />
          <Route
            path="/add"
            element={
              <FormAdd
                customers={customers}
                setCustomers={setCustomers}
                maxId={maxId}
                setMaxId={setMaxId}
              />
            }
          />
          <Route
            path="/edit/:index"
            element={
              <FormEdit customers={customers} setCustomers={setCustomers} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
