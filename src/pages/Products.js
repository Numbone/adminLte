import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AllProduct, deleteProductId } from '../api/product'

const Products = () => {
    const [products, setProducts] = useState([])
    const [id, setId] = useState([])
    const getAllProduct = async () => {
        const { data } = await AllProduct()
        setProducts(data?.all_product)
    }
    const deleteProduct = async () => {
        for (let i = 0; i < id.length; i++) {
            const data = await deleteProductId(id[i])
            console.log(data)
        }
        setId([])    
        getAllProduct()
    }
    useEffect(() => {
        getAllProduct()
    }, [])
    console.log(products)
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 class="m-0">Все товары</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">

                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>
            </div>
            {/*  <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        
                        <div className="col-md-12">
                            
                            <div className="card card-primary">

                               
                                <form>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Наименование или артикул</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Часть или слово целиком' />

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Категория</label>
                                            <Form.Select aria-label="Default select example" className="form-control" placeholder='Часть или слово целиком'>
                                                <option>Выбрать</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">В наличии</label>
                                                    <input type="phone" className="form-control" id="exampleInputPassword1" placeholder='Выбрать' />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">В не наличии</label>
                                                    <input type="phone" className="form-control" id="exampleInputPassword1" placeholder='Выбрать' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Включен</label>
                                                    <input type="phone" className="form-control" id="exampleInputPassword1" placeholder='Выбрать' />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Выключен</label>
                                                    <input type="phone" className="form-control" id="exampleInputPassword1" placeholder='Выбрать' />
                                                </div>
                                            </div>
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
            </section>*/}
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title"></h3>
                        <div className="card-tools">


                            <div className="input-group input-group-sm" >
                                <button type="button" className="btn btn-block btn-danger"
                                    onClick={() => deleteProduct()} >Удалить</button>
                            </div>

                        </div>
                    </div>
                    <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th>
                                        {/* <input type="checkbox" /> */}
                                    </th>
                                    <th>#</th>
                                    <th>Наименование</th>
                                    <th>Артикул</th>
                                    <th>Цена</th>
                                    <th>Кол-во</th>
                                    <th>Категория</th>
                                    {/* <th>Статус</th> */}
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products?.map(item =>
                                        <tr>
                                            <td><input type="checkbox" onChange={(e) =>
                                                e.target.checked
                                                    ? setId(s => [...s, item?.ID])
                                                    : setId(id.filter((el) => el !== item.ID))} /></td>
                                            <td>{item?.ID}</td>
                                            <td> рус :{item?.nameRu}
                                            <br></br>
                                            анг : {item?.nameEn} </td>
                                            <td>{item?.article}</td>
                                            <td>{item?.price}</td>
                                            <td>{item?.count}</td>
                                            <td> рус :{item?.categoryRu}
                                            <br></br>
                                            анг :{item?.categoryRu}</td>
                                            {/* <td class="project-state">
                                                <span class="badge badge-success">Success</span>
                                                <span class="badge badge-danger">Success</span>
                                            </td> */}
                                            <td >
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <NavLink to={"/products/" + item?.ID} className="btn btn-info btn-sm" >
                                                        <i class="fas fa-pencil-alt">
                                                        </i>
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

export default Products