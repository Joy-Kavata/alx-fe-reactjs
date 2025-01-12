import UserProfile from '/src/UserProfile'

function App() {
  return (
    <div className="app">
      <h1>User Profile</h1>
      <UserProfile 
        name="Kavata" 
        age="25" 
        bio="Loves nature and music" 
      />
      
      <UserProfile 
        name="Joy" 
        age="30" 
        bio="Software developer and coffee enthusiast" 
      />
    </div>
  );
}

export default App;
