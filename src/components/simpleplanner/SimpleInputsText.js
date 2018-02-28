import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { FormControl, FormHelperText, FormControlLabel } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  formControl: {
    flex: 1
  }
});

function SimpleInputsText(props){
  const { classes } = props;
  return (
        <Grid item xs={3}>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="amount">{props.label}</InputLabel>
            <Input
              id={props.id}
              name={props.name}
              onChange={props.handleChange}
              endAdornment={<InputAdornment position="end">$</InputAdornment>}
            />
          </FormControl>
        </Grid>

  );
}

SimpleInputsText.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleInputsText);
