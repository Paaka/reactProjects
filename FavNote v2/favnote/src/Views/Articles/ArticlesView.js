import React from 'react';
import UserPageTemplate from '../../Components/templates/UserPageTemplate/UserPageTemplate';
import Card from '../../Components/molecules/card/card';
import GridViewTemplate from '../../Components/templates/GridViewTemplate/GridViewTemplate';

const ArticleView = () => (
  <GridViewTemplate pageType="article">
    <Card
      cardType="article"
      title="No nieźle"
      created="3 days ago"
      content="Something..."
      articleURL="https://github.com/Paaka"
    ></Card>
    <Card
      cardType="article"
      title="No nieźle"
      created="3 days ago"
      content="Something..."
      articleURL="https://github.com/Paaka"
    ></Card>
    <Card
      cardType="article"
      title="No nieźle"
      created="3 days ago"
      content="Something..."
      articleURL="https://github.com/Paaka"
    ></Card>
    <Card
      cardType="article"
      title="No nieźle"
      created="3 days ago"
      content="Something..."
      articleURL="https://github.com/Paaka"
    ></Card>
    <Card
      cardType="article"
      title="No nieźle"
      created="3 days ago"
      content="Something..."
      articleURL="https://github.com/Paaka"
    ></Card>
    <Card
      cardType="article"
      title="No nieźle"
      created="3 days ago"
      content="Something..."
      articleURL="https://github.com/Paaka"
    ></Card>
  </GridViewTemplate>
);

export default ArticleView;
