import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const EditorWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
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
  padding: 0.45rem 0.7rem;
  border-radius: 4px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  align-items: center;
  font-size: 1rem;
  display: flex;
  justify-content: space-evenly;
  margin-right: 3.5rem;
`
export const FileInputTypes = styled.i`
  margin-top: 0.1rem;
  font-size: 0.7rem;
  font-weight: 400;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.5rem;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1.5rem 0.2rem 0;
  cursor: pointer;
`

export const IconWrapperLabel = styled.div`
  color: white;
  margin-left: 0.3rem;
  font-weight: 700;
  /* font-size: 1.05rem; */
`
