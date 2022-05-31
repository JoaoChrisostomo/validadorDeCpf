function validationCpf(cpf) {
  console.log(cpf.length)
  if (cpf.length != 11) {
    return false
  } else {
    let numbers = cpf.substring(0, 9)
    let digitos = cpf.substring(9)

    let soma = 0

    for (let i = 10; i > 1; i--) {
      soma += numbers.charAt(10 - i) * i
    }

    let result = soma % 11 < 2 ? 0 : 11 - (soma % 11)
    //validando primeiro digito
    if (result != digitos.charAt(0)) {
      return false
    }

    soma = 0
    numbers = cpf.substring(0, 10)

    for (let k = 11; k > 1; k--) {
      soma += numbers.charAt(11 - k) * k
    }

    result = soma % 11 < 2 ? 0 : 11 - (soma % 11)

    if (result != digitos.charAt(1)) {
      return false
    }

    console.log(
      digitos.toString().charAt(0) + ' é a primeira posição da variável soma'
    )

    return true
  }
}

function validation() {
  console.log('iniciando validação cpf')
  document.getElementById('success').style.display = 'none'
  document.getElementById('error').style.display = 'none'

  let cpf = document.getElementById('cpf_digitado').value
  let resultValidation = validationCpf(cpf)
  console.log(cpf)

  if (resultValidation == true) {
    document.getElementById('success').style.display = 'block'
  } else {
    document.getElementById('error').style.display = 'block'
  }
}
