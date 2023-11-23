import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.GRAY_900};

  width: fit-content;
  font-family: 'Roboto', sans-serif;
  font-size: clamp(1.2rem, 0.8rem + 1.25vw, 1.6rem);

  padding: 1.6rem;

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_800}` : 'none'};
  border-radius: 1rem;

  display: flex;
  align-items: center;

  > input {
    border: none;
    outline: none;

    width: 11rem;
    background-color: transparent;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: clamp(1.2rem, 0.8rem + 1.25vw, 1.6rem);

    &:disabled {
      display: none;
    }

    &::placeholder {
      font-size: clamp(1.2rem, 0.8rem + 1.25vw, 1.6rem);
    }
  }

  > button {
    background: none;
    border: none;

    line-height: 0;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.COLORS.PINK_900};

    margin-left: 1.6rem;
  }
`
