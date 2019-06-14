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
  postFormCard: {
    margin: '24px 0',
  },
  postFormInput: {},
  postFormButton: {
    float: 'right',
    margin: '6px 0 12px 12px',
  },
});

const PostForm = ({
  comment,
  onChangeCallback,
  onSubmitCallback,
  errors,
  classes,
}) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSubmitCallback();
  };

  return (
    <div className="post-form">
      <Grid container justify="center">
        <Grid item xs={8}>
          <Card className={classes.postFormCard}>
            <CardHeader
              className={classes.postFormCardheader}
              color="primary"
              title="Comment"
            />
            <CardContent>
              <form onSubmit={onSubmit} noValidate>
                <TextField
                  id="outlined-multiline-static"
                  className={classes.postFormInput}
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
                  error={errors.comment}
                  helperText={errors ? errors.comment : ''}
                />
                <Button
                  type="submit"
                  value="Submit"
                  variant="contained"
                  color="primary"
                  className={classes.postFormButton}
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

PostForm.propTypes = {
  comment: PropTypes.string.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
  onSubmitHandle: PropTypes.func.isRequired,
  onCancelHandle: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    comment: PropTypes.string,
  }).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(PostForm);
