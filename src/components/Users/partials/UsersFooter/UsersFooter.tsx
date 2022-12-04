import { Grid, Button } from '@mui/material';

interface IUsersFooterProps {
  onClickButton: () => void;
}

const UsersFooter = ({ onClickButton }: IUsersFooterProps) => {
  return (
    <Grid container justifyContent={'flex-end'}>
      <Grid item>
        <Button
          variant="contained"
          onClick={onClickButton}
          style={{ textTransform: 'none' }}
        >
          Add User
        </Button>
      </Grid>
    </Grid>
  );
};

export default UsersFooter;
