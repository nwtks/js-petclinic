import h from 'hel' // eslint-disable-line no-unused-vars

function Menu(props) {
  const path = props.path
  return (
    <nav class="nav nav-pills nav-justified bg-secondary" role="navigation">
      <a
        class={'nav-item nav-link text-white' + (path === '#/home' ? ' active' : '')}
        href="#/home"
        title="home page"
      >
        Home
      </a>
      <a
        class={
          'nav-item nav-link text-white' +
          (path && path.startsWith('#/owners') ? ' active' : '')
        }
        href="#/owners"
        title="find owners"
      >
        Owners
      </a>
      <a
        class={'nav-item nav-link text-white' + (path === '#/vets' ? ' active' : '')}
        href="#/vets"
        title="veterinarians"
      >
        Veterinarians
      </a>
    </nav>
  )
}

export default Menu
