import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { saveTransactionUpdate } from "../api/transactions";
import ModalItem from "../modal/ModalItem";

const SetDataPerson = () => {
  const navigate = useNavigate();
  const props = useLocation();
  const [modalShow, setModalShow] = useState(false);
  const [email, setEmail] = useState("");
  const [father_name, setFather_name] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [second_name, setSecond_name] = useState("");
  const [cdek, setCdek] = useState(undefined);
  const [cdekSum, setCdekSum] = useState(0);

  const [checkTrans, setCheckTrans] = useState();

  const cdekCal = async (cityCode) => {
    const { data } = await axios.post(
      `https://back.lemousse.beauty/cdek/calc?city=${cityCode}`
    );
    setCdekSum(data?.total_sum);
  };
  const saveTransaction = async () => {
    try {
      const { data } = await saveTransactionUpdate(
        {
          delivery_address:
            cdek != undefined
              ? cdek?.location?.address_full
              : props?.state?.delivery?.delivery_address,
          delivery_commpany:
            cdek != undefined
              ? cdek?.owner_code
              : props?.state?.delivery?.delivery_commpany,
          delivery_cost:
            cdek != undefined ? cdekSum : props?.state?.delivery?.delivery_cost,
          delivery_point:
            cdek != undefined
              ? cdek?.code
              : props?.state?.delivery?.delivery_point,
          transaction_id: props?.state?.delivery?.transaction_id,
        },
        cdek != undefined
          ? props?.state?.total_cost + cdekSum
          : props?.state?.final_payment,
        props?.state?.id,
        [
          {
            email: email,
            father_name: father_name,
            first_name: first_name,
            id: props?.state?.user[0]?.id,
            phone_number: phone_number,
            second_name: second_name,
          },
        ]
      );
      setCheckTrans(data);
    } catch (error) {
    } finally {
      navigate("/orders");
    }
  };
  const [checkerselfOrder, setCheckerOrder] = useState(false);
  const saveTransactionSelfOrder = async () => {
    try {
      const { data } = await saveTransactionUpdate(
        {
          delivery_address: "г. Волгоград, пр. Жукова 100б ",
          delivery_commpany: "Самовызов Волгограде",
          delivery_cost: 0,
          delivery_point: "Самовызов Волгограде",
          transaction_id: props?.state?.delivery?.transaction_id,
        },

        props?.state?.final_payment,

        [
          {
            email: email,
            father_name: father_name,
            first_name: first_name,
            id: props?.state?.user[0]?.id,
            phone_number: phone_number,
            second_name: second_name,
          },
        ]
      );
      setCheckTrans(data);
    } catch (error) {
    } finally {
      navigate("/orders");
    }
  };
  useEffect(() => {
    setEmail(props?.state?.user[0]?.email);
    setFather_name(props?.state?.user[0]?.father_name);
    setFirst_name(props?.state?.user[0]?.first_name);
    setPhone_number(props?.state?.user[0]?.phone_number);
    setSecond_name(props?.state?.user[0]?.second_name);
  }, []);

  useEffect(() => {
    if (cdek != undefined) {
      cdekCal(cdek?.location?.city_code);
    }
  }, [cdek]);
  console.log(props, "props");
  console.log(cdek, "cdek");
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 class="m-0">Изменить заказ #{props?.state?.id}</h1>
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
                      {/* {format(
                          new Date(props?.state?.state?.date),
                          "dd/MM/yyyy H:mm:s"
                        )} */}
                      <div>Данные получателя</div>
                    </h4>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="article">Фамилия</label>
                  <input
                    onChange={(e) => setFather_name(e.target.value)}
                    type="text"
                    className="form-control"
                    value={father_name}
                    name="article"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="article">Имя</label>
                  <input
                    onChange={(e) => setFirst_name(e.target.value)}
                    type="text"
                    className="form-control"
                    value={first_name}
                    name="article"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="article">Отечество</label>
                  <input
                    onChange={(e) => setSecond_name(e.target.value)}
                    type="text"
                    className="form-control"
                    value={second_name}
                    name="article"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="article">Email</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="form-control"
                    value={email}
                    name="article"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="article">Телефон</label>
                  <input
                    onChange={(e) => setPhone_number(e.target.value)}
                    type="text"
                    className="form-control"
                    value={phone_number}
                    name="article"
                  />
                </div>
                {/* <div className="form-group">
                  <input type="checkbox" />
                  <label style={{ fontWeight: "400", marginLeft: "5px" }}>
                    Изменить данные пользователя
                  </label>
                </div> */}
              </div>
              <div className="row">
                <div className="col-12">
                  <h4>
                    <div>Данные о доставке</div>
                  </h4>
                </div>
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-block btn-primary"
                    onClick={() => {setModalShow(true);setCheckerOrder(false)}}
                  >
                    Выбрать ПВЗ
                  </button>
                </div>
                <div className="col-4">
                  <button
                    type="button"
                    className="btn btn-block btn-primary"
                    onClick={() => setCheckerOrder(true)}
                  >
                    Выбрать Самывызов
                  </button>
                </div>
              </div>
              <div className="row  invoice-info">
                <div className="col-sm-6">
                  <address>
                    <strong>СДЭК ПВЗ</strong>
                    <br></br>
                    Доставка ПВЗ
                    <br></br>
                    {props?.state?.delivery?.delivery_address}
                  </address>
                </div>
              </div>
              <div className="row">
                {!checkerselfOrder ? (
                  <div className="col-4">
                    <button
                      type="button"
                      className="btn btn-block btn-success"
                      onClick={() => saveTransaction()}
                    >
                      Сохранить
                    </button>
                  </div>
                ) : (
                  <div className="col-4">
                    <button
                      type="button"
                      className="btn btn-block btn-success"
                      onClick={() => saveTransactionSelfOrder()}
                    >
                      Сохранить Самовызов
                    </button>
                  </div>  
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalItem
        show={modalShow}
        onHide={() => setModalShow(false)}
        setCdek={setCdek}
      />
    </div>
  );
};

export default SetDataPerson;
