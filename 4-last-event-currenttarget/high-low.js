const answer = Math.floor( Math.random() * 11 );

console.log("ボタンが押されたら回答者のボタンの値をもらう");

// console.log("ボタンが押されたら回答者のボタンの値をもらう");
// 宿題：ボタンを複数個おいて、それぞれのボタンがおされたときに、それぞれのメッセージを出力するようにする

function comparison (answer , guessNumber){
  if(guessNumber == answer){
    return "あたり！";
  }
  else if (guessNumber < answer){
    return "小さい";
  }
  else if (guessNumber > answer){
    return "大きい";
  }
}

// 画面に値の判定を表示させる
function display (result){
  const div = document.getElementById("result");
  div.innerHTML = result;
}

const btn = document.querySelectorAll("button");
btn.forEach((el) => {
  el.addEventListener('click', function (event) {
    console.log(event.currentTarget.value + "のボタンがクリックされました!")
  })
})
// answerの初期値をリセットする方法がわからん。



// console.log("判定する");

// (answer, )

// console.log("判定結果を受けて、表示する");

// console.log("bingoだったらstart againボタンを表示する");

// console.log("start againボタンが押されたら、はじめに戻る");