import { useNavigate} from "react-router-dom";
import { Button } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { TextField} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../global";
import { useEffect } from "react";

export function EditUser() {
  const { userid } = useParams();
  const[user,setuser] = useState(null)
  
  useEffect(()=>{
    fetch (`${API}/${userid}`,{method:"GET"})
    .then((resonse)=>resonse.json())
    .then((data)=>setuser(data))
    .then((data)=>console.log(data))
  },[userid])

  return user ? <EditUserDetails user={user}/> : "Loading..."

}
function EditUserDetails({user}){
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [suite, setSuite] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [companyname, setCompanyname] = useState("");
    const [catchPhrase, setCatchPhrase] = useState("");
    const [bs, setBs] = useState("");
    const navigate = useNavigate();
  return(
    <div className="edit-user">
      <TextField id="outlined-basic" label="name" variant="filled" value={name} sx={{width:"900px"}} onChange={(event) => setName(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="username" variant="filled" sx={{width:"900px"}} value={username} onChange={(event) => setUserName(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="email" variant="filled" sx={{width:"900px"}} value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="street" variant="filled" sx={{width:"900px"}} value={street} onChange={(event) => setStreet(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="suite" variant="filled" sx={{width:"900px"}} value={suite} onChange={(event) => setSuite(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="city" variant="filled" sx={{width:"900px"}} value={city} onChange={(event) => setCity(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="zipcode" variant="filled" sx={{width:"900px"}} value={zipcode} onChange={(event) => setZipcode(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="latitude" variant="filled" sx={{width:"900px"}} value={latitude} onChange={(event) => setLatitude(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="longitude" variant="filled" sx={{width:"900px"}} value={longitude} onChange={(event) => setLongitude(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="phone" variant="filled" sx={{width:"900px"}} value={phone} onChange={(event) => setPhone(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="website" variant="filled" sx={{width:"900px"}} value={website} onChange={(event) => setWebsite(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="companyname" variant="filled" sx={{width:"900px"}} value={companyname} onChange={(event) => setCompanyname(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="catchPhrase" variant="filled" sx={{width:"900px"}} value={catchPhrase} onChange={(event) => setCatchPhrase(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="bs" variant="filled" sx={{width:"900px"}} value={bs} onChange={(event) => setBs(event.target.value)} autoComplete="off" />
            <Button variant="contained" onClick={() => {
                const EditUser = {
                name: name,
                username: username,
                email: email,
                street: street,
                suite: suite,
                city: city,
                zipcode: zipcode,
                latitude: latitude,
                longitude:longitude,
                phone: phone,
                website: website,
                companyname: companyname,
                catchPhrase: catchPhrase,
                bs: bs
                }
        fetch(`${API}/${user.id}`,{
          method:"PUT",
          body: JSON.stringify(EditUser),
          headers:{
            "Content-Type":"application/json"
          }
        })
        .then((response)=>response.json)
        .then(() => navigate("/users"))
      }}>Save</Button>
      <Button variant="contained" onClick={() => navigate(-1)} startIcon={<ArrowCircleLeftIcon fontSize="small" />}>Back</Button>
    </div>
  )
}