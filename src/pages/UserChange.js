import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { deleteUser, getUserId, updateUser } from '../api/users'

const UserChange = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    const userId = async () => {
        const { data } = await getUserId(id)
        setUser(data)
        setEmail(data?.user?.email)
        setFather_name(data?.user?.father_name)
        setFirst_name(data?.user?.first_name)
        setPhone_number(data?.user?.phone_number)
        setSecond_name(data?.user?.second_name)
    }

    const [email, setEmail] = useState("")
    const [father_name, setFather_name] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [people, setPeople] = useState(0)
    const [password, setPassword] = useState("")
    const [phone_number, setPhone_number] = useState(0)
    const [second_name, setSecond_name] = useState("")
    const postUser = async () => {
        const { data } = await updateUser(email, father_name, first_name, Number(id), password, phone_number, second_name)
       
        setEmail("")
        setFather_name("")
        setFirst_name("")
        setPeople(0)
        setPassword("")
        setPhone_number("")
        setSecond_name("")
    }

    useEffect(() => {
        userId()
    }, [])
    console.log(user)
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 class="m-0">О пользователя</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">

                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        {/* left column */}
                        <div className="col-12 ">
                            {/* general form elements */}
                            <div className="card card-primary card-outline card-tabs">
                                <div class="card-header p-0 pt-1 border-bottom-0">
                                    <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill" href="#custom-tabs-one-home" role="tab" aria-controls="custom-tabs-one-home" aria-selected="true">
                                                Данные пользователя</a>
                                        </li>

                                    </ul>
                                </div>
                                {/* /.card-header */}
                                {/* form start */}

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="action">Email</label>
                                        <input
                                            onChange={(e) => { setEmail(e.target.value) }}
                                            type="mail"
                                            className="form-control"
                                            placeholder={user?.user?.email}
                                            value={email}
                                            name='action' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="article">Фамилия</label>
                                        <input
                                            onChange={(e) => { setFather_name(e.target.value) }}
                                            type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            value={father_name}
                                            placeholder={user?.user?.father_name}
                                            name='article' />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="compound">Имя</label>
                                        <input
                                            onChange={(e) => { setFirst_name(e.target.value) }}
                                            type="text"
                                            className="form-control"
                                            placeholder={user?.user?.first_name}
                                            value={first_name}
                                            name='compound' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contraindications">Пароль</label>
                                        <input
                                            onChange={(e) => { setPassword(e.target.value) }}
                                            type="text"
                                            className="form-control"
                                            placeholder={user?.user?.password}
                                            name='contraindications' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="count">Телофон</label>
                                        <input
                                            onChange={(e) => { setPhone_number(e.target.value) }}
                                            type="number"
                                            className="form-control"
                                            placeholder={user?.user?.phone_number}
                                            value={phone_number}
                                            name='count' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Второе имя</label>
                                        <input
                                            onChange={(e) => { setSecond_name(e.target.value) }}
                                            type="text"
                                            className="form-control"
                                            value={second_name}
                                            placeholder={user?.user?.second_name}
                                            name='description' />
                                    </div>
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <button
                                        onClick={() => postUser()}
                                        className="btn btn-primary"

                                    >Изменить</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default UserChange