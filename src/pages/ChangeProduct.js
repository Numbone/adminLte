import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { categoryAll } from '../api/category'
import { deletePhotosEn, deletePhotosRu, productCreate, productId, productUpdate, setPhotosProductRu, setPhotsProductEn } from '../api/product'

const ChangeProduct = () => {
    const [category, setCategory] = useState({})
    const [fileEn, setFileEn] = useState(null)
    const [fileRu, setFileRu] = useState(null)

    const [actionRu, setActionRu] = useState("")
    const [actionEn, setActionEn] = useState("")
    const [article, setArticle] = useState("")
    const [categoryRu, setCategoryRu] = useState("")
    const [categoryEn, setCategoryEn] = useState("")

    const [compoundRu, setCompoundRu] = useState("")
    const [compoundEn, setCompoundEn] = useState("")

    const [contraindicationsRu, setContraindicationsRu] = useState("")
    const [contraindicationsEn, setContraindicationsEn] = useState("")
    const [count, setCount] = useState(0)

    const [descriptionRu, setDescriptionRu] = useState("")
    const [descriptionEn, setDescriptionEn] = useState("")

    const [modeOfAppRus, setModeOfAppRus] = useState("")
    const [modeOfAppEn, setModeOfAppEn] = useState("")

    const [nameRu, setNameRu] = useState("")
    const [nameEn, setNameEn] = useState("")
    const [price, setPrice] = useState(0)
    const [weight, setWeight] = useState("")
    const [file, setFile] = useState([])
    const [clickCategory, setClickCategory] = useState(0)
    console.log(categoryRu)
    const [changeRus, setChangeRus] = useState(false)
    const [changeEn, setChangeEn] = useState(false)

    const { id } = useParams()

    const [product, setProductt] = useState({})
    console.log(file);
    const form = useRef()

    const [categoryMassive, setCategoryMassive] = useState([])
    const getCategory = async () => {
        const { data } = await categoryAll()
        setCategoryMassive([{"id":0,"name_ru":"Выберите категорию "},...data?.all_category])
    }

    const getProduct = async (e) => {
        const { data } = await productId(id)
        setProductt(data)
    }
    const setImageEn = async (id) => {
        let car = new FormData
        car.append("id", String(id))
        car.append("file", fileEn)
        const data = await setPhotsProductEn(car)
        console.log(data)
        getProduct()
    }

    const setImageRu = async (id) => {
        let formData = new FormData
        formData.append("id", String(id))
        formData.append("file", fileRu)
        const data = await setPhotosProductRu(formData)
        console.log(data)
        getProduct()
    }
    const deleteImageRu= async(id)=>{
        const data =await deletePhotosRu(id)
        getProduct()
    }
    const deleteImageEn= async(id)=>{
        const data =await deletePhotosEn(id)
        getProduct()
    }

    const changeProduct = async () => {
        let number
        number = count
        if (number == 0) {
            number = -999
        }
        const data = await productUpdate(actionEn, actionRu, article, categoryEn, categoryRu, compoundEn, compoundRu, contraindicationsEn, contraindicationsRu, Number(count),
            descriptionEn, descriptionRu, Number(id), modeOfAppEn, modeOfAppRus, nameEn, nameRu, Number(price), weight)
        console.log(data)
        getProduct()
    }
    useEffect(() => {
        getCategory()
        getProduct()
    }, [])
    console.log(product, "productID")

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 class="m-0">Изменить продукт (раздел в разработке)</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">

                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        {/* left column */}
                        <div className="col-12 ">
                            {/* general form elements */}
                            <div className="card card-primary card-outline card-tabs">
                                <div class="card-header p-0 pt-1 border-bottom-0">
                                    <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill" href="#custom-tabs-one-home" role="tab" aria-controls="custom-tabs-one-home" aria-selected="true">О товаре</a>
                                        </li>

                                    </ul>
                                </div>
                                {/* /.card-header */}
                                {/* form start */}

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="article">Артикул</label>
                                        <input
                                            onChange={(e) => setArticle(e.target.value)}
                                            type="text"
                                            className="form-control"
                                            placeholder={product?.article}
                                            name='article'
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="category">Категория на русском</label>
                                        <Form.Select
                                            className="form-control"
                                            onChange={e => setCategoryRu(e.target.value)}
                                            name="categoryRu"
                                        >
                                            {
                                                categoryMassive?.map((item, index) =>
                                                    <option
                                                        onClick={() => setClickCategory(item?.name_ru)}
                                                        value={item?.name_ru}>
                                                        {String(item?.name_ru)}
                                                    </option>
                                                )
                                            }



                                        </Form.Select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="category">Категория на анг</label>
                                        <Form.Select
                                            className="form-control"
                                            onChange={e => setCategoryEn(e.target.value)}
                                            name="categoryEn"
                                        >
                                            {
                                                categoryMassive?.map((item, index) =>
                                                    <option
                                                        style={categoryRu === item?.name_ru ? { display: "block" } : { display: 'none' }}
                                                        value={categoryRu === item?.name_ru ? item?.name_en : null}>
                                                        {categoryRu === item?.name_ru ? item?.name_en : null}
                                                    </option>)
                                            }



                                        </Form.Select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="count">Количество</label>
                                        <input
                                            onChange={e => setCount(e.target.value)}
                                            type="number"
                                            className="form-control"
                                            placeholder={product?.count}
                                            name='count'
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="weight">Точный вес</label>
                                        <input
                                            placeholder={product?.weight}
                                            type="text"
                                            className="form-control"
                                            onChange={e => setWeight(e.target.value)}
                                            name='weight'
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Цена</label>
                                        <input
                                            onChange={e => setPrice(e.target.value)}
                                            type="number"
                                            className="form-control"
                                            placeholder={product?.price}
                                            name='price'
                                        />
                                    </div>
                                   
                                    <div className="form-group">
                                        <label htmlFor="lang">Язык</label>
                                        {/* <Form.Select
                                                className="form-control"
                                                name='lang'
                                            >
                                                <option value={"ru"}>На русском </option>
                                                <option value={"en"}>На английском</option>

                                            </Form.Select> */}

                                    </div>
                                    <div className="form-group ">
                                        <input
                                            onChange={(e) => setChangeRus(e.target.checked)}
                                            className="custom_checbox"
                                            type="checkbox"
                                            id="1"
                                            name='rub'
                                            value="ru"></input>
                                        <label>рускком</label>
                                    </div>
                                    {
                                        changeRus ?
                                            <>
                                                <div className="form-group">
                                                    <label htmlFor="nameRu">Наименование </label>
                                                    <input
                                                        onChange={(e) => setNameRu(e.target.value)}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={product?.nameRu}
                                                        name='nameRu'
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="compoundRu">Состав</label>
                                                    <textarea
                                                        onChange={(e) => setCompoundRu(e.target.value)}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={product?.compoundRu}
                                                        name='compoundRu'
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="action">Действие</label>
                                                    <textarea
                                                        onChange={(e) => setActionRu(e.target.value)}
                                                        type="text"
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        placeholder={product?.actionRu}
                                                        name='actionRu'
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="description">Описание</label>
                                                    <textarea
                                                        onChange={(e) => setDescriptionRu(e.target.value)}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={product?.descriptionRu}
                                                        name='descriptionRu'
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="contraindicationsRu">Противопоказание</label>
                                                    <textarea
                                                        onChange={(e) => setContraindicationsRu(e.target.value)}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={product?.contraindicationsRu}
                                                        name='contraindicationsRu'
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="modeOfAppRus">Способы применение</label>
                                                    <textarea
                                                        onChange={(e) => setModeOfAppRus(e.target.value)}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={product?.modeOfAppRus}
                                                        name='modeOfAppRus'
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <div class="mb-3 input-group">
                                                        <button type="button" id="button-addon1" class="btn bg-gradient-primary"
                                                            onClick={() => setImageRu(product?.ID)}
                                                        >
                                                              Добавить фото
                                                        </button>
                                                        <input type="file" class="form-control" multiple
                                                            onChange={e => setFileRu(e.target.files[0])}
                                                        />

                                                    </div>
                                                </div>
                                                <div className="form-group" style={{ display: 'flex' }}>

                                                    {
                                                        product?.imagesRu?.map(item =>
                                                            <div style={{ width: "64px", height: "64px",position:'relative' }}>
                                                                 <div className='close_img' onClick={()=>deleteImageRu(item)}>X</div>
                                                                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={item}></img>
                                                            </div>)
                                                    }

                                                </div>
                                            </>
                                            : null
                                    }

                                    <div className="form-group ">
                                        <input
                                            onChange={(e) => setChangeEn(e.target.checked)}
                                            className="custom_checbox"
                                            type="checkbox"
                                            id="1"
                                            name='rub'
                                            value="ru"></input>
                                        <label>на английском</label>
                                    </div>
                                    {
                                        changeEn ?
                                            <>
                                                <div className="form-group">
                                                    <label htmlFor="nameEn">Наименование </label>
                                                    <input
                                                        onChange={(e) => setNameEn(e.target.value)}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={product?.nameEn}
                                                        name='nameEn'
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="compoundEn">Состав</label>
                                                    <textarea
                                                        onChange={(e) => setCompoundEn(e.target.value)}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={product?.compoundEn}
                                                        name='compoundEn'
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="action">Действие</label>
                                                    <textarea
                                                        onChange={(e) => setActionEn(e.target.value)}
                                                        type="text"
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        placeholder={product?.actionEn}
                                                        name='actionEn'
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="description">Описание</label>
                                                    <textarea
                                                        onChange={(e) => setDescriptionEn(e.target.value)}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={product?.descriptionEn}
                                                        name='descriptionEn'
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="contraindicationsEn">Противопоказание</label>
                                                    <textarea
                                                        onChange={(e) => setContraindicationsEn(e.target.value)}
                                                        type="text"
                                                        className="form-control"

                                                        placeholder={product?.contraindicationsEn}
                                                        name='contraindicationsEn'
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="modeOfAppEn">Способы применение</label>
                                                    <textarea
                                                        onChange={(e) => setModeOfAppEn(e.target.value)}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={product?.modeOfAppEn}
                                                        name='modeOfAppEn'
                                                    />
                                                </div>
                                                <div className="form-group">
                                        <div class="mb-3 input-group">
                                            <button type="button" id="button-addon1" class="btn bg-gradient-primary"
                                                onClick={() => setImageEn(product?.ID)}
                                            >
                                                Добавить фото
                                            </button>
                                            <input type="file" class="form-control" multiple
                                                onChange={e => setFileEn(e.target.files[0])}
                                            />

                                        </div>
                                    </div>
                                    <div className="form-group" style={{ display: 'flex' }}>

                                        {
                                            product?.imagesEn?.map(item =>
                                                <div style={{ width: "64px", height: "64px" ,position:'relative'}}>
                                                    <div className='close_img' onClick={()=>deleteImageEn(item)}>X</div>
                                                    <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={item}></img>
                                                </div>)
                                        }

                                    </div>

                                            </>
                                            : null
                                    }


                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <button

                                        className="btn btn-primary"
                                        onClick={() => changeProduct()}
                                    >Сохранить</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ChangeProduct