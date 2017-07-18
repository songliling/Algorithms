/*
* 场景：小A和小B两位小朋友玩纸牌游戏
* 规则：小A 小B每次出一摞牌最下面的一张，如果桌子上有此次出的牌，则将出现此两张相同牌之间的牌和此两张牌拿走放到赢牌
* 同学的纸牌上面，继续。
* */

const arrA = [1,2,4,7,9,4,1,5];

const arrB = [5,5,7,8,3,2,1,6];


function game(arrA, arrB) {
  //桌子上的牌
  const Table = [];
  while (arrA.length && arrB.length) {
    if(arrA.length === 0) break;
    //A玩家出的牌
    let playA = arrA.shift();
    //判断是否A出的牌在桌子上是否存在
    if(Table.indexOf(playA) !== -1) {
      let i = Table.indexOf(playA);
      //玩家A赢得牌，在加上自己出的牌
      let winA = Table.splice(i);
      arrA = arrA.concat(winA,playA);
    } else {
      //否则将A出的牌放到桌子上
      Table.push(playA);
    }
    if(arrB.length ===0) break;
    let playB = arrB.shift();
    if(Table.indexOf(playB) !== -1) {
      let i = Table.indexOf(playB);
      let winB = Table.splice(i);
      arrB = arrB.concat(winB,playB);
    } else {
      Table.push(playB);
    }
  }
  console.log(arrA);
  console.log(arrB);
  console.log(Table);
}

game(arrA,arrB)

