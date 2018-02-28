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
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

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
    margin: '0px auto 0px auto'
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
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
        <CardContent>
            <Grid container>
              <Grid item xs={12}>
                <Grid container>
                  {inputItemOutputs}
                </Grid>
              </Grid>
            </Grid>
        </CardContent>
        <CardActions>
          <Button variant="raised" size="large" type="submit" color="secondary" className={classes.button}>
            Calculate
          </Button>
        </CardActions>
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
