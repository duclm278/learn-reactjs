import { useState } from "react";

export default function FormAdd(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const customers = props.customers;
  const setCustomers = props.setCustomers;
  const maxId = props.maxId;
  const setMaxId = props.setMaxId;

  function getNextId() {
    let id = maxId + 1;
    setMaxId(id);
    return id;
  }

  function handleAdd() {
    let newCustomers = [
      ...customers,
      {
        id: getNextId(),
        name: name,
        address: address,
        phone: phone,
      },
    ];
    setCustomers(newCustomers);
  }

  return (
    <div>
      <div className="form-item">
        <div>Name</div>
        <div>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
      <div className="form-item">
        <div>Address</div>
        <div>
          <input type="text" onChange={(e) => setAddress(e.target.value)} />
        </div>
      </div>
      <div className="form-item">
        <div>Phone</div>
        <div>
          <input type="text" onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>
      <div>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}
