import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'FName SName',
                email: 'test@test.com',
                phone: '00099999999',
                type: 'professional'
            },
            {
                id: 2,
                name: 'FName SName',
                email: 'test@test.com',
                phone: '00099999999',
                type: 'default'
            },
            {
                id: 3,
                name: 'FName SName',
                email: 'test@test.com',
                phone: '00099999999',
                type: 'professional'
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    // Delete Contact

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contact

    // Clear Contact

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                addContact
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;
