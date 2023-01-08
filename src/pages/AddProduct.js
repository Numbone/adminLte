import React, { useRef, useState } from 'react'
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
    const form=useRef()
    const postProductCreate=async(e)=>{
        e.preventDefault()
        // let formData = new FormData()
        // formData.append('action', action)
        // formData.append('article', article)
        // formData.append('category', category)
        // formData.append('compound', compound)
        // formData.append('contraindications', contraindications)
        // formData.append('count', Number(count))
        // formData.append('description', description)
        // formData.append('modeOfApp', modeOfApp)
        // formData.append('name', name)
        // formData.append('price', Number(price))
        // formData.append('weight', weight)
        // formData.append('file', file)

        const data =await productCreate(form.current)
        console.log(data)
    }
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
                                            <input
                                                onChange={(e) => setAction(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                placeholder='Введите название товара' 
                                                name='action'/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="article">Артикул</label>
                                            <input
                                                onChange={(e) => setArticle(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='Введите уникальный артикул товара' 
                                                name='article'/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="category">Категория</label>
                                            <input
                                                onChange={(e) => setCategory(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='0' 
                                                name='category'/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="compound">Состав</label>
                                            <input
                                                onChange={(e) => setCompound(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='0' 
                                                name='compound'/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="contraindications">Противопоказание</label>
                                            <input
                                                onChange={(e) => setContraindications(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='0' 
                                                name='contraindications'/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="count">Количество</label>
                                            <input
                                                onChange={(e) => setCount(e.target.value)}
                                                type="number"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='ТН ВЭД'
                                                name='count' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Описание</label>
                                            <input
                                                onChange={(e) => setDescription(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='Название на английском'
                                                name='description' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lang">Язык</label>
                                            <input
                                                onChange={(e) => setModeOfApp(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='Название на английском'
                                                name='lang' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="modeOfApp">Способы применение</label>
                                            <input
                                                onChange={(e) => setModeOfApp(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='Название на английском'
                                                name='modeOfApp' />
                                        </div>
                                       
                                        <div className="form-group">
                                            <label htmlFor="name">Наименование</label>
                                            <input
                                                onChange={(e) => setName(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='Название на английском'
                                                name='name' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="price">Цена</label>
                                            <input
                                                onChange={(e) => setPrice(e.target.value)}
                                                type="number"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='Название на английском'
                                                name='price' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="weight">Точный вес</label>
                                            <input
                                                onChange={(e) => setWeight(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='Название на английском'
                                                name='weight' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="file">Фото</label>
                                            <input
                                                type="file"
                                                multiple
                                                onChange={(e) => setFile(e.target.files)}
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder='Название на английском' 
                                                name='file'/>
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
            <div className="col-md-12">
                <div className="card">

                    <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>#</th>
                                    <th>Наименование</th>
                                    <th>Артикул</th>
                                    <th>Цена</th>
                                    <th>Кол-во</th>
                                    <th>Статистика</th>
                                    <th>Статус</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>Наименование</td>
                                    <td>Артикул</td>
                                    <td>Цена</td>
                                    <td>Кол-во</td>
                                    <td>Статистика</td>
                                    <td class="project-state">
                                        <span class="badge badge-success">Success</span>
                                        <span class="badge badge-danger">Success</span>
                                    </td>
                                    <td >
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <a class="btn btn-info btn-sm" href="#">
                                                <i class="fas fa-pencil-alt">
                                                </i>
                                            </a>

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

export default AddProduct