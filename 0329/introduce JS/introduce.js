let title = document.createElement('h1');
        title.className = 'title';
        title.textContent = '나를 소개합니다';

        let img = document.createElement('img');
        img.src = 'https://blog.kakaocdn.net/dn/bbAqmh/btsBzL1sJ0J/xSHfF4YvynYcXn5ldTm7N0/img.jpg';
        img.alt = '나';
        img.width = '150';

        let introText = document.createElement('h4');
        introText.innerHTML = '안녕하십니까 경성대학교 소프트웨어학과 22학번 조윤정입니다<br>현재 3학년에 재학중이며 python, C, C++, JAVA, HTML, CSS, JS를 배웠습니다<br>졸업과 동시에 취직하는것이 제 목표입니다<br>phone : 010-5882-6441<br>mail : kate031023@gmail.com';

        let introContainer = document.createElement('div');
        introContainer.className = 'intro-container';
        introContainer.appendChild(img);
        introContainer.appendChild(introText);

        document.body.appendChild(title);
        document.body.appendChild(introContainer);

        let style = document.createElement('style');
        style.innerHTML = `
          .intro-container {
             display: flex;
             align-items: center;
          }
          .intro-container img {
             margin-right: 80px;
             margin-left: 30px;
          }
         .title {
              margin-left: 30px;
         }
        `;
        document.head.appendChild(style);