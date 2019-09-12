import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import {Provider, connect} from 'react-redux';
import store from './store';
import {bindActionCreators} from 'redux';
import * as actionCreators from './actions/actionCreators';


function mapStateToProps(state){
   return state;
}

function mapDispatchToProps(dispatch){
   return bindActionCreators(actionCreators, dispatch);
}

const MainApp = connect(mapStateToProps, mapDispatchToProps)(App);

const root = <Provider store={store}>
   <MainApp/>
</Provider>


ReactDOM.render(root , document.getElementById('root'));

serviceWorker.unregister();
