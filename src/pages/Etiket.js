import React from 'react'

const Etiket = () => {
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 class="m-0">Этикетки ШК</h1>
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
                                            <label htmlFor="exampleInputEmail1">Способ доставки</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder='СДЭК' />
                                        </div>

                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer">
                                        <div className='row'>
                                            <div class="col-sm-1">
                                                <button type="submit" className="btn btn-primary">Поиск</button>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" />
                                                    <label class="form-check-label">Показать неоплаченные</label>
                                                </div>
                                            </div>
                                        </div>
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
                                    <th>Файл</th>
                                    <th>Комментарий</th>
                                    <th>Количество этикеток</th>
                                    <th>Уникальных заказов</th>
                                    <th>Дата создания </th>
                                    <th> </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>Файл</td>
                                    <td>Комментарий</td>
                                    <td>Количество этикеток</td>
                                    <td>Уникальных заказов</td>
                                    <td>Дата создания </td>
                                    <td >
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <i class="far fa-file-alt mr-1"></i>
                                            <i class="fas fa-comments"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>183</td>
                                    <td>John Doe</td>
                                    <td>"@mail.ru"</td>
                                    <td>+79012342656</td>
                                    <td >

                                    </td>
                                </tr>
                                <tr>
                                    <td>183</td>
                                    <td>John Doe</td>
                                    <td>"@mail.ru"</td>
                                    <td>+79012342656</td>
                                    <td >
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <i className='fas fa-eye' style={{ marginRight: '5px' }}></i>

                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>183</td>
                                    <td>John Doe</td>
                                    <td>"@mail.ru"</td>
                                    <td>+79012342656</td>
                                    <td >
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <i className='fas fa-eye' style={{ marginRight: '5px' }}></i>

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

export default Etiket