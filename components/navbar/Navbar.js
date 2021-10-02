import styles from '../../styles/Navbar.module.css';
import { MenuOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';
import { Layout, Select } from 'antd';
import { DownOutlined, UserOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { BiSearchAlt, BiCartAlt, BiUserCircle, BiBell, BiX, BiMenu, BiCaretDown } from "react-icons/bi";
import React, { useState, useEffect } from 'react';

const { Header, Content, Sider } = Layout;
const { Option } = Select;

const Navbar = () => {
    const [toogleMenu, setToogleMenu] = useState(false);

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const haha = () => {
        setToogleMenu(!toogleMenu);
        // alert(toogleMenu);
    };

    // useEffect(() => {
    //     alert('hahaha');
    // }, [toogleMenu]);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.mobile_menu}>
                    <a href="#" className={styles.logo__mobile}>HOME i</a>
                    <span>
                        <BiMenu style={{ fontSize: '35px', color: '#000' }} onClick={haha} />
                    </span>
                </div>

                <div className={styles.wrapper_menu}>
                    <a href="#" className={styles.menu_close}>
                        <BiX style={{ fontSize: '20px', color: '#000' }} />
                    </a>

                    <div className={styles.bg_first}>
                        <div className={`${styles.top_menu} ${styles.container}`}>
                            <ul className={`${styles.ul} ${styles.divided}`}>
                                <li className={styles.li_firstchild}>
                                    <a href="#">0339329925</a>
                                </li>
                                <li>
                                    <a href="#">buitrungtinh130296@gmail.com</a>
                                </li>
                            </ul>

                            <ul className={`${styles.ul} ${styles.divided}`}>
                                <li>
                                    <Select size="small" defaultValue="vnd" onChange={handleChange}>
                                        <Option value="vnd">VND</Option>
                                        <Option value="usd">USD</Option>
                                        <Option value="eur">
                                            EUR
                                        </Option>
                                    </Select>
                                </li>
                                <li>
                                    <li>
                                        <Select size="small" defaultValue="vnd" onChange={handleChange}>
                                            <Option value="vnd">VIE</Option>
                                            <Option value="usd">ENG</Option>
                                        </Select>
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className={`${styles.middle__menu} ${styles.container}`}>
                            <div>
                                <span className={styles.logo}>
                                    HOME i
                                </span>
                            </div>

                            <div className={styles.search}>
                                <div>
                                    <input className={styles.input__search} type="text" placeholder="Tìm kiếm" />
                                    <button className={styles.button__search}>
                                        <i className={styles.icon__search}>
                                            <BiSearchAlt style={{ fontSize: '20px', color: '#000' }} />
                                        </i>
                                    </button>
                                </div>
                            </div>

                            <ul className={styles.user__menu}>
                                <li>
                                    <a href="">
                                        <BiBell style={{ fontSize: '24px', color: '#000' }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <BiUserCircle style={{ fontSize: '24px', color: '#000' }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <BiCartAlt style={{ fontSize: '24px', color: '#000' }} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.bg_bottom}>
                        <div className={`${styles.bottom__menu} ${styles.container}`}>
                            <ul className={styles.menu}>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#" style={{ position: "relative" }}>
                                        About
                                        {/* <i style={{ position: "absolute", top: '12px', right: '-10px' }}>
                                            <BiCaretDown style={{ fontSize: '16px', color: '#000' }} />
                                        </i> */}
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Shop
                                        <i style={{ position: "absolute", top: '12px', right: '-10px' }}>
                                            <BiCaretDown style={{ fontSize: '16px', color: '#000' }} />
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <navbar className={toogleMenu ? `${styles.navbar} ${styles.show_navbar}` : `${styles.navbar}`}>
                    <div className={styles.navbar__top}>
                        <a className={styles.logo}>HOME i</a>
                        <i className={styles.close__menu}>
                            <BiX style={{ fontSize: '40px', color: '#000' }} onClick={haha} />
                        </i>
                    </div>

                    <div className={styles.search__navbar}>
                        <input type="text" placeholder="Search" />
                        <button className={styles.button__search__navbar}>
                            <i className={styles.icon__search__navbar}>
                                <BiSearchAlt style={{ fontSize: '20px', color: '#000' }} />
                            </i>
                        </button>
                    </div>

                    <ul className={styles.navbar__user}>
                        <li>
                            <a href="">
                                <BiBell style={{ fontSize: '24px', color: '#000' }} />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BiUserCircle style={{ fontSize: '24px', color: '#000' }} />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BiCartAlt style={{ fontSize: '24px', color: '#000' }} />
                            </a>
                        </li>
                    </ul>

                    <ul className={styles.navbar__mobile}>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">
                                Shop
                                {/* <i>
                                    <BiCaretDown />
                                </i> */}
                            </a>
                            {/* <ul className={styles.nav__mobile__dropdown}>
                                <li>
                                    <a href="#">home</a>
                                </li>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                            </ul> */}
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </navbar>
            </header>
        </>
    )
}

export default Navbar;