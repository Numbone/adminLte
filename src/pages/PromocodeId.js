import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { promocodeUpdate } from '../api/promocode'

const PromocodeId = () => {
    const locate = useLocation()
    console.log(locate)
    const {id}=useParams()
    const navigate=useNavigate()
    const [code, setCode] = useState("")
    const [count, setCount] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [type, setType] = useState("")
    const updatePromo=async()=>{
        const data =await promocodeUpdate(code,Number(count),Number(id),Number(discount),type)
        navigate("/promocode")
        console.log(data)
      }
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 class="m-0">Промокоды</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">

                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-12">

                            <div className="card card-primary">



                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Купон</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            onChange={(e) => setCode(e.target.value)}
                                            placeholder={locate?.state?.code}
                                            
                                        />
                                    </div>
                                    <div className="form-group ">
                                        <input
                                            onChange={(e) => setType(e.target.value)}
                                            className="custom_checbox"
                                            type="radio"
                                            id="1"
                                            name='rub'
                                            value="Скидка в рублях на корзину"
                                        ></input>
                                        <label>Скидка в рублях на корзину</label>
                                    </div>
                                    <div className="form-group ">
                                        <input
                                            onChange={(e) => setType(e.target.value)}
                                            className="custom_checbox"
                                            type="radio"
                                            id="1"
                                            name='rub'
                                            value="Скидка в процентах на корзину"></input>
                                        <label>Скидка в процентах на корзину</label>
                                    </div>
                                    <div className="form-group ">
                                        <input
                                            onChange={(e) => setType(e.target.value)}
                                            className="custom_checbox"
                                            type="radio"
                                            id="1"
                                            name='rub'
                                            value="Скидка в процентах на один товар"></input>
                                        <label>Скидка в процентах на один товар</label>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Скидка</label>
                                        <input
                                            onChange={(e) => setDiscount(e.target.value)}
                                            type="number"
                                            className="form-control"
                                            placeholder={locate?.state?.discount} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Количество использования</label>
                                        <input
                                            onChange={(e) => setCount(e.target.value)}
                                            type="number"
                                            className="form-control"
                                            placeholder={locate?.state?.count} />
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <button

                                        className="btn btn-primary"
                                        onClick={() => updatePromo()}>Обновить</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default PromocodeId