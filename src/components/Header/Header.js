import React, {useState} from "react";
import { Link } from 'react-router-dom';
import MainLogo from "../../assets/logo/main_logo.png";
import SearchIcon from "../../assets/icons/search_icon.png";
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
            <span><img src={SearchIcon} alt="" class="search-bar-icon"/></span>

            {/* WILL COME BACK TO THIS PER DOCS NEED TO DOWNLOAD PACKAGE TO USE ICONS
                <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
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