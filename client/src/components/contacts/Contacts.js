import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
    const contactContacts = useContext(ContactContext);
    const { contacts, filtered } = contactContacts;

    if (contacts.length === 0) {
        return <h4>Please add a contact...</h4>;
    }
    return (
        <Fragment>
            <TransitionGroup>
                {filtered !== null
                    ? filtered.map(contact => (
                          <CSSTransition
                              key={contact.id}
                              timeout={1000}
                              classNames="item"
                          >
                              <ContactItem contact={contact} />
                          </CSSTransition>
                      ))
                    : contacts.map(contact => (
                          <CSSTransition
                              key={contact.id}
                              timeout={1000}
                              classNames="item-scale"
                          >
                              <ContactItem contact={contact} />
                          </CSSTransition>
                      ))}
            </TransitionGroup>
        </Fragment>
    );
};

export default Contacts;
