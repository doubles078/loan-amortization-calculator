import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles, withTheme } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '25px 0px 25px 0px'
  },
  simpleDisplayColumn: {
      textAlign: 'center',
      color: '#fff'
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  card: {
    display: 'flex',
    margin: '0px 20px 0px 20px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '160px'
  },
  content: {
    flex: '1 0 auto',
  },
  icon: {
    alignItems: 'center'
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 50px 0px 50px',
    color: '#fff',
    backgroundColor: '#673AB7'
  },
  cover: {
    width: 151,
    height: 151,
  }
});

function SimpleDisplay(props) {
  const { classes } = props;

  const primary = props.theme.palette.primary;
  const propsSimple = props.simplecalculations;
  const monthlyRate = propsSimple.rate / 100 / 12;
  let monthlyPayment = Math.round((propsSimple.principal * (monthlyRate) / (1 - (Math.pow(1/(1 + monthlyRate), propsSimple.term * 12)))) * 100) / 100;
  const todaysDate = new Date();
  const todaysYear = todaysDate.getFullYear();
  let paymentYear = todaysYear + parseInt(propsSimple.term);
  let totalPayments = propsSimple.term * 12;

  if(!props.simplecalculations.principal){
    monthlyPayment = 0;
    paymentYear = 0;
    totalPayments = 0;
  }
  const data = [[monthlyPayment, 'Monthly Payment'], [paymentYear,'Paid Off By'], [totalPayments,'Total Payments']];

  return (
    <div className={classes.cardContainer}>
      {
        data.map((card, i) => {
          console.log(i)
          return(
            <Card className={classes.card} key={i}>
              <div className={classes.iconContainer}>
                <p>
                <Icon>star</Icon>
                </p>
              </div>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="headline">{card[0]}</Typography>
                  <Typography variant="subheading" color="textSecondary">
                    {card[1]}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          )})
      }
    </div>
  );
}

SimpleDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withTheme()(withStyles(styles)(SimpleDisplay));
