/* eslint-disable */
import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import repositories from '../utils/dummy_repositories';
import StatusCard from './status_card';
import CustomCheckbox from './custom_checkbox';
import EnhancedTableHead from './enhanced_table_header';
import { MoreHoriz } from '@mui/icons-material';

const rows = repositories;

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'repo',
    numeric: false,
    disablePadding: true,
    label: 'Repository',
    align: 'left',
  },
  {
    id: 'time',
    numeric: true,
    disablePadding: false,
    label: 'Last updated',
    align: 'left',
  },
  {
    id: 'IssueCount',
    numeric: true,
    disablePadding: false,
    label: 'Issue Count',
    align: 'right',
  },
  {
    id: 'errorStatus',
    numeric: true,
    disablePadding: false,
    label: 'Error Status',
    align: 'right',
  },
  {
    id: 'options',
    numeric: false,
    disablePadding: false,
    label: '',
    align: 'right',
  },
];

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  // eslint-disable-next-line
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // eslint-disable-next-line
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // eslint-disable-next-line
  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // eslint-disable-next-line
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper
        sx={{ width: '100%', mb: 2, background: '#0d0d22', color: '9999A8' }}
      >
        <TableContainer>
          <Table
            sx={{
              '&&& th': {
                borderBottom: '2px solid #131330', // Border for the table header
              },
              '&&& td': {
                borderBottom: '1px solid #131330', // Border for the table cells
              },
              '&&&': {
                borderBottom: '2px solid #131330', // Border for the bottom of the table
              },
            }}
            aria-labelledby='tableTitle'
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              headCells={headCells}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role='checkbox'
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{
                      'cursor': 'pointer',

                      '&&& th': {
                        borderBottom: '2px solid #131330', // Border for the table header
                      },
                      '&&& td': {
                        borderBottom: '1px solid #131330', // Border for the table cells
                      },
                      '&&&': {
                        borderBottom: '2px solid #131330', // Border for the bottom of the table
                      },
                    }}
                  >
                    <TableCell padding='checkbox'>
                      <CustomCheckbox
                        color='primary'
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component='th'
                      align='left'
                      id={labelId}
                      scope='row'
                      padding='none'
                      sx={{ color: '#c1c1cb' }}
                    >
                      {row.repo}
                    </TableCell>
                    <TableCell align='left' sx={{ color: '#c1c1cb' }}>
                      {row.time}
                    </TableCell>
                    <TableCell align='right' sx={{ color: '#c1c1cb' }}>
                      {row.IssueCount} ({row.openIssue})
                    </TableCell>
                    <TableCell align='right' sx={{ color: '#c1c1cb' }}>
                      <StatusCard status={row.errorStatus} />
                    </TableCell>
                    <TableCell align='right' sx={{ color: '#c1c1cb' }}>
                      <MoreHoriz />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
