const UserProfile = (props) => {
  const { name, age, bio } = props; // Destructuring props for cleaner usage
  
  return (
    <div className="user-profile" 
    style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
    <h2 style={{ color: 'blue' }}>{props.name}</h2>
    <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
    <p>Bio: {props.bio}</p>
    </div>
  );
};

UserProfile.defaultProps = {
  name: 'Anonymous',
  age: 'Not specified',
  bio: 'No bio available'
};

export default UserProfile;
