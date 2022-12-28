import React, { useEffect, useState } from "react";
import InputGroup from "../components/InputGroup";
import RowDetails from "../components/RowDetails";
import axios from "axios";
import Alert from "../components/Alert";
import { Link } from 'react-router-dom'
import "./styles.css"


function Home() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post('/api/users', form)
      .then(res => {
        setMessage(res.data.message)
        /* hide form after save */
        setForm({})
        /* hide errors after save */
        setErrors({})
        setShow(true)
        setTimeout(() => {
          setShow(false)
        }, 4000);
      })
      .catch(err => setErrors(err.response.data))

  }

  /* delete */
  const OnDelete = (id__) => {
    if (window.confirm("are you sure to delete this user")) {

      axios.delete(`/api/users/${id__}`)
        .then(res => {
          setMessage(res.data.message)
          setShow(true)
          setTimeout(() => {
            setShow(false)
          }, 4000);
        })
    }
  }
  /* find all users */
  useEffect(async () => {
    await axios.get("/api/users").then((res) => {
      setUsers(res.data);
    });
  });
  return (
    <div className="row p-4">
      <div>
        <nav>Employee Details</nav>
      </div>
      <br></br>
      <div>
        <Link to={`/adduser`} className="text-white">
          <button class="button-63" role="button">Adduser
            <span>
              <i class="fa-regular fa-circle-plus"></i>
            </span>
          </button>
        </Link>
      </div>

      <div className="col-12 mt-5">
        <table className="table">
          <thead>
            <tr>
            <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              {/* <th scope="col">Age</th> */}
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ Email, Lastname, Firstname, Role,Phone,Address, _id }) => (
              <RowDetails
                Email={Email}
                Lastname={Lastname}
                Firstname={Firstname}
                Role={Role}
                Phone={Phone}
                Address={Address}
                Id={_id}
                OnDelete={OnDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
