import React from 'react'
import "./style.css"
import {Form, Input, Button, Select, DatePicker} from "antd"
import { useState , useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';

function ItemForm() {
    const [currentUser, setCurrentUser] = useState({});
    const [newData, setNewData] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate()

    // get current user
    const handleGetCurrentUser = () => {
    const token = localStorage.getItem("usersdatatoken");
    const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "token": `Bearer ${token}`
        }
      };
        fetch(`http://localhost:8002/v1/user/${id}`, requestOptions)
        .then(res => res.json())
        .then(data => {
            // const userIdCurrent = localStorage.setItem(data.username)
            console.log(data)
            setCurrentUser(data)
        })
    };

    useEffect(() => {
        handleGetCurrentUser();
    }, [id]);

    const handleChange = (e) => {
        setNewData({
            ...newData,
            [e.target.name]: e.target.value,
          });
    };

    const checkUpdate = () =>{
        if(localStorage.getItem("userId") === id)
        {
            handleUpdateUser()
        }
        else{
            alert("You're not allowed to do that!")
            navigate("/admin")
        }
    }

    const handleUpdateUser = () => {
        const token = localStorage.getItem("usersdatatoken");
        const requestOptions = {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            "token": `Bearer ${token}`
            },
            body: JSON.stringify(newData)
        };
            fetch(`http://localhost:8002/v1/user/${id}/update`, requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // setTimeout(alert("User updated"), 3000);
                alert("User updated")
                navigate("/admin")
            })
    };
    

    
  return (
    <div>
        <Form 
            
            labelCol={{
            span: 4,
            }}
            wrapperCol={{
            span: 14,
            }}
            layout="horizontal"
            style={{
            maxWidth: 600,
            }}
            className='formItem'
        >
            <Form.Item label="UserName">
                <Input placeholder="username" name="username" onChange={handleChange} defaultValue={currentUser.username}/>
            </Form.Item>
            <Form.Item label="Email">
                <Input type='email'placeholder="email" name="email" onChange={handleChange} defaultValue={currentUser.email}/>
            </Form.Item>
            <Button type='primary' onClick={checkUpdate}>Submit</Button>
        </Form>
    </div>
  )
}

export default ItemForm