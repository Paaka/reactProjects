import React from 'react';
import UserPageTemplate from '../../Components/templates/UserPageTemplate/UserPageTemplate';
import Card from '../../Components/molecules/card/card';
import GridViewTemplate from '../../Components/templates/GridViewTemplate/GridViewTemplate';
import { connect } from 'react-redux';

const ArticleView = ({ articles }) => (
  <GridViewTemplate pageType="article">
    {articles.map(({ id, title, created, content, articleURL }) => (
      <Card
        id={id}
        cardType="article"
        title={title}
        created={created}
        content={content}
        articleURL={articleURL}
      />
    ))}
  </GridViewTemplate>
);

const mapStateToProps = state => {
  const { articles } = state;
  return { articles };
};

{
  /* <Card
      id="1"
      cardType="article"
      title="No nieźle"
      created="3 days ago"
      content="Something..."
      articleURL="https://github.com/Paaka"
    ></Card> */
}
export default connect(mapStateToProps)(ArticleView);
