import React, { useEffect, useState } from 'react'
import { Form, NavItem, NavLink } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import { categoryId, categoryUpdate, deletePhotosEn, deletePhotosRu, setPhotosEn, setPhotosRu } from '../api/category';

const ChangeCategory = () => {
    const { id } = useParams()
    const [category, setCategory] = useState({})


    const [cursive, setCursive] = useState("0")
    const [descriptionRu, setDescriptionRu] = useState("")
    const [descriptionEn, setDescriptionEn] = useState("")
    const [nameRu, setNameRu] = useState("")
    const [nameEn, setNameEn] = useState("")

    const [changeRus, setChangeRus] = useState(false)
    const [changeEn, setChangeEn] = useState(false)


    const navigate =useNavigate()

    const [fileEn, setFileEn] = useState(null)
    const [fileRu, setFileRu] = useState(null)
    const setImageEn = async (id) => {
        let car = new FormData
        car.append("id", String(id))
        car.append("file", fileEn)
        const data = await setPhotosEn(car)
        console.log(data)
        getCategoryId()
    }

    const setImageRu = async (id) => {
        let formData = new FormData
        formData.append("id", String(id))
        formData.append("file", fileRu)
        const data = await setPhotosRu(formData)
        console.log(data)
        getCategoryId()
    }

    const deleteImageRu= async(id)=>{
        const data =await deletePhotosRu(id)
        getCategoryId()
    }
    const deleteImageEn= async(id)=>{
        const data =await deletePhotosEn(id)
        getCategoryId()
    }


    const getCategoryId = async () => {
        const { data } = await categoryId(id)
        setCategory(data)
    }
    const changeCategory = async () => {
     const { data } = await categoryUpdate(cursive, descriptionEn, descriptionRu, Number(id), nameEn, nameRu)
        console.log(data)
        navigate("/category")
    }

    const [image, setImage] = useState(null)

    console.log(cursive, "cursive")
    // console.log(cursive)
    // console.log(description)
    // console.log(lang)
    // console.log(id)
    useEffect(() => {
        getCategoryId()
    }, [])

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
                                        <label htmlFor="cursive">Курсив : {category?.cursive === "1" ? "Включен" : "Выключен"}</label>
                                        <Form.Select
                                            className="form-control"
                                            onChange={e => setCursive(e.target.value)}
                                            name="cursive"
                                            placeholder={category?.cursive}
                                        >
                                            <option value={""}>{"Выберите категорию"}</option>
                                            <option value={category?.cursive == "0" ? "0" : "1"}>{category?.cursive == "0" ? "Выключен" : "Включен"}</option>
                                            <option value={category?.cursive == "0" ? "1" : "0"}>{category?.cursive != "0" ? "Выключен" : "Включен"}</option>

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
                                                        placeholder={category?.description_ru}
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
                                                        placeholder={category?.name_ru}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <div class="mb-3 input-group">
                                                        <button type="button" id="button-addon1" class="btn bg-gradient-primary"
                                                            onClick={() => setImageRu(category?.id)}
                                                        >
                                                             Добавить фото
                                                        </button>
                                                        <input type="file" class="form-control" multiple
                                                            onChange={e => setFileRu(e.target.files[0])}
                                                        />

                                                    </div>
                                                </div>
                                                <div className="form-group" style={{display:'flex'}}>

                                                    {
                                                        category?.ImagesRu?.map(item =>
                                                            <div style={{ width: "64px", height: "64px",position:"relative" }}>
                                                                <div className='close_img' onClick={()=>deleteImageRu(item)}>X</div>
                                                                <img style={{width:'100%',height:'100%',objectFit:'cover'}} src={item}></img>
                                                            </div>)
                                                    }

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
                                                        placeholder={category?.description_en}
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
                                                        placeholder={category?.name_en}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <div class="mb-3 input-group">
                                                        <button type="button" id="button-addon1" class="btn bg-gradient-primary"
                                                            onClick={() => setImageEn(category?.id)}
                                                        >
                                                            Добавить фото
                                                        </button>
                                                        <input type="file" class="form-control" multiple
                                                            onChange={e => setFileEn(e.target.files[0])}
                                                        />

                                                    </div>
                                                </div>
                                                <div className="form-group" style={{display:'flex'}}>

                                                    {
                                                        category?.ImagesEn?.map(item =>
                                                            <div style={{ width: "64px", height: "64px",display:'block',position:'relative' }}>
                                                                <div className='close_img' onClick={()=>deleteImageEn(item)}>X</div>
                                                                <img style={{width:'100%',height:'100%',objectFit:'cover'}} src={item}></img>
                                                            </div>)
                                                    }

                                                </div>
                                            </>
                                            : null
                                    }
                                    {/* <div className="form-group">
                                        <label htmlFor="name">фото на анг</label>
                                        {
                                            category?.ImagesEn?.map(item =>
                                                <img src={item}></img>)
                                        }

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">фото на русс</label>
                                        {
                                            category?.ImagesRu?.map(item =>
                                                <img src={item}></img>)
                                        }
                                    </div> */}




                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <button
                                        onClick={changeCategory}

                                        className="btn btn-primary"
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

export default ChangeCategory