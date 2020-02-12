import React from 'react';
import UserPageTemplate from '../../Components/templates/UserPageTemplate/UserPageTemplate';
import Card from '../../Components/molecules/card/card';

const TwittersView = () => (
  <UserPageTemplate pageType="twitter">
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
  </UserPageTemplate>
);

export default TwittersView;
