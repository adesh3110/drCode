/* eslint-disable */
import * as React from 'react';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import CustomCheckbox from './custom_checkbox';

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <CustomCheckbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            sx={{
              'color': '#c1c1cb',
              '&:hover': {
                color: '#c1c1cb',
                cursor: 'pointer',
              },
              '&.Mui-active': {
                color: '#c1c1cb',
              },
            }}
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              sx={{
                'color': '#c1c1cb',
                // 'background': 'red',
                '&:hover': {
                  color: '#c1c1cb',
                  cursor: 'pointer',
                },
                '&.Mui-active': {
                  color: '#c1c1cb',
                },
              }}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box
                  id='niti'
                  component='span'
                  sx={{
                    ...visuallyHidden,
                    'color': '#c1c1cb',
                    '&:hover': {
                      color: 'red',
                      cursor: 'pointer',
                    },
                    '&.Mui-active': {
                      color: '#c1c1cb',
                    },
                  }}
                >
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default EnhancedTableHead;
