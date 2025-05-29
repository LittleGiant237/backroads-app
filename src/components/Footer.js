import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <>
      <footer className='section footer'>
        <PageLinks parentClass='footer-links' itemsClass='footer-link' />
        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return (
              <SocialLink key={link.id} {...link} itemsClass='footer-icon' />
            );
          })}
        </ul>
        <p className='copyright'>
          copyright &copy; Backroads travel tours company
          <span id='date'></span> all rights reserved
        </p>
      </footer>
    </>
  );
};
export default Footer;
