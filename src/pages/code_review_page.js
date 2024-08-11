import React from 'react';
import PageHeader from '../componenets/page_header';
import PageAnimation from '../componenets/page_animation';

function CodeReviewPage() {
  return (
    <PageAnimation>
      <PageHeader
        title='Code Review Page'
        description=' Get a comprehensive overview of your repository health and monitor errors effectively.'
      />
    </PageAnimation>
  );
}

export default CodeReviewPage;
