import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;

  line-height: 0;
  list-style: none;

  .bg > svg {
    fill: ${({ theme }) => theme.COLORS.PINK_900};
  }

  > li > svg {
    color: ${({ theme }) => theme.COLORS.PINK_900};
  }
`
