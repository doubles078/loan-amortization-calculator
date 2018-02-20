import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles, withTheme } from 'material-ui/styles';

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '50px 0px 50px 0px'
  },
  simpleDisplayColumn: {
      textAlign: 'center',
      color: '#fff'
  }
};

function SimpleDisplay(props) {
  const { classes } = props;
  const primary = props.theme.palette.primary;

  return (
    <div className={classes.root} style={{backgroundColor: primary.light, color: '#fff'}}>
        <div className='simpleDisplayColumn'>
          <Typography variant='display3' align='center' color='inherit'>$1600</Typography>
          <Typography variant='subheading' align='center' color='inherit'>Monthly Payment</Typography>
        </div>
        <div className='simpleDisplayColumn'>
          <Typography variant='display3' align='center' color='inherit'>220</Typography>
          <Typography variant='subheading' align='center' color='inherit'>Total Payments</Typography>
        </div>
        <div className='simpleDisplayColumn'>
          <Typography variant='display3' align='center' color='inherit'>2026</Typography>
          <Typography variant='subheading' align='center' color='inherit'>Target Payment Year</Typography>
        </div>
    </div>
  );
}

SimpleDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withTheme()(withStyles(styles)(SimpleDisplay));
