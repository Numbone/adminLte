import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ModalItem = (props) => {
    console.log(props);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body>
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
                <section className="content">
                    <div className="container-fluid">
                        <div className='row'>
                            <div className='col-12'>
                                <div className='invoice p-3 mb-3'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <h4>
                                                Time
                                                <div
                                                    className="btn  btn-secondary btn-sm"
                                                    style={{ float: 'right' }}>Status </div>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className='row  invoice-info'>
                                        <div className="col-sm-4">
                                            Данные получателя
                                            <address>
                                                <strong>Name</strong>
                                                <br></br>
                                                Email
                                                <br></br>
                                                telepone

                                            </address>
                                            <address>
                                                <strong>Данные о доставке</strong>
                                                <br></br>
                                                Delivery
                                                <br></br>
                                                adreess
                                                <br></br>
                                                Phone: (804) 123-5432

                                            </address>
                                            <address>
                                                <strong>Заказ nomer</strong>
                                            </address>
                                            <address>
                                                <div><strong>Дата создания</strong> DAtetime</div>
                                                <div><strong>Статус оплаты</strong> Status</div>
                                            </address>
                                        </div>
                                    </div>
                                    <div className='row' style={{marginBottom:'1rem'}}>
                                        <div className='col-12'>
                                            <button type="button" class="btn btn-default float-right">
                                                Редактировать данные
                                            </button>
                                        </div>
                                    </div>
                                    <div className='row' style={{marginBottom:'1rem'}}>
                                        <div className='col-12'>
                                            <button type="button" class="btn btn-default  float-right">
                                                Копировать заказ
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        
                                                        <th>Наименование </th>
                                                        <th>Артикул</th>
                                                        <th>Количество</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        
                                                        <td>Скраб</td>
                                                        <td>артикул</td>
                                                        <td>1</td>
                                                    </tr>
                                                    <tr>
                                                        
                                                        <td><strong>Сумма товаров</strong></td>
                                                        <td>100</td>
                                                        
                                                    </tr>
                                                     <tr>
                                                        
                                                        <td><strong>Промокод</strong></td>
                                                        <td>100</td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        
                                                        <td><strong>Итого</strong></td>
                                                        <td>100</td>
                                                        
                                                    </tr>
                                                   
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div >
                </section >

            </Modal.Body >
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    )
}

export default ModalItem