import { Container, Box } from '@mui/material';

import Users from '@components/Users/Users';

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ height: '100vh' }}>
        <Users />
      </Box>
    </Container>
  );
}

export default App;
