import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  promocodeAll,
  promocodeCreate,
  promocodeFilter,
} from "../api/promocode";

const PromocodePage = () => {
  const [data, setData] = useState([]);

  const getPromocode = async () => {
    const { data } = await promocodeAll();
    setData(data);
  };
  const [code, setCode] = useState("");
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [type, setType] = useState("");

  const promode = async () => {
    if (code === "") {
      getPromocode();
    } else {
      const { data } = await promocodeFilter(code);
      console.log(data, "????????////////////");
      setData([data]);
    }
  };
  useEffect(() => {
    getPromocode();
  }, []);
  console.log(data);
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 class="m-0">Промокоды и купоны</h1>
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
            <div className="col-md-12">
              <div className="card card-primary">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Промокод</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Часть или целиком"
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                </div>

                <div className="card-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => promode()}
                  >
                    Поиск
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="content">
        <div className="container-fluid">
          <div className="row">

            <div className="col-md-12">

              <div className="card card-primary">


          
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Купон</label>
                      <textarea
                        type="email"
                        className="form-control"
                        onChange={(e) => setCode(e.target.value)}
                        
                      />
                    </div>
                    <div className="form-group ">
                      <input
                        onChange={(e) => setType(e.target.value)}
                        className="custom_checbox"
                        type="radio"
                        id="1"
                        name='rub'
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
                        name='rub'
                        value="Скидка в процентах на корзину"></input>
                      <label>Скидка в процентах на корзину</label>
                    </div>
                    <div className="form-group ">
                      <input
                        onChange={(e) => setType(e.target.value)}
                        className="custom_checbox"
                        type="radio"
                        id="1"
                        name='rub'
                        value="Скидка в процентах на один товар"></input>
                      <label>Скидка в процентах на один товар</label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Скидка</label>
                      <input
                        onChange={(e) => setDiscount(e.target.value)}
                        type="number"
                        className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Количество использования</label>
                      <input
                        onChange={(e) => setCount(e.target.value)}
                        type="number"
                        className="form-control" />
                    </div>
                  </div>

                  <div className="card-footer">
                    <button 
                
                     className="btn btn-primary"
                     onClick={()=>updatePromo()}>Добавить</button>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title"></h3>
            <div className="card-tools">
              <div className="input-group input-group-sm">
                <NavLink
                  to={"/promocodechange"}
                  type="button"
                  className="btn btn-block "
                >
                  Добавить прокомоды
                </NavLink>
              </div>
            </div>
          </div>

          <div className="card-body table-responsive p-0">
            <table className="table table-hover text-nowrap">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Код</th>
                  <th>Тип</th>
                  <th>Скидка</th>
                  <th>Количество </th>
                  <th>Дата истечение </th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item?.code}</td>
                    <td>{item?.type}</td>

                    <td>{item?.discount} </td>
                    <td>{item?.count}</td>
                    <td>{format(new Date(item?.date), "MMM d, yyyy HH:mm") } </td>
                    
                    <td>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <NavLink
                          to={"/promocode/" + item?.id}
                          state={data[index]}
                          className="btn btn-info btn-sm"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </NavLink>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromocodePage;
