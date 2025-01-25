import './Project.css';

function Project() {
  return (
    <div className='projectContainer'>
      <h2><strong>My Projects</strong></h2>
      <h4><a href='https://waifuwebcomics.com/'>Waifuwebcomics.com</a></h4>              
      <iframe src='https://waifuwebcomics.com/' title='Waifuwebcomics'></iframe>
      <p>
        A webcomic publishing website written in TypeScript and Java. <br></br>
        It utilize the Angular framework for the frontend and Spring Boot as it's backend. <br></br>
        All of this is hosted on a DigitalOcean Droplet using MariaDB as its database.
      </p>
    </div>
  );
}

export default Project;
