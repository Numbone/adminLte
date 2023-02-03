import React, { useEffect, useState } from "react";
import { invoiceAll, invoiceStatus } from "../api/invoice";
import Example from "../modal/Example";
import Invoice from "../modal/Invoice";

const Etiket = () => {
  const [eticket, setEticket] = useState([]);
  const [show, setShow] = useState(false);
  const [commentId, setCommentId] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setCommentId(index);
    setShow(true);
  };
  const getInvoiceAll = async () => {
    const data = await invoiceAll();
    setEticket(data);
  };

  const [id, setId] = useState([]);
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
  const changeStatus = async (text) => {
    setId([]);
    for (let i = 0; i < id.length; i++) {
      const element = id[i];
      const data = await invoiceStatus(element, text);
    }
    var clist = document.getElementsByTagName("input");
    for (var i = 0; i < clist.length; ++i) {
      clist[i].checked = false;
    }
    getInvoiceAll();
  };
  useEffect(() => {
    getInvoiceAll();
  }, [show]);
  console.log(eticket)
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 class="m-0">Этикетки ШК</h1>
            </div>

            <div className="col-sm-6"></div>
          </div>
        </div>
      </div>
      {/* <section className="content">
        <div className="container-fluid">
          <div className="row">
        
            <div className="col-md-12">
            
              <div className="card card-primary">
              
                <form>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">
                        Способ доставки
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="СДЭК"
                      />
                    </div>
                  </div>
               
                  <div className="card-footer">
                    <div className="row">
                      <div class="col-sm-1">
                        <button type="submit" className="btn btn-primary">
                          Поиск
                        </button>
                      </div>
                      <div class="col-md-2">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" />
                          <label class="form-check-label">Все этикеты</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-md-6">
                <div class="input-group mb-3">
                  <select class="custom-select" id="inputGroupSelect02">
                    <option>Действие выбраннами</option>
                    <option disabled>Установить статус</option>
                    <option onClick={() => changeStatus("Printed")}>
                      Напечатан
                    </option>
                    <option onClick={() => changeStatus("Unprinted")}>
                      Не напечатан
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-end">
                {/* <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="remove"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div> */}
              </div>
            </div>
          </div>

          <div className="card-body table-responsive p-0">
            <table className="table table-hover text-nowrap table-striped">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" onChange={(e) => toggle(e)} />
                  </th>
                  <th>Файл</th>
                  <th>Комментарий</th>
                  <th>Количество этикеток</th>
                  <th>Уникальных заказов</th>
                  <th>Дата создания </th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {eticket?.map((item) => (
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        name="foo"
                        value={item?.ID}
                        onChange={(e) =>
                          e.target.checked
                            ? setId((s) => [...s, item?.ID])
                            : setId(id.filter((el) => el !== item?.ID))
                        }
                      />
                    </td>
                    <td>
                        {
                            item?.status==="Printed"&&
                            <i class="icon fas fa-check alert-success" style={{marginRight:'5px'}}></i>
                        }
                    
                      <a href={item?.invoice_url} target="_blank">
                        {item?.invoice_url}
                      </a>
                    </td>
                    <td>{item?.comment}</td>
                    <td>{item?.transaction_count}</td>
                    <td>{item?.unique_count}</td>
                    <td>{item?.date} </td>
                    <td>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <i
                          class="fas fa-comments"
                          onClick={() => handleShow(item?.ID)}
                        ></i>

                        <a
                          href={item?.label_url}
                          style={{ marginLeft: "5px" }}
                          target="_blank"
                        >
                          <i class="far fa-file-alt mr-1"> </i>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Invoice
              commentId={commentId}
              show={show}
              handleClose={handleClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Etiket;
