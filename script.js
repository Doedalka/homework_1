const student = "Малеечев Максим Ильич";

document.getElementById("student").innerHTML = student;

let chislo1 = prompt("Введите реальный счёт первой команды");
let chislo2 = prompt("Введите реальный счёт второй команды");
let chislo1Q = prompt("Введите предполагаемый счёт первой команды");
let chislo2Q = prompt("Введите предполагаемый счёт второй команды");
if ((chislo1==chislo1Q) && (chislo2==chislo2Q)) {
alert ("ВЫ УГАДАЛИ СЧЕТ!!МОЛОДЕЦ!!");
}
else if (
(chislo1>chislo2) && (chislo1Q>chislo2Q)
||
(chislo1==chislo2) && (chislo1Q==chislo2Q)
||
(chislo1<chislo2) && (chislo1Q<chislo2Q)
) {
alert ("К сожалению,вы не угадали счет,но к счастью угадали исход!");
} else {
alert ("Вы ничего не угадали,не отчаивайтесь,повезет в следующий раз!");
}