interface FooterProps {
  year: number;
}

const Footer: React.FC<FooterProps> = ({ year }) => (
  <footer>
    <p>Copyright {year}</p>
  </footer>
);

export default Footer;
