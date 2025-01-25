import './Contacts.css';
import GitHubLogo from '../../assets/logos/github-mark-white.png';
import LinkedInLogo from '../../assets/logos/LI-In-Bug.png';
import GmailLogo from '../../assets/logos/Gmail_Logo.svg';

function Contacts() {
  return (
    <>
      <h2>Contacts and Socials</h2>
      <ul className='ContactsContainer'>
        <li>
          <h4>GitHub</h4>
          <img src={GitHubLogo}></img>
        </li>
          <h4>LinkedIn</h4>
          <img src={LinkedInLogo}></img>
        <li>
        </li>
        <li>
          <h4>E-Mail</h4>
          <img src={GmailLogo}></img>
        </li>
      </ul>
    </>
  );
}

export default Contacts;
