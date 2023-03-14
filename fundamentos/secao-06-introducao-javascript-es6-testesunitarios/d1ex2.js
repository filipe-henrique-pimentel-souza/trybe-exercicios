const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const endereco = Object.values(Object.values(order)[2]).reduce((a,b) => a += ` ${b}`)
  return (`Olá ${Object.values(Object.values(Object.values(order)[3])[2])[0]}, entrega para ${Object.values(order)[0]}, Telefone ${Object.values(order)[1]}, ${endereco}.`)
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const novosDados = {name: 'Luiz Silva', payment:{total:50}}
  Object.assign(order, novosDados)
  console.log(order)
console.log(`Olá ${Object.values(order)[0]}, o total do seu pedido de ${Object.values(Object.keys(Object.values(Object.values(order)[3])[0]))}, e ${Object.values(order['order']['drinks']['coke'])[0]} é R$${Object.values(order['payment'])},00.`)
};

orderModifier(order);
