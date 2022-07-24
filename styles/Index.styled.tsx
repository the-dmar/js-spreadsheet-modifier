import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const EditorWrapper = styled.div`
  display: flex;
`

export const EditorLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const InvisibleFileInput = styled.input`
  display: none;
`

export const FileInputStyler = styled.label`
  background-color: #fb8500;
  max-width: 8.5rem;
  text-align: center;
  padding: 0.7rem;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.8rem;
`
