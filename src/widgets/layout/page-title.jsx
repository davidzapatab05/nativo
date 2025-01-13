import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function PageTitle({ section, heading, children }) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      {/* Renderiza `section` solo si tiene un valor */}
      {section && (
        <Typography variant="lead" className="font-semibold">
          {section}
        </Typography>
      )}
      <Typography variant="h2" color="blue-gray" className="my-3">
        {heading}
      </Typography>
      {/* Renderiza `children` solo si tiene un valor */}
      {children && (
        <Typography variant="lead" className="text-blue-gray-500">
          {children}
        </Typography>
      )}
    </div>
  );
}

PageTitle.propTypes = {
  section: PropTypes.string,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node, // Ahora es opcional
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
