import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { categoryAll } from '../api/category'
import { productCreate } from '../api/product'

const AddProduct = () => {
    const [action, setAction] = useState("")
    const [article, setArticle] = useState("")
    const [category, setCategory] = useState("")
    const [compound, setCompound] = useState("")
    const [contraindications, setContraindications] = useState("")
    const [count, setCount] = useState(0)
    const [description, setDescription] = useState("")
    const [modeOfApp, setModeOfApp] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [weight, setWeight] = useState("")
    const [file, setFile] = useState([])
    console.log(file);
    const form = useRef()
    const [clickCategory, setClickCategory] = useState(0)
    const navigate=useNavigate()
    const postProductCreate = async (e) => {
        e.preventDefault()
        const { data } = await productCreate(form.current)
        navigate('/products')
       
    }

    const [changeRus, setChangeRus] = useState(false)
    const [changeEn, setChangeEn] = useState(false)


    const [categoryMassive, setCategoryMassive] = useState([])
    const getCategory = async () => {
        const { data } = await categoryAll()
        setCategoryMassive([{"id":0,"name_ru":"Выберите категорию "},...data?.all_category])
    
    }

    useEffect(() => {
        getCategory()
    }, [])
    console.log(categoryMassive, "asd")
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 class="m-0">Добавить продукт (раздел в разработке)</h1>
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
                                <form ref={form} onSubmit={postProductCreate}>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="article">Артикул</label>
                                            <input
                                                onChange={(e) => setArticle(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                placeholder='Введите уникальный артикул товара'
                                                name='article'
                                                value={article} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="category">Категория на русском</label>
                                            <Form.Select
                                                className="form-control"
                                                onChange={e => setCategory(e.target.value)}
                                                name="categoryRu"
                                                placeholder='Выберите категорию'
                                            >
                                                {
                                                    categoryMassive?.map((item, index) =>
                                                        <option 
                                                        onClick={() => setClickCategory(item?.name_ru)} 
                                                        value={item?.name_ru}>{String(item?.name_ru)}</option>)
                                                }



                                            </Form.Select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="category">Категория на анг</label>
                                            <Form.Select
                                                className="form-control"

                                                name="categoryEn"
                                            >
                                                {
                                                    categoryMassive?.map((item, index) =>
                                                        <option
                                                        style={category === item?.name_ru ? {display:"block"}:{display:'none'}}
                                                            value={category === item?.name_ru ? item?.name_en : null}>
                                                            {category === item?.name_ru ? item?.name_en : null}
                                                        </option>)
                                                }



                                            </Form.Select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="count">Количество</label>
                                            <input

                                                type="number"
                                                className="form-control"
                                                placeholder='Количество товара'
                                                name='count'
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="weight">Точный вес</label>
                                            <input

                                                type="text"
                                                className="form-control"
                                                placeholder='Точный вес'
                                                name='weight'
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="price">Цена</label>
                                            <input

                                                type="number"
                                                className="form-control"
                                                placeholder='Цена'
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

                                                            type="text"
                                                            className="form-control"
                                                            placeholder='Введите наименование товара'
                                                            name='nameRu'
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="compoundRu">Состав</label>
                                                        <textarea

                                                            type="text"
                                                            className="form-control"
                                                            placeholder='Введите состав товара'
                                                            name='compoundRu'
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="action">Действие</label>
                                                        <textarea

                                                            type="text"
                                                            className="form-control"
                                                            id="exampleInputEmail1"
                                                            placeholder='Введите действие товара'
                                                            name='actionRu'
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="description">Описание</label>
                                                        <textarea

                                                            type="text"
                                                            className="form-control"
                                                            placeholder='Описание товара'
                                                            name='descriptionRu'
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="contraindicationsRu">Противопоказание</label>
                                                        <textarea

                                                            type="text"
                                                            className="form-control"

                                                            placeholder='Введите противопоказание товара'
                                                            name='contraindicationsRu'
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="modeOfAppRus">Способы применение</label>
                                                        <textarea

                                                            type="text"
                                                            className="form-control"
                                                            placeholder='Введите способ применений товара'
                                                            name='modeOfAppRus'
                                                        />
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

                                                            type="text"
                                                            className="form-control"
                                                            placeholder='Введите наименование товара'
                                                            name='nameEn'
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="compoundEn">Состав</label>
                                                        <textarea

                                                            type="text"
                                                            className="form-control"
                                                            placeholder='Введите состав товара'
                                                            name='compoundEn'
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="action">Действие</label>
                                                        <textarea

                                                            type="text"
                                                            className="form-control"
                                                            id="exampleInputEmail1"
                                                            placeholder='Введите действие товара'
                                                            name='actionEn'
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="description">Описание</label>
                                                        <textarea

                                                            type="text"
                                                            className="form-control"
                                                            placeholder='Описание товара'
                                                            name='descriptionEn'
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="contraindicationsEn">Противопоказание</label>
                                                        <textarea

                                                            type="text"
                                                            className="form-control"

                                                            placeholder='Введите противопоказание товара'
                                                            name='contraindicationsEn'
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="modeOfAppEn">Способы применение</label>
                                                        <textarea

                                                            type="text"
                                                            className="form-control"
                                                            placeholder='Введите способ применений товара'
                                                            name='modeOfAppEn'
                                                        />
                                                    </div>

                                                </>
                                                : null
                                        }


                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer">
                                        <button
                                            type='submit'
                                            className="btn btn-primary"
                                        //  onClick={(e)=>postProductCreate(e)}
                                        >Добавить</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AddProduct