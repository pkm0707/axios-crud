import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect,useState} from 'react';
import { IconButton } from '@mui/material';
import { API } from '../global';
import { useNavigate } from 'react-router-dom';
import { UserPage } from './UserPage';

export function UserList() {
  const navigate = useNavigate()
  const[userList,setUserList]=useState([])
  const getUsers = () =>{
    fetch (`${API}`,{method:"GET"})
    .then((resonse)=>resonse.json())
    .then((data)=>setUserList(data))
    .then((data)=>console.log(data))
  }
  useEffect(()=> getUsers(),[])
  const handleDelete = (id) => {
    fetch (`${API}/${id}`,{method:"DELETE"})
    .then(()=>getUsers())
  }
  return (  
    <div>
      <div className='list'>
        {userList.map((user, index) => <UserPage key={index} user={user} id={user.id} 
        deleteIcon = {
          <IconButton onClick={() => handleDelete(user.id)}>
            <DeleteIcon sx={{color:"red"}}></DeleteIcon>
          </IconButton>
        }
        editIcon = {
          <IconButton onClick={() => navigate(`/users/edit/${user.id}`)}>
            <EditIcon sx={{color:"green"}}></EditIcon>
          </IconButton>
        }
        />)}
      </div>
    </div>
  );
}