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
            코딩을하며 부딪히는 과정에서 끊임없이 해결 방법을 찾으며 <br></br> 성장하고 있습니다. 성장의 큰 기틀인 기록하는 습관을 가지며 <br></br> 생산성과 지식의 지속성을 유지하기 위해 노력하고 있습니다. <br></br> 앞으로도 협업에서의 활발한 소통과 개발 과정에서의 성취감을 <br></br> 느끼고 발전해 나갈 것입니다:)
          </p>
          {/* <a href="#" class="btn">Read More</a> */}
        </div>
        <img src="https://media.vlpt.us/images/yonghk423/post/954f4010-ce71-43dc-aad5-610041b8925e/portfolio.jpeg" alt="" />
      </div>
    </section>

    <section id="about" class="section-b">
      <div class="overlay">
        <div class="section-b-inner py-5">
        <div className='gridone'> 
          <div className='main'>
            <h2 className='title'>4주 4인 팀 프로젝트 2021.11 - 2021.12</h2>
            <h2 className='titletwo'>나랏말싸미 서비스</h2>
            <h2 className='titlethr'>우리말을 재밌게 배워 바르게 쓸 수 있도록 관련된 퀴즈를 제공하는 사이트입니다 </h2>
            <h2 className='titlefour'>포지션 : 팀장 프론트엔드</h2>
            <h2 className='titlefive'>기술스텍</h2>  
            <h2 className='titlesix'> JavaScript, React JS, React Hooks API, Axios, React Router, Styled-Components </h2>
          </div>
          <img className='zero' src='https://media.vlpt.us/images/yonghk423/post/590c8996-fac0-4740-b28b-2ecf80a5b939/LandingPage.gif'></img>
        </div> 
          <h2>맡은 역할</h2>
          <h2>MyPage UI 디자인 및 데이터 연동</h2>
          <img className='one' src='https://media.vlpt.us/images/yonghk423/post/4427df2d-707d-4b9e-8d4b-b78b0e682051/mypage1.png'></img>
          <img className='two' src="https://media.vlpt.us/images/yonghk423/post/b4187126-a54f-4383-b4a3-56207cda705a/MyPage1.gif" alt=''></img>
          <img className='three' src='https://media.vlpt.us/images/yonghk423/post/414518d6-87e4-4b43-af80-82dd80bf7f4f/MyPage2.gif'></img>          
          <p>MyPage UI는 아코디언 메뉴 형식으로 구성하였습니다. input type="checkbox" , type="radio" 이 둘의 차이점은 checkbox는 중복 선택이 가능하며 radio 버튼은 단일 선택만 가능합니다. 따라서 단일 선택만 가능하도록 구성하도록 해야 했기 때문에 checkbox 타입을 사용하였습니다.</p>
          <p>MyPage는 기본적으로 회원의 email, name, image, mileage 와 구매내역 내가 만든 문제를 볼 수가 있습니다.</p>
          {/* <h2>Local MyPage(RankModal)</h2>
          <img className='four' src='https://media.vlpt.us/images/yonghk423/post/ef581d6b-fd99-4dd0-8587-9a6c97281e38/마이페이지-rankmodal.gif'></img>
          <h2>UI</h2>
          <h2>모달창 만들기</h2>
          <p>모달창을 만드는 핵심은 웹 브라우저 페이지를 하나의 큰창으로 잡고 반투명을 만들고 그 안에 박스 하나를 만들어 출력하는 방식이다 처음에는 새로운 창을 띄우는 것이 아닌데 창을 띄우는 것으로 착각하여 라우터를 사용하는 착오가 있었다. 
          position: fixed; : 특정 위치에 고정시켜 스크롤을 내려도 그 자리에 계속 위치하게 설정
          z-index: 999; :z-index의 가장 중요한 특징 중 하나는 아무 요소나 다 z-index를 넣는다고 해서 우선순위를 넣을 수 는 없다는 점이다.z-index 속성이 적용되기 위해서는 z-index를 적용한 영역이 position:static 값이 아니어야 한다. z-index의 기본값은 auto 이고 보통 1, 9, 100, -1, -100등의 숫자로 그 속성의 값을 지정한다
          background-color: rgba(0,0,0,0.75); 값으로 설정하여 반투명으로 만들었다.</p>
          <h2>기능과 api연동(Pagination)</h2>
          <p>Pagination : 모달창 이 열리게 되면 api 요청을 통해 데이터를 출력해야 하는데 목록형 UI(상품 등)에서 데이터를 한번에 가져오는것이 아니라 필요한만큼, 또는 화면에 보이는 만큼만 백엔드에 요청하고 응답받아 사용하는 방식을 활용하여 데이터를 받아 왔다. 
          필요한 만큼 받아 오려면 구간을 정해줘야 하는데 limit값과 offset값을 설정하였으며 또한 버튼을 클릭 하였을 때 추가적으로 받아 올 수 있도록 설정하였다.</p>
          <h2>Login Signin UI</h2>
          <img className='five' src='https://media.vlpt.us/images/yonghk423/post/6a90c5e4-e2d9-4241-9ca7-4e43d99d520e/Login.gif'></img>
          <img className='six' src='https://media.vlpt.us/images/yonghk423/post/525a7bc0-f56f-4740-a026-412046315040/SignUp.gif'></img>                  */}
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
