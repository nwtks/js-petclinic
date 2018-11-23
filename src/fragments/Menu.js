import h from 'vnoc'

function Menu(props) {
  const { path } = props
  return (
    <nav class="nav nav-pills nav-justified bg-secondary">
      <a
        class={
          'nav-item nav-link text-white' + (path === '#/home' ? ' active' : '')
        }
        href="#/home"
        title="home page"
      >
        Home
      </a>
      <a
        class={
          'nav-item nav-link text-white' +
          (path && /^#\/owners/.test(path) ? ' active' : '')
        }
        href="#/owners"
        title="find owners"
      >
        Owners
      </a>
      <a
        class={
          'nav-item nav-link text-white' + (path === '#/vets' ? ' active' : '')
        }
        href="#/vets"
        title="veterinarians"
      >
        Veterinarians
      </a>
    </nav>
  )
}

export default Menu
