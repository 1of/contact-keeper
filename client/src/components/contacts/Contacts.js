import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
    const contactContacts = useContext(ContactContext);
    const { contacts } = contactContacts;

    return (
        <Fragment>
            {contacts.map(contact => (
                <ContactItem contact={contact} />
            ))}
        </Fragment>
    );
};

export default Contacts;
