import { FiX, FiPlus } from 'react-icons/fi'

import { Container } from './styles'

export function NoteItem({ value, isNew = false, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <span>{value}</span>

      <input
        type="text"
        disabled={!isNew}
        placeholder="Novo marcador"
        {...rest}
      />

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}