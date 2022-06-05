# 음악검색 (개인과제)


# 🚀 배포




# 📝 진행 과정

1일) 과제 주제선정, 레이아웃

2일) 데이터 정제, 리팩토링, CSS 수정, 배포, README 작성


# 🔧 기술 스택

- Typescript
- React
- Redux-toolkit
- Axios
- SCSS

## 폴더 구조


```sh
 📦src
 ┣ 📂assets
 ┃ ┗ 📂svgs  # SVG 아이콘 모아놓은 폴더
 ┣ 📂components # 컴포넌트를 모아놓은 폴더
 ┃ ┗ 📂layout # 레이아웃 폴더
 ┣ 📂hooks # redux dispatch, selector를 위한 hook
 ┣ 📂routes # 페이지별로 렌더링 화면을 보는 폴더
 ┃ ┣ 📂home # 홈 화면을 보여주는 컴포넌트가 모인 폴더
 ┃ ┣ 📂playlist # 플레이리스트를 보여주는 컴포넌트 폴더
 ┃ ┣ 📂search # 음악검색을 위한 화면을 보여주는 폴더
 ┣ 📂services  # 데이터 불러오는 컴포넌트
 ┣ 📂states # 상태관리 리덕스 설정을 위한 slice, store, ts 등의 파일이 있는 폴더
 ┣ 📂styles # CSS 스타일을 위한 폴더
 ┗ 📂utils
```

# 📌 실행 방법

## 1. 설치
```
git clone https://github.com/wsdx123/personal-assignment.git
```
```
yarn install && yarn start
``` 

## 2. 화면 구성
  - 홈 화면
  - 음악 검색 화면
  

# 💡 구현 내용

## 1. Open Api 활용
last.fm 이라는 open api를 활용하여 검색 키워드에 따른 아티스트, 노래 제목, title 이미지를 redux로 상태관리를 하여 화면에 띄워주었습니다.

#  ✏️ 어려웠던 점

## 1. 아이디어 생각하는것의 어려움

어떤 주제를 해야할지 정말 많은 고민을 했었고, 주어진 시간을 고려하지 못한 어려운 주제를 선정했다가 뒤엎고 뒤늦게 프로젝트를 시작하게 되었습니다. 

즉 본인의 수준과 주제파악을 제대로 하지 못해 결국 원하는 수준만큼 구현하지 못한 미완성의 결과물을 내게 되었습니다.

## 2. open api 선정의 어려움

음악 검색을 위한 open api를 선정하는데도 시간이 소요되었습니다. 처음에 ManiaDb 라는 api를 사용했지만, 검색어를 입력해 불러오기 굉장히 애로사항이 있다는 것을 깨달았고, 결국 last.fm api로 급 선회하여 만들기 시작했습니다. 

하지만 이 last.fm api는 title 이미지를 지원하지 않는것을 발견했고, 퀄리티에 또한 타격을 주게 된것 같습니다.
