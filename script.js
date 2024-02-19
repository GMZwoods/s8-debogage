function Jeu(maxEssais) {
    this.nombre = Math.ceil(Math.random()*100);
    this.nbEssais = 0;
    this.maxEssais = 0;
}

for (let i = 1; i <= 100; i++) {
    const nombre = document.createElement("div");
    nombre.classList.add("nombre");
    nombre.textContent = i;
    $(".nombres").append(nombre);}

let jeu = new Jeu(10);

function essai() {
    const essai = parseInt($('#essai').val());


    if (essai > 100 || essai < 1 ){
        $('#message').text(`Vous devez entrer un chiffre de 1 à 100`).addClass('erreur')
        Reessayer();
    }
    if(essai === jeu.nombre) {
        jeu.nbEssais++;
        $('#message').text("Bravo !").addClass('success');
        fin();
    }
    else {
        const message = essai > jeu.nombre ? "Le nombre est trop haut" : "Le nombre est trop bas;";

        if(jeu.nbEssais === jeu.maxEssais) {
            fin();
        }

        else if(essai < jeu.nombre){
            jeu.nbEssais++;
            $('.nombre').filter((index, element)=>parseInt(element.id,1) < jeu.nombre).addClass('cache');
        }
        else {
            jeu.nbEssais++;
            $('.nombre').filter((element)=>parseInt($(element).attr('id'),1) > jeu.nombre).addClass('cache');
        }
        $('#message').text(`Ah non (JO_O)J  ${message}`).addClass('erreur');
    }
}
function Reessayer()
{
    essai()
}

function fin(){

    $('#essais').html('<button onclick="nouveauJeu()">Jouer une nouvelle partie</button>')


}

function nouveauJeu() {
    jeu = new Jeu();
    $('#essais button').remove();
    $('#essai').val(0);
    $('#essais p').first().text('');
    $('#message').text().removeClass('success');
}
