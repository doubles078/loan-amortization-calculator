import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormHelperText, FormControlLabel } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { green, blue, red } from 'material-ui/colors';



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
  group: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row"
  },
  checkedBase: {
    color: green[500],
  },
  checkedModerate: {
    color: blue[500],
  },
  checkedAggressive: {
    color: red[500],
  },
  button: {
    display: 'block',
    margin: 'auto'
  }
});

class SimpleInputs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedValue: 'base',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    console.log(e.target.value)
    this.setState({selectedValue: e.target.value})
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container>
          <Grid item xs={4}>
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
        <Grid container style={{ paddingTop: "20px"}}>
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
        <Grid container alignItems="center" style={{ paddingTop: "20px" }}>
          <Grid item xs={12} >
            <FormControl component="fieldset" className={classes.formControl} style={{ display: 'flex', justifyContent: 'center' }}>
              <RadioGroup
                aria-label="gender"
                name="gender2"
                className={classes.group}
                value={this.state.selectedValue}
                onChange={this.handleChange}
              >
                <FormControlLabel value="base" control={<Radio classes={{checked: classes.checkedBase}} />} label="Base" />
                <FormControlLabel value="moderate" control={<Radio classes={{checked: classes.checkedModerate}} />} label="Moderate" />
                <FormControlLabel value="aggressive" control={<Radio classes={{checked: classes.checkedAggressive}} />} label="Aggressive" />
              </RadioGroup>
            </FormControl>
          </Grid>
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
