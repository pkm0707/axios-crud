import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { UserPage } from './components/UserPage';
import { AddUser } from './components/AddUser';
import { EditUser } from './components/EditUser';
function App() {
  const navigate = useNavigate()
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={()=>navigate("/users")}
            >
              <PersonIcon/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              User Details
            </Typography>
            <Button color="inherit" onClick={()=>navigate("/users")}>Home</Button>
            <Button color='inherit' onClick={()=>navigate("/add-user")}>Add User</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path='/users' element={<UserPage/>}/>
        <Route path='/add-user' element={<AddUser/>}/>
        <Route path="users/edit/:userid" element={<EditUser/>}/>
      </Routes>
    </div>
  );
}
export default App;

export function Notfound() {
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
      <img src='https://media.tenor.com/IHdlTRsmcS4AAAAC/404.gif' alt='404 error' width={500} height={400} />
    </div>
  );
}