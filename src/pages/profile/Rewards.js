import React, { Component } from "react";
import './profile.css';
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
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(date, campaign, desc,status) {
  return { date, campaign, desc, status };
}

const rows = [
  createData('03-11-2020', "MTN #Remake2020", "R500  Takealot Voucher", "Pending"),
  createData('01-04-2020', "Nike #JustDoIt", "Nike Downshifter Running Shoes", "Received"),
  createData('23-10-2020', "KFC #KrispZinger","R 700 KFC Voucher", "Received"),
 
];

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="left">Campaign</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.date}>
              <StyledTableCell align="left" >
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="left">{row.campaign}</StyledTableCell>
              <StyledTableCell align="left">{row.desc}</StyledTableCell>
              <StyledTableCell align="left">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function Rewards(argument) {
  
   
  	 return(
  	 	  <div className={'profhome'}>
           <div className={'profbox'}>
             <div className={'profround'}>
                <p className={'profheadertext'}>My Rewards</p>
                 </div>
                <div className={'pbox'}>
               
                 <CustomizedTables />
               </div>
              </div>
  	 	  </div>
  	 	)
  
 }