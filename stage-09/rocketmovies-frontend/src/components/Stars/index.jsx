import { Container } from "./styles"
import { FiStar } from 'react-icons/fi'


export function Stars() {
  return (
    <Container>
      <li className="bg"><FiStar /></li>
      <li className="bg"><FiStar /></li>
      <li className="bg"><FiStar /></li>
      <li className="bg"><FiStar /></li>
      <li><FiStar /></li>
    </Container>
  )
}