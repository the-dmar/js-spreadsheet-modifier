//jssheets.com

import {
  RightSide,
  Logo,
  LogoCurlyBrackets,
  Nav,
  LinkWrapper,
  NavLink,
} from "../styles/Navbar.styled"
import Link from "next/link"

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <LogoCurlyBrackets as="span">{"{"}</LogoCurlyBrackets>JsSheets
        <LogoCurlyBrackets as="span">{"}"}</LogoCurlyBrackets>
      </Logo>
      <RightSide>
        <NavLink>
          <Link href="#">Test</Link>
        </NavLink>
      </RightSide>
    </Nav>
  )
}

export default Navbar
