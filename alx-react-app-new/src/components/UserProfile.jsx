const UserProfile = (props) => { 
 
  return (
    <div>
      <h2 style = {{ color: 'blue'}}>{props.name}</h2>
      <p style = {{fontWeight: 'bold'}}>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};
export default UserProfile;