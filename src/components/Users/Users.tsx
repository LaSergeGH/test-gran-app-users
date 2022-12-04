import { useState } from 'react';
import { Typography, Grid } from '@mui/material';

import {
  UsersTable,
  UsersFooter,
  UsersForm,
  UsersModal,
} from '@components/Users/partials';

const Users = () => {
  const [showForm, setShowForm] = useState(false);
  const [userId, setUserId] = useState('');

  const onClickButton = () => {
    setUserId('');
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Users</Typography>
        </Grid>
        <Grid item xs={12}>
          <UsersTable
            userId={userId}
            setUserId={setUserId}
            setShowForm={setShowForm}
          />
        </Grid>
        <Grid item xs={12}>
          <UsersFooter onClickButton={onClickButton} />
        </Grid>
      </Grid>
      <UsersModal open={showForm} onClose={handleClose}>
        <UsersForm userId={userId} onSubmitCallback={handleClose} />
      </UsersModal>
    </>
  );
};

export default Users;
