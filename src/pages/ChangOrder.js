import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { AllProduct } from "../api/product";
import { changeBasketTransaction } from "../api/transactions";
const ChangOrder = () => {
  const props = useLocation();
  const navigate=useNavigate()
  console.log(props);
  const [product, setProduct] = useState([]);
  const [data1, setData] = useState([]);
  const [copy,setCopy]=useState({})
  /////get product all
  const getProduct = async () => {
    const { data } = await AllProduct();
    setProduct(data?.all_product);

    if (props?.state?.products != null) {
      setData(props?.state?.products);
    }
  };
  const deleteItem = async (id) => {
    setData(data1.filter((item) => id !== item?.id));
  };
  const saveChangeTrans = async () => {
    data1.map((item) => (delete item?.id, (item.count = 1)));
    const data = await changeBasketTransaction(props?.state?.id, data1);
    navigate("/orders")
  };
  useEffect(() => {
    getProduct();
  }, []);
  console.log(props);
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
                      {format(
                        new Date(props?.state?.date),
                        "MMM dd, yyyy hh:mm"
                      )}
                      <div>Корзина</div>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {data1?.map((item) => (
            <div
              className="form-group"
              style={{ position: "relative", height: "auto !important" }}
            >
              <div
                type="text"
                className="form-control"
                name="article"
                style={{
                  height: "auto",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "rgb(0, 123, 255)",
                }}
              >
                <div className="text-fill">{item?.nameRu}</div>
                <div
                  className="delete_icons"
                  onClick={() => deleteItem(item?.id)}
                >
                  Удалить
                </div>
              </div>
            </div>
          ))}

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Товар в корзине</label>
                <select id="cdek-region" className="form-control">
                  <option disabled="true">Выбрать...</option>
                  {product?.map((item) => (
                    <option
                      onClick={() =>
                        setCopy(item)
                        // setData((s) => [
                        //   ...s,
                        //   {
                        //     article: item?.article,
                        //     count: item?.count,
                        //     nameEn: item?.nameEn,
                        //     nameRu: item?.nameRu,
                        //     price: item?.price,
                        //     id: item?.ID,
                        //     product_id: item?.ID,
                        //   },
                        // ])
                      }
                    >
                      {item?.nameRu}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-8"></div>
            <div className="col-4">
              <button
                type="button"
                className="btn btn-block btn-primary"
               onClick={()=>setData((s) => [
                ...s,
                {
                  article: copy?.article,
                  count: copy?.count,
                  nameEn: copy?.nameEn,
                  nameRu: copy?.nameRu,
                  price: copy?.price,
                  id: copy?.ID,
                  product_id: copy?.ID,
                },
              ])} 
              >
                Добавить
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <button
                type="button"
                className="btn btn-block btn-success"
                onClick={() => saveChangeTrans()}
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangOrder;
