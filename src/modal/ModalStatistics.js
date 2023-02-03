import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ModalStatistics = (props,{data}) => {
 
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
         
            <Modal.Body>
                
                
                   <div className="container-fluid">
                            <div className='content'>
                                <div className="row" >

                                    <div class="col-sm-12">
                                        <div class="card-header">
                                            <div className='container'>
                                                <div className='row' style={{ fontWeight: '500' }}>
                                                    <h2>Статистика заказов</h2>
                                                    <div className='col-sm-12'>
                                                        <h3 class="card-title"><strong>Сумма Продукта</strong> {data?.transactions_info?.ProductCost} </h3>
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
                                                        <h3 class="card-title"> <strong>Сумма Доставки </strong>{data?.transactions_info?.DeliveryCost} </h3>
                                                    </div>
                                                    <div className='col-sm-12'>
                                                        <h3 class="card-title"> <strong>Сумма Скидки </strong> {data?.transactions_info?.DiscountCost}  </h3>
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
                                            {
                                                data?.products_info?.map((item, index) =>
                                                    <tr className={index%2===1 ?"even" :"odd"}>
                                                        <td className="dtr-control sorting_1" tabindex="0">{item?.id}</td>
                                                        <td>{item?.name}</td>
                                                        <td>{item?.product_id}</td>
                                                        <td>{item?.count}</td>
                                                        <td>{item?.price}</td>

                                                    </tr>)
                                            }




                                        </tbody>

                                    </table>
                                    </div>
                                </div>
                              
                            </div>
                            <div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal">Close</button></div>
                        </div> 

            </Modal.Body>
          
        </Modal>
    )
}

export default ModalStatistics