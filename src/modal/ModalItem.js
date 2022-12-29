import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ModalItem = (props) => {
    console.log(props.state);
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
                                <h1 class="m-0">Заказы #{props?.state?.id}</h1>
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
                                                {props?.state?.date}
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
                                                <strong>{props?.state?.user[0]?.first_name} {props?.state?.user[0]?.father_name}</strong>
                                                <br></br>
                                                {props?.state?.user[0]?.email}
                                                <br></br>
                                                {props?.state?.user[0]?.phone_number}

                                            </address>
                                            <address>
                                                <strong>Данные о доставке</strong>
                                                <br></br>
                                                {props?.state?.delivery}
                                                <br></br>
                                                adreess
                                                <br></br>
                                                Phone: (804) 123-5432

                                            </address>
                                            <address>
                                                <strong>Заказ #{props?.state?.id} </strong>
                                            </address>
                                            <address>
                                                <div><strong>Дата создания</strong> {props?.state?.date}</div>
                                                <div><strong>Статус оплаты</strong> {props?.state?.status[0]?.status_text}</div>
                                            </address>
                                        </div>
                                    </div>
                                    <div className='row' style={{ marginBottom: '1rem' }}>
                                        <div className='col-12'>
                                            <button type="button" class="btn btn-default float-right">
                                                Редактировать данные
                                            </button>
                                        </div>
                                    </div>
                                    <div className='row' style={{ marginBottom: '1rem' }}>
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
                                                    {
                                                        props?.state?.products?.map(item =>
                                                            <tr>

                                                                <td>{item?.name}</td>
                                                                <td>артикул</td>
                                                                <td>{item?.count}</td>
                                                            </tr>)
                                                    }

                                                    <tr>

                                                        <td><strong>Сумма товаров</strong></td>
                                                        <td>{props?.state?.total_cost}</td>

                                                    </tr>
                                                    <tr>

                                                        <td><strong>Промокод</strong></td>
                                                        <td>{props?.state?.promo_code}</td>

                                                    </tr>
                                                    <tr>

                                                        <td><strong>Итого</strong></td>
                                                        <td>{props?.state?.final_payment}</td>

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