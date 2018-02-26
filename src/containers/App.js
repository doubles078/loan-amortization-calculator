import React from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import 'normalize.css';
import Navbar from '../components/navbar/Navbar.js';
import Jumbotron from '../components/jumbotron/Jumbotron.js';
import SimpleDisplay from '../components/simpleplanner/SimpleDisplay.js';
import SimpleInputs from '../components/simpleplanner/SimpleInputs.js';
import SimplePlan from '../components/simpleplanner/SimplePlan.js';
import SimpleAmort from '../components/simpleplanner/SimpleAmort.js';

const theme = createMuiTheme({
  palette: {
    primary: { light: '#a8bcff', main: '#728cff', dark: '#365fcb' }
  },
  status: {
    danger: 'orange',
  }
});


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      spacing: 0,
      padding: '25px'
    };
  }

  render(){
    return (
        <MuiThemeProvider theme={theme}>
          <Navbar />
          <Jumbotron>
            <SimpleInputs />
            <SimplePlan simplecalculations={this.props.simplecalculations} />
          </Jumbotron>
          <Grid container spacing={this.state.spacing}>
            <Grid item xs={12}>
              <SimpleDisplay simplecalculations={this.props.simplecalculations} />
            </Grid>
          </Grid>
          <Grid container spacing={this.state.spacing} direction="column" align="center">
            <Grid item xs={10} style={{padding: this.state.padding}}>
              <SimpleAmort simplecalculations={this.props.simplecalculations} />
            </Grid>
          </Grid>
        </MuiThemeProvider>
    )};
}

function mapStateToProps(state){
  return {
    simplecalculations: state.simpleCalcReducer,
  };
}


export default connect(mapStateToProps)(App);
