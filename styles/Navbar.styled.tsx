import styled from "styled-components"
import Link from "next/link"

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.div`
  color: #bdc2ca;
  font-family: consolas;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 600;
`

export const LogoCurlyBrackets = styled(Logo)`
  color: #e6d71a;
  font-weight: 900;
  font-size: 2.5rem;
`

export const NavLink = styled.div`
  color: red;
  text-decoration: none;
`
