import React from 'react';
import PageHeader from '../componenets/page_header';
import PageAnimation from '../componenets/page_animation';

function SettingPage() {
  return (
    <PageAnimation>
      <PageHeader
        title='Setting Page'
        description=' Get a comprehensive overview of your repository health and monitor errors effectively.'
      />
    </PageAnimation>
  );
}

export default SettingPage;
