
   // Récupération des éléments HTML, exemple
   const historique = document.getElementById('historique');
   const transfert = document.getElementById('transfert');
   const situationFamille = document.getElementById('situationFamille');
   const buts = document.getElementById('buts');
   const content = document.getElementById('content');
   const videoContainer = document.getElementById('video-container');

  // Gestion des événements de clic sur les boutons
historique.addEventListener('click', () => {
    content.innerHTML = crInfo.historique;
    videoContainer.innerHTML = `
        <video controls style="width: 100%;height: 80%; object-fit: cover;">
            <source src="videos/cr7histoire.mp4" type="video/mp4">
            Votre navigateur ne prend pas en charge la lecture de vidéos.
        </video>
    `;
    hideCr7Content();
});

transfert.addEventListener('click', () => {
    content.innerHTML = crInfo.transfert;
    videoContainer.innerHTML = `
        <video controls style="width: 100%;height: 80%; object-fit: cover;" >
            <source src="videos/cr7transfert.mp4" type="video/mp4">
            Votre navigateur ne prend pas en charge la lecture de vidéos.
        </video>
    `;
    hideCr7Content();
});

situationFamille.addEventListener('click', () => {
    content.innerHTML = crInfo.situationFamille;
    videoContainer.innerHTML = `
        <video controls style="width: 100%;height: 80%; object-fit: cover;">
            <source src="videos/cr7famille.mp4" type="video/mp4">
            Votre navigateur ne prend pas en charge la lecture de vidéos.
        </video>
    `;
    hideCr7Content();
});

buts.addEventListener('click', () => {
    content.innerHTML = crInfo.buts;
    videoContainer.innerHTML = ` 
        <video controls style="width: 100%;height: 80%; object-fit: cover;">
            <source src="videos/cr7buts.mp4" type="video/mp4">
            Votre navigateur ne prend pas en charge la lecture de vidéos.
        </video>
    `;
    hideCr7Content();
});


   const crInfo = {
    historique: `<h2 style ="margin-bottom:10px; margin-left:10px">Historique de Cristiano Ronaldo</h2>
                <p style ="text-align:start; margin-left:10px">Cristiano Ronaldo dos Santos Aveiro est un footballeur portugais né le 5 février 1985 à Funchal (Madère). Il évolue au poste d'attaquant. Considéré comme l'un des meilleurs joueurs de tous les temps, il a remporté de nombreux trophées avec le Real Madrid et la Juventus.</p>`,
    transfert: `<h2 style ="margin-bottom:10px; margin-left:10px">Transferts de Cristiano Ronaldo</h2>
                <p style ="text-align:start; margin-left:10px" >Cristiano Ronaldo a joué pour plusieurs clubs au cours de sa carrière :
                <ul>
                    <li>Sporting CP (2002-2003)</li>
                    <li>Manchester United (2003-2009)</li>
                    <li>Real Madrid (2009-2018)</li>
                    <li>Juventus (2018-2021)</li>
                    <li>Manchester United (2021-présent)</li>
                </ul>
                Il a notamment rejoint le Real Madrid en 2009 pour un montant record de 94 millions d'euros.</p>`,
    situationFamille: `<h2 style ="margin-bottom:10px; margin-left:10px">Situation familiale de Cristiano Ronaldo</h2>
                    <p style ="text-align:start; margin-left:10px">Cristiano Ronaldo est en couple avec Georgina Rodríguez depuis 2016. Ils ont ensemble quatre enfants :
                    <ul>
                        <li>Cristiano Ronaldo Jr. (né en 2010)</li>
                        <li>Alana Martina (née en 2017)</li>
                        <li>Twins Eva et Mateo (nés en 2017)</li>
                    </ul>
                    Ronaldo a également deux autres enfants nés par mère porteuse : Alana Martina (née en 2017) et Cristiano Ronaldo Jr. (né en 2010).</p>`,
    buts: `<h2 style ="margin-bottom:10px; margin-left:10px">Buts marqués par Cristiano Ronaldo</h2>
          <p style ="text-align:start; margin-left:10px" >Cristiano Ronaldo est l'un des meilleurs buteurs de l'histoire du football. Voici quelques statistiques sur ses buts :</p>
          <ul>
              <li>Total de buts marqués : 819</li>
              <li>Buts marqués en club : 701</li>
              <li>Buts marqués en équipe nationale du Portugal : 118</li>
              <li>Meilleur buteur de l'histoire de la Liga espagnole avec 311 buts</li>
              <li>Meilleur buteur de l'histoire de la Ligue des Champions avec 140 buts</li>
          </ul>
          <p style ="text-align:start; margin-left:10px">Ronaldo a également remporté 5 Ballons d'Or, récompensant le meilleur joueur de l'année.</p>`
};




// Sélectionner les éléments à afficher/masquer
const cr7Image = document.getElementById('cr7-image');
const cr7Description = document.getElementById('cr7-description');


// Fonction pour masquer la photo et la description de Cristiano Ronaldo et afficher les autres éléments
function hideCr7Content() {
    cr7Image.style.display = 'none';
    cr7Description.style.display = 'none';
    buttonsInfo.forEach(el => el.style.display = 'block');
    videoContainer.style.display = 'block';
}

// Fonction pour afficher la photo et la description de Cristiano Ronaldo et masquer les autres éléments
function showCr7Content() {
    cr7Image.style.display = 'block';
    cr7Description.style.display = 'block';
    buttonsInfo.forEach(el => el.style.display = 'none');
    videoContainer.style.display = 'none';
}

// Appeler la fonction showCr7Content() dès le chargement de la page
window.addEventListener('DOMContentLoaded', showCr7Content);

// Vérifier si on est sur la page "infosCristiano.html"
if (window.location.pathname.includes('infosCristiano.html')) {
    showCr7Content();
} else {
    hideCr7Content();
}

// Ajouter les écouteurs d'événements pour les boutons
document.querySelectorAll('.buttonsInfo button').forEach(btn => btn.addEventListener('click', hideCr7Content));
//messi
