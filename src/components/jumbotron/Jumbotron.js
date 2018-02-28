import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from 'material-ui/styles';

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '15px 0px 15px 0px',
  }
};

function Jumbotron(props) {
  const { classes } = props;
  const primaryDark = props.theme.palette.primary.light;

  console.log(props.theme.palette);

  return (
    <div className={classes.root}>
        {props.children}
    </div>
  );
}

Jumbotron.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withTheme()(withStyles(styles)(Jumbotron));
