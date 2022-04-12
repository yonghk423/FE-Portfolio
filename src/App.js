

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
            코딩을하며 부딪히는 과정에서 끊임없이 해결 방법을 찾으며 <br></br> 성장하고 있습니다. 성장의 큰 기틀인 기록하는 습관을 가지며 <br></br> 생산성과 지식의 지속성을 유지하기 위해 노력하고 있습니다. <br></br> 앞으로도 협업에서의 적극적인 소통과 개발 과정에서의 성취감을 <br></br> 느끼고 발전해 나갈 것입니다:)
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
            <h2 className='title'>4주 4인 팀 프로젝트 <br></br> 2021.11 - 2021.12</h2>
            <h2 className='titletwo'>나랏말싸미</h2>
            <h2 className='titlethr'>우리말을 재밌게 배워 바르게 쓸 수 있도록 관련된 퀴즈를 제공하는 사이트입니다 </h2>
            <h2 className='titlefour'>포지션 : 팀장 프론트엔드</h2>
            <h2 className='titlefive'>기술스텍</h2>  
            <h2 className='titlesix'> JavaScript, React JS, React Hooks API, Axios, React Router, Styled-Components </h2>
          </div>
          <img className='zero' src='https://media.vlpt.us/images/yonghk423/post/590c8996-fac0-4740-b28b-2ecf80a5b939/LandingPage.gif'></img>
        </div> 
        <div className='gridtwo'>
          <div className='maintwo'>
            <h2 className='title'>맡은 역할</h2>
            <h2 className='titletwo'>MyPage UI 디자인 및 데이터 설정</h2>
            <p>MyPage UI는 아코디언 메뉴 형식으로 구성하였습니다. input type="checkbox" 와 type="radio" 이 둘의 차이점은 checkbox는 중복 선택이 가능하며 radio 버튼은 단일 선택만 가능합니다. 따라서 단일 선택만 가능하도록 구성하도록 해야 했기 때문에 checkbox 타입을 사용하였습니다.</p>
            <p>MyPage는 기본적으로 회원의 email, name, image, mileage 와 구매내역 내가 만든 문제를 볼 수가 있습니다. 처음 데이터 초기값 설정과 데이터를 어떤 방식으로 받아 와야 할지 고민하였습니다. 구현 방법으로 HTTP 비동기 통신 라이브러리인 Axios와 React Hooks API인 useState와 useEffect를 사용하였습니다. </p>
            <h2>Axios, useState, useEffect 왜 사용하였는가</h2>
            <p>Axios : Fetch API를 사용하지 않고 Axios를 사용한 이유는 자동으로 JSON 데이터 형식으로 변환을 해주고 좀 더 많은 브라우저에 지원되며 실무에서 Fetch API보다 더 선호하는 경향이 있기 때문입니다.</p>
            <p>useState : 리액트 16.8 이전 버전에서는 함수형 컴포넌트에서는 상태를 관리할 수 없었지만, 리액트 16.8 에서 React Hooks API 기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있게 되었습니다. 리액트는 부모 컴포넌트 렌더링, state , props가 변경 될 때 리렌더링이 됩니다. 따라서 데이터 변경시 리렌더링이 되려면 useState를 사용해야하며 계속 일정한 데이터를 기억하도록 해야하고 상태가 변경될 때 자동으로 관련된 리렌더링이 되게 만들고 싶으면 변수가 아닌 state에 저장해서 데이터바인딩을 해야 합니다.</p> 
            <p>useEffect : useEffect는 렌더링 직후 추가 작업을 설정할 수 있는 React Hooks API입니다 따라서 렌더링 직후 useEffect를 이용한 Axios 비동기 통신을 호출하고 받아온 데이터 값을 useState를 통하여 상태 관리를 하도록 구성하였습니다.</p>
          </div>
          <div className='imgone'> 
            <img className='one' src="https://media.vlpt.us/images/yonghk423/post/b4187126-a54f-4383-b4a3-56207cda705a/MyPage1.gif" alt=''></img>
          </div>         
        </div>
          <div className='gridthr'>
            <div className='mainthr'>
              <h2>MyPage RankModal</h2>
              <h2>모달창 UI</h2>
              <p>position: fixed을 사용하여 특정 위치에 고정시켜 스크롤을 내려도 그 자리에 계속 위치하게 설정 시키며 z-index을 이용하여 박스를 화면 우선 순위로 지정하였다. z-index 속성이 적용되기 위해서는 z-index를 적용한 영역이 position:static 값이 아니어야 한다는 점을 주의하였다.</p>
              <h2>useState를 이용한 onClick 이벤트 발생시 모달 상자 띄우기</h2>
              <p>모달창을 띄우려면 버튼 클릭시 모달 상자를 띄우고 다시 버튼 클릭시 상자를 닫는 과정이 기본적인 로직의 순서입니다. 앞에서 말했던 것 처럼 상태가 변경 될 때 자동으로 관련된 리렌더링이 되게 하려면 useState를 사용해야 해아 합니다. 처음 상태값을 Boolean 타입인 false로 설정하고 onClick 이벤트 발생시 상태값을 true로 변경하여 상자를 띄우고 반대로 상자를 닫을 때는 true였던 값을 다시 false로 상태를 변경하도록 하였습니다.   
              <h2>useState, useEffect를 이용한 데이터 출력(limit, offset 값 설정)</h2>  
                 모달창이 열리게 되면 api 요청을 통해 데이터를 출력해야 하는데 목록형 UI(상품 등)에서 데이터를 한번에 가져오는것이 아니라 필요한만큼, 또는 화면에 보이는 만큼만 백엔드에 요청하고 응답받아 사용하는 방식을 활용하여 데이터를 받아 오는 형식이 필요했습니다. 필요한 만큼 받아 오려면 구간을 정해줘야 하는데 limit값과 offset값을 설정하고 버튼을 클릭 하였을 때 추가적으로 받아 올 수 있도록 useEffect를 사용하여 limit값이 변경시에만 useEffect가 실행 되도록하여 버튼을 클릭시 추가적인 데이터가 나오도록 구성하였습니다.</p>
            </div>
            <img className='two' src='https://media.vlpt.us/images/yonghk423/post/ef581d6b-fd99-4dd0-8587-9a6c97281e38/마이페이지-rankmodal.gif'></img>       
          </div>
          <div className='gridfive'>
            <div className='textBox'>
              <h2>로그인 회원가입 UI</h2>
              <p></p>
            </div>
            <div className='imgBox'>
              <img className='loginImg' src='https://media.vlpt.us/images/yonghk423/post/6a90c5e4-e2d9-4241-9ca7-4e43d99d520e/Login.gif' alt=''></img>
              <img className='signUpImg' src='https://media.vlpt.us/images/yonghk423/post/525a7bc0-f56f-4740-a026-412046315040/SignUp.gif' alt=''></img>
            </div>
          </div>                  
        </div>
      </div>
    </section>   

    <section className='last'>
      <h2>개인 프로젝트</h2>
      <h2>2021. 12. 01</h2>
      <h2>추억을 담다</h2>
      <h2>즐겁게 식사도 하고 눈도 즐거웠던 장소를 기록할 수 있는 사이트입니다.</h2>
      <h2>기술스텍</h2>
      <h2>TypeScript,  ReactJS, React Hooks API, Redux.js, Redux-Thunk, Axios, ExpressJS, Node.js, Sass(SCSS)</h2>
      <img className='projectImg' src='https://velog.velcdn.com/images/yonghk423/post/6ad352f7-345b-412c-8452-5b45598ab674/image.png' alt=''></img>
      <h2>TypeScript를 사용한 이유</h2>
      <p>타입스크립트는 자바스크립트를 상위호환하는 프로그래밍 언어로서 자바스크립트의 깊은 이해가 선행 되어야 한다고 생각합니다. 따라서 자바스크립트의 기본기를 꾸준하게 쌓아가는 중이며 이번 프로젝트를 계기로 타입스크립트 사용을 도전하게 되었습니다.</p>
      <img className='tsImg' src='https://velog.velcdn.com/images/yonghk423/post/d64535ae-ba6a-42b1-8249-1264b7d4a5c7/image.png' alt=''></img>
      <h2>메인 페이지 및 데이터 삭제</h2>
      <img className='mainImg' src='https://velog.velcdn.com/images/yonghk423/post/8283c6a0-658e-4720-ae84-2491c3d1fad2/image.gif' alt=''></img>
      <img className='mainImgTwo' src='https://velog.velcdn.com/images/yonghk423/post/f955682a-bd14-4b83-880d-5740b2eb6d89/image.gif' alt=''></img>
      <h2>메인 페이지(데이터 추가하기)</h2>
      <img className='infoImgOne' src='https://velog.velcdn.com/images/yonghk423/post/bae8a7db-049f-4674-b2f1-115f0fb3e189/image.gif' alt=''></img>
      <img className='infoImgtwo' src='https://velog.velcdn.com/images/yonghk423/post/7e77b4db-caea-4b0f-8c4b-1bc123e2fdf7/image.gif' alt=''></img>
      <h2>사진 세부 정보 확인, 즐겨찾기 추가, 글 작성 및 삭제</h2>
      <img className='detailPageOne' src='https://velog.velcdn.com/images/yonghk423/post/36e6f313-4308-4d99-a1ae-4a4df30a061d/image.gif' alt=''></img>
      <img className='detailPageTwo' src='https://velog.velcdn.com/images/yonghk423/post/baa1dfbf-4377-48e2-b72c-7eee2541cd11/image.gif' alt=''></img>
      <img className='detailPageThr' src='https://velog.velcdn.com/images/yonghk423/post/85abb4eb-ca01-4b5d-af30-5e771c0f88a3/image.gif' alt=''></img>
      <h2>즐겨찾기 목록 삭제 및 모달창(글 작성 및 삭제)</h2>
      <img className='cartModalImgOne' src='https://velog.velcdn.com/images/yonghk423/post/b6317179-15b7-44a5-9dc8-fd0228adf7c5/image.gif' alt=''></img>
      <img className='cartModalImgTwo' src='https://velog.velcdn.com/images/yonghk423/post/63285b02-b660-4236-9975-f51951ac4d94/image.gif' alt=''></img>
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
  )
  
  };


export default App;

