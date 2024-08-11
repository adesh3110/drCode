import React from 'react';
import PageHeader from '../componenets/page_header';
import PageAnimation from '../componenets/page_animation';

function HomePage() {
  return (
    <PageAnimation>
      <PageHeader
        title='Home Page'
        description=' Get a comprehensive overview of your repository health and monitor errors effectively.'
      />
    </PageAnimation>
  );
}

export default HomePage;
