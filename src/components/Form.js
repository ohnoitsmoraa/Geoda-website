import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Form({ users, setUsers }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        company: "",
        email: ""
    });
    const [loading, setLoading] = useState(false);

    const handleOnchange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({
            ...formData, [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(user => {
            setUsers([user, ...users]);
            setFormData({ name: "", contact: "", company: "", email: "" });
            Swal.fire({
                title: "Success!",
                text: "User posted successfully",
                icon: "success"
            });
            navigate("/");
        })
        .catch(err => {
            Swal.fire({
                title: "Error!",
                text: "There was an issue posting the user.",
                icon: "error"
            });
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <div className='form-submit'>
            <div className='form-wrapper'>
                <div>
                    <h1>Post User</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type='text' name='name' placeholder='Enter Name' value={formData.name} onChange={handleOnchange} required />
                        <input type='tel' name='contact' placeholder='Enter Contact' value={formData.contact} onChange={handleOnchange} required />
                        <input type='text' name='company' placeholder='Enter Company Name' value={formData.company} onChange={handleOnchange} required />
                        <input type='email' name='email' placeholder='Enter Email' value={formData.email} onChange={handleOnchange} required />
                    </div>
                    <div className='button-submit'>
                        <input type='submit' value="Submit" disabled={loading} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
