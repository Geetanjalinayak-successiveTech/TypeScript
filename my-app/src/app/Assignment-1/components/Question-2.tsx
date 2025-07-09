//2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
//Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
//Create multiple instances of the UserCard component with different user data.



// export default function UserCard({name,email})
// {
    
//     return(
//         <div>
//             <img src="/images/avatar.png" alt="avatar" />
//             <h2>{name}</h2>
//             <h2>{email}</h2>
//         </div>
//     )

// }

export default function UserCard(prop)
{
    let name=prop.name;
    let email=prop.email;
    let avatar=prop.avatar;
    
    return(
        <div>
            <img src={avatar} alt="avatar" width={90}/>
            <h2>{name}</h2>
            <h2>{email}</h2>
        </div>
    )

}