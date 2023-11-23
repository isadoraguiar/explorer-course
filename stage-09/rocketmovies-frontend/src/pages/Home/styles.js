import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    'header'
    'div'
    'content';

  grid-template-rows: 11.6rem 13.2rem auto;

  > div:first-of-type {
    grid-area: div;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 4rem auto;

    width: min(90%, 113.7rem);

    > button {
      width: fit-content;
    }

    > h1 {
      font-weight: 400;
      font-size: clamp(2.2rem, 1.2rem + 3.125vw, 3.2rem);
    }
  }

  > main {
    overflow-y: auto;

    width: min(90%, 113.7rem);
    margin-inline: auto;
    padding-right: 0.8rem;
  }
`

export const Content = styled.div`
  grid-area: content;
`
