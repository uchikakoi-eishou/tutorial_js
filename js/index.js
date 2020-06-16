// DOM取得
const division = document.getElementById("division");
const fullName = document.getElementById("name");
const anzen = document.getElementById("anzen");

const anzenHeader = document.getElementById("anzen_header");
const anzenMain = document.getElementById("anzen_main");

// 関数
function listAnzenHeader() {
    anzenHeader.innerHTML = "【  " + division.value + "  " + fullName.value + "  】";
}

// DOM操作
division.addEventListener("input", listAnzenHeader);
fullName.addEventListener("input", listAnzenHeader);

anzen.addEventListener("input", function() {
    const replaceAnzen = anzen.value.replace(/\n/g, '<br>');
    anzenMain.innerHTML = replaceAnzen;
});

