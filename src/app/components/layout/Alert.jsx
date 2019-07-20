import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Snackbar, SnackbarContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { green } from '@material-ui/core/colors';

const styles = theme => ({
  snackbar: {
    backgroundColor: green[600],
  },
});

const Alert = ({ alerts, classes }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => setOpen(true);

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          action={[
            <IconButton key="close" aria-label="Close" color="success">
              <CloseIcon />
            </IconButton>,
          ]}
        >
          <SnackbarContent message={alert.msg} className={classes.snackbar} />
        </Snackbar>
      </div>
    ))
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(withStyles(styles)(Alert));
