// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ data }) => {
    const { name, phone, email, photo } = data;
    return (
        <div className="contact">
            <img className="contact-avatar" src={photo} alt={name} />
            <div className="contact-info">
                <h3 className="contact-info-name text-bold">{name}</h3>
                <p className="contact-info-email">{email}</p>
                <p className="contact-info-phone">{phone}</p>
            </div>
        </div>
    );
};

export default Contact;
