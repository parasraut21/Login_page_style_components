import styled from "styled-components";

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


export const Footer = () => {
    return (
      <FooterContainer>
        <FooterName>Made By :- Paras Raut Email :- parasraut2511@gmail.com</FooterName>
      </FooterContainer>
    );
  };
  
   