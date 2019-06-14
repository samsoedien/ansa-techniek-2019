import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
} from '@material-ui/core';

const styles = theme => ({
  reviewFormCard: {
    margin: '24px 0',
  },
  reviewFormInput: {},
  reviewFormButton: {
    float: 'right',
    margin: '6px 0 12px 12px',
  },
});

const ReviewForm = ({
  name,
  company,
  comment,
  onChangeCallback,
  onSubmitCallback,
  // errors,
  classes,
}) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    onSubmitCallback(e);
  };

  return (
    <div className="review-form">
      <Grid container justify="center">
        <Grid item xs={8}>
          <Card className={classes.reviewFormCard}>
            <CardHeader
              className={classes.reviewFormCardheader}
              color="primary"
              title="Comment"
            />
            <CardContent>
              <form onSubmit={onSubmit} noValidate>
                <TextField
                  id="outlined-multiline-static"
                  className={classes.reviewFormInput}
                  label="Name"
                  fullWidth
                  defaultValue="Name"
                  margin="normal"
                  variant="outlined"
                  name="name"
                  value={name}
                  onChange={onChange}
                  // error={errors.comment}
                  // helperText={errors ? errors.comment : ''}
                />
                <TextField
                  id="outlined-multiline-static"
                  className={classes.reviewFormInput}
                  label="Company"
                  fullWidth
                  defaultValue="Company"
                  margin="normal"
                  variant="outlined"
                  name="company"
                  value={company}
                  onChange={onChange}
                  // error={errors.comment}
                  // helperText={errors ? errors.comment : ''}
                />
                <TextField
                  id="outlined-multiline-static"
                  className={classes.reviewFormInput}
                  label="Write a Comment"
                  multiline
                  rows="4"
                  fullWidth
                  defaultValue="Comment"
                  margin="normal"
                  variant="outlined"
                  name="comment"
                  value={comment}
                  onChange={onChange}
                  // error={errors.comment}
                  // helperText={errors ? errors.comment : ''}
                />
                <Button
                  type="submit"
                  value="Submit"
                  variant="contained"
                  color="primary"
                  className={classes.reviewFormButton}
                >
                  {'Post Comment'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

ReviewForm.propTypes = {
  comment: PropTypes.string.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
  onSubmitHandle: PropTypes.func.isRequired,
  onCancelHandle: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    comment: PropTypes.string,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ReviewForm);
