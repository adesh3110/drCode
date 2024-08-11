import React from 'react';
import StatusCard from './status_card';
import CustomCheckbox from './custom_checkbox';

function CustomTable({ data, isAllSelected, onSelect, onSelectAll, selected }) {
  return (
    <div className='overflow-y-auto'>
      <table className='bg-my-voilet-700 table-auto w-full'>
        {/* <thead>
          <tr className='text-voilet-100'>
            <th class='py-2 px-4 table-border'>
              <div class='flex items-center cursor-pointer'>
                <CustomCheckbox
                  value={isAllSelected}
                  onChange={(e) => onSelectAll()}
                />
              </div>
            </th>
            <th class='py-2 px-4 table-border'>
              <div class='flex items-center cursor-pointer'>
                Repository Name
              </div>
            </th>
            <th class='py-2 px-4 table-border'>
              <div class='flex items-center cursor-pointer'>Adesh</div>
            </th>
            <th class='py-2 px-4 table-border'>
              <div class='flex items-center cursor-pointer'>Issue Count</div>
            </th>
            <th class='py-2 px-4 table-border'>
              <div class='flex items-center cursor-pointer'>Error Status</div>
            </th>
            <th class='py-2 px-4 table-border'>
              <div class='flex items-center cursor-pointer'>{}</div>
            </th>
          </tr>
        </thead> */}
        <tbody>
          {data.map((repository) => {
            return (
              <tr class='hover:bg-black text-voilet-100'>
                <td className='py-2 px-4 table-border'>
                  <CustomCheckbox
                    onChange={(e) => onSelect(repository)}
                    value={selected[repository.id] != null}
                  />
                </td>
                <td className='py-2 px-4 table-border'>{repository.repo}</td>
                <td className='py-2 px-4 table-border'>{repository.time}</td>
                <td className='py-2 px-4 table-border'>
                  {repository.IssueCount}
                </td>
                <td className='py-2 px-4 table-border'>
                  <StatusCard status={repository.errorStatus} />
                </td>
                <td className='py-2 px-4 table-border'>{/*  */}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CustomTable;
