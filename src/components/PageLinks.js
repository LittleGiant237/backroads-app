import { pageLinks } from "../data";

const PageLinks = ({ parentClass, itemsClass }) => {
  return (
    <>
      <ul className={parentClass} id='nav-links'>
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a rel='noreferrer' href={href} className={itemsClass}>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default PageLinks;
