import React from 'react';

import ContactListItem from './ContactListItem';

//Contact list styling.
const styles = {
    ContactListWrapper: {
        width: '32%',
        padding: '50px',
        backgroundColor: '#ffffb3',
        fontSize: '20px',
        height: '400px',
        overflow: 'scroll'
    }
}

const ContactList = () => <div style={styles.ContactListWrapper}><ContactListItem /></div>

export default ContactList;