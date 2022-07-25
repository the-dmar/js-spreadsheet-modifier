import { Container } from "../styles/Layout.styled"

interface LayoutProps {
  children: JSX.Element[]
}

const Layout = ({ children }: LayoutProps) => {
  return <Container>{children}</Container>
}

export default Layout
