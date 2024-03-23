import logo from "../assets/logo.png";
import { HeaderStyled } from "./styles/Header.style";

export default function Header() {
  return (
    <HeaderStyled>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </HeaderStyled>
  );
}
