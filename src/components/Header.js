import React, {useState} from "react";
import MainLogo from "../assets/logo/main_logo.png";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };

    return (
        <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput} />
    );
}

function Header () {
    const navBar = [
        {id: 'Explore', name: 'Explore'},
        {id: 'Tips', name: 'Tips'},
        {id: 'Inspiration', name: 'Inspiration'}
    ];

    return (
        <header>
            <ul>
                <li key='logo'><img src={MainLogo} alt="logo" /></li>
                {navBar.map((nav) => 
                    <li key={nav.id}>{nav.name}</li>
                )};
            </ul>
            <SearchBar />
        </header>
    );

}


export default Header;