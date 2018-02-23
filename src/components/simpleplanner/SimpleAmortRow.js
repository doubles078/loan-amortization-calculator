import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, theme } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { LinearProgress } from 'material-ui/Progress';

const styles = theme => ({
  charttd: {
    width: '100%'
  },
  secondaryColorBar: {
    backgroundColor: 'red'
  }
});

function SimpleAmortRow(props) {
  const { classes } = props;

  const cleanedPrincipal = props.principal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const cleanedInterest = props.interest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const cleanedBalance = props.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <TableRow>
      <TableCell numeric>{props.year}</TableCell>
      <TableCell numeric>${cleanedPrincipal}</TableCell>
      <TableCell className={classes.charttd}>
        <LinearProgress
          className={classes.secondaryColorBar}
          mode="determinate"
          value={props.percent}
          />
      </TableCell>
      <TableCell numeric>${cleanedInterest}</TableCell>
      <TableCell numeric>${cleanedBalance}</TableCell>
    </TableRow>
  );
}

SimpleAmortRow.propTypes = {
  classes: PropTypes.object.isRequired,
  year: PropTypes.number,
  principal: PropTypes.number,
  interest: PropTypes.number,
  balance: PropTypes.number,
  percent: PropTypes.number
};

export default withStyles(styles)(SimpleAmortRow);
