import Github from "../assets/github.png";

function Footer() {
  return (
    <footer className="footer">
      <p>Nicolas JUCHEREAU / Checkpoint 4 / Gridception ❤️</p>
      <a
        href="https://github.com/Nicolas-jchr"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <img src={Github} alt="GitHub Logo" className="github-logo" />
      </a>
    </footer>
  );
}

export default Footer;
