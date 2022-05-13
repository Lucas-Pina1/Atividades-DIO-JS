class ContaBancaria {
  constructor(agencia, numero, tipo, saldo) {
    this.agencia = agencia
    this.numero = numero
    this.tipo = tipo
    this._saldo = 0
  }

  get saldo(){
    return this._saldo
  }

  set saldo(valor){
    this._saldo = valor
  }

  sacar(valor){
    if(valor > _saldo) {
      return "Operação negada"
    }
    this._saldo -= valor

    return _saldo
  }

  depositar(valor){
    this._saldo += valor

    return this._saldo
  }
}

class ContaCorrente extends ContaBancaria {
  construtor(agencia, numero, cartaoCredito) {
    super(agencia, numero, saldo)
    this.tipo = "corrente"
    this._cartaoCredito = cartaoCredito
  }

  get cartaoCredito() {
    return this_cartaoCredito
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor
  }
}
 
class ContaPoupanca extends ContaBancaria {
  construtor(agencia, numero) {
    super(agencia, numero, saldo)
    this.tipo = "poupanca"
  }
 }

class ContaUniversitaria extends ContaBancaria {
  construtor(agencia, numero) {
    super(agencia, numero, saldo)
    this.tipo = "universitaria"
  }

  sacar(valor) {
    if(valor > 500) {
      "Operacão negada!"
    }
    return _saldo -= valor
  }
}
