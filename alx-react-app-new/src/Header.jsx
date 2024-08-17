

function Header() {
  const headerStyle = {
    backgroundColor: 'navy',
    color: 'white',
    textAlign: 'center'
  };

  return (
    <div>
      <header style={headerStyle}>
        <h1>My Favorite Cities</h1>
      </header>
    </div>
  );
}

export default Header;