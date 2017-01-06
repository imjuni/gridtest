React Skeleton reactskel
------------------------

# 소개
React로 개발 프로젝트를 진행하면서, 이런저런 테스트를 진행해보거나 간단한 토이 프로젝트를 진행하거나 할 때 잘 짜여진 scaffolding이 있으면 편리할 것 같다는 생각을 했다. react-boilerplate나 react-starter-kit과 같은 프로젝트가 있지만 복잡하고 쓰기가 어려워서 내 수준에 맞는 기본 프로젝트가 있으면 좋겠다 싶어서 만들었다.

# 특징
* 선택지가 없다. 내가 프로젝트를 하면서 정말 이정도는 기본 중에 기본이라서 무조건 있어야 한다는 것을 포함시켰기 때문에 다른 예외나 선택지가 있을리 만무하다.
* 서버 계층이 없다. Java, Scala, Go, PHP, Node.js 등 좋아하는 언어도 다를 것이고 서버 프레임워크도 다를 것이므로 최대한 Frontend와 Backend를 분리해서 개발할 수 있도록 순수 Frontend 계층만 프로젝트로 만들었다.
* NotoSans를 포함시켰다. 우리도 이제 Wrapstrap에서 많은 프로젝트처럼 아름다운 영문폰트를 멋대로 포함하고, 이 것만 써라는 것처럼 나는 NotoSans를 포함시켰다. 내가 생각하기에 발전하는 한글 폰트 중에 NotoSans는 가장 독보적인 위치에 있다.

# 포함된 것들
* Javascript
  * Stack
    * React
      * react-router
      * redux, react-redux
  * Syntax
    * ES6
    * Babel
  * Module Bundler
    * Webpack
  * Task Runner
    * Gulp
  * Lint
    * eslint
    * Airbnb: ES6, React
  * Test
    * Karma
      * Mocha
      * Chai
      * Enzyme, Sinon
* CSS
  * SASS
* HTML

# 명령어 모음
* npm run webpack
  * webpack 실행
* npm run front, npm run frontend
  * webpack-dev-server 실행
* npm run lint, npm run gulp-lint
  * execute eslint
* npm run gulp
  * gulp 실행
* npm run gulp-watch
  * gulp watch 실행
* npm run gulp-webpack
  * gulp webpack 실행: webpack 빌드 결과물을 생성한다
* npm run karma
  * karma 실행
* npm run karma-start
  * karma server 시작
* npm run test, npm run karma-test
  * karma 테스트 수행
  
# Recommend
  * If you want ui-framework, use below
    * 