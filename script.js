// DOM 요소들
const button = document.getElementById('infiniteButton');
const baboContainer =
    document.getElementById('baboContainer');

let btnPosition = { top: '50%', left: '50%' }; // 버튼 위치 초기화

// 클릭 시 호출될 함수
const handleClick = () => {
    // 새로운 이미지 요소 생성
    const baboImage = document.createElement('img');
    baboImage.classList.add('babo'); // 클래스 추가 (스타일링을 원하면 CSS에서 .babo를 설정)
    baboImage.src = './hotteok.png'; // 호떡 이미지 경로
    baboImage.alt = 'Hotteok'; // 이미지 설명
    baboImage.style.position = 'absolute'; // 이미지를 절대 위치로 설정
    baboImage.style.top = btnPosition.top;
    baboImage.style.left = btnPosition.left;

    // baboContainer에 이미지 추가
    baboContainer.appendChild(baboImage);

    // 버튼 위치를 랜덤으로 변경
    const randomTop = Math.random() * 80 + 10; // 10% ~ 90% 사이
    const randomLeft = Math.random() * 80 + 10; // 10% ~ 90% 사이

    btnPosition = {
        top: `${randomTop}%`,
        left: `${randomLeft}%`,
    };

    // 버튼 위치 업데이트
    button.style.top = btnPosition.top;
    button.style.left = btnPosition.left;
};

// 버튼 클릭 이벤트 리스너
button.addEventListener('click', handleClick);
