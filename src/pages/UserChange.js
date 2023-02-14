import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { deleteUser, getUserId, updateUser, userTransactionId } from '../api/users'

const UserChange = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    const navigate =useNavigate()
    const userId = async () => {
        const {data}  = await getUserId(id)
        console.log(data,"asdsadad/////////")
        setUser(data)
        setData(data?.transaction)
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
    const [data,setData]=useState([])
    const postUser = async () => {
        const { data } = await updateUser(email, father_name, first_name, Number(id), password, phone_number, second_name)
       
        setEmail("")
        setFather_name("")
        setFirst_name("")
        setPeople(0)
        setPassword("")
        setPhone_number("")
        setSecond_name("")
        navigate("/users")
    }
    const getId=async()=>{
        const {data}=await userTransactionId(id)
        setData(data)
    }

    useEffect(() => {
        userId()
       
    }, [])
    console.log(user,"data")
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
                                        <label htmlFor="description">Очество</label>
                                        <input
                                            onChange={(e) => { setSecond_name(e.target.value) }}
                                            type="text"
                                            className="form-control"
                                            value={second_name}
                                            placeholder={user?.user?.second_name}
                                            name='description' />
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
                                  
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <button
                                        onClick={() => postUser()}
                                        className="btn btn-primary"

                                    >Изменить</button>
                                </div>

                            </div>
                            <div className="card-body table-responsive p-0">
            <table className="table table-hover text-nowrap table-striped">
              <thead>
                <tr>
                  {/* <th>
                    <input type="checkbox" 
                    // onChange={(e) => toggle(e)}
                     />
                  </th> */}
                  <th>#</th>
                  <th>ФИО</th>
                  <th>Почта</th>
                  <th>Телефон</th>
                  <th>Корзина</th>
                  <th>Сумма</th>
                  <th>Доставка</th>
                  <th>Статус</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {data?.map(
                  (item, index) =>
             
                      <tr key={index}>
                        {/* <td>
                          <input
                            type="checkbox"
                            name="foo"
                            value={item?.id}
                            // checked={checked}
                            // onChange={(e) =>
                            //   e.target.checked
                            //     ? setId((s) => [...s, item?.id])
                            //     : setId(id.filter((el) => el !== item.id))
                            // }
                          />
                        </td> */}
                        <td>
                          <div className="real__id">{item?.id}</div>
                          {item?.trasaction_copy_id != 0 && (
                            <div className="copy__id">
                              {item?.trasaction_copy_id}
                            </div>
                          )}
                        </td>
                        <td>
                          {user?.user?.first_name}{" "}
                          {user?.user?.father_name}
                        </td>
                        <td>{user?.user?.email}</td>
                        <td>{user?.user?.phone_number}</td>
                        <td>
                          {item?.products?.map((data) => (
                            <div>
                              {data?.nameRu} {data?.count} шт
                            </div>
                          ))}
                        </td>
                        <td>{item?.total_cost}</td>
                        <td>{item?.delivery?.delivery_commpany}</td>
                        <td>
                          <button
                            type="button"
                            className={
                              "btn btn-block   btn-sm" +
                              " " +
                              item?.status[item?.status.length-1]?.status_text
                            }
                          >
                            {item?.status[item?.status.length-1]?.status_text}{" "}
                          </button>
                        </td>
                        <td>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <NavLink
                              to="/changetransaction"
                              state={[user.transaction[index],user.user]}
                            >
                              <i
                                // onClick={() => setIndexModal(index)}
                                className="fas fa-eye btn btn-block btn-default"
                                style={{ marginRight: "5px" }}
                              ></i>
                            </NavLink>

                            {/* <div class="dropdown ">
                              <div>
                                <button
                                  className="btn btn-default btn-block  dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                //   onClick={() =>
                                //     item?.comment === ""
                                //       ? handleShow(item?.id)
                                //       : null
                                //   }
                                />
                                <div
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton"
                                  x-placement="bottom-start"
                                  style={{
                                    position: "absolute",
                                    transform: "translate3d(0px, 38px, 0px)",
                                    top: 0,
                                    left: 0,
                                    willChange: "transform",
                                  }}
                                >
                                  <div
                                    className="dropdown-item"
                                    // onClick={() => handleShow(item?.id)}
                                  >
                                    <>{item?.comment}</>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </td>
                      </tr>
                    )
                                }
              </tbody>
            </table>

           
          </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default UserChange