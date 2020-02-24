import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import MainTheme from '../../Components/templates/MainTemplate/MainTemplate';
import NotesView from '../Notes/NotesView';
import TwittersView from '../Twitters/TwitterView';
import ArticleView from '../Articles/ArticlesView';
import DetailsView from '../DetailsView/DetailsView';
import { routes } from '../../Routes/index';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTheme>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/Notes"></Redirect>} />
          <Route exact path={routes.notes} component={NotesView}></Route>
          <Route path={routes.note} component={DetailsView} />
          <Route exact path={routes.twitters} component={TwittersView}></Route>
          <Route path={routes.twitter} component={DetailsView} />
          <Route exact path={routes.articles} component={ArticleView}></Route>
          <Route path={routes.article} component={DetailsView} />
        </Switch>
      </MainTheme>
    </BrowserRouter>
  </Provider>
);

export default Root;
