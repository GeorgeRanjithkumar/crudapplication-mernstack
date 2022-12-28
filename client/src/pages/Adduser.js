import React, { useEffect, useState } from "react";
import InputGroup from "../components/InputGroup";
import RowDetails from "../components/RowDetails";
import axios from "axios";
import Alert from "../components/Alert";
import "./styles.css"

const Adduser = () => {
    // const [users, setUsers] = useState([]);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        console.log({[e.target.name]: e.target.value}, "data123");

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
    // const OnDelete = (id__) => {
    //     if (window.confirm("are you sure to delete this user")) {

    //         axios.delete(`/api/users/${id__}`)
    //             .then(res => {
    //                 setMessage(res.data.message)
    //                 setShow(true)
    //                 setTimeout(() => {
    //                     setShow(false)
    //                 }, 4000);
    //             })
    //     }
    // }
    useEffect(()=> {
  console.log(form,"form");
    },[form]);
    /* find all users */
    // useEffect(async () => {
    //     await axios.get("/api/users").then((res) => {
    //         setUsers(res.data);
    //     });
    // });
    return (
        <div className="adduser">
            <Alert message={message} show={show} />
            <div className="mt-4">
                <h2>Crud Users</h2>
            </div>
            <div className="col-12 col-lg-4">
                <form onSubmit={onSubmitHandler}>
                    <InputGroup
                        label="Email"
                        type="text"
                        name="Email"
                        onChangeHandler={onChangeHandler}
                        errors={errors.Email}
                    />
                    <InputGroup
                        label="Lastname"
                        type="text"
                        name="Lastname"
                        onChangeHandler={onChangeHandler}
                        errors={errors.Lastname}
                    />
                    <InputGroup
                        label="Firstname"
                        type="text"
                        name="Firstname"
                        onChangeHandler={onChangeHandler}
                        errors={errors.Firstname}
                    />
                    <InputGroup
                        label="Role"
                        type="text"
                        name="Role"
                        onChangeHandler={onChangeHandler}
                        errors={errors.Role}
                    />
                    <InputGroup
                        label="Address"
                        type="text"
                        name="Address"
                        onChangeHandler={onChangeHandler}
                        errors={errors.Address}
                    />
                    <InputGroup
                        label="Phone"
                        type="number"
                        name="Phone"
                        onChangeHandler={onChangeHandler}
                        errors={errors.Phone}
                    />
                    <button className="btn btn-primary" type="submit">Add user</button>
                </form>
            </div>
        </div>
    )
}

export default Adduser;