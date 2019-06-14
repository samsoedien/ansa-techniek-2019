import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    height: '320px',
    backgroundColor: '#dadfe1',
  },
});

const Reviews = ({ classes, reviews, loading }) => {
  return (
    <section className={classes.root}>
      <h1>hi</h1>
    </section>
  );
};

Reviews.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Reviews);
