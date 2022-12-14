import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function FormEdit(props) {
  const params = useParams();
  const index = params.index;
  const customers = props.customers;
  const setCustomers = props.setCustomers;
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    let customer = customers[index];
    setName(customer.name);
    setAddress(customer.address);
    setPhone(customer.phone);
  }, []);

  function handleSave() {
    let currentCustomers = customers;
    let customer = currentCustomers[index];
    customer.name = name;
    customer.address = address;
    customer.phone = phone;
    setCustomers([...currentCustomers]);
  }

  return (
    <div>
      <div className="form-item">
        <div>Name</div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="form-item">
        <div>Address</div>
        <div>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>
      <div className="form-item">
        <div>Phone</div>
        <div>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
