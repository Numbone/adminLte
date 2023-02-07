import axios from "axios";
import { format } from "date-fns";
import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { TransactionCopy } from "../api/transactions";
import Select from "react-select";
const options = [
  { value: "AM", label: "Армения" },
  { value: "BY", label: "Беларусь" },
  { value: "KZ", label: "Казахстан" },
  { value: "KG", label: "Кыргызстан" },
  { value: "RU", label: "Россия" },
];

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
                    <Select
                          placeholder={""}
                          options={options}
                          onChange={(e) => setCountryCode(e?.value)}
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: "4px",
                            colors: {
                              ...theme.colors,
                              primary25: "#e7dbe2",
                              primary: "black",
                            },
                          })}
                          styles={{
                            container: (base) => ({
                              ...base,
                              height: "48px",
                            }),
                            control: (base, { isFocused }) => ({
                              ...base,
                              height: "48px",
                              border: isFocused && "inherit",
                            }),
                            valueContainer: (base) => ({
                              ...base,
                              height: "48px",
                            }),
                            indicatorsContainer:(base)=>({
                              display:'none'
                            })
                          }}
                        />
                  </div>
                  <div classname="form-group mt-3">
                    <label htmlFor="cdek-region" className="label-input mb-2">
                      Регион
                    </label>
                    <Select
                          placeholder={""}
                          options={region}
                          getOptionLabel={(status) => status?.region }
                          getOptionValue={(status) => status?.region_code }
                          onChange={(e) => setRegionCode(e?.region_code)}
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: "4px",
                            colors: {
                              ...theme.colors,
                              primary25: "#e7dbe2",
                              primary: "black",
                            },
                          })}
                          styles={{
                            container: (base) => ({
                              ...base,
                              height: "48px",
                            }),
                            control: (base, { isFocused }) => ({
                              ...base,
                              height: "48px",
                              border: isFocused && "inherit",
                            }),
                            valueContainer: (base) => ({
                              ...base,
                              height: "48px",
                            }),
                            indicatorsContainer:(base)=>({
                              display:'none'
                            })
                          }}
                        />
                    {/* <select id="cdek-region" className="form-control">
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
                    </select> */}
                  </div>
                  <div classname="form-group mt-3">
                    <label htmlFor="cdek-region" className="label-input mb-2">
                      Город
                    </label>
                    <Select
                          placeholder={""}
                          options={city}
                          getOptionLabel={(status) => status?.city }
                          getOptionValue={(status) => status?.city }
                          onChange={(e) => setCityCode(e?.code)}
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: "4px",
                            colors: {
                              ...theme.colors,
                              primary25: "#e7dbe2",
                              primary: "black",
                            },
                          })}
                          styles={{
                            container: (base) => ({
                              ...base,
                              height: "48px",
                            }),
                            control: (base, { isFocused }) => ({
                              ...base,
                              height: "48px",
                              border: isFocused && "inherit",
                            }),
                            valueContainer: (base) => ({
                              ...base,
                              height: "48px",
                            }),
                            indicatorsContainer:(base)=>({
                              display:'none'
                            })
                          }}
                        />
                    {/* <select id="cdek-region" className="form-control">
                      <option disabled="true" selected="true">
                        Выбрать...
                      </option>
                      {city?.map((item) => (
                        <option onClick={() => setCityCode(item?.code)}>
                          {item?.city}
                        </option>
                      ))}
                    </select> */}
                  </div>
                  <div classname="form-group mt-3">
                    <label htmlFor="cdek-region" className="label-input mb-2">
                      Пункт Самовызова
                    </label>
                    <Select
                          placeholder={""}
                          options={office}
                          getOptionLabel={(status) => status?.name }
                          getOptionValue={(status) => status?.name }
                          onChange={(e) => setAllData(e)}
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: "4px",
                            colors: {
                              ...theme.colors,
                              primary25: "#e7dbe2",
                              primary: "black",
                            },
                          })}
                          styles={{
                            container: (base) => ({
                              ...base,
                              height: "48px",
                            }),
                            control: (base, { isFocused }) => ({
                              ...base,
                              height: "48px",
                              border: isFocused && "inherit",
                            }),
                            valueContainer: (base) => ({
                              ...base,
                              height: "48px",
                            }),
                            indicatorsContainer:(base)=>({
                              display:'none'
                            })
                          }}
                        />
                    {/* <select id="cdek-region" className="form-control">
                      <option disabled="true" selected="true">
                        Выбрать...
                      </option>
                      {
                        office?.map(item=>
                          <option onClick={()=>setAllData(item)}>{item?.name}</option>)
                      }
                      
                    </select> */}
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
