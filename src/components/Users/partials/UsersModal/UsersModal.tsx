import { ReactNode } from 'react';
import { Container, Grid, Modal } from '@mui/material';

import { StyledPaper } from './UsersModal.styled';

interface IUsersModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const UsersModal = ({ open, onClose, children }: IUsersModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Grid container justifyContent={'center'}>
          <Grid item xs={12}>
            <StyledPaper>{children}</StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </Modal>
  );
};

export default UsersModal;
