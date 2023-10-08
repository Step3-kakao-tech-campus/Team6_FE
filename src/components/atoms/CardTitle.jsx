/**
 *
 * @param title {string} card title
 * @param lineClamp {number} lineClamp
 * @returns {JSX.Element}
 * @constructor
 */
const CardTitle = ({ title, lineClamp }) => (
  <h3 className={`card-title line-clamp-${lineClamp} text-xl font-bold text-tripKoOrange-500`}>
    {title}
  </h3>
);

export default CardTitle;