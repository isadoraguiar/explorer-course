import styled from 'styled-components'

export const Container = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  border-radius: 5px;
  padding: 5px 14px;
  margin-right: 6px;
`
