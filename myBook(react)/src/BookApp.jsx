// rafce -> 화살표함수  신텍스 제공 단축키
// 함수 - 객체 - 일급함수 - 고차함수 
import React from 'react'
// 선언부(변수, 함수)
const BookApp = () => {
    const a = 1;
    let b = 2;
const methodA = () => {
    console.log('methodA 호출');
}
// 리턴 아래가 화면을 그려주는 랜더링 부분
  return (
    < >
    <div style={{height : "100vh"}}>
      <routes>
        <route>
          
        </route>
      </routes>

    </div>
     <h2>도서관리시스템{`  ${a}, ${b}`}</h2>

    </>
  )
}

export default BookApp