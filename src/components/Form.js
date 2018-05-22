import React, { Component } from 'react';
import { connect } from 'react-redux' ;

//form styling.
const styles = {
    formWrapper:{
        position: 'absolute',
        top: '100px',
        left: '600px',
        width: '66%',
        height: '50vh',
        border: '',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '32px'
    },
    innerForm:{
        padding: '100px',
        border: '',
        backgroundColor: '#d9b3ff',
        textColor: '#000000',
        fontSize: '32px',
    },
    updatButton:{
        position: 'relative',
        top: '50px',
        right: '10px',
        padding: '15px',
        border: '1px solid black',
        backgroundColor: '#80ff80',
        textColor: '#000000',
        fontSize: '18px',
        fontStyle: 'bold',
    },
    deleteButton:{
        position: 'relative',
        top: '50px',
        left: '40px',
        padding: '15px',
        border: '1px solid black',
        backgroundColor: '#ff5c33',
        textColor: '#000000',
        fontSize: '18px',
        fontStyle: 'bold',
    },
    addButton:{
        position: 'relative',
        top: '300px',
        right: '350px',
        padding: '15px',
        border: '1px solid black',
        backgroundColor: '#ffff80',
        textColor: '#000000',
        fontSize: '20px',
        fontStyle: 'bold',
    }
}

//Form with functions to process the data.
class Form extends Component {
    //loads initial contact in form inputs
    componentDidMount() {
        this.props.onListChange(this.props.match.params.listId)
    }
    componentWillReceiveProps(newProps){
        if (this.props.match.params.listId !== newProps.match.params.listId){
            this.props.onListChange(newProps.match.params.listId);
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.redirectTo !== prevProps.redirectTo){
            this.props.history.push(this.props.redirectTo);
        }
    }

    submit(e){
        e.preventDefault();
    }

    focus(e){
        e.target.value= '' ;
    }

    //the form render.
    render() {
        console.log(this.props);
        const{listId} = this.props.match.params;
        const {Name, Phone, Email, onInputChange, onUpdate, onDelete, onAdd} = this.props;
        return(
            <form style={styles.formWrapper} onSubmit={this.submit}>
                <div style={styles.innerForm}>
                    <div>
                        <label> Name: <input 
                        type='text' 
                        name='Name' 
                        value={Name}
                        onFocus={this.focus} 
                        onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                        <br />
                        <label>Phone: <input 
                        type='text' 
                        name='Phone' 
                        value={Phone}
                        onFocus={this.focus} 
                        onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                        <br />
                        <label>Email: <input
                        type='text' 
                        name='Email' 
                        value={Email}
                        onFocus={this.focus} 
                        onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                    </div>
                    <div>
                        <input type='button'  value='Update' onClick={() => onUpdate(listId)} style={styles.updatButton}/>
                        <input type='button'  value='Delete' onClick={() => onDelete(listId)} style={styles.deleteButton}/>
                        
                    </div>
                </div> 
                    <div>
                        <input type='button'  value='Add New Contact Information'    onClick={ onAdd } style={styles.addButton}/>
                </div>   
            </form>
        );
    }
}

//Rendering for state to props
const mapStateToProps = state=>{
    return{
        items: state.list, 
        Name: state.Name,
        Phone: state.Phone,
        Email: state.Email,
        redirectTo: state.redirectTo
    }
}

//Functions for the form.
const mapDispatchToProps = dispatch => {
    return{
        onListChange: (id) => dispatch({type: 'CHANGE_LIST', id}),
        onInputChange: (name, value) => dispatch({type:'CAPTURE_INPUT', payload:{name, value}}),
        onUpdate: (id) => dispatch({type: 'UPDATE', id}),
        onDelete: (id) => dispatch({type: 'DELETE', id}),
        onAdd: () => dispatch({type: 'ADD'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);