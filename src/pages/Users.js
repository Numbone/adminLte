import React from 'react'

const Users = () => {
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

                                    <th>#</th>
                                    <th>Имя</th>
                                    <th>Email</th>
                                    <th>Телефон</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
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

export default Users