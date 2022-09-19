/*Uma empresa irá dar 25% de aumento para todos os funcionários, 
você deverá desenvolver um script que leia o salário atual do 
funcionário. Após a leitura, calcule e mostre na própria
página o salário atual em uma linha e em outra linha o 
salário com o aumento de 25%.*/


let salario_atual
let salario_novo

//entrada
salario_atual = Number(prompt('Digite o seu salario atual: '))

//processamento
//salario_novo = salario_atual *1.25
salario_novo = salario_atual + ((salario_atual * 25)/100);

//saída
//alert("Salario Antigo: "+salario_atual +"\nSalario Novo: "+salario_novo)
alert(`Salario Antigo: ${salario_atual} \nSalario Atual: ${salario_novo}`)


