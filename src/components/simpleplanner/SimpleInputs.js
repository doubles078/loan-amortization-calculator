import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { simpleCalculator } from '../../actions/index.js';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { FormControl, FormHelperText, FormControlLabel } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
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
  button: {
    display: 'block',
    margin: '25px auto 0px auto'
  }
});

class SimpleInputs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      principal: '',
      rate: '',
      term: '',
      monthlypayment: ''
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
      {Key: 'monthlypayment', Label: 'Monthly Payment'},
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
          <Grid item xs={10}>
            <Grid container>
              {inputItemOutputs}
            </Grid>
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
