import styled from "styled-components"

export const CellContents = styled.div`
  outline: 1px solid #bcb8b1;
  width: 5.5rem;
  height: 1.5rem;
  font-family: calibri;
  padding: 0.1rem 0.2rem;
  overflow: hidden;
  background-color: white;
`

const flipDown = `
  from {
    transform: rotate(0deg);
    background-color: white;
  }

  to {
    transform: rotate(360deg);
    background-color: red;
  }
`

export const CellLocation = styled(CellContents)`
  animation: ${flipDown} 2s linear;
`
