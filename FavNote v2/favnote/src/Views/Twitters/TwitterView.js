import React from 'react';
import UserPageTemplate from '../../Components/templates/UserPageTemplate/UserPageTemplate';
import Card from '../../Components/molecules/card/card';
import GridViewTemplate from '../../Components/templates/GridViewTemplate/GridViewTemplate';
import { connect } from 'react-redux';

const TwittersView = ({ twitters }) => (
  <GridViewTemplate pageType="twitter">
    {twitters.map(({ id, title, created, content, twitterName }) => (
      <Card
        id={id}
        cardType="twitter"
        title={title}
        created={created}
        content={content}
        twitterName={twitterName}
      />
    ))}
  </GridViewTemplate>
);

const mapStateToProps = state => {
  const { twitters } = state;
  return { twitters };
};

export default connect(mapStateToProps)(TwittersView);
