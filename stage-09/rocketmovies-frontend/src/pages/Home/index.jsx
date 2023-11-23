import { FiPlus } from 'react-icons/fi'
import {Link} from 'react-router-dom'
import { Container, Content } from './styles'


import { Note } from '../../components/Note'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

export function Home() {
  return (
    <Container>
      <Header />
      <div>
        <h1>Meus filmes</h1>
        <Link to="/new"><Button icon={FiPlus} title="Adicionar filme" /></Link>
      </div>

      <main>
        <Content>
          <Note />
          <Note />
          <Note />
        </Content>
      </main>
    </Container>
  )
}