# 김선엽 (Sun Yeop Kim) - Portfolio Website

행정학 연구자 김선엽의 포트폴리오 웹사이트입니다.

## 🌐 Website
https://[your-github-username].github.io

## 📋 Features

- **반응형 디자인**: 모바일, 태블릿, 데스크탑 모든 기기에서 최적화
- **모던한 파스텔톤 디자인**: 부드럽고 세련된 색상 구성
- **AOS 애니메이션**: 스크롤 시 부드러운 애니메이션 효과
- **SEO 최적화**: 검색 엔진 최적화 메타 태그 포함

## 🚀 GitHub Pages 배포 방법

### 1. 새 저장소 생성
1. GitHub에 로그인
2. 새 저장소(Repository) 생성
   - Repository name: `[your-github-username].github.io` (개인 사이트) 
   - 또는 원하는 이름 (프로젝트 사이트)
   - Public으로 설정

### 2. 파일 업로드
```bash
# 저장소 클론
git clone https://github.com/[your-username]/[repository-name].git

# 파일 복사 후 커밋
git add .
git commit -m "Initial portfolio website"
git push origin main
```

### 3. GitHub Pages 활성화
1. 저장소 Settings 탭으로 이동
2. 왼쪽 메뉴에서 "Pages" 클릭
3. Source 섹션에서:
   - Source: "Deploy from a branch" 선택
   - Branch: "main" (또는 "master") 선택
   - Folder: "/ (root)" 선택
4. Save 클릭

### 4. 배포 확인
- 약 5-10분 후 `https://[your-username].github.io/[repository-name]`에서 확인
- 개인 사이트의 경우: `https://[your-username].github.io`

## 📁 파일 구조

```
/
├── index.html          # 메인 HTML 파일
├── style.css          # 스타일시트
├── script.js          # JavaScript 파일
└── README.md          # 프로젝트 설명서
```

## 🛠 커스터마이징

### 이메일 설정
`script.js` 파일의 Contact Form Handler 섹션에서 이메일 주소 변경:
```javascript
const mailtoLink = `mailto:your-email@example.com?subject=...`
```

### 색상 테마 변경
`style.css` 파일의 `:root` 섹션에서 색상 변경:
```css
:root {
    --primary-color: #B8A9E6;  /* 메인 색상 */
    --secondary-color: #FFB5BA; /* 보조 색상 */
    --accent-color: #A8D5BA;   /* 강조 색상 */
}
```

### 내용 수정
`index.html` 파일에서 각 섹션의 내용을 직접 수정 가능

## 📧 Contact Form 설정 옵션

GitHub Pages는 정적 호스팅이므로 서버 사이드 처리가 불가능합니다. 
Contact Form을 실제로 작동시키려면:

### Option 1: Formspree
1. [Formspree](https://formspree.io/) 가입
2. Form endpoint 생성
3. `index.html`의 form 태그 수정:
```html
<form action="https://formspree.io/f/[your-form-id]" method="POST">
```

### Option 2: Netlify Forms
1. Netlify로 배포 시 자동으로 form 처리 가능
2. Form 태그에 `netlify` 속성 추가:
```html
<form netlify>
```

### Option 3: EmailJS
1. [EmailJS](https://www.emailjs.com/) 가입
2. Service 설정 후 JavaScript로 이메일 전송

## 🔧 기술 스택

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (ES6+)
- AOS (Animate On Scroll)
- Font Awesome Icons
- Google Fonts

## 📝 라이선스

이 프로젝트는 개인 사용을 위해 제작되었습니다.

## 👤 Author

**김선엽 (Sun Yeop Kim)**
- 성균관대학교 국정전문대학원 박사과정
- 행정학 연구자

---

Made with ❤️ for academic portfolio