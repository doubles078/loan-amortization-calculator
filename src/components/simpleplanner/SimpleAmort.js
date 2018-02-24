import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { LinearProgress } from 'material-ui/Progress';
import SimpleAmortRow from './SimpleAmortRow.js';


const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 400,
  }
};


class SimpleAmort extends React.Component {
  constructor(props) {
   super(props);

   this.calculatePayment = this.calculatePayment.bind(this);
 }

  calculatePayment (principal, years, rate) {
      var monthlyRate = rate / 100 / 12;
      var monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1/(1 + monthlyRate), years * 12)));
      var balance = principal;
      var amortization = [];
      for (let y=0; y<years; y++) {
          let interestY = 0;  //Interest payment for year y
          let principalY = 0; //Principal payment for year y
          for (let m=0; m<12; m++) {
              let interestM = balance * monthlyRate;       //Interest payment for month m
              let principalM = monthlyPayment - interestM; //Principal payment for month m
              interestY = Math.round(interestY + interestM);
              principalY = Math.round(principalY + principalM);
              balance = Math.round(balance - principalM);
            }
          let percent = Math.round((interestY / (interestY + principalY)) * 100);
          amortization.push({year: y + 1, principalY: principalY, interestY: interestY, balance: balance, percent: percent });
      }
      return {monthlyPayment: monthlyPayment, amortization:amortization};
  };



  render(){
    const { classes } = this.props;


    const payment = this.props.simplecalculations.principal === undefined ? this.calculatePayment(0, 0, 0) : this.calculatePayment(this.props.simplecalculations.principal, this.props.simplecalculations.term, this.props.simplecalculations.rate);
    const amort = payment.amortization;
    const monthly = payment.monthlyPayment;
    console.log(`Monthly payment is equal to: ${monthly}`);

    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Amortization Table
        </Typography>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell numeric>Year</TableCell>
                <TableCell numeric>Principal</TableCell>
                <TableCell></TableCell>
                <TableCell numeric>Interest</TableCell>
                <TableCell numeric>Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {amort.map((year, index) => (
                  <SimpleAmortRow  key={index} year={year.year} principal={year.principalY} interest={year.interestY}  percent={year.percent} balance={year.balance} />
                ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )}

}

SimpleAmort.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(SimpleAmort);
