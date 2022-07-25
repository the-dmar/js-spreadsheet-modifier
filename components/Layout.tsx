import { Container } from "../styles/Layout.styled"
import Navbar from "./Navbar"

interface LayoutProps {
  children: JSX.Element[]
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  )
}

export default Layout
