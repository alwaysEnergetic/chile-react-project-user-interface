import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Button, Form } from "reactstrap";

const columns = [
  { id: 'Código', label: 'Código', minWidth: 150 },
  { id: 'Curso', label: 'Curso', minWidth: 250 },
  {
    id: 'Profesorjefe',
    label: 'Profesor jefe',
    minWidth: 200,
    align: 'left',

  },
  {
    id: 'Salón',
    label: 'Salón',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },

];

function createData(Código, Curso,Profesorjefe, Salón) {

  return { Código, Curso, Profesorjefe, Salón };
}

const rows = [
  createData('00:1:A', '1er Nivel de Transicion (Pre-kinder) A', 'Cecilia', '101'),
  createData('00:1:B', '1er Nivel de Transicion (Pre-kinder) B', 'Cecilia', '101'),
  createData('00:1:C', '1er Nivel de Transicion (Pre-kinder) C', 'Cecilia', '101'),
  createData('00:2:A', '2Do Nivel de Transicion (Pre-kinder) A', 'Cecilia', '101'),
  createData('00:1:A', '2Do Nivel de Transicion (Pre-kinder) B', 'Cecilia', '101'),
  ];

const useStyles = makeStyles({
  root: {
    width: '150%',
    minWidth: "750px"
  },
  container: {
    maxHeight: 350,
  },
});

export default function ProfessorTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth , fontSize: 16, fontWeight:"900" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}