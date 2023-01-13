import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
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
    const postProductCreate = async (e) => {
        e.preventDefault()
        const {data} = await productCreate(form.current)
        console.log(data)
        if (data.message=="ok"){
            setAction("")
            setArticle("")
            setCompound("")
            setContraindications("")
            setCount(0)
            setDescription("")
            setModeOfApp("")
            setName("")
            setPrice(0)
            setWeight("")
            setFile(null)
        }
    }
    


    const [categoryMassive,setCategoryMassive]=useState([])
    const getCategory = async () => {
        const { data } = await categoryAll()
        setCategoryMassive(data?.all_category)
    }
    useEffect(() => {
        getCategory()
    }, [])
    console.log(categoryMassive)
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
                                            <label htmlFor="action">Действие</label>
                                            <textarea
                                                onChange={(e) => setAction(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                placeholder='Введите действие товара'
                                                name='action' 
                                                value={action}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="article">Артикул</label>
                                            <input
                                                onChange={(e) => setArticle(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='Введите уникальный артикул товара'
                                                name='article' 
                                                value={article}/>
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
                                                id="exampleInputPassword1"
                                                placeholder='Введите состав товара'
                                                name='compound'
                                                value={compound} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="contraindications">Противопоказание</label>
                                            <textarea
                                                onChange={(e) => setContraindications(e.target.value)}
                                                type="text"
                                                className="form-control"
                                  
                                                placeholder='Введите противопоказание товара'
                                                name='contraindications'
                                                value={contraindications}  />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="count">Количество</label>
                                            <input
                                                onChange={(e) => setCount(e.target.value)}
                                                type="number"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='Количество товара'
                                                name='count'
                                                value={count} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Описание</label>
                                            <textarea
                                                onChange={(e) => setDescription(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='Описание товара'
                                                name='description'
                                                value={description} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lang">Язык</label>
                                            <Form.Select
                                                className="form-control"
                                                name='lang'
                                            >
                                                <option value={"ru"}>На русском </option>
                                                <option value={"en"}>На английском</option>

                                            </Form.Select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="modeOfApp">Способы применение</label>
                                            <textarea
                                                onChange={(e) => setModeOfApp(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='Введите способ применений товара'
                                                name='modeOfApp'
                                                value={modeOfApp} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="name">Наименование</label>
                                            <input
                                                onChange={(e) => setName(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='Введите наименование товара'
                                                name='name'
                                                value={name}  />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="price">Цена</label>
                                            <input
                                                onChange={(e) => setPrice(e.target.value)}
                                                type="number"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='Цена'
                                                name='price'
                                                value={price} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="weight">Точный вес</label>
                                            <input
                                                onChange={(e) => setWeight(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='Точный вес'
                                                name='weight'
                                                value={weight} />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="file">Фото</label>
                                            <input
                                                type="file"
                                                multiple
                                                onChange={(e) => setFile(e.target.files)}
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                
                                                name='file' />
                                        </div>
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