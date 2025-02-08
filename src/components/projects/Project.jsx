import './Project.css';

function Project() {
  return (
    <>
      <h2><strong><a name='projects'>My Projects</a></strong></h2>
      <div className='projectContainer'>
              <h4><a href='https://waifuwebcomics.com/'><div className='link-b'>Waifuwebcomics.com</div></a></h4>              
              <h5><strong>Warning Contains Nudity</strong></h5>
        <iframe src='https://waifuwebcomics.com/' title='Waifuwebcomics'></iframe>
        <p>
        A webcomic publishing website written in TypeScript and Java. <br></br>
        It utilize the Angular framework for the frontend and Spring Boot as it's backend. <br></br>
        All of this is hosted on a DigitalOcean Droplet using MariaDB as its database.
        </p>
      </div>
    </>
  );
}

export default Project;
