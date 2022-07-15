import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data  from './JSON/country.json';

export default class NavBar extends Component {

    render() {

        let { mode, changeMode,changeCountry ,country} = this.props;
        const handleDarkMode = () => {
            console.log("Change theme");
            changeMode();
        }
        const handleCountry =(event)=>{
            let keyOfCountry = null;
            data.map((value,key)  =>{
                if(Object.keys(value)[0] === event.target.innerText)
                    keyOfCountry = Object.values(value)[0];
            })
            changeCountry(keyOfCountry);
        }
        return (
            <>

                <nav className={`navbar fixed-top navbar-expand-lg navbar-${mode} bg-${mode}`} id="navbar-example2">

                    <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                            <i className="fas fa-bars"></i>
                        </button>


                        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">

                            <a className="navbar-brand mt-2 mt-lg-0" href="#">
                                <img src="/Newsify.png" height="30" alt="Newsify Logo" loading="lazy" />
                            </a>

                            <ul className={`navbar-nav mb-2 mb-lg-0 bg-${mode}`}>
                                <li className="nav-item">
                                    <Link className="nav-link"  to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <a className="nav-link dropdown-toggle" role="button" id="dropdownMenuLink" data-mdb-toggle="dropdown" aria-expanded="false" href="#">News</a>
                                        <ul className={`dropdown-menu dropdown-menu-end bg-${mode}`} aria-labelledby="dropdownMenuLink">
                                            <li><Link className={`dropdown-item text-${mode === "light" ? "dark" : "light"}`} to="/">General</Link></li>
                                            <li><Link className={`dropdown-item text-${mode === "light" ? "dark" : "light"}`} to="/business">Business</Link></li>
                                            <li><Link className={`dropdown-item text-${mode === "light" ? "dark" : "light"}`} to="/entertainment">Entertainment</Link></li>
                                            <li><Link className={`dropdown-item text-${mode === "light" ? "dark" : "light"}`} to="/health">Health</Link></li>
                                            <li><Link className={`dropdown-item text-${mode === "light" ? "dark" : "light"}`} to="/science">Science</Link></li>
                                            <li><Link className={`dropdown-item text-${mode === "light" ? "dark" : "light"}`} to="/sports">Sports</Link></li>
                                            <li><Link className={`dropdown-item text-${mode === "light" ? "dark" : "light"}`} to="/technology">Technology</Link></li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>
                            </ul>

                        </div>

                        <div className="dropdown " data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0">
                            <a className={`text-reset me-3 dropdown-toggle text-${mode === "light" ? "dark" : "light"}`} href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown"
                                aria-expanded="false">Country : {country.toUpperCase()}</a>
                            <ul className={`dropdown-menu dropdown-menu-end scrollable-menu bg-${mode}`} style={{maxHeight:"300px",height:"auto",overflowX:"hidden"}}  aria-labelledby="dropdownMenuLink">
                            {data.map((data,key) => {
                                return <li key={Object.keys(data)[0]}><a className={`dropdown-item text-${mode === "light" ? "dark" : "light"}`} onClick={handleCountry} href="#">{Object.keys(data)[0]}</a></li>
                                })}
                            </ul>
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="form-check form-switch justify-content-left">
                                <input className="form-check-input" onClick={handleDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            </div>




                            <div className="dropdown">
                                <a className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className="fas fa-bell"></i>
                                    <span className="badge rounded-pill badge-notification bg-danger">1</span>
                                </a>
                                <ul className={`dropdown-menu dropdown-menu-end bg-${mode}`} aria-labelledby="navbarDropdownMenuLink" >
                                    <li>
                                        <a className={`dropdown-item text-${mode === "light" ? "dark" : "light"}`} href="#">Some news</a>
                                    </li>
                                    <li>
                                        <a className={`dropdown-item text-${mode === "light" ? "dark" : "light"}`} href="#">Another news</a>
                                    </li>
                                    <li>
                                        <a className={`dropdown-item text-${mode === "light" ? "dark" : "light"}`} href="#">Something else here</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="dropdown">
                                <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar" role="button"
                                    data-mdb-toggle="dropdown" aria-expanded="false"  >
                                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height="25"
                                        alt="Black and White Portrait of a Man" loading="lazy" />
                                </a>
                                <ul
                                    className={`dropdown-menu dropdown-menu-end bg-${mode}`}
                                    aria-labelledby="navbarDropdownMenuAvatar"
                                >
                                    <li>
                                        <a className={`dropdown-item text-${mode === "light" ? "dark" : "light"}`} href="#">My profile</a>
                                    </li>
                                    <li>
                                        <a className={`dropdown-item text-${mode === "light" ? "dark" : "light"}`} href="#">Settings</a>
                                    </li>
                                    <li>
                                        <a className={`dropdown-item text-${mode === "light" ? "dark" : "light"}`} href="#">Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </nav>

            </>
        )
    }
}
