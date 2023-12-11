import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../global";
export function AddUser(){
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
        <div className="add-user">
            <TextField id="outlined-basic" label="name" variant="filled" value={name} onChange={(event) => setName(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="username" variant="filled" value={username} onChange={(event) => setUserName(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="email" variant="filled" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="street" variant="filled" value={street} onChange={(event) => setStreet(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="suite" variant="filled" value={suite} onChange={(event) => setSuite(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="city" variant="filled" value={city} onChange={(event) => setCity(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="zipcode" variant="filled" value={zipcode} onChange={(event) => setZipcode(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="latitude" variant="filled" value={latitude} onChange={(event) => setLatitude(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="longitude" variant="filled" value={longitude} onChange={(event) => setLongitude(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="phone" variant="filled" value={phone} onChange={(event) => setPhone(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="website" variant="filled" value={website} onChange={(event) => setWebsite(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="companyname" variant="filled" value={companyname} onChange={(event) => setCompanyname(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="catchPhrase" variant="filled" value={catchPhrase} onChange={(event) => setCatchPhrase(event.target.value)} autoComplete="off" />
            <TextField id="outlined-basic" label="bs" variant="filled" value={bs} onChange={(event) => setBs(event.target.value)} autoComplete="off" />
            <Button variant="contained" onClick={() => {
                const newUser = {
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
                fetch(`${API}`,{
                method:"POST",
                body: JSON.stringify(newUser),
                headers:{
                    "Content-Type":"application/json"
                }
                })
                .then((response)=>response.json)
                .then(() => navigate("/users"))
            }}
            >Add to User</Button>
        </div>
    )
}
