import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  copyright: (
    <>
      © {year} Nativo Constructora -
      <a
        href="https://www.instagram.com/constructora__nativo/"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        Todos los derechos reservados
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
