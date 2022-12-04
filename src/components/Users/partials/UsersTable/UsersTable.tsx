import { EffectCallback, useState } from 'react';
import { Box, IconButton, Tooltip, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { useInitialEffect } from '@hooks/useInitialEffect';
import { UsersModal, UsersPrompt } from '@components/Users/partials';
import { useTypedSelector } from '@store/hooks/useTypedSelector';
import { useActions } from '@store/hooks/useActions';

interface IUserTableProps {
  userId: string;
  setUserId: (userId: string) => void;
  setShowForm: (showForm: boolean) => void;
}

const UsersTable = ({ userId, setUserId, setShowForm }: IUserTableProps) => {
  const { actionGetUsers, actionDeleteUser } = useActions();
  // loading users
  useInitialEffect(actionGetUsers as unknown as EffectCallback, [
    // actionGetUsers,
  ]);
  const { users } = useTypedSelector((state) => state);

  const [showPrompt, setShowPrompt] = useState(false);

  const handleClose = () => {
    setShowPrompt(false);
  };

  const onEditHandler = (userId: string) => {
    setShowForm(true);
    setUserId(userId);
  };

  const onDeleteHandler = (userId: string) => {
    setShowPrompt(true);
    setUserId(userId);
  };

  const confirmDelete = () => {
    actionDeleteUser(userId);
    setShowPrompt(false);
  };

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: '№',
      width: 90,
      renderCell: (item) => {
        return <>{users.findIndex(({ id }) => id === item.id) + 1}</>;
      },
    },
    {
      field: 'login',
      headerName: 'Login',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'age',
      headerName: 'Age',
      flex: 1,
      renderCell: ({ value }) => {
        return <>{value || '-'}</>;
      },
    },
    {
      field: 'country',
      headerName: 'Country',
      flex: 1,
      renderCell: ({ value }) => {
        return <>{value || '-'}</>;
      },
    },
    {
      field: 'actions',
      headerName: 'Full name',
      flex: 1,
      renderCell: (item) => {
        return (
          <Grid>
            <Tooltip title="Редактировать">
              <IconButton
                onClick={() => {
                  onEditHandler(item.id as string);
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Удалить">
              <IconButton
                onClick={() => {
                  onDeleteHandler(item.id as string);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        );
      },
    },
  ];

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          autoHeight
          hideFooter
          disableColumnMenu
        />
      </Box>
      <UsersModal open={showPrompt} onClose={handleClose}>
        <UsersPrompt setShowPrompt={setShowPrompt} onConfirm={confirmDelete} />
      </UsersModal>
    </>
  );
};

export default UsersTable;
