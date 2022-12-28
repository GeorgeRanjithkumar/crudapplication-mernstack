import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InputGroup from '../components/InputGroup'

function Details() {
 
  const [form, setForm] = useState({});
  const {id} = useParams();
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.put(`/api/users/${id}`, form)
    .then(res=>{
      navigate('/')
    })
    .catch(err=>setErrors(err.response.data))
    
  }

  useEffect(async () => {
    await axios.get(`/api/users/${id}`).then((res) => {
      setForm(res.data);
    });
  }, []);
  return (
    <div className="container containeredit mt-4 col-12 col-lg-4">
      <div style={{ fontSize: "xx-large"}}>Edit User</div>
        <form onSubmit={onSubmitHandler}>
          <InputGroup
            label="Email"
            type="text"
            name="Email"
            onChangeHandler={onChangeHandler}
            errors={errors.Email}
            value={form.Email}
          />
          <InputGroup
            label="Lastname"
            type="text"
            name="Lastname"
            onChangeHandler={onChangeHandler}
            errors={errors.Lastname}
            value={form.Lastname}
          />
          <InputGroup
            label="Firstname"
            type="text"
            name="Firstname"
            onChangeHandler={onChangeHandler}
            errors={errors.Firstname}
            value={form.Firstname}
          />
          <InputGroup
            label="Role"
            type="text"
            name="Role"
            onChangeHandler={onChangeHandler}
            errors={errors.Role}
            value={form.Role}
          />
           <InputGroup
            label="Address"
            type="text"
            name="Address"
            onChangeHandler={onChangeHandler}
            errors={errors.Address}
            value={form.Address}
          />
          <InputGroup
            label="Phone"
            type="number"
            name="Phone"
            onChangeHandler={onChangeHandler}
            errors={errors.Phone}
            value={form.Phone}
          />
          <button className="btn btn-primary" type="submit">Add user</button>
        </form>
      </div>
  )
}

export default Details