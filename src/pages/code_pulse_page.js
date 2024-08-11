/* eslint-disable */
import React from 'react';
import PageHeader from '../componenets/page_header';
import SearchSection from '../componenets/search_section';
import InfoBar from '../componenets/info_bar';
import RepositoryTableMUI from '../componenets/repo_table_mui';
import PageAnimation from '../componenets/page_animation';

function CodePulse() {
  const figures = {
    a: 32,
    b: 4,
    c: 11,
    d: 1,
  };
  return (
    <PageAnimation>
      <main>
        <PageHeader
          title='Code Pulse'
          description=' Get a comprehensive overview of your repository health and monitor errors effectively.'
        />
        <InfoBar figures={figures} />
        <SearchSection />
        <RepositoryTableMUI />
      </main>
    </PageAnimation>
  );
}

export default CodePulse;
