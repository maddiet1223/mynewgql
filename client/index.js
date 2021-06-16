import React from 'react';
import './style/style.css';
import ReactDOM from 'react-dom';
import { Router,Route,hashHistory,IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import App from './Components/App';
import SongList from './Components/SongList';
import SongCreate  from './Components/SongCreate';
import SongDetail from './Components/SongDetail';


const client = new ApolloClient({});

const Root = () => {
  return (
    //layer between apollo layer and client
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SongList}/>
        <Route path="songs/new" component={SongCreate}/>
        <Route path="songs/:id" component={SongDetail}/>
       
      </Route>
    </Router>

  </ApolloProvider>
  )};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
