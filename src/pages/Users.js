import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { deleteUser, getUsers } from '../api/users'

const Users = () => {
    const [users, setUsers] = useState([])
    const sendUsers = async () => {
        const { data } = await getUsers()
        setUsers(data?.users)
    }
    useEffect(() => {
        sendUsers()
    }, [])

    const [id, setId] = useState([])
    const deleteUsers = async () => {
        for (let i = 0; i < id.length; i++) {
            console.log(id[i], i)
            const data = await deleteUser(id[i])
            console.log(data)
        }
        setId([])
        var clist = document.getElementsByTagName("input");
        for (var i = 0; i < clist.length; ++i) { clist[i].checked = false; }
        sendUsers()
    }
    console.log(users);
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 class="m-0">Пользователи</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">

                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* <section className="content">
                <div className="container-fluid">
                    <div className="row">
                      
                        <div className="col-md-12">
                   
                            <div className="card card-primary">

                              
                                <form>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Имя пользователя</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Email пользователя </label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Телефон пользователя</label>
                                            <input type="phone" className="form-control" id="exampleInputPassword1" />
                                        </div>

                                    </div>
                                    
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">Поиск</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title"></h3>
                        <div className="card-tools">


                            <div className="input-group input-group-sm" >
                                <button type="button" className="btn btn-block btn-danger"
                                >Удалить</button>
                            </div>

                        </div>
                    </div>
                    <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    
                                    <th>#</th>
                                    <th>Имя</th>
                                    <th>Email</th>
                                    <th>Телефон</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map(item =>
                                        <tr>
                                            <td><input type="checkbox"
            
                                                onChange={(e) =>
                                                    e.target.checked
                                                        ? setId(s => [...s, item?.id])
                                                        : setId(id.filter((el) => el !== item.id))}
                                            /></td>
                                            <td>{item.id}</td>
                                            <td>{item.first_name} {item.father_name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone_number}</td>
                                            <td >
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <NavLink to={"/users/"+item.id}>
                                                        <i className='fas fa-eye' style={{ marginRight: '5px' }}></i>
                                                    </NavLink>

                                                </div>
                                            </td>
                                        </tr>)
                                }



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users