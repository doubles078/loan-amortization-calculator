import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import 'normalize.css';
import Navbar from '../components/navbar/Navbar.js';
import Jumbotron from '../components/jumbotron/Jumbotron.js';
import SimpleDisplay from '../components/simpleplanner/SimpleDisplay.js';
import SimpleInputs from '../components/simpleplanner/SimpleInputs.js';

const theme = createMuiTheme({
  palette: {
    primary: { light: '#a8bcff', main: '#728cff', dark: '#365fcb' }
  },
  status: {
    danger: 'orange',
  }
});


class App extends React.Component {
  render(){
    return (
        <MuiThemeProvider theme={theme}>
          <Navbar />
          <Jumbotron>
            <SimpleInputs />
          </Jumbotron>
          <SimpleDisplay />
        </MuiThemeProvider>
    )};
}


export default App;
