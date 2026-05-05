let saldo = 500;

while (saldo > 0) {
    let saque = +prompt("Saldo: " + saldo + ". Quanto quer sacar?");

    if (saque > saldo) {
        alert("Saldo insuficiente!");
    } else {
        saldo = saldo - saque;
        alert("Saque feito! Resta: " + saldo);
    }
}

alert("Saldo zerado!");