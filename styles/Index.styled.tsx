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
  background-color: #6c757d;
  max-width: 8rem;
  text-align: center;
  padding: 0.4rem 0.7rem;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  align-items: center;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-evenly;
`
export const FileInputTypes = styled.i`
  margin-top: 0.1rem;
  font-size: 0.7rem;
  font-weight: 400;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`
