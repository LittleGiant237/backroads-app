const SocialLink = ({ href, icon }) => {
  return (
    <>
      <li>
        <a rel='noreferrer' href={href} target='_blank' className='nav-icon'>
          <i className={icon}></i>
        </a>
      </li>
    </>
  );
};
export default SocialLink;
