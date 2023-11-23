import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'

import { Container, Header,Form, Avatar } from './styles'

import {Input} from '../../components/Input'
import { Button } from '../../components/Button'
import {ButtonText} from '../../components/ButtonText'

export function Profile() {
  return (
    <Container>
      <Header>
        <ButtonText icon={FiArrowLeft} text="Voltar" to="/"/>
      </Header>

      <Form>
        <Avatar>
          <img src="http://github.com/isadoraguiar.png" alt="Imagem de perfil" />

          <label htmlFor="avatar">
            <FiCamera/>
            <input type="file" name="avatar" id="avatar" className='sr-only' />
          </label>
        </Avatar>

        <Input type="text" icon={FiUser} placeholder="Nome"/>
        <Input type="email" icon={FiMail} placeholder="E-mail"/>
        <Input type="password" icon={FiLock} placeholder="Senha atual"/>
        <Input type="password" icon={FiLock} placeholder="Nova senha"/>

        <Button title="Salvar" isLoading/>
      </Form>
    </Container>
  )
}