import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <NavLink to="/" className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">Администратор</span>
            </NavLink>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                        {/* <li className="nav-item">
                            <NavLink to="/" className="nav-link ">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>
                                    Главная
                                </p>
                            </NavLink>

                        </li> */}
                        <li className="nav-item">
                            <NavLink to="/orders" className="nav-link">
                                <i class="nav-icon fas fa-shopping-basket"></i>
                                <p>
                                    Заказы
                                    {/* <span className="right badge badge-danger">New</span> */}
                                </p>
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink to="/partners" className="nav-link">
                                <i className="nav-icon fas fa-copy" />
                                <p>
                                    Партнеры
                                </p>
                            </NavLink>

                        </li> */}
                        <li className="nav-item">
                            <NavLink to="/etiket" className="nav-link">
                                <i className="nav-icon fas fa-chart-pie" />
                                <p>
                                    Этикеты ШК
                                    {/* <span class="right badge badge-danger">New</span> */}
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/users" className="nav-link">
                                <i className="nav-icon fas fa-tree" />
                                <p>
                                    Пользователи
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                                <i className="nav-icon fas fa-edit" />
                                <p>
                                    Категории

                                </p>
                            </NavLink>

                        </li>
                        <li className="nav-item">
                            <a  className="nav-link">
                                <i className="nav-icon fas fa-table" />
                                <p>
                                    Продукции
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to='/products' className="nav-link">

                                        <p>Все товары</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/addproduct' href="pages/tables/data.html" className="nav-link">

                                        <p>Добавить товар</p>
                                    </NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <NavLink to="/" className="nav-link">

                                        <p>Отзывы</p>
                                    </NavLink>
                                </li> */}
                            </ul>
                        </li>

                        {/* <li className="nav-item">
                            <NavLink to="/deliverbybus" className="nav-link">
                                <i className="nav-icon far fa-envelope" />
                                <p>
                                    Доставка
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link">

                                        <p>1</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link">

                                        <p>2</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="NavLink" className="nav-link">

                                        <p>3</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li> */}
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-book" />
                                <p>
                                    Промо
                                    <i className="fas fa-angle-left right" />
                                    
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/examples/invoice.html" className="nav-link">

                                        <p>1</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/profile.html" className="nav-link">

                                        <p>2</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/e-commerce.html" className="nav-link">

                                        <p>3</p>
                                    </a>
                                </li>

                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">

                                <p>
                                    Счастливый купон
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="/ordered" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>
                                            1
                                        </p>
                                    </NavLink>
                                   
                                </li>

                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/settings" className="nav-link">
                                <i className="nav-icon fas fa-search" />
                                <p>
                                    Настройки

                                </p>
                            </NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink to="/dilers" className="nav-link">
                                <i className="nav-icon fas fa-search" />
                                <p>
                                    Дилеры

                                </p>
                            </NavLink>

                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>

    )
}

export default Sidebar