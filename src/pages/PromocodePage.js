import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { promocodeAll } from '../api/promocode'

const PromocodePage = () => {
  const [data, setData] = useState([])
  const getPromocode = async () => {
    const { data } = await promocodeAll()
    console.log(data)
  }
  useEffect(() => {
    getPromocode()
  }, [])
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 class="m-0">Промокоды</h1>
            </div>{/* /.col */}
            <div className="col-sm-6">

            </div>{/* /.col */}
          </div>{/* /.row */}
        </div>{/* /.container-fluid */}
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">

            <div className="col-md-12">

              <div className="card card-primary">


                <form>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Купон</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="form-group">
                      <input type="radio"></input>
                      <label>Скидка в рублях на корзину</label>
                    </div>
                    <div className="form-group">
                      <input type="radio"></input>
                      <label>Скидка в процентах на корзину</label>
                    </div>
                    <div className="form-group">
                      <input type="radio"></input>
                      <label>Скидка в процентах на один товар</label>
                    </div>




                  </div>

                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Поиск</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="col-md-12">
        <div className="card">
          {/* <div className="card-header">
            <h3 className="card-title"></h3>
            <div className="card-tools">


              <div className="input-group input-group-sm" >
                <button type="button" className="btn btn-block btn-danger"
                >Удалить
                </button>
              </div>

            </div>
          </div> */}
          <div className="card-body table-responsive p-0">
            <table className="table table-hover text-nowrap">
              <thead>
                <tr>

                  <th>#</th>
                  <th>Имя</th>
                  <th>Email</th>
                  <th>Телефон</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <NavLink to={"users/"}>
                        <i className='fas fa-eye' style={{ marginRight: '5px' }}></i>
                      </NavLink>

                    </div>
                  </td>
                </tr>




              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromocodePage