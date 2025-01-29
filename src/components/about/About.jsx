import './About.css'

function About() {
  return (
    <>
            <h2><strong><a name='about'>About Me</a></strong></h2>
        <div className='content'>
          <p>
            Hi, my name is Samuel Nguyen-Phok, and I’m a web developer based in Quebec, Canada. <br></br>
    While I’m skilled in both frontend and backend development, my passion lies in backend work, 
    where I can focus on building robust, 
            scalable systems. <br></br>
          </p>
        </div>
      <hr className='abouthr'></hr>

      <div className='content'>
        <p>
        Beyond web development, I have a deep interest in programming languages—particularly their paradigms, 
        such as functional programming—and enjoy exploring topics like compilers, interpreters, and even quirky esoteric languages. <br></br>
        </p>
      </div> 
      <hr className='abouthr'></hr>

      <div className='content'>
        <p>
        In my free time, I create illustrations and comics, often for mature audiences. 
        One of my proudest accomplishments is developing a personal comic publishing website, 
        where I combined my technical skills with my creative passion.
        <br></br>
        <br></br>
        I’m always excited to take on new challenges, whether it’s solving complex backend problems or diving into creative projects. 
        </p>
      </div>
   </>
  );
}

export default About;
