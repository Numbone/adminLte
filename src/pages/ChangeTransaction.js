import { format } from "date-fns";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { TransactionCopy } from "../api/transactions";
import Timeline from "../components/Timeline";
import ModalItem from "../modal/ModalItem";
import { registerLocale } from "react-datepicker";
import { enUS } from "date-fns/locale";
import { ru } from "date-fns/locale";
const ChangeTransaction = () => {
  const props = useLocation();
  let dasa
  if (props.state.length===2){
    delete props.state[0]?.user
    props.state={...props?.state[0],"user":[props?.state[1]]}
  }

  const navigate = useNavigate();
  const copyTrans = async (id) => {
    const { data } = await TransactionCopy(id);
    navigate("/orders");
  };
  const [modalShow, setModalShow] = useState(false);
  const date = new Date(Date.UTC(
    parseInt(props?.state?.date.substr(0, 4)), // Year
    parseInt(props?.state?.date.substr(5, 2)) - 1, // Month (subtract 1 to adjust for zero-based index)
    parseInt(props?.state?.date.substr(8, 2)), // Day
    parseInt(props?.state?.date.substr(11, 2))-6, // Hours
    parseInt(props?.state?.date.substr(14, 2)), // Minutes
    parseInt(props?.state?.date.substr(17, 2)), // Seconds
    parseInt(props?.state?.date.substr(20, 3)) // Milliseconds
  ));
  console.log(props)
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
              <div className="row">
                {/* left column */}
                <div className="col-12 ">
                  {/* general form elements */}
                  <div
                    className="card card-primary card-outline card-tabs"
                    style={{ marginBottom: "0" }}
                  >
                    <div className="card-header p-0 pt-1 border-bottom-0">
                      <ul
                        className="nav nav-tabs"
                        id="custom-tabs-one-tab"
                        role="tablist"
                      >
                        <li className="nav-item ">
                          <a
                            className="nav-link active"
                            id="custom-tabs-one-home-tab"
                            data-toggle="pill"
                            href="#custom-tabs-one-home"
                            role="tab"
                            aria-controls="custom-tabs-one-home"
                            aria-selected="true"
                          >
                            Добавление о заказе
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="custom-tabs-one-profile-tab"
                            data-toggle="pill"
                            href="#custom-tabs-one-profile"
                            role="tab"
                            aria-controls="custom-tabs-one-profile"
                            aria-selected="false"
                          >
                            Статус
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="invoice p-3 mb-3">
                <div className="tab-content" id="custom-tabs-one-tabContent">
                  <div
                    className="tab-pane fade active show"
                    id="custom-tabs-one-home"
                    role="tabpanel"
                    aria-labelledby="custom-tabs-one-home-tab"
                  >
                    <>
                      <div className="row">
                        <div className="col-12">
                          <h4>
                            {props.state == null
                              ? null
                              : format(
                                  new Date(date),
                                  "d/M/yyyy H:mm:s ",
                                )}
                            <div
                              className={
                                "btn  btn-secondary btn-sm" +
                                " " +
                                props?.state?.status[0]?.status_text
                              }
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
                            {/* Phone: {props?.state?.user?.[0].phone_number} */}
                          </address>
                          <address>
                            <strong>Заказ #{props?.state?.id} </strong>
                          </address>
                          <div>
                            <strong>Дата создания</strong>{" "}
                            {props.state == null
                              ? null
                              :  format(
                                  new Date(date),
                                  "d/M/yyyy H:mm:s ",
                                )}
                          </div>
                          <div>
                            <strong>Статус оплаты</strong>{" "}
                            {props?.state?.status?.[0].status_text === "Возврат" ||props?.state?.status?.[0].status_text === "Ошибка в заказе"||props?.state?.status?.[0].status_text==="Ожидает оплаты" 
                              ? "Не оплачен"
                              : "Оплачен"}
                          </div>
                        </div>
                      </div>
                      <div className="row" style={{ marginBottom: "1rem" }}>
                        <NavLink
                          to="/changeperson"
                          state={props.state}
                          className="col-12"
                          //   onClick={()=>setModalShow(true)}
                        >
                          <button
                            type="button"
                            class="btn btn-default float-right"
                          >
                            Редактировать данные
                          </button>
                        </NavLink>
                      </div>
                      <div className="row" style={{ marginBottom: "1rem" }}>
                        <NavLink
                          to="/changeorder"
                          state={props?.state}
                          className="col-12"
                        >
                          <button
                            type="button"
                            class="btn btn-default float-right"
                          >
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
                          <button
                            type="button"
                            class="btn btn-default  float-right"
                          >
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
                    </>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="custom-tabs-one-profile"
                    role="tabpanel"
                    aria-labelledby="custom-tabs-one-profile-tab"
                  >
                  <Timeline
                  dates={props?.state?.status}/>
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
