import { Grid, Button, TextField } from '@mui/material';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { IUser } from '@store/types/store';
import { useTypedSelector } from '@store/hooks/useTypedSelector';
import { useActions } from '@store/hooks/useActions';
import { StyledNumberTextField } from './UsersForm.styled';

interface IUsersFormValues {
  login: string;
  email: string;
  country: string;
  age: number;
}

interface IUsersFormProps {
  userId: string;
  onSubmitCallback: () => void;
}

const validationSchema = yup.object({
  login: yup.string().required('Required field!'),
  email: yup
    .string()
    .required('Required field!')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email!'
    ),
});

const initialValues = {
  login: '',
  email: '',
  country: '',
  age: 0,
};

const UsersForm = ({ onSubmitCallback, userId }: IUsersFormProps) => {
  const { users } = useTypedSelector((state) => state.users);
  const { actionAddUser, actionEditUser } = useActions();

  const handleSubmit = (values: IUsersFormValues) => {
    if (userId) {
      actionEditUser(values);
    } else {
      actionAddUser({
        ...initialValues,
        ...(values as IUser),
      });
    }
    onSubmitCallback();
  };

  const user = users.find(({ id }) => id === userId);

  return (
    <Formik
      initialValues={user ?? initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      {({ values, touched, errors, handleChange, setFieldValue }) => {
        const { login, email, country, age } = values;

        return (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name={'login'}
                  label="Login"
                  value={login}
                  error={!!errors['login']}
                  helperText={errors['login']}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name={'email'}
                  label="Email"
                  value={email}
                  error={!!errors['email']}
                  helperText={errors['email']}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name={'country'}
                  label="Country"
                  value={country}
                  error={!!errors['country']}
                  helperText={errors['country']}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledNumberTextField
                  fullWidth
                  name={'age'}
                  label="Age"
                  value={age}
                  error={!!errors['age']}
                  helperText={errors['age']}
                  onChange={handleChange}
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent={'flex-end'}>
                  <Button
                    variant={'contained'}
                    type="submit"
                    style={{ textTransform: 'none' }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default UsersForm;
