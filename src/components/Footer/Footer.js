import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterWrapper>
      <p className="footer">
        Feel free to check the code 😀{' '}
        <a
          className="link"
          href="https://github.com/grishO92/recipe-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          CLICK
        </a>
      </p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: #0b0c0f;
  position: fixed;
  inset: auto 0 0 0;
  color: white;
  padding: 20px 48px;
  display: flex;
  align-self: center;
  justify-content: center;
  .link {
    text-decoration: none;
    color: #ffc200;
  }
`;
