
//no funcion
function generarTaula(){
    let taula = document.createElement('table');
    //let taulaBody = document.createElement("tbody");
    console.log(taula);

    for (let i = 0; i < this.mida; i++) {
        //let fila = document.createElement('tr')
        let fila2 = taula.insertRow();
        for (let j = 0; j < this.mida; j++) {
            let cell2 = fila2.insertCell();
            cell2.appendChild(document.createTextNode('🐰'));
            cell2.style.border = '1px solid';
            /* let cell = document.createElement('td');
            let content = document.createTextNode('🐰');
            cell.appendChild(content);
            fila.appendChild(cell); */
        }
       // taulaBody.appendChild(fila);
    }
    document.getElementById('taula1').appendChild(taula);
   /*  taula.appendChild(taulaBody);
    taula.setAttribute('border', '2');
    document.getElementById('taula1').appendChild(taula); */
}