import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


import Header from './components/Header';
import ContactList from './components/ContactList';
import Form from './components/Form';

const styles = {
    bodyWrapper: {
        display: 'flex',
        height: '50vh',
    },
        appWrapper: {
            backgroundColor:'lightgreen'
        }
}

const App = () => {
    return (
       <BrowserRouter>
         <div style={styles.appWrapper} className="App">
           <Header />

           <div styles={styles.bodyWrapper}>
            <ContactList />

            <Switch>
            <Route path='/:listId' component={Form} />
            <Redirect from='/' to='/1' />
            </Switch>
           </div>
         </div>
       </BrowserRouter>
    );
}

export default App;
