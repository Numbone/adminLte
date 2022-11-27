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
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link ">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>
                                    Главная
                                </p>
                            </NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink to="/orders" className="nav-link">
                                <i class="nav-icon fas fa-shopping-basket"></i>
                                <p>
                                    Заказы
                                    {/* <span className="right badge badge-danger">New</span> */}
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/partners" className="nav-link">
                                <i className="nav-icon fas fa-copy" />
                                <p>
                                    Партнеры
                                </p>
                            </NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink to="/etiket" className="nav-link">
                                <i className="nav-icon fas fa-chart-pie" />
                                <p>
                                    Этикеты ШК
                                    <span class="right badge badge-danger">New</span>
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
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-table" />
                                <p>
                                    Продукции
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/tables/simple.html" className="nav-link">

                                        <p>Все товары</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/tables/data.html" className="nav-link">

                                        <p>Добавить товар</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/tables/jsgrid.html" className="nav-link">

                                        <p>Отзывы</p>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon far fa-envelope" />
                                <p>
                                    Доставка
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/mailbox/mailbox.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Inbox</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/mailbox/compose.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Compose</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/mailbox/read-mail.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Read</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
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
                                        <i className="far fa-circle nav-icon" />
                                        <p>Invoice</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/profile.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Profile</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/e-commerce.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>E-commerce</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/projects.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Projects</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/project-add.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Project Add</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/project-edit.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Project Edit</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/project-detail.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Project Detail</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/contacts.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Contacts</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/faq.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>FAQ</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/contact-us.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Contact us</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon far fa-plus-square" />
                                <p>
                                    Счастливый купон
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>
                                            Login &amp; Register v1
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/examples/login.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Login v1</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/register.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Register v1</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/forgot-password.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Forgot Password v1</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/recover-password.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Recover Password v1</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>
                                            Login &amp; Register v2
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/examples/login-v2.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Login v2</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/register-v2.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Register v2</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/forgot-password-v2.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Forgot Password v2</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/examples/recover-password-v2.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Recover Password v2</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/lockscreen.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Lockscreen</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/legacy-user-menu.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Legacy User Menu</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/language-menu.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Language Menu</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/404.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Error 404</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/500.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Error 500</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/pace.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Pace</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/blank.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Blank Page</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="starter.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Starter Page</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-search" />
                                <p>
                                    Настройки

                                </p>
                            </a>

                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-search" />
                                <p>
                                    Дилеры

                                </p>
                            </a>

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