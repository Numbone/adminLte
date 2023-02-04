import { format } from "date-fns";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { TransactionCopy } from "../api/transactions";
import ModalItem from "../modal/ModalItem";

const ChangeTransaction = () => {
  const props = useLocation();
  console.log(props);
  const navigate = useNavigate();
  const copyTrans = async (id) => {
    const { data } = await TransactionCopy(id);
    navigate("/orders");
  };
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 class="m-0">Заказы #{props?.state?.id}</h1>
            </div>

            {/* /.col */}
            <div className="col-sm-6"></div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="invoice p-3 mb-3">
                <div className="row">
                  <div className="col-12">
                    <h4>
                      {props.state == null
                        ? null
                        : format(
                            new Date(props?.state?.date),
                            "d/M/yyyy H:mm:s"
                          )}
                      <div
                        className="btn  btn-secondary btn-sm"
                        style={{ float: "right" }}
                      >
                        {props?.state?.status[0]?.status_text}
                      </div>
                    </h4>
                  </div>
                </div>
                <div className="row  invoice-info">
                  <div className="col-sm-6">
                    Данные получателя
                    <address>
                      <strong>
                        {props?.state?.user[0]?.first_name}{" "}
                        {props?.state?.user[0]?.father_name}
                      </strong>
                      <br></br>
                      {props?.state?.user[0]?.email}
                      <br></br>
                      {props?.state?.user[0]?.phone_number}
                    </address>
                    <address>
                      <strong>Данные о доставке</strong>
                      <br></br>
                      {props?.state?.delivery?.delivery_address}
                      <br></br>
                      adreess
                      <br></br>
                      Phone: (804) 123-5432
                    </address>
                    <address>
                      <strong>Заказ #{props?.state?.id} </strong>
                    </address>
                    <div>
                      <strong>Дата создания</strong>{" "}
                      {props.state == null
                        ? null
                        : format(
                            new Date(props?.state?.date),
                            "d/M/yyyy H:mm:s"
                          )}
                    </div>
                    <div>
                      <strong>Статус оплаты</strong>{" "}
                      {props?.state?.status[0]?.status_text}
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginBottom: "1rem" }}>
                  <NavLink to="/changeperson" state={props.state} className="col-12" 
                //   onClick={()=>setModalShow(true)}
                  >
                    <button type="button" class="btn btn-default float-right">
                      Редактировать данные
                    </button>
                  </NavLink>
                </div>
                <div className="row" style={{ marginBottom: "1rem" }}>
                  <NavLink to="/changeorder" state={props?.state} className="col-12">
                    <button type="button" class="btn btn-default float-right">
                      Редактировать корзину
                    </button>
                  </NavLink>
                </div>
                <div
                  className="row"
                  style={{ marginBottom: "1rem" }}
                  onClick={() => copyTrans(props?.state.id)}
                >
                  <div className="col-12">
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
                        {props?.state?.products?.map((item) => (
                          <tr>
                            <td>{item?.nameRu}</td>
                            <td>артикул</td>
                            <td>{item?.count}</td>
                          </tr>
                        ))}

                        <tr>
                          <td>
                            <strong>Сумма товаров</strong>
                          </td>
                          <td></td>
                          <td>{props?.state?.total_cost}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Промокод</strong>
                          </td>
                          <td></td>
                          <td>{props?.state?.promo_code}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Итого</strong>
                          </td>
                          <td></td>
                          <td>{props?.state?.final_payment}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ModalItem 
      show={modalShow} 
      onHide={() => setModalShow(false)}
      state={props.state?.length === 0 ? null : props }/> */}
    </div>
  );
};

export default ChangeTransaction;
