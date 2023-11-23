import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  gap: 1.5rem;

  padding: 0 5vw;

  width: 100%;
  height: 11.6rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};

  > a > h1 {
    font-weight: 700;
    font-size: clamp(2rem, 1.6474rem + 0.551vw, 2.4rem);
    color: ${({ theme }) => theme.COLORS.PINK_900};
  }

  @media (max-width: 40em) {
    grid-template-columns: 2fr 1fr;

    a:first-child {
      display: none;
    }
  }
`

export const Profile = styled(Link)`
  justify-self: end;

  display: flex;
  gap: 0.9rem;

  > img {
    width: 6.4rem;
    height: 6.4rem;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    text-align: end;

    font-size: 1.4rem;

    p {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: 700;
    }

    button {
      background-color: transparent;
      font-size: 1.4rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_800};

      border: none;
    }

    button:hover {
      text-decoration: underline;
    }
  }
`
