import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    height: '320px',
    backgroundColor: '#dadfe1',
  }
});

const Reviews = ({ classes }) => {
 
  return (
    <section className={classes.root}>

    </section>
  );
}

Reviews.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Reviews);
