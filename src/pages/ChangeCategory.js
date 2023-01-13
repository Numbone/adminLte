import React, { useEffect, useState } from 'react'
import { Form, NavItem, NavLink } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { categoryId, categoryUpdate } from '../api/category';

const ChangeCategory = () => {
    const { id } = useParams()
    const [category, setCategory] = useState({})


    const [cursive, setCursive] = useState(false)
    const [description, setDescription] = useState("")
    const [lang, setLang] = useState("ru")
    const [name, setName] = useState("")

    const getCategoryId = async () => {
        const { data } = await categoryId(id)
        setCategory(data)
    }
    const changeCategory = async () => {
        if (description==""){
            description=category?.description
        }
        if (name==""){
            name=category?.name
        }
        const { data } = await categoryUpdate(Boolean(cursive),description,Number(id),lang,name)
        console.log(data)
    }

    const [image, setImage] = useState(null)

   
    useEffect(() => {
        getCategoryId()
    }, [])
    console.log(category);
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 class="m-0">Изменение категории</h1>
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
                              
                                    <div className="card-body">

                                        <div className="form-group">
                                            <label htmlFor="cursive">Курсив</label>
                                            <Form.Select
                                                className="form-control"
                                                onChange={e => setCursive(e.target.value)}
                                                name="cursive"
                                            >

                                                <option value={category?.cursive}>{category?.cursive ? "Включен" : "Выключен"}</option>
                                                <option value={!category?.cursive}>{!category?.cursive ? "Включен" : "Выключен"}</option>
                                            </Form.Select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Описание</label>
                                            <input
                                                onChange={e => setDescription(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                placeholder={category?.description}
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
                                                <option value={category?.lang}>{category?.lang == "ru" ? "На русском" : "На английском"}</option>
                                                <option value={category?.lang}>{!category?.lang == "ru" ? "На русском" : "На английском"}</option>

                                            </Form.Select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Название категории</label>
                                            <input
                                                name='name'
                                                onChange={e => setName(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                placeholder={category?.name}
                                            />
                                        </div>
                                    
                                         <img src={category?.images === undefined ? null : category?.images[0]}></img>
                                        



                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer">
                                        <button
                                            onClick={changeCategory}
                                            
                                            className="btn btn-primary"
                                        >Добавить</button>

                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ChangeCategory