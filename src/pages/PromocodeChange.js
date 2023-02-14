import { format } from "date-fns";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { promocodeCreate } from "../api/promocode";

const PromocodeChange = () => {
    const navigate=useNavigate()
  const [code, setCode] = useState("");
  const [count, setCount] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [type, setType] = useState("");
  const updatePromo = async () => {
    const data = await promocodeCreate(
      code,
      Number(count),
      Number(discount),
      type,
      format(Date.now(), "MMM d, yyyy") +
      " " +
      "at" +
      " " +
      format(Date.now(), "hh:mm") +
      "pm" +
      " " +
      "(MST)"
    );
    navigate("/promocode")
  };
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 class="m-0">Добавить купоны на скидку</h1>
            </div>

            <div className="col-sm-6"></div>
          </div>
        </div>
      </div>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-primary">
                <div className="card-body">
                 
                  <div className="form-group ">
                    <input
                      onChange={(e) => setType(e.target.value)}
                      className="custom_checbox"
                      type="radio"
                      id="1"
                      name="rub"
                      value="Скидка в рублях на корзину"
                    ></input>
                    <label>Скидка в рублях на корзину</label>
                  </div>
                  <div className="form-group ">
                    <input
                      onChange={(e) => setType(e.target.value)}
                      className="custom_checbox"
                      type="radio"
                      id="1"
                      name="rub"
                      value="Скидка в процентах на корзину"
                    ></input>
                    <label>Скидка в процентах на корзину</label>
                  </div>
                  <div className="form-group ">
                    <input
                      onChange={(e) => setType(e.target.value)}
                      className="custom_checbox"
                      type="radio"
                      id="1"
                      name="rub"
                      value="Скидка в процентах на один товар"
                    ></input>
                    <label>Скидка в процентах на один товар</label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Скидка</label>
                    <input
                      onChange={(e) => setDiscount(e.target.value)}
                      type="number"
                      className="form-control"
                    />
                  </div>
                  {/* <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Количество использования
                    </label>
                    <input
                      onChange={(e) => setCount(e.target.value)}
                      type="number"
                      className="form-control"
                    />
                  </div> */}
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                        Введите промокоды по одному в строке
                        <span style={{color:'yellow'}}>
                            Не больше 200 промокодов за раз 
                        </span>
                    </label>
                    <textarea 
                        rows={4}
                      type="email"
                      className="form-control"
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                </div>

                <div className="card-footer">
                  <button
                    className="btn btn-primary"
                    onClick={() => updatePromo()}
                  >
                    Добавить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromocodeChange;
