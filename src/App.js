import logo from './logo.svg';
// import './App.css';
import './App.scss';
function App() {
  return (
  <>
   <nav class="navbar">
      <div class="container">
        {/* <h1 class="logo">Phono</h1> */}
        <ul class="nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#specs">Specs</a></li>
					<li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>

    <section class="section-a">
      <div class="container">
        <div>
          <h1>프론트엔드 개발자 김용희입니다.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            repudiandae rerum libero ipsum asperiores omnis mollitia, nostrum
            commodi placeat ea itaque modi corrupti corporis nam voluptas aut
            reprehenderit eaque culpa.
          </p>
          {/* <a href="#" class="btn">Read More</a> */}
        </div>
        <img src="https://media.vlpt.us/images/yonghk423/post/954f4010-ce71-43dc-aad5-610041b8925e/portfolio.jpeg" alt="" />
      </div>
    </section>

    <section id="about" class="section-b">
      <div class="overlay">
        <div class="section-b-inner py-5">
          <h3 class="text-2">Loud Clear</h3>
          <h2 class="text-5 mt-1">People Aren't Hearing All the Music</h2>
          <p class="mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            repudiandae laboriosam quia, error tempore porro ducimus voluptate
            laborum nostrum iure.
          </p>
        </div>
      </div>
    </section>

    <section id="about" class="section-c">
      <div class="overlay">
        <div class="section-c-inner py-5">
          <h3 class="text-2">Loud Clear</h3>
          <h2 class="text-5 mt-1">People Aren't Hearing All the Music</h2>
          <p class="mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            repudiandae laboriosam quia, error tempore porro ducimus voluptate
            laborum nostrum iure.
          </p>
        </div>
      </div>
    </section>
    
    <footer class="section-footer py-4 bg-primary">
      <div class="container">
        <div>
          <h2 class="text-2 mb-1">Lorem ipsum dolor sit.</h2>
          <a href="http://twitter.com">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
          <a href="http://facebook.com">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="http://youtube.com">
            <i class="fab fa-youtube fa-2x"></i>
          </a>
        </div>
        <div>
          <h3>Company Info</h3>
          <ul>
            <li><a href="#">All Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3>Blog Posts</h3>
          <ul>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
          </ul>
        </div>
        <div>
          <h3>Subscribe</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <form
            class="mt-1"
            name="email-form"
            method="POST"
            data-netlify="true"
          >
            <div class="email-form">
              <span class="form-control-wrap"
                ><input
                  type="email"
                  name="email"
                  id="email"
                  size="40"
                  class="form-control"
                  placeholder="E-mail"/></span
              ><button type="submit" value="Submit" class="form-control submit">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>  
  </>
  );
}

export default App;
