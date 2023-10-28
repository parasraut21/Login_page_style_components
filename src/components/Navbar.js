import styled from "styled-components";

 const NavbarContainer = styled.nav`
  background: #007bff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  animation: fadeIn 1s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

 const NavbarTitle = styled.h1`
  color: white;
  font-size: 24px;
  margin: 0;
`;

 const NavbarName = styled.span`
  color: yellow;
  font-weight: bold;
`;

 const FooterContainer = styled.footer`
  background: #007bff;
  color: white;
  padding: 10px;
  text-align: center;
  animation: fadeIn 1s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

 const FooterName = styled.p`
  font-weight: bold;
`;


export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarTitle>
        Welcome to my App
      </NavbarTitle>
    </NavbarContainer>
  );
};

