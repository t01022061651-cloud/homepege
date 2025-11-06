# 김선엽 (Sun Yeop Kim) - Portfolio Website

행정학 연구자 김선엽의 포트폴리오 웹사이트입니다.

## 🌐 Website
https://[your-github-username].github.io

## 📋 Features

- **반응형 디자인**: 모바일, 태블릿, 데스크탑 모든 기기에서 최적화
- **모던한 파스텔톤 디자인**: 부드럽고 세련된 색상 구성
- **AOS 애니메이션**: 스크롤 시 부드러운 애니메이션 효과
- **Skills 섹션**: 역량과 수준을 시각적으로 표현
- **이메일 복사 기능**: 클릭 한 번으로 이메일 주소 복사
- **SEO 최적화**: 검색 엔진 최적화 메타 태그 포함

## 📁 섹션 구성

1. **Home**: 소개 및 간단한 프로필
2. **Skills**: 연구, 데이터 분석, 작성, 소프트웨어 역량
3. **Research**: 수상 내역 및 연구 논문
4. **Projects**: 연구 프로젝트 타임라인
5. **Contact**: 이메일 및 연락처 정보

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
`index.html` 파일에서 이메일 주소 변경:
```html
<p class="contact-email">sunyeop.kim@example.com</p>
```

### Skills 수정
`index.html` 파일의 Skills 섹션에서 역량 및 수준 수정:
```html
<div class="skill-item">
    <div class="skill-header">
        <span class="skill-name">역량 이름</span>
        <span class="skill-level">90%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="90"></div>
    </div>
</div>
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

## 📧 Contact 섹션

이제 Contact 섹션은 이메일 주소를 표시하고 클릭 시 복사할 수 있는 기능을 제공합니다.
- 이메일 클릭 시 자동 복사
- 복사 버튼으로 클립보드에 저장
- 추가 연락처 정보 표시

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