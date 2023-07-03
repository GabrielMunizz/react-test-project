const user = {
  name: 'Gabriel',
  lastName: 'Muniz',
};

function Header() {
  return (
    <header>
      <h1>
        { `Olá, ${user.name} ${user.lastName}!`}
      </h1>
    </header>
  );
}

export default Header;
