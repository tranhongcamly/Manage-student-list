import React, { useEffect, useState } from 'react'
import "./style.css"
import {Table, Row, Col, Button} from "antd"
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const { Column, ColumnGroup } = Table;

function ListItem() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [userList, setUserList] = useState([])

  
  const getUser = () => {
    const token = localStorage.getItem("usersdatatoken");
    setIsLoading(true);
    const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "token": `Bearer ${token}`
        }
      };
      fetch("http://localhost:8002/v1/user", requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setUserList(data)
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        throw Error(error);
      })
  };

  useEffect(() => {
    getUser()
  }, [])

  const handleDeleteUser = (userId) => {
    const token = localStorage.getItem("usersdatatoken");
    const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "token": `Bearer ${token}`
        }
      };
      fetch(`http://localhost:8002/v1/user/${userId}/delete`, requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const userIdLogin = localStorage.getItem("userId")
        const isAdmin = localStorage.getItem("isAdmin")
        if(isAdmin === "false")
        {
          if(userIdLogin === userId)
          {
            setUserList(userList.filter((user) => user._id !== userId))
            navigate("/login")
          }
          else{
            alert("You're not allowed to do that!")
          }
        }else if(isAdmin === "true")
        {
          if(userIdLogin === userId)
          {
            setUserList(userList.filter((user) => user._id !== userId))
            navigate("/login")
          }
          else {
            setUserList(userList.filter((user) => user._id !== userId))
            alert("Deleted success")
          }
        }
        else{
          alert("You're not allowed to do that!")
        }
      })
      .catch(error => {
        // toast("You're not authenticated")
        throw Error(error)
      })
  }

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className='ListItem'>
      <Row className='styleList'>
        <Col span={21} style={{fontSize: 20}}><h1>LIST</h1></Col>
      </Row>
      {/* <Table dataSource={userList}>
        <Column title="UserName" dataIndex="username" key="UserName" />
        <Column title="Email" dataIndex="email" key="Email" />
        <Column title="Admin" dataIndex="isAdmin.toString()" key="id" />
        <Column title="Action" dataIndex="Action" key="Action" render={(_) => (
            <Row>
              <Col><Button><EditOutlined /></Button></Col>
              <Col><Button><DeleteOutlined /></Button></Col>
            </Row>
          )}
        />
        
      </Table> */}
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.length !== 0 ? userList.map((user) => (
            <tr key={user._id}>
              <Link to={`/user/data/${user._id}`}>
                <td style={{border: "none"}}>{user.username}</td>
              </Link>
              <td>{user.email}</td>
              <td>{user.isAdmin.toString()}</td>
              <td>
                <Row justify={"center"} style={{gap: 8}}>
                  <Col>
                    <Link to={`/user/${user._id}`}>
                      <Button className='btedit' style={{color: "blue"}}><EditOutlined /></Button>
                    </Link>
                  </Col>
                  <Col><Button className='btdelete' onClick={() => handleDeleteUser(user._id)} style={{color: "red"}}><DeleteOutlined /></Button></Col>
                </Row>
              </td>
            </tr>
          ))
          : <h1>Không có dữ liệu nào!</h1>
        }
          
      </tbody>
    </table>
    </div>
  )
}

export default ListItem