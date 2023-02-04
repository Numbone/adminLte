import axios from "axios";
import { format } from "date-fns";
import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { TransactionCopy } from "../api/transactions";
const ModalItem = (props) => {
  const location = useLocation();
  const [countryCode, setCountryCode] = useState();
  const [region, setRegion] = useState([]);
  const [regionCode, setRegionCode] = useState(0);
  const [city, setCity] = useState([]);
  const [cityCode, setCityCode] = useState(0);
  const [office,setOffice]=useState([])
  const [allData,setAllData]=useState()
  const getRegionCode = async (region) => {
    const { data } = await axios.get(
      `https://back.lemousse.beauty/cdek/regions?country=${region}`
    );
    setRegion(data);
  };
  const getCityCode = async (city) => {
    const { data } = await axios.get(
      `https://back.lemousse.beauty/cdek/cities?region=${city}`
    );
    setCity(data);
  };
  const getOfficeCode = async (code) => {
    const { data } = await axios.get(
      `https://back.lemousse.beauty/cdek/office?city=${code}`
    );
    setOffice(data);
  };
  useEffect(() => {
    getRegionCode(countryCode);
  }, [countryCode]);
  useEffect(()=>{
    if (regionCode!=0){
      getCityCode(regionCode)
    }
  },[regionCode])
  useEffect(()=>{
    if (cityCode!=0){
      getOfficeCode(cityCode)
    }
  },[cityCode])
  useEffect(()=>{
    if (allData!=undefined){
      props.setCdek(allData)
      props.onHide()
    }
  },[allData])
  console.log(cityCode,"cityCode");
  console.log(allData,"allData");
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 class="m-0">Доставка СДЭК</h1>
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
                  <div classname="form-group mt-3">
                    <label htmlFor="cdek-region" className="label-input mb-2">
                      Страна
                    </label>
                    <select id="cdek-region" className="form-control">
                      <option disabled="true" >
                        Выбрать...
                      </option>
                      <option value="RU">Выберите страну</option>
                      <option onClick={() => setCountryCode("AM")}>
                        Армения
                      </option>
                      <option onClick={() => setCountryCode("BY")}>
                        Беларусь
                      </option>
                      <option onClick={() => setCountryCode("KZ")}>
                        Казахстан
                      </option>
                      <option onClick={() => setCountryCode("KG")}>
                        Кыргызстан
                      </option>
                      <option onClick={() => setCountryCode("RU")} >
                        Россия
                      </option>
                    </select>
                  </div>
                  <div classname="form-group mt-3">
                    <label htmlFor="cdek-region" className="label-input mb-2">
                      Регион
                    </label>
                    <select id="cdek-region" className="form-control">
                      <option disabled="true" selected="true">
                        Выбрать...
                      </option>
                      {region?.map((item) => (
                        <option
                          onClick={() => setRegionCode(item?.region_code)}
                        >
                          {item?.region}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div classname="form-group mt-3">
                    <label htmlFor="cdek-region" className="label-input mb-2">
                      Город
                    </label>
                    <select id="cdek-region" className="form-control">
                      <option disabled="true" selected="true">
                        Выбрать...
                      </option>
                      {city?.map((item) => (
                        <option onClick={() => setCityCode(item?.code)}>
                          {item?.city}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div classname="form-group mt-3">
                    <label htmlFor="cdek-region" className="label-input mb-2">
                      Пункт Самовызова
                    </label>
                    <select id="cdek-region" className="form-control">
                      <option disabled="true" selected="true">
                        Выбрать...
                      </option>
                      {
                        office?.map(item=>
                          <option onClick={()=>setAllData(item)}>{item?.name}</option>)
                      }
                      
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalItem;
