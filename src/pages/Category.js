import React from 'react'

const Category = () => {
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 class="m-0">Все категории</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">

                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            <div className="col-md-12">
                <div className="card">

                    <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>#</th>
                                    <th>Наименование</th>
                                    <th>Описание</th>
                                    <th>Ссылка</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>#</td>
                                    <td>Наименование</td>
                                    <td>Описание</td>
                                    <td>Ссылка</td>
                                    <td >
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <a class="btn btn-info btn-sm" href="#">
                                                <i class="fas fa-pencil-alt">
                                                </i>
                                            
                                            </a>

                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>#</td>
                                    <td>Наименование</td>
                                    <td>Описание</td>
                                    <td>Ссылка</td>
                                    <td >
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <a class="btn btn-info btn-sm" href="#">
                                                <i class="fas fa-pencil-alt">
                                                </i>
                                            
                                            </a>

                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>#</td>
                                    <td>Наименование</td>
                                    <td>Описание</td>
                                    <td>Ссылка</td>
                                    <td >
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <a class="btn btn-info btn-sm" href="#">
                                                <i class="fas fa-pencil-alt">
                                                </i>
                                            
                                            </a>

                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>#</td>
                                    <td>Наименование</td>
                                    <td>Описание</td>
                                    <td>Ссылка</td>
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

export default Category