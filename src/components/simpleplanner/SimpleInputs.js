import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';


const styles = theme => ({
  container: {
    display: 'block'
  },
  menu: {
    width: 200,
  },
  formControl: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    flex: 1
  },
  button: {
    display: 'block',
    margin: 'auto'
  }
});

class SimpleInputs extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container xs={12}>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="amount">Loan Total</InputLabel>
              <Input
                id="amount"
                endAdornment={<InputAdornment position="end">$</InputAdornment>}
              />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="interest">Interest Rate</InputLabel>
              <Input
                id="interest"
                endAdornment={<InputAdornment position="end">%</InputAdornment>}
              />
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="term">Loan Term</InputLabel>
              <Input
                id="term"
                endAdornment={<InputAdornment position="end">yrs</InputAdornment>}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ paddingTop: "20px"}}>
          <Grid item xs={4}>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="salary">Yearly Salary</InputLabel>
              <Input
                id="salary"
                endAdornment={<InputAdornment position="end">$</InputAdornment>}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="expenses">Monthly Expenses</InputLabel>
              <Input
                id="expenses"
                endAdornment={<InputAdornment position="end">$</InputAdornment>}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container alignItems="center" xs={12} style={{ paddingTop: "20px"}}>
          <Grid item xs={12}>
            <Button variant="raised" size="large" color="secondary" className={classes.button}>
              Calculate
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

SimpleInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleInputs);
