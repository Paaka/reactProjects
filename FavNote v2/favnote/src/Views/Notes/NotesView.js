import React from 'react';
import UserPageTemplate from '../../Components/templates/UserPageTemplate/UserPageTemplate';
import Card from '../../Components/molecules/card/card';
import GridViewTemplate from '../../Components/templates/GridViewTemplate/GridViewTemplate';

const NotesView = () => (
  <GridViewTemplate pageType="note">
    <Card title="No nieźle" created="3 days ago" content="Something..."></Card>
    <Card title="No nieźle" created="3 days ago" content="Something..."></Card>
    <Card title="No nieźle" created="3 days ago" content="Something..."></Card>
    <Card title="No nieźle" created="3 days ago" content="Something..."></Card>
    <Card title="No nieźle" created="3 days ago" content="Something..."></Card>
    <Card title="No nieźle" created="3 days ago" content="Something..."></Card>
  </GridViewTemplate>
);

export default NotesView;
