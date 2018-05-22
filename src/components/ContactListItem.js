import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//Styling the list.
const styles = {
    listWrapper:{
        backgroundColor: '#ffcc80',
        textColor:'#000000',
        listStyle: 'none',
        height: '80px',

    },
    bold:{
        fontSize: '24px',
        fontWeight: 'bold',
        textColor: '#000000',
    }
}

//Listing in the contact list.
const ContactListItem = props => {
    const list = props.myList.map(item => {
        return(
            <Link to={`${item.id}`} key={item.id} style={{textDecoration: 'none'}}>
                <div style={styles.listWrapper}>
                    <p><span style={styles.bold}>Name: </span>{item.Name}</p>
                    <p><span style={styles.bold}>Email: </span>{item.Email}</p>
                </div>
            </Link>
        );
    });
    return <div> {list} </div>;
}

const mapStateToProps = state => { 
    return{
        myList: state.list
    }
}

export default connect(mapStateToProps, null)(ContactListItem);