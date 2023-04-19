import { format } from "date-fns";
import React, { forwardRef, useEffect, useState } from "react";
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
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pagination from "react-bootstrap/Pagination";
const Order = () => {
  ///// modalShowExample
  const [show, setShow] = useState(false);
  const [commentId, setCommentId] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setCommentId(index);
    setShow(true);
  };
  ////limit
  const [limit, setLimit] = useState(0);
  //////////
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
  const [transStatus, setTransStatus] = useState("");
  /// get data //
  const [data, setData] = useState([]);
  const [checkerCopy,setCheckerCopy]=useState([])
  const getTransactionAll = async () => {
    const starDate =
      startTime == ""
        ? ""
        : format(new Date(startTime), "MMM d, yyyy") +
          " " +
          "at" +
          " " +
          format(new Date(startTime), "hh:mm") +
          "pm" +
          " " +
          "(MST)";
    const EndDate =
      endTime == ""
        ? ""
        : format(new Date(endTime), "MMM d, yyyy") +
          " " +
          "at" +
          " " +
          format(new Date(endTime), "hh:mm") +
          "pm" +
          " " +
          "(MST)";
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
    for (let w = 0; w < data?.transactions?.length; w++) {
      const element = data?.transactions[w]?.status;
      console.log(element);
      for (let m = 0; m < element?.length; m++) {
        let res = element[m];
        console.log(res);
        const date = new Date(res?.status_time);
        date.setHours(date.getHours() - 6);
        const formattedDate = format(date, "yyyy-MM-dd'T'HH:mm:ss.SSS");
        res.status_time = formattedDate;
        console.log(formattedDate);
      }
    }
    setLimit(Math.ceil(data?.transactions.length));
    setData(data);
    let res=[]
    const result=data?.transactions.filter(item=>item?.trasaction_copy_id!==0)
    for (let s = 0; s < result.length; s++) {
      const element = result[s];
      res.push(element.trasaction_copy_id)
    }
    const uniqueArr = [...new Set(res)];
    setCheckerCopy(uniqueArr)
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
    var clist = document.getElementsByTagName("input");
    for (var i = 0; i < clist.length; ++i) {
      clist[i].checked = false;
    }
    console.log(data);
    setActivePagi(1);
    getTransactionAll();
  };
  console.log(id)
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
  /////custom input
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="form-control justify-content-start "
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

  ///pagination
  const [portion, setPortion] = useState(50);
  const [activePagi, setActivePagi] = useState(1);

  let active = activePagi;
  let pagi = [];
  for (let number = 1; number <= limit; number++) {
    pagi.push(
      <Pagination.Item
        key={number}
        active={number === active}
        value={number}
        onClick={() => {
          setActivePagi(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    getProduct();
    getTransactionAll();
  }, [modalShow, show, limit]);

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
                  {/* <div
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
                  </div> */}
                  <ReactDatePicker
                    selected={startTime}
                    onChange={(date) => setStartTime(date)}
                    locale="pt-BR"
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="Pp"
                    customInput={<ExampleCustomInput />}
                    isClearable
                  />
                </div>
              </div>

              {/* Date and time */}
              <div className="col-md-6">
                <div className="form-group">
                  <label>Заказы до даты:</label>
                  {/* <div
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
                  </div> */}
                  <ReactDatePicker
                    selected={endTime}
                    onChange={(date) => setEndTime(date)}
                    locale="pt-BR"
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="Pp"
                    customInput={<ExampleCustomInput />}
                    isClearable
                  />
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
                    placeholder="Выберите"
                    styles={{
                      multiValue: (base) => ({
                        ...base,
                        backgroundColor: "#0069d9",
                        color: "white",
                      }),
                      multiValueLabel: (base) => ({
                        ...base,
                        color: "white",
                      }),
                    }}
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
                    placeholder="Выберите"
                    getOptionLabel={(item) => item?.nameRu}
                    getOptionValue={(item) => item?.article}
                    isMulti={true}
                    styles={{
                      multiValue: (base) => ({
                        ...base,
                        backgroundColor: "#0069d9",
                        color: "white",
                      }),
                      multiValueLabel: (base) => ({
                        ...base,
                        color: "white",
                      }),
                    }}
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
              <DropdownButton
                id="dropdown-basic-button"
                title={transStatus === "" ? "Действие" : transStatus}
              >
                <Dropdown.Item onClick={() => setTransStatus("В обработке")}>
                  В обработке
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setTransStatus("Обработан")}>
                  Обработан
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setTransStatus("Отправлен в сборку на склад")}
                >
                  Отправлен в сборку на склад
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setTransStatus("Собран на складе")}
                >
                  Собран на складе
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setTransStatus("Готов к выдаче")}>
                  Готов к выдаче
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setTransStatus("Выдан")}>
                  Выдан
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setTransStatus("Возврат")}>
                  Возврат
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setTransStatus("Ошибка в заказе")}
                >
                  Ошибка в заказе
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setTransStatus("Ожидает оплаты")}>
                  Ожидает оплаты
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => setTransStatus("Отправить СДЕК")}
                  // onClick={() => changeTransShipment()}
                >
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
          {transStatus != "" && (
            <div className="card-header">
              <h3 className="card-title">
                {transStatus != "Отправить СДЕК" ? (
                  <button
                    type="button"
                    className="btn btn-block btn-primary"
                    onClick={() => changeTransStatus(transStatus)}
                  >
                    Применить
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-block btn-primary"
                    onClick={() => changeTransShipment()}
                  >
                    Применить
                  </button>
                )}
              </h3>
            </div>
          )}

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
                {data?.transactions?.map(
                  (item, index) =>
                    (activePagi - 1) * portion <= index &&
                    index < activePagi * portion && (
                      <tr key={index}>
                        <td>
                          <input
                            type="checkbox"
                            name="foo"
                            value={item?.id}
                            onChange={(e) =>
                              e.target.checked
                                ? setId((s) => [...s, item?.id])
                                : setId(id.filter((el) => el !== item.id))
                            }
                          />
                        </td>
                        <td>
                          <div
                            className="real__id"
                            style={checkerCopy.includes(item?.id)?{background:"blue"}:undefined}
                          >
                            {item?.id}
                          </div>
                          {item?.trasaction_copy_id !== 0 && (
                            <div className="copy__id">
                              {item?.trasaction_copy_id}
                            </div>
                          )}
                        </td>
                        <td>
                          {item?.user[0]?.first_name}{" "}
                          {item?.user[0]?.father_name}
                        </td>
                        <td>{item?.user[0]?.email}</td>
                        <td>{item?.user[0]?.phone_number}</td>
                        <td>
                          {item?.products?.map((data) => (
                            <div>
                              {data?.article} {data?.count} шт
                            </div>
                          ))}
                        </td>
                        <td>{item?.total_cost}</td>
                        <td>{item?.delivery?.delivery_commpany}</td>
                        <td>
                          <button
                            type="button"
                            className={
                              "btn btn-block   btn-sm" +
                              " " +
                              item?.status[0]?.status_text
                            }
                          >
                            {item?.status[0]?.status_text}{" "}
                          </button>
                          <>{item?.comment}</>
                        </td>
                        <td>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <NavLink
                              to="/changetransaction"
                              state={data.transactions[index]}
                            >
                              <i
                                // onClick={() => setIndexModal(index)}
                                className="fas fa-eye btn btn-block btn-default"
                                style={{ marginRight: "5px" }}
                              ></i>
                            </NavLink>

                            <div class="dropdown ">
                              <div>
                                <button
                                  className="btn btn-default btn-block  dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  onClick={() =>
                                    item?.comment === ""
                                      ? handleShow(item?.id)
                                      : null
                                  }
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
                                    <>Комментарий</>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )
                )}
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
        <div className="pagination__bottom">
          <div>
            <Pagination className="pagi">
              {Array.from({ length: limit / portion + 1 }, (_, i) => i).map(
                (_, i) => (
                  <Pagination.Item
                    onClick={() => setActivePagi(i + 1)}
                    active={i + 1 === activePagi}
                  >
                    {i + 1}
                  </Pagination.Item>
                )
              )}
            </Pagination>
          </div>
          <div>
            <Pagination className="pagi">
              <Pagination.Item
                onClick={() => setPortion(50)}
                active={portion === 50}
              >
                50
              </Pagination.Item>
              <Pagination.Item
                onClick={() => {
                  setPortion(100);
                  setActivePagi(1);
                }}
                active={portion === 100}
              >
                100
              </Pagination.Item>
              <Pagination.Item
                onClick={() => {
                  setPortion(500);
                  setActivePagi(1);
                }}
                active={portion === 500}
              >
                500
              </Pagination.Item>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
