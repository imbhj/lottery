# 정말 너무 잘하셨습니다.

피드백 : 
1. 서버를 이용하신 것도 너무 칭찬할 점입니다.
2. server.js에 `app = express();` 에 const 및 let 예약어가 빠졌습니다.  
3. package.json에 해당 프로젝트에 대한 설명이 빈약합니다.  
4. lotto.control.js에 `number = lotto.NumberLottery;` 에 const 예약어가 빠졌습니다.

더 나은 예시 => 

```js
  res.render('view.html', {
        number: lotto.NumberLottery
    });
```

5. github 커밋 메세지나 시점이 빈약한건 좀 아쉽습니다.