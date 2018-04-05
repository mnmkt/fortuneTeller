(function(){
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function(){
    // Math.randomは0-1までの数字をランダムでだす
    let n = Math.random();
    if (n < 0.10){
      this.textContent = 'Super Lucky'; //10%の確率で大吉が出る
    }else if (n < 0.30){
      this.textContent = 'Lucky'; //20%
    }else if (n < 0.60){
      this.textContent = 'So-So Luckey'; //30%
    }else{
      this.textContent = 'Bad Day'; //40%
    }

    //配列のやり方
    // let results = ['大吉', '中吉', '凶', '末吉'];
    // var n = Math.floor(Math.random() * results.length);

    // this.textContent = results[n];

    //switchを使ったやり方
    // switch(n){
    //   case 0:
    //     this.textContent = '大吉';
    //     break;
    //   case 1:
    //     this.textContent = '中吉';
    //     break;
    //   case 2:
    //     this.textContent = '凶';
    //     break;
    // }

    //if statement
    // if(n===0){
    //   this.textContent = '大吉';
    // }else if (n ===1){
    //   this.textContent = '中吉';
    // }else{
    //   this.textContent = '凶';
    // }

  })

  //mouseが押されている時だけcssのクラスpushedを対応させる
  btn.addEventListener('mousedown', function(){
    this.className = 'pushed';
  })

  //mouseが離れている時にclassNameをからにする
  btn.addEventListener('mouseup', function(){
    this.className = '';
  })

})();
