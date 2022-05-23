// querySelector 이용 -> 원하는 요소 가져오기!
const content = document.querySelector("div.content h1");

function handleContentClick() {
    content.style.color = "orange";
}
content.addEventListener("click", handleContentClick);