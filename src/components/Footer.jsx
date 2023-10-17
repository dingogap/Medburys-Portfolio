//Display Page Footer
export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="links">
          {/* <a href="tel:+61 408 635 759"> +61 408 635 759</a>
          <a href="mailto:peter.medbury@dingogap.net.au">
            peter.medbury@dingogap.net.au
          </a> */}
          <a href="https://github.com/dingogap" target="_blank">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/peter-medbury-22aa7b35/"
            target="_blank"
          >
            Linked In
          </a>
          <span className="copyright">© 2023 - Peter Medbury</span>
        </div>
      </div>
    </footer>
  );
}
