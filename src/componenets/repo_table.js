import React, { useState } from 'react';
import data from '../utils/dummy_repositories';
import CustomTable from './custom_table';

function RepositoryTable() {
  const repositories = data;
  const [selected, setSelected] = useState({});

  const selectAll = () => {
    if (Object.keys(selected).length === repositories.length) {
      setSelected({});
    } else {
      const updated = repositories.reduce((pre, curr) => {
        pre[curr.id] = curr;
        return pre;
      }, {});
      setSelected(updated);
    }
  };

  const onSelect = (repo) => {
    if (selected[repo.id]) {
      console.log(Object.keys(selected).length === repositories.length);
      console.log({ selected });
      delete selected[repo.id];
      setSelected(selected);
      console.log({ selected });
    } else {
      setSelected((p) => ({ ...p, [repo.id]: repo }));
    }
  };
  return (
    <CustomTable
      data={repositories}
      selected={selected}
      isAllSelected={Object.keys(selected).length === repositories.length}
      onSelect={onSelect}
      onSelectAll={selectAll}
    />
  );
}

export default RepositoryTable;
