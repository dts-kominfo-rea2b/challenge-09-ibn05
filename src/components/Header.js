// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";

const Header = () => {
    return (
        <header className="header">
            <h1 className="header_title">Call a Friend</h1>
            <p className="header_subtitle">Your friendly Contact app</p>
        </header>
    );
};

export default Header;
