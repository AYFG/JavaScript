//버튼을 누르면 랜덤으로 음식이름이 나오는 기능 구현하기
function ChatFoodAI(foodArr) {
  this.menu = foodArr;
  this.saymenu = function () {
    const randomIndex = parseInt(Math.random() * foodArr.length);
    console.log(`${foodArr[randomIndex]}`);
  };
}
const 랜덤한식 = new ChatFoodAI(["test1", "test2", "test3"]);
const 한식 = document.querySelector(".ko");
한식.addEventListener("click", function () {
  console.log(랜덤한식.saymenu());
});
const 중식 = new ChatFoodAI(["test1", "test2"]);
const 일식 = new ChatFoodAI(["test1", "test2"]);
const 양식 = new ChatFoodAI(["test1", "test2"]);
