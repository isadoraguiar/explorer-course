import { FiArrowLeft } from 'react-icons/fi'

import { Container, Content, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { ButtonText } from '../../components/ButtonText'

export function New() {
  return (
    <Container>
      <Header />

      <div>
        <ButtonText text="Voltar" icon={FiArrowLeft} to="/" />
      </div>
      <main>
        <Content>
          <h1>Novo filme</h1>

          <Form>
            <div className="twoColumns">
              <Input type="text" placeholder="Título" />
              <Input
                type="number"
                placeholder="Sua nota (de 0 a 5)"
                min="0"
                max="5"
              />
            </div>

            <TextArea placeholder="Observações" />

            <Section title="Marcadores">
              <NoteItem value="React" />
              <NoteItem isNew />
            </Section>

            <div className="twoColumns">
              <Button title="Excluir filme" />
              <Button title="Salvar alterações" />
            </div>
          </Form>
        </Content>
      </main>
    </Container>
  )
}