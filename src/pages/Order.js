import React from 'react'

const Order = () => {
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
                                    <input type="date" className="form-control datetimepicker-input" data-target="#reservationdate" />
                                    <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                                        <div className="input-group-text"><i className="fa fa-calendar" /></div>
                                    </div>
                                </div>
                            </div></div>

                            {/* Date and time */}
                            <div className='col-md-6'>
                                <div className="form-group">
                                    <label>Заказы до даты:</label>
                                    <div className="input-group date" id="reservationdatetime" data-target-input="nearest">
                                        <input type="date" className="form-control datetimepicker-input" data-target="#reservationdatetime" />
                                        <div className="input-group-append" data-target="#reservationdatetime" data-toggle="datetimepicker">
                                            <div className="input-group-text"><i className="fa fa-calendar" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className="form-group">
                                    <label>ID заказа</label>
                                    <input class="form-control" type="text" placeholder="ID"></input>
                                </div>
                            </div>
                            <div className='col-md-9'>
                                <div className="form-group">
                                    <label>Имя,email или телефон</label>
                                    <input class="form-control" type="text" placeholder="Часть или слово целиком"></input>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="form-group">
                                    <label>Кроме IDs (несколько через запятую)</label>
                                    <input class="form-control" type="text" placeholder="ID"></input>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="form-group">
                                    <label>Способ доставки</label>
                                    <input class="form-control" type="text" placeholder="Выбрать"></input>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group">
                                    <label>Статус заказа</label>
                                    <input class="form-control" type="text" placeholder="Выбрать"></input>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="form-group">
                                    <label>Товар в корзине</label>
                                    <input class="form-control" type="text" placeholder="Выбрать"></input>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="form-group">
                                    <label>Товар не в корзине</label>
                                    <input class="form-control" type="text" placeholder="Выбрать"></input>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="form-group">
                                    <label>Партнер</label>
                                    <input class="form-control" type="text" placeholder="Выбрать"></input>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="form-group">
                                    <label>Из сахара</label>
                                    <input class="form-control" type="text" placeholder="Выбрать"></input>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-2'>
                                <button type="button" class="btn btn-block btn-primary">Поиск</button>
                            </div>
                            <div className='col-md-3'>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" />
                                    <label class="form-check-label">Показать неоплаченные</label>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" />
                                    <label class="form-check-label">Показать без этикетки</label>
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
                            <div className="input-group input-group-sm" style={{ width: 150 }}>
                                <button type="button" class="btn btn-block btn-default">Default</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th><input  type="checkbox" /></th>
                                    <th>User</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Reason</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>183</td>
                                    <td>John Doe</td>
                                    <td>11-7-2014</td>
                                    <td><span className="tag tag-success">Approved</span></td>
                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                </tr>
                                <tr>
                                    <td>219</td>
                                    <td>Alexander Pierce</td>
                                    <td>11-7-2014</td>
                                    <td><span className="tag tag-warning">Pending</span></td>
                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                </tr>
                                <tr>
                                    <td>657</td>
                                    <td>Bob Doe</td>
                                    <td>11-7-2014</td>
                                    <td><span className="tag tag-primary">Approved</span></td>
                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                </tr>
                                <tr>
                                    <td>175</td>
                                    <td>Mike Doe</td>
                                    <td>11-7-2014</td>
                                    <td><span className="tag tag-danger">Denied</span></td>
                                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Order