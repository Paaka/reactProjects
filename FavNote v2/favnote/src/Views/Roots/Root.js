import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTheme from '../../Components/templates/MainTemplate/MainTemplate';
import NotesView from '../Notes/NotesView';
import TwittersView from '../Twitters/TwitterView';
import ArticleView from '../Articles/ArticlesView';
import Sidebar from '../../Components/organisms/sidebar/sidebar';

const Root = () => (
  <MainTheme>
    <>
      <BrowserRouter>
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/" component={NotesView}></Route>
          <Route path="/Twitters" component={TwittersView}></Route>
          <Route path="/Articles" component={ArticleView}></Route>
        </Switch>
      </BrowserRouter>
    </>
  </MainTheme>
);

export default Root;
