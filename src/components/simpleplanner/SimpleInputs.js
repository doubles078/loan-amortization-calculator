import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Button from 'material-ui/Button';


const styles = theme => ({
  container: {
      display: 'flex',
      alignItems: 'flex-start',


  },
  menu: {
    width: 200,
  },
  input: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  top: {
    alignSelf: 'stretch'
  },
  formControl: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    flex: 1
  },
  button: {
    display: 'relative'
  }
});

class SimpleInputs extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <div className={classes.input, classes.top}>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="amount">Loan Total</InputLabel>
            <Input
              id="amount"
              endAdornment={<InputAdornment position="end">$</InputAdornment>}
            />
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="interest">Interest Rate</InputLabel>
            <Input
              id="interest"
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
            />
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="term">Loan Term</InputLabel>
            <Input
              id="term"
              endAdornment={<InputAdornment position="end">yrs</InputAdornment>}
            />
          </FormControl>
        </div>
        <div className={classes.input, classes.bottom}>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="salary">Yearly Salary</InputLabel>
            <Input
              id="salary"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="expenses">Monthly Expenses</InputLabel>
            <Input
              id="expenses"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </FormControl>
        </div>
        <Button variant="raised" color="secondary" className={classes.button}>
          Calculate
        </Button>
      </form>
    );
  }
}

SimpleInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleInputs);
