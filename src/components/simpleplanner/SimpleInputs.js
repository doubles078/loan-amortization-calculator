import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { simpleCalculator } from '../../actions/index.js';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormHelperText, FormControlLabel } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { green, blue, red } from 'material-ui/colors';
import SimpleInputsText from './SimpleInputsText.js';



const styles = theme => ({
  container: {
    display: 'block'
  },
  formControl: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    flex: 1
  },
  group: {
    display: "flex",
    justifyContent: "center",
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
      principal: '',
      rate: '',
      term: '',
      salary: '',
      expenses: '',
      plan: 'base',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const stateElement = e.target.name;
    this.setState({[stateElement]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.dispatch(simpleCalculator(this.state));
  }

  render() {
    const { classes } = this.props;
    const inputItems = [
      {Key: 'principal', Label: 'Principal'},
      {Key: 'rate', Label: 'Interest Rate'},
      {Key: 'term', Label: 'Loan Term'},
      {Key: 'salary', Label: 'Yearly Salary'},
      {Key: 'expenses', Label: 'Monthly Expenses'},
    ];
    const inputItemOutputs = inputItems.map((item) => {
        return(
          <SimpleInputsText
            key={item.Key}
            label={item.Label}
            id={item.Key}
            name={item.Key}
            handleChange={this.handleChange}
          />
      )
    });

    return (
      <form className={classes.container} onSubmit={this.handleSubmit} noValidate autoComplete="off">
        <Grid container>
          {inputItemOutputs}
        </Grid>
        <Grid container alignItems="center" style={{ paddingTop: "20px" }}>
          <Grid item xs={12} >
            <FormControl component="fieldset" className={classes.formControl} style={{ display: 'flex', justifyContent: 'center' }}>
              <RadioGroup
                aria-label="planstrength"
                name="plan"
                className={classes.group}
                value={this.state.plan}
                onChange={this.handleChange}
                id="plan"
              >
                <FormControlLabel value="base" control={<Radio classes={{checked: classes.checkedBase}} />} label="Base" />
                <FormControlLabel value="moderate" control={<Radio classes={{checked: classes.checkedModerate}} />} label="Moderate" />
                <FormControlLabel value="aggressive" control={<Radio classes={{checked: classes.checkedAggressive}} />} label="Aggressive" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="raised" size="large" type="submit" color="secondary" className={classes.button}>
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

function mapDispatchToProps(dispatch){
  return { actions: bindActionCreators(simpleCalculator, dispatch)}
}

export default connect(mapDispatchToProps)(withStyles(styles)(SimpleInputs));
