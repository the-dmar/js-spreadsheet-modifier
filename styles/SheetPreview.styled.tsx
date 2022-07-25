import styled from "styled-components"

export const Sheet = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
`

export const Row = styled.div`
  display: flex;
`

export const Cell = styled.div`
  outline: 1px solid #bcb8b1;
  flex: 1;
  height: 1.5rem;
  font-family: calibri;
  padding: 0.1rem 0.2rem;
  overflow: hidden;
  background-color: white;
`
