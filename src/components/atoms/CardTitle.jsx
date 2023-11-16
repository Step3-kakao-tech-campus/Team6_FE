/**
 *
 * @param title {string} card title
 * @param lineClamp {number} lineClamp
 * @param className {string} className
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const CardTitle = ({ title, lineClamp, className, ...rest }) => (
  <h3
    className={`card-title line-clamp-${lineClamp} text-xl font-bold text-tripKoOrange-500 ${className}`} {...rest}
  >
    {title}
  </h3>
);

export default CardTitle;
