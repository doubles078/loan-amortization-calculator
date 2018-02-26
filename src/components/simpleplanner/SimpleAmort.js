import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { LinearProgress } from 'material-ui/Progress';
import SimpleAmortRow from './SimpleAmortRow.js';
import calculatePayment from './Calculations.js';


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
 }

  render(){
    const { classes } = this.props;
    const payment = this.props.simplecalculations.principal === undefined ? calculatePayment(0, 0, 0) : calculatePayment(this.props.simplecalculations.principal, this.props.simplecalculations.term, this.props.simplecalculations.rate);
    const amort = payment.amortization;
    const monthly = Math.round(payment.monthlyPayment * 100) / 100;

    return (
      <div>
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
