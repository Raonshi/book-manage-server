# book-manage-server

# Firebase

# Git
**Git은 개발자로 취업하려면 반드시 알아야함.**

**여기 적힌 내용은 정말 간략하게 작성한거라 정확하게 이해하려면 구글이나 유튜브에서 git 강의를 듣는게 빠름**

### Git 사용방법
- https://git-scm.com/downloads 링크 접속해서 자신의 운영체제에 맞는 git 설치
- 설치 과정에서 따로 건드릴건 없음. 그냥 다음버튼 쭉 누르고 설치하면됨
- 설치가 끝나면 운영체제 cli 실행
  - 윈도우 : PowerShell / CMD
  - 맥 또는 리눅스 계열 : terminal
- 프로젝트 폴더로 이동 (각 운영체제 cli명령어는 구글링하면 바로 나옴)
- 프로젝트 폴더에서 git clone https://github.com/Raonshi/book-manage-server.git 입력
- 그러면 프로젝트 폴더에 git 프로젝트 다운받아짐

### Git 주요 명령어
- git branch <branch-name> : <branch-name>을 이름으로 하는 브랜치를 만든다. <branch-name>이 비어있으면 현재 브랜치 목록을 보여준다.
- git checkout <branch-name> : <brnach-name>으로 이동한다.
- git add : 커밋할 파일을 지정한다. 보통 "git add ."으로 많이 사용한다.
- git restore <file-path> : <file-path>에 해당하는 파일을 수정 전 상태로 되돌린다. 이미 커밋된 내용은 되돌려지지 않는다.
- git pull : git repository에 있는 최신 변경사항을 받아온다. 현업에서는 프로젝트의 충돌을 방지하기 위해 git pull --rebase origin <branch-name>으로 많이 사용한다.
- git push : git repository에 내가 커밋한 내용을 업로드한다.
- git commit : 커밋 명령어. 내가 수정한 작업 내용을 저장한다.
