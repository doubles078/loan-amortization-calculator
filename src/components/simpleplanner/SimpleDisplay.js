import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles, withTheme } from 'material-ui/styles';

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '25px 0px 25px 0px'
  },
  simpleDisplayColumn: {
      textAlign: 'center',
      color: '#fff'
  }
};

function SimpleDisplay(props) {
  const { classes } = props;
  const primary = props.theme.palette.primary;
  const propsSimple = props.simplecalculations;
  const monthlyRate = propsSimple.rate / 100 / 12;
  const monthlyPayment = Math.round((propsSimple.principal * (monthlyRate) / (1 - (Math.pow(1/(1 + monthlyRate), propsSimple.term * 12)))) * 100) / 100;
  const todaysDate = new Date();
  const todaysYear = todaysDate.getFullYear();
  const paymentYear = todaysYear + parseInt(propsSimple.term);
  const totalPayments = propsSimple.term * 12;

  return (
    <div className={classes.root} style={{backgroundColor: primary.dark, color: '#fff'}}>
        <div className='simpleDisplayColumn'>
          <Typography variant='display3' align='center' color='inherit'>${monthlyPayment}</Typography>
          <Typography variant='subheading' align='center' color='inherit'>Monthly Payment</Typography>
        </div>
        <div className='simpleDisplayColumn'>
          <Typography variant='display3' align='center' color='inherit'>{paymentYear}</Typography>
          <Typography variant='subheading' align='center' color='inherit'>Paid Off By</Typography>
        </div>
        <div className='simpleDisplayColumn'>
          <Typography variant='display3' align='center' color='inherit'>{totalPayments}</Typography>
          <Typography variant='subheading' align='center' color='inherit'>Total Payments</Typography>
        </div>
    </div>
  );
}

SimpleDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withTheme()(withStyles(styles)(SimpleDisplay));
