import React from 'react';
import UserPageTemplate from '../../Components/templates/UserPageTemplate/UserPageTemplate';
import Card from '../../Components/molecules/card/card';
import GridViewTemplate from '../../Components/templates/GridViewTemplate/GridViewTemplate';
import { connect } from 'react-redux';

const NotesView = ({ notes }) => (
  <GridViewTemplate pageType="note">
    {notes.map(({ id, content, title, created }) => (
      <Card id={id} key={id} content={content} title={title} created={created} />
    ))}
  </GridViewTemplate>
);

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(NotesView);
