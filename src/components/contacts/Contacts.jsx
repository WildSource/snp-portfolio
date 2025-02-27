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
          <a href='https://github.com/WildSource'>
            <img id='GitHubLogo' src={GitHubLogo}></img>
          </a>
        </li>
        <li>
          <h4>E-Mail</h4>
          <a href='mailto:samuelnguyenphok@gmail.com'>
            <img src={GmailLogo}></img>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Contacts;
