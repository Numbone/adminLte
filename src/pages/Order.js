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
                            <div className="input-group input-group-sm" style={{ width: 250 }}>
                                <button type="button" class="btn btn-block" data-toggle="modal" data-target=".bd-example-modal-lg">Открыть статистику</button>
                            </div>
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
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>183</td>
                                    <td>John Doe</td>
                                    <td>"@mail.ru"</td>
                                    <td>+79012342656</td>
                                    <td>basket</td>
                                    <td>Сумма</td>
                                    <td>Доставка</td>
                                    <td><button type="button" class="btn btn-block btn-secondary btn-sm">В обработке    </button></td>
                                    <td >
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <i className='fas fa-eye' style={{ marginRight: '5px' }}></i>
                                            <div class="dropdown">
                                                <div>
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style={{ position: 'absolute', transform: 'translate3d(0px, 38px, 0px)', top: 0, left: 0, willChange: 'transform' }}>
                                                        <a className="dropdown-item" href="#">1</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>183</td>
                                    <td>John Doe</td>
                                    <td>"@mail.ru"</td>
                                    <td>+79012342656</td>
                                    <td>basket</td>
                                    <td>Сумма</td>
                                    <td>Доставка</td>
                                    <td><button type="button" class="btn btn-block btn-secondary btn-sm">В обработке    </button></td>
                                    <td >
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <i className='fas fa-eye' style={{ marginRight: '5px' }}></i>
                                            <div class="dropdown">
                                                <div>
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style={{ position: 'absolute', transform: 'translate3d(0px, 38px, 0px)', top: 0, left: 0, willChange: 'transform' }}>
                                                        <a className="dropdown-item" href="#">1</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>183</td>
                                    <td>John Doe</td>
                                    <td>"@mail.ru"</td>
                                    <td>+79012342656</td>
                                    <td>basket</td>
                                    <td>Сумма</td>
                                    <td>Доставка</td>
                                    <td><button type="button" class="btn btn-block btn-secondary btn-sm">В обработке    </button></td>
                                    <td >
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <i className='fas fa-eye' style={{ marginRight: '5px' }}></i>
                                            <div class="dropdown">
                                                <div>
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style={{ position: 'absolute', transform: 'translate3d(0px, 38px, 0px)', top: 0, left: 0, willChange: 'transform' }}>
                                                        <a className="dropdown-item" href="#">1</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>183</td>
                                    <td>John Doe</td>
                                    <td>"@mail.ru"</td>
                                    <td>+79012342656</td>
                                    <td>basket</td>
                                    <td>Сумма</td>
                                    <td>Доставка</td>
                                    <td>

                                        <button type="button" class="btn btn-block btn-secondary btn-sm">В обработке    </button>

                                    </td>
                                    <td >
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <i className='fas fa-eye' style={{ marginRight: '5px' }}></i>
                                            <div class="dropdown">
                                                <div>
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style={{ position: 'absolute', transform: 'translate3d(0px, 38px, 0px)', top: 0, left: 0, willChange: 'transform' }}>
                                                        <a className="dropdown-item" href="#">1</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div className="container-fluid">
                            <div className="row" >

                                <div class="col-sm-12">
                                    <div class="card-header">
                                        <div className='container'>
                                            <div className='row' style={{ fontWeight: '500' }}>
                                                <h2>Статистика заказов</h2>
                                                <div className='col-sm-12'>
                                                    <h3 class="card-title">Сумма Доставки </h3>
                                                </div>
                                                <div className='col-sm-12'>
                                                    <h3 class="card-title">Сумма Доставки (OZON)</h3>
                                                </div>
                                                <div className='col-sm-12'>
                                                    <h3 class="card-title">Сумма Доставки (СДЭК) </h3>
                                                </div>
                                                <div className='col-sm-12'>
                                                    <h3 class="card-title">Сумма Доставки (СДЭК курьер) </h3>
                                                </div>
                                                <div className='col-sm-12'>
                                                    <h3 class="card-title">Сумма Доставки (Boxberry)</h3>
                                                </div>
                                                <div className='col-sm-12'>
                                                    <h3 class="card-title">Сумма Доставки (Почта) </h3>
                                                </div>
                                                <div className='col-sm-12'>
                                                    <h3 class="card-title">Сумма Доставки </h3>
                                                </div>
                                                <div className='col-sm-12'>
                                                    <h3 class="card-title">Сумма Скидки  </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12"><table id="example2" class="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
                                    <thead>
                                        <tr>
                                            <th class="sorting sorting_asc" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending">#</th>
                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">Наименование</th>
                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending">Артикул</th>
                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Engine version: activate to sort column ascending">Продано шт</th>
                                            <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="CSS grade: activate to sort column ascending">Продано на сумму</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="odd">
                                            <td class="dtr-control sorting_1" tabindex="0">1</td>
                                            <td>Firefox 1.0</td>
                                            <td>Win 98+ / OSX.2+</td>
                                            <td>1.7</td>
                                            <td>A</td>
                                        </tr>
                                        <tr class="even">
                                            <td class="dtr-control sorting_1" tabindex="0">1</td>
                                            <td>Firefox 1.5</td>
                                            <td>Win 98+ / OSX.2+</td>
                                            <td>1.8</td>
                                            <td>A</td>
                                        </tr>
                                        <tr class="odd">
                                            <td class="dtr-control sorting_1" tabindex="0">1</td>
                                            <td>Firefox 2.0</td>
                                            <td>Win 98+ / OSX.2+</td>
                                            <td>1.8</td>
                                            <td>A</td>
                                        </tr>
                                        <tr class="even">
                                            <td class="dtr-control sorting_1" tabindex="0">1</td>
                                            <td>Firefox 3.0</td>
                                            <td>Win 2k+ / OSX.3+</td>
                                            <td>1.9</td>
                                            <td>A</td>
                                        </tr>

                                    </tbody>

                                </table></div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                        </div>

                    </div>
                </div>
            </div>


        </div >
    )
}

export default Order