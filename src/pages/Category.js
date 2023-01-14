import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { categoryAdd, categoryAll, deleteCategorybyId } from '../api/category'

const Category = () => {
    ///// useState create Category 
    const [cursive, setCursive] = useState(false)
    const [description, setDescription] = useState("")
    const [lang, setLang] = useState("ru")
    const [name, setName] = useState("")
    const [file, setFile] = useState(null)


    const [id, setId] = useState([])

    const form = useRef()

    ///category api state
    const [category, setCategory] = useState()

    const createCategory = async (e) => {
        e.preventDefault()
        const formData=new FormData()
        formData.append("cursive",cursive)
        formData.append("description",description)
        formData.append("lang",lang)
        formData.append("name",name)
        formData.append("file",file)
        const data = await categoryAdd(formData)
        getCategory()
        console.log(data)
    }

    const getCategory = async () => {
        const { data } = await categoryAll()
        setCategory(data?.all_category)
    }
    const deleteCategory1 =  async() => {
        for (let i = 0; i < id.length; i++) {
                console.log(id[i],i)
                const data =  await deleteCategorybyId(id[i])
                console.log(data)
            }
        setId([])    
        
        getCategory()
    }


    useEffect(() => {
        getCategory()
    }, [])
   
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 class="m-0">Все категории</h1>
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
                                            <a class="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill" href="#custom-tabs-one-home" role="tab" aria-controls="custom-tabs-one-home" aria-selected="true">
                                                Добавление категории
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                                {/* /.card-header */}
                                {/* form start */}
                                <form ref={form} onSubmit={createCategory}>
                                    <div className="card-body">

                                        <div className="form-group">
                                            <label htmlFor="cursive">Курсив</label>
                                            <Form.Select
                                                className="form-control"
                                                onChange={e => setCursive(e.target.value)}
                                                name="cursive"
                                            >
                                                <option value={"0"}>Выключен</option>
                                                <option value={"1"}>Включен</option>

                                            </Form.Select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Описание</label>
                                            <input
                                                onChange={e => setDescription(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                placeholder='Напишите описание категории'
                                                name='description'
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lang">Язык</label>
                                            <Form.Select
                                                onChange={e => setLang(e.target.value)}
                                                className="form-control"
                                                name='lang'
                                            >
                                                <option value={"ru"}>На русском </option>
                                                <option value={"en"}>На английском</option>

                                            </Form.Select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Название категории</label>
                                            <input
                                                name='name'
                                                onChange={e => setName(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                placeholder='Напишите название категории'
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="file">Фото</label>
                                            <input
                                                name="file"
                                                type="file"
                                                className="form-control"

                                                onChange={e => setFile(e.target.files[0])} />
                                        </div>
                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer">
                                        <button
                                            type='submit'
                                            className="btn btn-primary"
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
                    <div className="card-header">
                        <h3 className="card-title"></h3>
                        <div className="card-tools">


                            <div className="input-group input-group-sm" >
                                <button type="button" className="btn btn-block btn-danger"
                                    onClick={() => deleteCategory1()} >Удалить</button>
                            </div>

                        </div>
                    </div>
                    <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>#</th>
                                    <th>Наименование</th>
                                    <th>Описание</th>
                                    <th>Ссылка</th>
                                    <th>Курсив</th>
                                    <th>Язык</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    category?.map(item =>
                                        <tr>
                                            <td><input type="checkbox" onChange={(e) =>
                                                e.target.checked
                                                    ? setId(s => [...s, item?.id])
                                                    : setId(id.filter((el) => el !== item.id))} /></td>
                                            <td>{item?.id}</td>
                                            <td>{item?.name}</td>
                                            <td>{item?.description}</td>
                                            <td>
                                                <a target="_blank" href={"https://back.lemousse.beauty/product/category/" + item?.name + "?" + "lang=" + item?.lang}>
                                                    product/category/{item?.name}?lang={item?.lang}
                                                </a>
                                            </td>
                                            <td>{String(item.cursive)}</td>
                                            <td>{item?.lang} </td>
                                            <td >
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <NavLink to={"/category/" + item?.id} className="btn btn-info btn-sm" >
                                                        <i className="fas fa-pencil-alt">
                                                        </i>

                                                    </NavLink>

                                                </div>
                                            </td>
                                        </tr>)
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category