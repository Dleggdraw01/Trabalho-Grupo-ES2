import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";


const teclado = prompt();

console.log('Criação de veículo');
const carro: Veiculo = criaVeiculo();

while(true){
    console.log("########### MENU ###########");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Imprimir dados do veículo");
    console.log("0 - Sair");

    const opcao = +teclado('Escolha uma opção: ');
    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            acelerar(carro);
            break;
        case 2:
            frear(carro)
        case 3:
            subirMarcha(carro)
        case 4:
            descerMarcha(carro)
        case 5:
            imprimirDados(carro)
        case 0:
            break
        default:
            break;
    }
}

console.table(carro);

function acelerar(veiculo: Veiculo): void{
    if(veiculo.marchaAtual != 0){
    veiculo.velocidade += veiculo.potencia*0.1;
    console.log(veiculo.velocidade);
}}
function frear(veiculo:Veiculo): void{
    if(veiculo.marchaAtual != 0){
        veiculo.velocidade -= veiculo.potencia*0
        console.log(veiculo.velocidade)

    }

}

function imprimirDados(veiculo: Veiculo): void {
    console.log("===== Dados do Veículo =====");
    console.log(`Marca: ${veiculo.marca}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Potência: ${veiculo.potencia} cv`);
    console.log(`Número de marchas: ${veiculo.numeroMarchas}`);
    console.log(`Marcha atual: ${veiculo.marchaAtual}`);
    console.log(`Velocidade: ${veiculo.velocidade.toFixed(2)} km/h`);
    console.log("============================");
}

function criaVeiculo(): Veiculo{
    const veiculo: Veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    return veiculo;
}

<<<<<<< HEAD


=======
console.log("Veículo fabricado com Sucesso!")
>>>>>>> 775569c837f98e779d8b79a5f7b3d3812a9e2098
