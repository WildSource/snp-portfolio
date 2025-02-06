import './Contacts.css';
import GitHubLogo from '../../assets/logos/github-mark-white.png';
import GmailLogo from '../../assets/logos/Gmail_Logo.svg';

function Contacts() {
  return (
    <>
      <h2><a name='contacts'>Contacts and Socials</a></h2>
      <ul className='ContactsContainer'>
        <li>
          <h4>GitHub</h4>
          <img id='GitHubLogo' src={GitHubLogo}></img>
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
