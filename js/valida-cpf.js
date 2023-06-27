//para exportar de maneira padrão 
export default function ehUmCpf(campo){
    const cpf = campo.value.replace(/\.|-/g, '')
    //o "/ tanana /g" tenta buscar de maneira global esses itens, para assim conseguir retirar com o replace
    if(validaNumerorepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)){
        console.log('esse cpf não existe')
    }else{
        console.log('existe!')
    }
}

function validaNumerorepetidos (){
    const numerosrepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    return numerosrepetidos.includes(cpf);
}

//função para validar primeiro digito do Cpf
function validaPrimeiroDigito(cpf){
    let soma = 0 
    let multiplicador = 10

    for(let tamanho = 0; tamanho < 9; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if( soma == 10 || soma == 11){
        soma = 0;
    }

    return soma != cpf[9]
}   

function validaSegundoDigito(cpf){
    let soma = 0 
    let multiplicador = 11

    for(let tamanho = 0; tamanho < 10; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if( soma == 10 || soma == 11){
        soma = 0;
    }

    return soma != cpf[10]
} 