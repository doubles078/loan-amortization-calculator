import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles, withTheme } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { green, blue, red } from 'material-ui/colors';
import calculatePayment from './Calculations.js';

const styles = theme => ({
  card: {
    minWidth: 275,
    textAlign: 'center'
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,

  },
  positiveSavings: {
      color: green['500']
  }
});

function SimplePlan(props) {
  const { classes } = props;
  const paymentByDefault = props.simplecalculations.principal === undefined ? calculatePayment(0, 0, 0) : calculatePayment(props.simplecalculations.principal, props.simplecalculations.term, props.simplecalculations.rate);

  const savings = 20;

  return (
    <div>
     <Card className={classes.card}>
       <CardContent>
         <Typography variant="display1" className={classes.positiveSavings}>
          +$22,000
         </Typography>
         <Typography className={classes.pos}>
              Savings
         </Typography>
         <Typography variant="display1" className={classes.positiveSavings}>
          1.8
         </Typography>
         <Typography className={classes.pos}>
              Years Sooner
         </Typography>
         <hr/>
         <Typography component="p">
           at this rate you would be fully paid <br/> by <strong>YEAR</strong> after <strong>AMOUNT</strong> payments
         </Typography>
       </CardContent>
     </Card>
   </div>
  );
}

SimplePlan.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withTheme()(withStyles(styles)(SimplePlan));
