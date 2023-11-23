import { Input } from '../Input'
import { Container, Profile } from './styles'
import {Link} from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <Link to="/">
        <h1>RocketMovies</h1>
      </Link>
      <Input type="search" placeholder="Pesquisar pelo título" />

      <Profile to="profile">
        <div>
          <p>Isadora Aguiar</p>
          <button>Sair</button>
        </div>

        <img src="https://github.com/isadoraguiar.png" alt="Imagem de perfil" />
      </Profile>
    </Container>
  )
}