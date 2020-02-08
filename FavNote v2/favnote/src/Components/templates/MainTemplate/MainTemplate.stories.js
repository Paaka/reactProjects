import React from 'react';
import MainTemplate from './MainTemplate';
import Button from '../../atoms/Button/Button';
import { BrowserRouter } from 'react-router-dom';

export default { title: 'Main Template' };

export const mainTemplate = () => {
  return (
    <>
      <MainTemplate>
        <BrowserRouter>
          <h1>notes</h1>
          <h1>twitters</h1>
          <h1>articles</h1>
        </BrowserRouter>
      </MainTemplate>
    </>
  );
};
