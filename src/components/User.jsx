import './Style.css'


const User = ({name, email, gen}) => {
  return (
    <div className="user-container">
        <h1>Name:{name}</h1>
        <h2>Email:{email}</h2>
        <h3>Class:{gen}</h3>
    </div>
  )
}

export default User;