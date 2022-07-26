import { useContext, forwardRef } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import MainContext from '../context/MainContext';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarComponent = () => {
  const { snackbar, handleClose } = useContext(MainContext);

  return snackbar !== null && (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={snackbar.snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackbar.type} sx={{ width: '100%' }}>
          {snackbar.msg}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default SnackbarComponent;