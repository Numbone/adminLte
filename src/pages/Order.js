import { format } from 'date-fns'
import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { TransactionAll } from '../api/transactions'
import ModalItem from '../modal/ModalItem'
import ModalStatistics from '../modal/ModalStatistics'

const Order = () => {
    /// state 
    const [delivery, setDelivery] = useState("")
    const [endTime, setEndTime] = useState("")
    const [inBasket, setInBasket] = useState("")
    const [nameORPhoneOREmail, setNameORPhoneOREmail] = useState("")
    const [notInBasket, setNotInBasket] = useState("")
    const [notPaid, setNotPaid] = useState(true)
    const [startTime, setStartTime] = useState("")
    const [status, setStatus] = useState("")
    const [transactionID, setTransactionID] = useState(0)
    /// get data //
    const [data, setData] = useState([])

    const getTransactionAll = async () => {
        const starDate = startTime == "" ? "" : format(new Date(startTime), 'MMM d, yyyy',) + " " + "at 00:00pm (MST)"
        const EndDate = endTime == "" ? "" : format(new Date(endTime), 'MMM d, yyyy',) + " " + "at 00:00pm (MST)"

        console.log(starDate);
        const { data } = await TransactionAll(delivery, EndDate, inBasket, nameORPhoneOREmail, notInBasket, notPaid, starDate, status, Number(transactionID))
        if ((data?.products_info==null)||(data.transactions==null)) {
            data=[]
        }
        setData(data)

    }
    ////modal modalitem ///
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShowStat, setModalShowStat] = React.useState(false);
    const [iModal, setIModal] = useState(0)
    const setIndexModal = (index) => {
        setIModal(index)
        setModalShow(true)
    }
    const navigate = useNavigate()
    console.log(data)
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 class="m-0">Заказы</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">

                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            <div className="col-md-12">
                <div className="card card-primary">

                    <div className="card-body">
                        {/* Date */}
                        <div className='row'>
                            <div className='col-md-6'> <div className="form-group">
                                <label>Заказы от даты:</label>
                                <div className="input-group date" id="reservationdate" data-target-input="nearest">
                                    <input type="date"
                                        className="form-control "
                                        data-target="#reservationdate"
                                        onChange={e => setStartTime(e.target.value)} />
                                    <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">

                                    </div>
                                </div>
                            </div></div>

                            {/* Date and time */}
                            <div className='col-md-6'>
                                <div className="form-group">
                                    <label>Заказы до даты:</label>
                                    <div className="input-group date" id="reservationdatetime" data-target-input="nearest">
                                        <input
                                            type="date"
                                            className="form-control "
                                            data-target="#reservationdatetime"
                                            onChange={e => setEndTime(e.target.value)} />
                                        <div className="input-group-append" data-target="#reservationdatetime" data-toggle="datetimepicker">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className="form-group">
                                    <label>ID заказа</label>
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="ID"
                                        onChange={e => (setTransactionID(e.target.value))}></input>
                                </div>
                            </div>
                            <div className='col-md-9'>
                                <div className="form-group">
                                    <label>Имя,email или телефон</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Часть или слово целиком"
                                        onChange={e => setNameORPhoneOREmail(e.target.value)}></input>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="form-group">
                                    <label>Способ доставки</label>
                                    <Form.Select onChange={e => setDelivery(e.target.value)} className="form-control" aria-label="Default select example">
                                        <option></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group">
                                    <label>Статус заказа</label>
                                    <Form.Select onChange={e => setStatus(e.target.value)} className="form-control" aria-label="Default select example">
                                        <option></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="form-group">
                                    <label>Товар в корзине</label>
                                    <Form.Select onChange={e => setInBasket(e.target.value)} className="form-control" aria-label="Default select example">
                                        <option></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="form-group">
                                    <label>Товар не в корзине</label>
                                    <Form.Select onChange={e => setNotInBasket(e.target.value)} className="form-control" aria-label="Default select example">
                                        <option></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="form-group">
                                    <label>Партнер</label>
                                    <Form.Select className="form-control" aria-label="Default select example">
                                        <option></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="form-group">
                                    <label>Из сахара</label>
                                    <input className="form-control" type="text" placeholder="Выбрать"></input>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2'>
                                <button onClick={() => getTransactionAll()} type="button" class="btn btn-block btn-primary">Поиск</button>
                            </div>
                            <div className='col-md-2'>
                                <div class="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">Показать неоплаченные</label>
                                </div>
                            </div>
                            <div className='col-md-2'>
                                <div class="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">Показать без этикетки</label>
                                </div>
                            </div>
                            <div className='col-md-2'>
                                <div class="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">Сахара 1</label>
                                </div>
                            </div>
                            <div className='col-md-2'>
                                <div class="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">Сахара 2</label>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title"></h3>
                        <div className="card-tools">
                            {data.length == 0
                                ? null
                                : <div className="input-group input-group-sm" style={{ width: 250 }}>
                                    <button type="button" class="btn btn-block" onClick={() => navigate('/statistics', { state: { 0: data?.products_info, 1: data.transactions_info } })}>Открыть статистику</button>
                                </div>}

                        </div>
                    </div>
                    <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
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
                                {
                                    data?.transactions?.map((item, index) =>
                                        <tr key={index}>
                                            <td><input type="checkbox" /></td>
                                            <td>{item?.id}</td>
                                            <td>{item?.user[0]?.first_name} {item?.user[0]?.father_name}</td>
                                            <td>{item?.user[0]?.email}</td>
                                            <td>{item?.user[0]?.phone_number}</td>
                                            <td>{item?.products?.map(data =>
                                                <div>{data?.name} {data?.count} шт</div>)}</td>
                                            <td>{item?.total_cost}</td>
                                            <td>{item?.delivery}</td>
                                            <td><button type="button" className="btn btn-block btn-secondary btn-sm">{item?.status[0]?.status_text}   </button></td>
                                            <td >
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <i onClick={() => setIndexModal(index)} className='fas fa-eye' style={{ marginRight: '5px' }}></i>
                                                    <div class="dropdown">
                                                        <div>
                                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style={{ position: 'absolute', transform: 'translate3d(0px, 38px, 0px)', top: 0, left: 0, willChange: 'transform' }}>
                                                                <a className="dropdown-item" href="#">Написать комментарии</a>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </td>
                                        </tr>)

                                }



                            </tbody>
                        </table>
                        <ModalItem
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            state={data?.length === 0
                                ? null
                                : data.transactions[iModal]}
                        />
                        <ModalStatistics
                            show={modalShowStat}
                            onHide={() => setModalShowStat(false)}
                            state={data?.length === 0
                                ? null
                                : data}
                        />
                    </div>
                </div>
            </div>



        </div >
    )
}

export default Order