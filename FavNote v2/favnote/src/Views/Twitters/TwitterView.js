import React from 'react';
import UserPageTemplate from '../../Components/templates/UserPageTemplate/UserPageTemplate';
import Card from '../../Components/molecules/card/card';
import GridViewTemplate from '../../Components/templates/GridViewTemplate/GridViewTemplate';

const TwittersView = () => (
  <GridViewTemplate pageType="twitter">
    <Card
      cardType="twitter"
      title="No nieźle"
      created="3 days ago"
      content="Something..."
      twitterName="https://avatars.io/static/default_128.jpg"
    ></Card>
    <Card
      cardType="twitter"
      title="No nieźle"
      created="3 days ago"
      content="Something..."
      twitterName="https://avatars.io/static/default_128.jpg"
    ></Card>
    <Card
      cardType="twitter"
      title="No nieźle"
      created="3 days ago"
      content="Something..."
      twitterName="https://avatars.io/static/default_128.jpg"
    ></Card>
    <Card
      cardType="twitter"
      title="No nieźle"
      created="3 days ago"
      content="Something..."
      twitterName="https://avatars.io/static/default_128.jpg"
    ></Card>
  </GridViewTemplate>
);

export default TwittersView;
