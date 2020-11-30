import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function HomePage() {
  return (
    <>
      <div>
        <div className='mainHeading'>
          Learn technology, solve complex problems, <br />
          prepare for future online interviews
        </div>
        <div className='findBottom'>
          <div className='findText'>
            <Link to='/mentors'>Find Mentor</Link>
          </div>
        </div>
        <p className='subheading'>Find your mentor among 90+ professionals</p>

        <div className='tagBox'>
          <span className='tag'>
            <Link to='/mentors'>&#123; JAVA &#125;</Link>
          </span>
          <span className='tag'>
            <Link to='/mentors'>&#123; Python &#125;</Link>
          </span>
          <span className='tag'>
            <Link to='/mentors'>&#123; JavaScript &#125;</Link>
          </span>
          <span className='tag'>
            <Link to='/mentors'>&#123; React &#125;</Link>
          </span>
          <span className='tag'>
            <Link to='/mentors'>&#123; NodeJS &#125;</Link>
          </span>
        </div>
        <div className='tagBox second'>
          <span className='tag'>
            <Link to='/mentors'>&#123; Machine Learning &#125;</Link>
          </span>
          <span className='tag'>
            <Link to='/mentors'>&#123; Team Lead &#125;</Link>
          </span>
          <span className='tag'>
            <Link to='/mentors'>&#123; DevOps &#125;</Link>
          </span>
          <span className='tag'>
            <Link to='/mentors'>&#123; Algorithms &#125;</Link>
          </span>
        </div>

        <div className='profileSection'>
          <div className='container'>
            <div className='row'>
              <div className='col3'>
                <div className='profilioImg'>
                  <Link to='/profile'>
                    <img
                      src='/img/girl.jpg'
                      width='290'
                      height='350'
                      alt='Profile'
                    />
                  </Link>
                </div>
                <div className='portfolioTitle'>Anastasia Soktoeva</div>
                <div className='portfolioText'>
                  <p>Front-end Developer at Elbrus</p>
                  <p>JavaScript, React</p>
                  <a href='#' className='moreA'>
                    More Details
                  </a>
                </div>
              </div>

              <div className='col3'>
                <div className='profilioImg'>
                  <Link to='/profile'>
                    <img
                      src='/img/girl.jpg'
                      width='290'
                      height='350'
                      alt='Profile'
                    />
                  </Link>
                </div>
                <div className='portfolioTitle'>Gayane Zurnachyan</div>
                <div className='portfolioText'>
                  <p>Front-end Developer at Elbrus</p>
                  <p>JavaScript, React</p>
                  <a href='#' className='moreA'>
                    More Details
                  </a>
                </div>
              </div>

              <div className='col3'>
                <div className='profilioImg'>
                  <Link to='/profile'>
                    <img
                      src='/img/man.jpg'
                      width='290'
                      height='350'
                      alt='Profile'
                    />
                  </Link>
                </div>
                <div className='portfolioTitle'>Roman Dubinkin</div>
                <div className='portfolioText'>
                  <p>Back-end Developer at Elbrus</p>
                  <p>JavaScript, React</p>
                  <a href='#' className='moreA'>
                    More Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='infoSection'>
          <ul className='listInfo'>
            <li>
              <img src='img/checklist.png' alt='checklist' />
              Create an individual program
            </li>
            <li>
              <img src='img/checklist.png' alt='checklist' />
              Prepare for the interview
            </li>
            <li>
              <img src='img/checklist.png' alt='checklist' />
              Network
            </li>
            <li>
              <img src='img/checklist.png' alt='checklist' />
              Choose the best materials and practices for self-study
            </li>
            <li>
              <img src='img/checklist.png' alt='checklist' />
              Motivate to keep up your studying pace and refrain from giving up
            </li>
          </ul>
          <div className='findBtn'>
            <Link to='/mentors'>Find Mentor</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
