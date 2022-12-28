import React from 'react'
import { Form } from 'react-bootstrap'

const Products = () => {
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
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        {/* left column */}
                        <div className="col-md-12">
                            {/* general form elements */}
                            <div className="card card-primary">

                                {/* /.card-header */}
                                {/* form start */}
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
                                    {/* /.card-body */}
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">Поиск</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="col-md-12">
                <div className="card">

                    <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>#</th>
                                    <th>Наименование</th>
                                    <th>Артикул</th>
                                    <th>Цена</th>
                                    <th>Кол-во</th>
                                    <th>Статистика</th>
                                    <th>Статус</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>Наименование</td>
                                    <td>Артикул</td>
                                    <td>Цена</td>
                                    <td>Кол-во</td>
                                    <td>Статистика</td>
                                    <td class="project-state">
                                        <span class="badge badge-success">Success</span>
                                        <span class="badge badge-danger">Success</span>
                                    </td>
                                    <td >
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <a class="btn btn-info btn-sm" href="#">
                                                <i class="fas fa-pencil-alt">
                                                </i>
                                            </a>

                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products