import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { categoryAll } from '../api/category'
import { productCreate, productId, productUpdate } from '../api/product'

const ChangeProduct = () => {
    const [action, setAction] = useState("")
    const [article, setArticle] = useState("")
    const [category, setCategory] = useState("")
    const [compound, setCompound] = useState("")
    const [contraindications, setContraindications] = useState("")
    const [count, setCount] = useState(0)
    const [description, setDescription] = useState("")
    const [lang,setLang]=useState("ru")
    const [modeOfApp, setModeOfApp] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [weight, setWeight] = useState("")
    const [file, setFile] = useState([])


    const { id } = useParams()

    const [product, setProductt] = useState({})
    console.log(file);
    const form = useRef()

    const [categoryMassive,setCategoryMassive]=useState([])
    const getCategory = async () => {
        const { data } = await categoryAll()
        setCategoryMassive(data?.all_category)
    }

    const getProduct = async (e) => {
        const { data } = await productId(id)
        setProductt(data)
    }

    const changeProduct=async()=>{
        let number
        number =count
        if (number==0){
            number=-999
        }
        console.log(count)
        const data =await productUpdate(action,category,compound,contraindications,Number(number),description,Number(id),lang,modeOfApp,name,Number(price),weight)
        console.log(data)
    }
    useEffect(() => {
        getCategory()
        getProduct()
    }, [])
    console.log(product)
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
                                            <label htmlFor="action">Действие</label>
                                            <textarea
                                                onChange={(e) => setAction(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                placeholder={product?.Action}
                                                name='action' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="article">Артикул</label>
                                            <input
                                                onChange={(e) => setArticle(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder={product?.Article}
                                                name='article' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="category">Категория</label>
                                           
                                                <Form.Select
                                                className="form-control"
                                                onChange={e => setCategory(e.target.value)}
                                                name="category"
                                            >
                                                {
                                                    categoryMassive?.map(item=>
                                                        <option value={item?.name}>{String(item?.name)}</option>)
                                                }
                                                
                                               

                                            </Form.Select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="compound">Состав</label>
                                            <textarea
                                                onChange={(e) => setCompound(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                placeholder={product?.Compound}
                                            
                                                name='compound' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="contraindications">Противопоказание</label>
                                            <textarea
                                                onChange={(e) => setContraindications(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                placeholder={product?.Contraindications}
                                                name='contraindications' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="count">Количество</label>
                                            <input
                                                onChange={(e) => setCount(e.target.value)}
                                                type="number"
                                                className="form-control"
                                                placeholder={product?.Count}
                                                name='count' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Описание</label>
                                            <textarea
                                                onChange={(e) => setDescription(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                placeholder={product?.Description}
                                                name='description' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lang">Язык</label>
                                           <Form.Select
                                                onChange={e => setLang(e.target.value)}
                                                className="form-control"
                                                name='lang'
                                            >
                                                <option value={product?.Lang == "ru" ? "ru" : "en"}>{product?.Lang == "ru" ? "На русском" : "На английском"}</option>
                                                <option value={product?.Lang != "ru" ? "ru" : "en"}>{product?.Lang != "ru" ? "На русском" : "На английском"}</option>

                                            </Form.Select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="modeOfApp">Способы применение</label>
                                            <textarea
                                                onChange={(e) => setModeOfApp(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                placeholder={product?.ModeOfApp}
                                                name='modeOfApp' />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="name">Наименование</label>
                                            <input
                                                onChange={(e) => setName(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                placeholder={product?.Name}
                                                name='name' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="price">Цена</label>
                                            <input
                                                onChange={(e) => setPrice(e.target.value)}
                                                type="number"
                                                className="form-control"
                                                placeholder={product?.Price}
                                                name='price' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="weight">Точный вес</label>
                                            <input
                                                onChange={(e) => setWeight(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                placeholder={product?.Weight}
                                                name='weight' />
                                        </div>
                                     
                                        <div className="form-group">
                                            <label htmlFor="file">Фото</label>
                                            <input
                                                type="file"
                                                multiple
                                                onChange={(e) => setFile(e.target.files)}
                                                className="form-control"
                                                name='file' />
                                        </div>
                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer">
                                        <button
                                            type='submit'
                                            className="btn btn-primary"
                                            onClick={changeProduct}
                                        >Изменить</button>
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