# github 

## gh-pages기능활용하여 개인 페이지 만들기

- https://github.com 페이지에서 새로운 repository를 생성
- 생성할 repository의 이름은 편한이름으로 작성(프로젝트의 이름)
- 생성된 repository에 브랜치를 생성 / 변경( **gh-pages** )
- setting 페이지로 이동 **branch** 탭메뉴로 이동하여, 기본 branch를 `gh-pages`로 설정 및 `update`버튼 클릭
- 생성된 브랜치(gh-pages)로 설정이되면 개인페이지 구축이 완료

---

### 주소확인방법: 해당 repository 에서 setting페이지로 이동

하단 **GitHub Pages** 항목에서 <br />
연두색(반드시 연두색으로 되어있어야함)으로 처리된 주소부분이 실제 웹페이지 주소

이제 개인페이지가 생성되었으므로, git을 통해 자료를 올려 확인

---

## 깃명령어 재확인

- `git clone 서버주소`   : 사용할 서버(git계정)주소의 내용을 컴퓨터로 복사
- `git status` : 깃 폴더 상태 확인
- `git add 작성내용` : 깃에 올릴 자료 첨부
- `git commit -m "내용작성"` : 첨부할 내용 작성
- `git push` : 깃 서버에 올리기

---

### 깃 추가 명령어 익히기

- `git branch` : 현재 사용하고 있는 브랜치 확인명령어(*표기로 되어진 브랜치가 현재 브랜치)
- `git checkout 사용할브랜치`: 현재 브랜치에서 사용할 브랜치로 이동