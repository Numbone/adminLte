
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSortBy, useTable } from 'react-table'
import { TransactionAll } from '../api/transactions'

import useColumns from '../hooks/useColumns'
import useRows from '../hooks/useRow'

const Statistics = (props) => {
    const locate = useLocation()
    console.log(locate);
    // const [data1, setData] = useState([])
    // const getTransactionAll = async () => {
    //     const { data } = await TransactionAll("", "", "", "", "", true, "Jan 2, 2006 at 3:04pm (MST)", "", 0)
    //    setData(data)
    // }
    // useLayoutEffect(() => {
    //     getTransactionAll()
    // }, [])
    // console.log(data1);
    /////////// sort 
    const columns = useColumns();
    const data = locate?.state[0]
    const table = useTable({ columns, data }, useSortBy);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = table;
    
    /// get data //
    // const [data, setData] = useState([])
    // const getTransactionAll = async () => {
    //     const { data } = await TransactionAll("", "", "", "", "", true, "Jan 2, 2006 at 3:04pm (MST)", "", 0)
    //     setData(data)
    // }
    // useEffect(() => {
    //     getTransactionAll()
    // }, [])
    // console.log(data)
    return (
        <div className='content-wrapper'>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Статистика заказов</h1>
                        </div>

                    </div>
                </div>
            </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className='row' style={{ fontWeight: '500' }}>
                                        <div className='col-sm-12'>
                                            <h3 class="card-title"><strong>Сумма Продукта</strong> {locate?.state[1]?.ProductCost} </h3>
                                        </div>
                                        <div className='col-sm-12'>
                                            <h3 class="card-title"> <strong>Сумма Доставки (OZON)</strong> </h3>
                                        </div>
                                        <div className='col-sm-12'>
                                            <h3 class="card-title"> <strong>Сумма Доставки (СДЭК)</strong> </h3>
                                        </div>
                                        <div className='col-sm-12'>
                                            <h3 class="card-title"> <strong>Сумма Доставки (СДЭК курьер)</strong> </h3>
                                        </div>
                                        <div className='col-sm-12'>
                                            <h3 class="card-title"> <strong>Сумма Доставки (Boxberry)</strong></h3>
                                        </div>
                                        <div className='col-sm-12'>
                                            <h3 class="card-title"> <strong>Сумма Доставки (Почта)</strong> </h3>
                                        </div>
                                        <div className='col-sm-12'>
                                            <h3 class="card-title"> <strong>Сумма Доставки </strong>{locate?.state[1]?.DeliveryCost} </h3>
                                        </div>
                                        <div className='col-sm-12'>
                                            <h3 class="card-title"> <strong>Сумма Скидки </strong> {locate?.state[1]?.DiscountCost}  </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4">
                                        <div className="container">
                                            {/* Apply the table props */}
                                            <table className="table table-bordered table-hover dataTable dtr-inline" {...getTableProps()}>
                                                <thead>
                                                    {headerGroups.map((headerGroup) => (
                                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                                            {headerGroup.headers.map((column) => (
                                                                // Aplicamos las propiedades de ordenación a cada columna
                                                                <th
                                                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                                                    className={
                                                                        column.isSorted
                                                                            ? column.isSortedDesc
                                                                                ? "sorting_desc"
                                                                                : "sorting_asc"
                                                                            : "sorting"
                                                                    }
                                                                >
                                                                    {column.render("Header")}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </thead>
                                                {/* Apply the table body props */}
                                                <tbody {...getTableBodyProps()}>
                                                    {
                                                        // Loop over the table rows
                                                        rows.map((row) => {
                                                            // Prepare the row for display
                                                            prepareRow(row);
                                                            return (
                                                                // Apply the row props
                                                                <tr {...row.getRowProps()}>
                                                                    {
                                                                        // Loop over the rows cells
                                                                        row.cells.map((cell) => {
                                                                            // Apply the cell props
                                                                            return (
                                                                                <td {...cell.getCellProps()}>
                                                                                    {
                                                                                        // Render the cell contents
                                                                                        cell.render("Cell")
                                                                                    }
                                                                                </td>
                                                                            );
                                                                        })
                                                                    }
                                                                </tr>
                                                            );
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
        // {/* // <div className='content-wrapper'>

        // //     <section className="content">
        // //         <div className="container-fluid">
        // //             <div className="row">

        // //                 <div className="col-12">
        // //                     <div className="card">
        // //                         <div className="card-header">
        // //                             <div className='row' style={{ fontWeight: '500' }}>
        // //                                 <div className='col-sm-12'>
        // //                                     <h3 class="card-title"><strong>Сумма Продукта</strong> data?.transactions_info?.ProductCost </h3>
        // //                                 </div>
        // //                                 <div className='col-sm-12'>
        // //                                     <h3 class="card-title"> <strong>Сумма Доставки (OZON)</strong> </h3>
        // //                                 </div>
        // //                                 <div className='col-sm-12'>
        // //                                     <h3 class="card-title"> <strong>Сумма Доставки (СДЭК)</strong> </h3>
        // //                                 </div>
        // //                                 <div className='col-sm-12'>
        // //                                     <h3 class="card-title"> <strong>Сумма Доставки (СДЭК курьер)</strong> </h3>
        // //                                 </div>
        // //                                 <div className='col-sm-12'>
        // //                                     <h3 class="card-title"> <strong>Сумма Доставки (Boxberry)</strong></h3>
        // //                                 </div>
        // //                                 <div className='col-sm-12'>
        // //                                     <h3 class="card-title"> <strong>Сумма Доставки (Почта)</strong> </h3>
        // //                                 </div>
        // //                                 <div className='col-sm-12'>
        // //                                     <h3 class="card-title"> <strong>Сумма Доставки </strong>data?.transactions_info?.DeliveryCost </h3>
        // //                                 </div>
        // //                                 <div className='col-sm-12'>
        // //                                     <h3 class="card-title"> <strong>Сумма Скидки </strong> data?.transactions_info?.DiscountCost  </h3>
        // //                                 </div>
        // //                             </div>
        // //                         </div>
        // //                         <div className="card-body">
        // //                             <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row"><div className="col-sm-12 col-md-6" /><div className="col-sm-12 col-md-6" /></div><div className="row"><div className="col-sm-12"><table id="example2" className="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
        // //                                 <thead>
        // //                                     <tr>
        // //                                         <th className="sorting sorting_asc" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">#</th>
        // //                                         <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Browser: activate to sort column ascending">Наименование</th>
        // //                                         <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Platform(s): activate to sort column ascending">Артикул</th>
        // //                                         <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="Engine version: activate to sort column ascending">Продано шт</th>
        // //                                         <th className="sorting" tabIndex={0} aria-controls="example2" rowSpan={1} colSpan={1} aria-label="CSS grade: activate to sort column ascending">Продано на сумму</th>
        // //                                     </tr>
        // //                                 </thead>
        // //                                 <tbody>
        // //                                     <Table />
        // //                                     <tr className={"odd"}>
        // //                                         <td className="dtr-control sorting_1" tabIndex={0}>Gecko</td>
        // //                                         <td>Firefox 1.0</td>
        // //                                         <td>Win 98+ / OSX.2+</td>
        // //                                         <td>1.7</td>
        // //                                         <td>A</td>
        // //                                     </tr>

        // //                                 </tbody>


        // //                             </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="example2_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="example2_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="example2_previous"><a href="#" aria-controls="example2" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="example2" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li><li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx={6} tabIndex={0} className="page-link">6</a></li><li className="paginate_button page-item next" id="example2_next"><a href="#" aria-controls="example2" data-dt-idx={7} tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div>
        // //                         </div>
        // //                     </div>
        // //                 </div>
        // //             </div>
        // //         </div>
        // //     </section>
        // // </div> */}

    )
}

export default Statistics