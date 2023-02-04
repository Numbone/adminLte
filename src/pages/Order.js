import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton, Form, Modal } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { AllProduct } from "../api/product";
import {
  TransactionAll,
  transactionChangeShipment,
  transactionChangeStatus,
} from "../api/transactions";
import ModalItem from "../modal/ModalItem";
import ModalStatistics from "../modal/ModalStatistics";
import Select from "react-select";
import Example from "../modal/Example";

const Order = () => {
  ///// modalShowExample
  const [show, setShow] = useState(false);
  const [commentId, setCommentId] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setCommentId(index);
    setShow(true);
  };
  const [id, setId] = useState([]);
  /// state
  const [delivery, setDelivery] = useState("");
  const [endTime, setEndTime] = useState("");
  const [inBasket, setInBasket] = useState([]);
  const [nameORPhoneOREmail, setNameORPhoneOREmail] = useState("");
  const [notInBasket, setNotInBasket] = useState([]);
  const [notPaid, setNotPaid] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [status, setStatus] = useState("");
  const [notShipment, setNotShipment] = useState(false);
  const [transactionID, setTransactionID] = useState(0);
  /// get data //
  const [data, setData] = useState([]);

  const getTransactionAll = async () => {
    const starDate =
      startTime == ""
        ? ""
        : format(new Date(startTime), "MMM d, yyyy") + " " + "at 00:00pm (MST)";
    const EndDate =
      endTime == ""
        ? ""
        : format(new Date(endTime), "MMM d, yyyy") + " " + "at 23:59pm (MST)";
    let basket = [];
    for (let i = 0; i < inBasket.length; i++) {
      const element = inBasket[i];
      basket.push(inBasket[i]?.article);
    }
    let notBasket = [];
    for (let i = 0; i < notInBasket.length; i++) {
      const element = notInBasket[i];
      notBasket.push(notInBasket[i]?.article);
    }
    console.log(basket);
    const { data } = await TransactionAll(
      delivery,
      EndDate,
      basket,
      nameORPhoneOREmail,
      notBasket,
      Boolean(notPaid),
      starDate,
      status,
      Number(transactionID),
      Boolean(notShipment)
    );
    if (data?.products_info === null || data.transactions === null) {
      setData([]);
    }
    data?.transactions.sort(function (a, b) {
      return -(a.id - b.id || a.name.localeCompare(b.name));
    });
    setData(data);
  };
  const [product, setProduct] = useState([]);
  /////get product all
  const getProduct = async () => {
    const { data } = await AllProduct();
    setProduct(data?.all_product);
  };

  ////modal modalitem ///
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowStat, setModalShowStat] = React.useState(false);
  const [iModal, setIModal] = useState(0);
  const setIndexModal = (index) => {
    console.log(index, "/////////////index");
    setIModal(index);
    setModalShow(true);
  };
  //// checked checkbox
  const [allChecked, setAllChecked] = useState(false);
  const changeTransStatus = async (text) => {
    setId([]);
    for (let i = 0; i < id.length; i++) {
      const element = id[i];
      const data = await transactionChangeStatus(text, element);
      console.log(data);
    }
    var clist = document.getElementsByTagName("input");
    for (var i = 0; i < clist.length; ++i) {
      clist[i].checked = false;
    }
    getTransactionAll();
  };
  const changeTransShipment = async () => {
    setId([]);
    const data = await transactionChangeShipment(id);
    console.log(data);
    getTransactionAll();
  };
  const navigate = useNavigate();

  const toggle = (source) => {
    const checkboxes = document.getElementsByName("foo");
    if (source.target.checked === true) {
      for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.target.checked;
        const checker = Number(checkboxes[i].value);
        setId((s) => [...s, checker]);
      }
    } else {
      for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.target.checked;
        const checker = Number(checkboxes[i].value);
        setId([]);
      }
    }
  };
  useEffect(() => {
    getProduct();
    getTransactionAll();
  }, [modalShow, show]);
  console.log(data, "data");
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 class="m-0">Заказы</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6"></div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      <div className="col-md-12">
        <div className="card card-primary">
          <div className="card-body">
            {/* Date */}
            <div className="row">
              <div className="col-md-6">
                {" "}
                <div className="form-group">
                  <label>Заказы от даты:</label>
                  <div
                    className="input-group date"
                    id="reservationdate"
                    data-target-input="nearest"
                  >
                    <input
                      type="date"
                      className="form-control "
                      data-target="#reservationdate"
                      onChange={(e) => setStartTime(e.target.value)}
                    />
                    <div
                      className="input-group-append"
                      data-target="#reservationdate"
                      data-toggle="datetimepicker"
                    ></div>
                  </div>
                </div>
              </div>

              {/* Date and time */}
              <div className="col-md-6">
                <div className="form-group">
                  <label>Заказы до даты:</label>
                  <div
                    className="input-group date"
                    id="reservationdatetime"
                    data-target-input="nearest"
                  >
                    <input
                      type="date"
                      className="form-control "
                      data-target="#reservationdatetime"
                      onChange={(e) => setEndTime(e.target.value)}
                    />
                    <div
                      className="input-group-append"
                      data-target="#reservationdatetime"
                      data-toggle="datetimepicker"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label>ID заказа</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="ID"
                    onChange={(e) => setTransactionID(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="col-md-9">
                <div className="form-group">
                  <label>Имя,email или телефон</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Часть или слово целиком"
                    onChange={(e) => setNameORPhoneOREmail(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Способ доставки</label>
                  <Form.Select
                    onChange={(e) => setDelivery(e.target.value)}
                    className="form-control"
                    aria-label="Default select example"
                  >
                    <option value="">Все</option>
                    <option value="CDEK">CDEK</option>
                    <option value="Почта России">Почта России</option>
                    <option value="Самовызов Волгограде">
                      {" "}
                      Самовывоз в Волгограде
                    </option>
                  </Form.Select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Статус заказа</label>
                  <Form.Select
                    onChange={(e) => setStatus(e.target.value)}
                    className="form-control"
                    aria-label="Default select example"
                  >
                    <option value="">Выберите статус заказа</option>
                    <option value="В обработке">В обработке</option>
                    <option value="Обработан">Обработан</option>
                    <option value="Отправлен в сборку на склад">
                      Отправлен в сборку на склад
                    </option>
                    <option value="Собран на складе">Собран на складе</option>
                    <option value="Готов к выдаче">Готов к выдаче</option>
                    <option value="Выдан">Выдан</option>
                    <option value="Возврат">Возврат</option>
                    <option value="В ожидании">В ожидании</option>
                    <option value="Ошибка в заказе">Ошибка в заказе</option>
                    <option value="Ожидает оплаты">Ожидает оплаты</option>
                  </Form.Select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Товар в корзине</label>
                  <Select
                    onChange={(e) => setInBasket(e)}
                    options={product}
                    getOptionLabel={(item) => item?.nameRu}
                    getOptionValue={(item) => item?.article}
                    isMulti={true}
                  />
                  {/* <Form.Select
                    onChange={(e) => setInBasket(e.target.value)}
                    className="form-control"
                    aria-label="Default select example"
                  >
                    <option value="">Выберите товар </option>
                    {product?.map((item) => (
                      <option value={item?.article}>
                        {item?.artice} {item?.nameRu}
                      </option>
                    ))}
                  </Form.Select> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Товар не в корзине</label>
                  <Select
                    onChange={(e) => setNotInBasket(e)}
                    options={product}
                    getOptionLabel={(item) => item?.nameRu}
                    getOptionValue={(item) => item?.article}
                    isMulti={true}
                  />
                  {/* <Form.Select
                    onChange={(e) => setNotInBasket(e.target.value)}
                    className="form-control"
                    aria-label="Default select example"
                  >
                    <option value="">Выберите товар </option>
                    {product?.map((item) => (
                      <option value={item?.nameRu}>
                        {item?.artice} {item?.nameRu}
                      </option>
                    ))}
                  </Form.Select> */}
                </div>
              </div>
            </div>
            {/* <div className='row'>
                            <div className='col-md-12'>
                                <div className="form-group">
                                    <label>Партнер</label>
                                    <Form.Select className="form-control" aria-label="Default select example">
                                        <option></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div> */}
            {/* <div className='row'>
                            <div className='col-md-12'>
                                <div className="form-group">
                                    <label>Из сахара</label>
                                    <input className="form-control" type="text" placeholder="Выбрать"></input>
                                </div>
                            </div>
                        </div> */}
            <div className="row">
              <div className="col-md-2">
                <button
                  onClick={() => getTransactionAll()}
                  type="button"
                  class="btn btn-block btn-primary"
                >
                  Поиск
                </button>
              </div>
              <div className="col-md-2">
                <div class="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={(e) => setNotPaid(e.target.checked)}
                  />
                  <label className="form-check-label">
                    Показать неоплаченные
                  </label>
                </div>
              </div>
              <div className="col-md-2">
                <div class="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={(e) => setNotShipment(e.target.checked)}
                  />
                  <label className="form-check-label">
                    Показать без этикетки
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              <DropdownButton id="dropdown-basic-button" title="Действие ">
                <Dropdown.Item onClick={() => changeTransStatus("В обработке")}>
                  В обработке
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeTransStatus("Обработан")}>
                  Обработан
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    changeTransStatus("Отправлен в сборку на склад")
                  }
                >
                  Отправлен в сборку на склад
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => changeTransStatus("Собран на складе")}
                >
                  Собран на складе
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => changeTransStatus("Готов к выдаче")}
                >
                  Готов к выдаче
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeTransStatus("Выдан")}>
                  Выдан
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeTransStatus("Возврат")}>
                  Возврат
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => changeTransStatus("Ошибка в заказе")}
                >
                  Ошибка в заказе
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => changeTransStatus("Ожидает оплаты")}
                >
                  Ожидает оплаты
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => changeTransShipment()}>
                  Отправить СДЕК
                </Dropdown.Item>
              </DropdownButton>
            </h3>
            <div className="card-tools">
              {data.length == 0 ? null : (
                <div
                  className="input-group input-group-sm"
                  style={{ width: 250 }}
                >
                  <button
                    type="button"
                    class="btn btn-block"
                    onClick={() =>
                      navigate("/statistics", {
                        state: {
                          0: data?.products_info,
                          1: data.transactions_info,
                        },
                      })
                    }
                  >
                    Открыть статистику
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="card-body table-responsive p-0">
            <table className="table table-hover text-nowrap table-striped">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" onChange={(e) => toggle(e)} />
                  </th>
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
                {data?.transactions?.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        name="foo"
                        value={item?.id}
                        // checked={checked}
                        onChange={(e) =>
                          e.target.checked
                            ? setId((s) => [...s, item?.id])
                            : setId(id.filter((el) => el !== item.id))
                        }
                      />
                    </td>
                    <td>{item?.id}</td>
                    <td>
                      {item?.user[0]?.first_name} {item?.user[0]?.father_name}
                    </td>
                    <td>{item?.user[0]?.email}</td>
                    <td>{item?.user[0]?.phone_number}</td>
                    <td>
                      {item?.products?.map((data) => (
                        <div>
                          {data?.nameRu} {data?.count} шт
                        </div>
                      ))}
                    </td>
                    <td>{item?.total_cost}</td>
                    <td>{item?.delivery?.delivery_commpany}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-block btn-secondary btn-sm"
                      >
                        {item?.status[0]?.status_text}{" "}
                      </button>
                    </td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <NavLink
                          to="/changetransaction"
                          state={data.transactions[index]}
                        >
                          <i
                            // onClick={() => setIndexModal(index)}
                            className="fas fa-eye"
                            style={{ marginRight: "5px" }}
                          ></i>
                        </NavLink>

                        <div class="dropdown">
                          <div>
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            />
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                              x-placement="bottom-start"
                              style={{
                                position: "absolute",
                                transform: "translate3d(0px, 38px, 0px)",
                                top: 0,
                                left: 0,
                                willChange: "transform",
                              }}
                            >
                              <div
                                className="dropdown-item"
                                onClick={() => handleShow(item?.id)}
                              >
                                {item?.comment === "" ? (
                                  <>Написать комментарий</>
                                ) : (
                                  <>{item?.comment}</>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Example
              commentId={commentId}
              show={show}
              handleClose={handleClose}
            />
            <ModalItem
              show={modalShow}
              onHide={() => setModalShow(false)}
              state={data?.length === 0 ? null : data.transactions[iModal]}
            />
            <ModalStatistics
              show={modalShowStat}
              onHide={() => setModalShowStat(false)}
              state={data?.length === 0 ? null : data}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
