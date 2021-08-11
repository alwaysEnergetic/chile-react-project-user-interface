import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.greenButton.main,
    color: "#FFF",
  },
  body: {
    fontSize: 12,
    
  },
  sizeSmall:{
    height:'5px'
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.evenColor.main,
    },
  },
}))(TableRow);

function createData(subject, N1, N2, N3, N4, N5, N6, N7, N8, N9, N10, NE, NF) {
  return { subject, N1, N2, N3, N4, N5, N6, N7, N8, N9, N10, NE, NF };
}

const rows = [
  createData('MATEMÁTICAS', 5.0, 6.7, 4.8, 'NULL','NULL','NULL','NULL','NULL','NULL','NULL','E',5.5),
  createData('LENGUAJE',5.0, 6.7, 4.8,'NULL','NULL','NULL','NULL','NULL','NULL','NULL','E',5.5),
  createData('INGLES', 5.0, 6.7, 4.8, 'NULL','NULL','NULL','NULL','NULL','NULL','NULL','E',5.5),
  createData('HISTORIA', 5.0, 6.7, 4.8,'NULL','NULL','NULL','NULL','NULL','NULL','NULL','E',5.5),
  createData('FÍSICA', 5.0, 6.7, 4.8, 'NULL','NULL','NULL','NULL','NULL','NULL','NULL','E',5.5),
  createData('QUÍMICA', 5.0, 6.7, 4.8, 'NULL','NULL','NULL','NULL','NULL','NULL','NULL','E',5.5),
  createData('BIOLOGÍA', 5.0, 6.7, 4.8,'NULL','NULL','NULL','NULL','NULL','NULL','NULL','E',5.5),
  createData('ED.',5.0, 6.7, 4.8,'NULL','NULL','NULL','NULL','NULL','NULL','NULL','E',5.5),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


const AverageButton = () => {
  return(
  <div className = "flex justify-end mt-4">
    <button className = "w-40 text-buttonText bg-tableTabs h-30"> PROMEDIO FINAL</button>
    <span className = "w-12 h-8 bg-mainTableColor flex items-center justify-center">5.5</span>
  </div>
  )
};

export default function StudentTable() {
  const classes = useStyles();

  return (
    <>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>  </StyledTableCell>
            <StyledTableCell align="center" size="small">N1</StyledTableCell>
            <StyledTableCell align="center" size="small">N2</StyledTableCell>
            <StyledTableCell align="center" size="small">N3</StyledTableCell>
            <StyledTableCell align="center" size="small">N4</StyledTableCell>        
            <StyledTableCell align="center" size="small">N5</StyledTableCell>
            <StyledTableCell align="center" size="small">N6</StyledTableCell>
            <StyledTableCell align="center" size="small">N7</StyledTableCell>
            <StyledTableCell align="center" size="small">N8</StyledTableCell>
            <StyledTableCell align="center" size="small">N9</StyledTableCell>
            <StyledTableCell align="center" size="small">N10</StyledTableCell>
            <StyledTableCell align="center" size="small">NE</StyledTableCell>
            <StyledTableCell align="center" size="small">NF</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {rows.map((row) => (
            <StyledTableRow key={row.subject}>
              <StyledTableCell component="th" scope="row"  size="small">
                {row.subject}
              </StyledTableCell>
              <StyledTableCell align="center"  size="small"> {row.N1 === 'NULL' ? '-': row.N1}</StyledTableCell>
              <StyledTableCell align="center"  size="small"> {row.N2 === 'NULL' ? '-': row.N2}</StyledTableCell>
              <StyledTableCell align="center" size="small"> {row.N3 === 'NULL' ? '-': row.N3}</StyledTableCell>
              <StyledTableCell align="center" size="small"> {row.N4 === 'NULL' ? '-': row.N4}</StyledTableCell>
              <StyledTableCell align="center" size="small"> {row.N5 === 'NULL' ? '-': row.N5}</StyledTableCell>
              <StyledTableCell align="center" size="small"> {row.N6 === 'NULL' ? '-': row.N6}</StyledTableCell>
              <StyledTableCell align="center" size="small"> {row.N7 === 'NULL' ? '-': row.N7}</StyledTableCell>
              <StyledTableCell align="center" size="small"> {row.N8 === 'NULL' ? '-': row.N8}</StyledTableCell>
              <StyledTableCell align="center" size="small"> {row.N9 === 'NULL' ? '-': row.N9}</StyledTableCell>
              <StyledTableCell align="center" size="small"> {row.N10 === 'NULL' ? '-': row.N10}</StyledTableCell>
              <StyledTableCell align="center" size="small"> {row.NE === 'NULL' ? '-': row.NE}</StyledTableCell>
              <StyledTableCell align="center" size="small"> {row.NF === 'NULL' ? '-': row.NF}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <AverageButton/>
    </>
  );
}
