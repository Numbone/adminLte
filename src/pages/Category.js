import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { categoryAdd, categoryAll, deleteCategorybyId, setPhotosEn, setPhotosRu } from '../api/category'

const Category = () => {
    ///// useState create Category 
    const [cursive, setCursive] = useState(0)
    const [descriptionRu, setDescriptionRu] = useState("")
    const [descriptionEn, setDescriptionEn] = useState("")
    const [nameRu, setNameRu] = useState("")
    const [nameEn, setNameEn] = useState("")
    const [fileEn, setFileEn] = useState(null)
    const [fileRu, setFileRu] = useState(null)


    const [id, setId] = useState([])

    const form = useRef()

    const [changeRus, setChangeRus] = useState(false)
    const [changeEn, setChangeEn] = useState(false)
    ///category api state
    const [category, setCategory] = useState()

    const createCategory = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("cursive", cursive)
        formData.append("description_ru", descriptionRu)
        formData.append("description_en", descriptionEn)
        formData.append("name_en", nameRu)
        formData.append("name_ru", nameEn)
        const data = await categoryAdd(formData)
        getCategory()
        setDescriptionRu("")
        setDescriptionEn("")
        setNameRu("")
        setNameEn("")
        console.log(data)
    }

    const getCategory = async () => {
        const { data } = await categoryAll()
        console.log(data)
        setCategory(data?.all_category)
    }
    const deleteCategory1 = async () => {
        for (let i = 0; i < id.length; i++) {
            console.log(id[i], i)
            const data = await deleteCategorybyId(id[i])
            console.log(data)
        }
        setId([])

        getCategory()
    }
    const setImageEn = async (id) => {
        let car = new FormData
        car.append("id",String(id))
        car.append("file", fileEn)
        const data = await setPhotosEn(car)
        console.log(data)
    }
    const setImageRu = async (id) => {
        let formData = new FormData
        formData.append("id", String(id))
        formData.append("file", fileRu)
        const data = await setPhotosRu(formData)
        console.log(data)
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


                                        <div className="form-group ">
                                            <input
                                                onChange={(e) => setChangeRus(e.target.checked)}
                                                className="custom_checbox"
                                                type="checkbox"
                                                id="1"
                                                name='rub'
                                                value="ru"></input>
                                            <label>на русском</label>
                                        </div>
                                        {
                                            changeRus

                                                ?
                                                <>
                                                    <div className="form-group">
                                                        <label htmlFor="description">Описание</label>
                                                        <input
                                                            onChange={e => setDescriptionRu(e.target.value)}
                                                            type="text"
                                                            className="form-control"
                                                            placeholder='Напишите описание категории'
                                                            name='description'
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="name">Название категории</label>
                                                        <input
                                                            name='name'
                                                            onChange={e => setNameRu(e.target.value)}
                                                            type="text"
                                                            className="form-control"
                                                            placeholder='Напишите название категории'
                                                        />
                                                    </div>
                                                    {/* <div className="form-group">
                                                        <label htmlFor="file">Фото</label>
                                                        <input
                                                            name="file"
                                                            type="file"
                                                            className="form-control"

                                                            onChange={e => setFile(e.target.files[0])} />
                                                    </div> */}
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
                                            changeEn
                                                ?
                                                <>
                                                    <div className="form-group">
                                                        <label htmlFor="description">Описание</label>
                                                        <input
                                                            onChange={e => setDescriptionEn(e.target.value)}
                                                            type="text"
                                                            className="form-control"
                                                            placeholder='Напишите описание категории'
                                                            name='description'
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="name">Название категории</label>
                                                        <input
                                                            name='name'
                                                            onChange={e => setNameEn(e.target.value)}
                                                            type="text"
                                                            className="form-control"
                                                            placeholder='Напишите название категории'
                                                        />
                                                    </div>
                                                    {/* <div className="form-group">
                                                        <label htmlFor="file">Фото</label>
                                                        <input
                                                            name="file"
                                                            type="file"
                                                            className="form-control"

                                                            onChange={e => setFile(e.target.files[0])} />
                                                    </div> */}
                                                </>
                                                : null
                                        }

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
                                    <th>Наименование рус</th>
                                    <th>Наименование анг</th>
                                    <th>Описание рус</th>
                                    <th>Описание анг</th>
                                    <th>Курсив</th>
                                    <th> Фото русском </th>
                                    <th> Фото английском </th>
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
                                            <td>
                                                {item?.id}
                                            </td>
                                            <td>{item?.name_ru}</td>
                                            <td>{item?.name_en}</td>
                                            <td>{item?.description_ru}</td>
                                            <td>{item?.description_en}</td>
                                            <td>{String(item.cursive)}</td>
                                            <td>

                                                <div class="mb-3 input-group">
                                                    <button type="button" id="button-addon1" class="btn btn-block bg-gradient-primary btn-sm"
                                                    onClick={()=>setImageRu(item?.id)}>
                                                        Button
                                                    </button>
                                                    <input type="file" class="form-control"
                                                     onChange={e=>setFileRu(e.target.files[0])} />

                                                </div>
                                            </td>
                                            <td>


                                                <div class="mb-3 input-group">
                                                    <button type="button" id="button-addon1" class="btn btn-block bg-gradient-primary btn-sm"
                                                    onClick={()=>setImageEn(item?.id)}>
                                                        Button
                                                    </button>
                                                    <input
                                                    onChange={e=>setFileEn(e.target.files[0])}
                                                     type="file" class="form-control" />

                                                </div>

                                            </td>
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