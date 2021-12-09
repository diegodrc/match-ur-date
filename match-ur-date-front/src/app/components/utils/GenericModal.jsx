import React from 'react';
import { Box, Button } from '@mui/material';
import styles from './GenericModal.styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import * as Constants from '../Constants';
import { Modal } from '@material-ui/core';

const GenericModal = (props) => {
    const { open, content, handleClose, handleOk } = props;

    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.main}>
            {content}
            <div style={styles.options}>
              <Button startIcon={<CancelIcon />} variant="contained" style={styles.cancelButton} onClick={handleClose}>{Constants.text.cancel}</Button>
              <Button startIcon={<CheckCircleIcon />} variant="contained" style={styles.okButton} onClick={handleOk}>{Constants.text.ok}</Button>
            </div>
        </Box>
      </Modal>
    );
};

export default GenericModal;
