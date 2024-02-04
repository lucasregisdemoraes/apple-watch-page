const nameSelectedColor = document.getElementById('nome-cor-selecionada');
const productTitle = document.getElementById('titulo-produto');
const imgTag = document.getElementById('imagem-visualizacao');
const imageOption0 = document.getElementById('0-imagem-miniatura');
const imageOption1 = document.getElementById('1-imagem-miniatura');
const imageOption2 = document.getElementById('2-imagem-miniatura');

const verdeCipreste = {
    name: 'Verde-cipreste',
    imagesFolderName: 'imagens-verde-cipreste',
};
const azulInverno = {
    name: 'Azul-inverno',
    imagesFolderName: 'imagens-azul-inverno',
};
const meiaNoite = {
    name: 'Meia-noite',
    imagesFolderName: 'imagens-meia-noite',
    emEstoque: false,
};
const estelar = {
    name: 'Estelar',
    imagesFolderName: 'imagens-estelar',
};
const rosaClaro = {
    name: 'Rosa-claro',
    imagesFolderName: 'imagens-rosa-claro',
};

const colorOptions = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];

const sizeOptions = ['41 mm', '45 mm'];

let selectedColor = 1;
let selectedSize = 1;
let selectedImage = 1;

function changeImage() {
    const selectedOptionId = document.querySelector("[name='opcao-imagem']:checked").id
    selectedImage = selectedOptionId.charAt(0)
    const color = colorOptions[selectedColor].name.toLowerCase()

    imgTag.src = `./imagens/opcoes-cores/imagens-${color}/imagem-${selectedImage}.jpeg`
}

function changeSize() {
    const selectedOptionId = document.querySelector("[name='opcao-tamanho']:checked").id
    selectedSize = selectedOptionId.charAt(0)
    const size = sizeOptions[selectedSize]
    const color = colorOptions[selectedColor].name.toLowerCase()

    productTitle.innerText = `Pulseira loop esportiva ${color} para caixa de ${size}`
    size === "41 mm"
        ?
        imgTag.classList.add("caixa-pequena")
        :
        imgTag.classList.remove("caixa-pequena")
}

function changeColor() {
    const selectedOptionId = document.querySelector("[name='opcao-cor']:checked").id
    selectedColor = selectedOptionId.charAt(0)
    const size = sizeOptions[selectedSize]
    const color = colorOptions[selectedColor].name.toLowerCase()

    productTitle.innerText = `Pulseira loop esportiva ${color} para caixa de ${size}`
    nameSelectedColor.innerText = `Cor - ${colorOptions[selectedColor].name}`

    imgTag.src = `./imagens/opcoes-cores/imagens-${color}/imagem-${selectedImage}.jpeg`
    imageOption0.src = `./imagens/opcoes-cores/imagens-${color}/imagem-0.jpeg`
    imageOption1.src = `./imagens/opcoes-cores/imagens-${color}/imagem-1.jpeg`
    imageOption2.src = `./imagens/opcoes-cores/imagens-${color}/imagem-2.jpeg`
}