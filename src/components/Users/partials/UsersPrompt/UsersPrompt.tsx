import { Typography, Button, Grid } from '@mui/material';

interface IUsersPromptProps {
  setShowPrompt: (showPrompt: boolean) => void;
  onConfirm: () => void;
}

const UsersPrompt = ({ setShowPrompt, onConfirm }: IUsersPromptProps) => {
  const onCancel = () => {
    setShowPrompt(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Delete selected user?</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} justifyContent={'center'}>
            <Grid item>
              <Button variant="contained" onClick={onConfirm}>
                Confirm
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={onCancel}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UsersPrompt;
