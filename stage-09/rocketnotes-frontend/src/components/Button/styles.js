import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 56px;

  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  border: 0;
  border-radius: 10px;
  padding: 0 16px;
  margin-top: 16px;

  &:disabled {
    opacity: 0.5;
  }
`
