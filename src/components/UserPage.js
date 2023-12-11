
export function UserPage ({user,id,deleteIcon,editIcon}){
    return(
        <div>
            <div className='container'>
                <h2>{id}</h2>
                <h3>Name : {user.name}</h3>
                <p>UserName : {user.username}</p>
                <h3>Email : {user.email}</h3>
                {deleteIcon}{editIcon}
            </div>
        </div>
    )
}


