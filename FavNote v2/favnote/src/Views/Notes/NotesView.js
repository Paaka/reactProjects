import React from 'react';
import UserPageTemplate from '../../Components/templates/UserPageTemplate/UserPageTemplate';
import Card from '../../Components/molecules/card/card';

const NotesView = () => (
  <UserPageTemplate pageType="note">
    <Card title="No nieźle" created="3 days ago" content="Something..."></Card>
    <Card title="No nieźle" created="3 days ago" content="Something..."></Card>
    <Card title="No nieźle" created="3 days ago" content="Something..."></Card>
    <Card title="No nieźle" created="3 days ago" content="Something..."></Card>
    <Card title="No nieźle" created="3 days ago" content="Something..."></Card>
    <Card title="No nieźle" created="3 days ago" content="Something..."></Card>
  </UserPageTemplate>
);

export default NotesView;
