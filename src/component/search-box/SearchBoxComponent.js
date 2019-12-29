import React, { useState } from "react";
import "./SearchBoxComponent.modules.scss";
import CancelIcon from "../../assets/images/Cancel.svg";
import SearchIcon from "../../assets/images/Search.svg";

const SearchBoxComponent = ({ onSearch }) => {
    const [search, setSearch] = useState("");
    const handleChange = search => {
        setSearch(search);
        onSearch(search);
    };

    return (
        <div className="flexbox search-container">
            <img
                className="search-icon"
                src={SearchIcon}
                alt="Search"
            />
            <input
                className="search-box input-font"
                type="text"
                value={search}
                placeholder="What do you want to learn?"
                onChange={e => handleChange(e.target.value)} />
            {search && <img
                src={CancelIcon}
                alt="Cancel"
                className="cancel-icon"
                onClick={() => handleChange("")} />}
        </div>
    );
};

export default SearchBoxComponent;