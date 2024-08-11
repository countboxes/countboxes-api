function validateCPF(cpf) {
    // Verifica se o CPF contém exatamente 11 dígitos e não é uma sequência repetitiva
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    cpf = cpf.replace(/[^\d]/g, ''); // Remove qualquer caractere que não seja número
    console.log(cpf)


    // Verifica se o CPF contém apenas números (deve ser redundante após o replace, mas é uma verificação adicional)
    if (!/^\d{11}$/.test(cpf)) {
        return false;
    }

    let soma = 0;
    let resto;

    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.substring(i, i + 1)) * (10 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;

    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.substring(i, i + 1)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;

    return resto === parseInt(cpf.substring(10, 11));
}

console.log(validateCPF('436.832.b150-67')) // true
console.log("blabla")