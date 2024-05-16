function computerSelect() {
    let computer = Math.random();
    if(computer < 0.34) {
        return 'gunting';
    } else if(computer > 0.34 && computer < 0.67) {
        return 'batu';
    } else {
        return 'kertas';
    }
}

function getResult(player, comp) {
    if(player == comp) {
        return 'SERI';
    } else if(player == 'gunting') {
        if(comp == 'kertas') {
            return 'MENANG';
        } else {
            return 'KALAH';
        }
    } else if(player == 'batu') {
        if(comp == 'gunting') {
            return 'MENANG';
        } else {
            return 'KALAH';
        }
    } else if(player == 'kertas') {
        if(comp == 'batu') {
            return 'MENANG';
        } else {
            return 'KALAH';
        }
    }
}

const gunting = document.querySelector('.gunting');
const batu = document.querySelector('.batu');
const kertas = document.querySelector('.kertas');

gunting.addEventListener('click', function() {
    const player = gunting.className;
    const computerResult = computerSelect();
    const getHasil = getResult(player, computerResult);
    const computerPickImage = document.querySelector('.img-computer');
    const placeResult = document.querySelector('.result');
    console.log(player);
    console.log(computerResult);
    console.log(getHasil);
    
    computerPickImage.setAttribute('src', '../img/' + computerResult + '.png');
    placeResult.innerHTML = getHasil;
    });

batu.addEventListener('click', function() {
    const player = batu.className;
    const computerResult = computerSelect();
    const getHasil = getResult(player, computerResult);
    const computerPickImage = document.querySelector('.img-computer');
    const placeResult = document.querySelector('.result');
    console.log(player);
    console.log(computerResult);
    console.log(getHasil);

    computerPickImage.setAttribute('src', '../img/' + computerResult + '.png');
    placeResult.innerHTML = getHasil;
});

kertas.addEventListener('click', function() {
    const player = kertas.className;
    const computerResult = computerSelect();
    const getHasil = getResult(player, computerResult);
    const computerPickImage = document.querySelector('.img-computer');
    const placeResult = document.querySelector('.result');
    console.log(player);
    console.log(computerResult);
    console.log(getHasil);

    computerPickImage.setAttribute('src', '../img/' + computerResult + '.png');
    placeResult.innerHTML = getHasil;
});