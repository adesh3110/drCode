import React from 'react';
import PageHeader from '../componenets/page_header';
import SearchSection from '../componenets/search_section';
import InfoBar from '../componenets/info_bar';
import RepositoryTable from '../componenets/repo_table';
import RepositoryTableMUI from '../componenets/repo_table_mui';

function CodePulse() {
  const figures = {
    a: 32,
    b: 4,
    c: 11,
    d: 1,
  };
  return (
    <main>
      <PageHeader
        title='Code Pulse'
        description=' Get a comprehensive overview of your repository health and monitor errors effectively.'
      />
      <InfoBar figures={figures} />
      <SearchSection />
      <RepositoryTableMUI />
    </main>
  );
}

export default CodePulse;
