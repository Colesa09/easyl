import React, {useState} from "react";
import { Link } from 'react-router-dom';
import MainLogo from "../../assets/logo/main_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };

    return (
        <div className="search-bar-div">
            <input
            type="search"
            className="search-bar"
            placeholder="Search"
            onChange={handleChange}
            value={searchInput} />
            <span><FontAwesomeIcon icon={faMagnifyingGlass} size='1x' className='search-bar-icon' /></span>

        </div>
    );
}

function Header () {
    const navBar = [
        {id: 'explore', name: 'Explore'},
        {id: 'tips', name: 'Tips'},
        {id: 'inspiration', name: 'Inspiration'}
    ];

    return (
        <header>
           
            <Link to="/" className="navLogo"><img src={MainLogo} alt="logo" className="navLogo-pic"/></Link>
            <ul>
                {navBar.map((nav) => 
                    <li key={nav.id}>
                        <Link to={nav.id}>{nav.name}</Link>
                    </li>
                )}
            </ul>
            <SearchBar />
        </header>
    );

}


export default Header;