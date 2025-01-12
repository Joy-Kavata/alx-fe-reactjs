const UserProfile = (props) => {
  const { name, age, bio } = props; // Destructuring props for cleaner usage
  
  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

UserProfile.defaultProps = {
  name: 'Anonymous',
  age: 'Not specified',
  bio: 'No bio available'
};

export default UserProfile;
