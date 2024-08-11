/* eslint-disable */
import React from 'react';
import FigureCard from './figure_card';

function InfoBar(props) {
  const figures = props.figures;

  return (
    <div className='grid grid-cols-2  lg:grid-cols-4 gap-2 my-4 '>
      <FigureCard value={figures.a} title='Unresolved Issues' />
      <FigureCard value={figures.b} title='Resolved Issues' />
      <FigureCard value={figures.c} title='Average Issue Resolution Time' />
      <FigureCard value={figures.d} title='Critical Issues' />
    </div>
  );
}

export default InfoBar;
