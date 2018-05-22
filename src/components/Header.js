import React from 'react';

//header styling.
const styles = {
    headerWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        fontSize: '48px',
        fontStyle: 'bold',
        backgroundColor: '#99ffff'
    }
}

const header = () => <div style={styles.headerWrapper}>Contact List </div>;

export default header;