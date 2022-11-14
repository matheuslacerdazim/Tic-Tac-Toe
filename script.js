let jogador = "X";
let estadoDoJogo = true;
const sJogadorDaVez = document.getElementById('sJogadorDaVez');
let exibirVencedor = document.getElementById("exibirVencedor");
let jogadorVencedor = "";


function selecionarCasa(event, numCasa){
  const tile = event.target;  
  //alert(`casa: ${numCasa}`);  
  if(tile.innerText !== ""){
  console.log("invalid");
  return;}  
  tile.innerText = jogador;  
  trocarTurno(tile);  
  vitoria();  
}


function trocarTurno(){
    if (jogador === "X") {
    jogador = "O"; 
    sJogadorDaVez.innerText = jogador}    
    else {jogador = "X";
    sJogadorDaVez.innerText = jogador}
}


function vitoria() {
  let vencedor = false;
    if (tile1.innerText === "X" && tile2.innerText === "X" && tile3.innerText === "X") {
    alert (`Jogador X venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>X</span>"
    jogadorVencedor = "X";
  } else if (tile4.innerText === "X" && tile5.innerText === "X" && tile6.innerText === "X") {
    alert(`Jogador X venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>X</span>"
    jogadorVencedor = "X";
  } else if (tile7.innerText === "X" && tile8.innerText === "X" && tile9.innerText === "X") {
    alert(`Jogador X venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>X</span>"
    jogadorVencedor = "X";
  } else if (tile1.innerText === "O" && tile2.innerText === "O" && tile3.innerText === "O") {
    alert (`Jogador O venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>O</span>"
    jogadorVencedor = "0";
  } else if (tile4.innerText === "O" && tile5.innerText === "O" && tile6.innerText === "O") {
    alert (`Jogador O venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>0</span>"
    jogadorVencedor = "0";
  } else if (tile7.innerText === "O" && tile8.innerText === "O" && tile9.innerText === "O") {
    alert (`Jogador O venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>0</span>"
    jogadorVencedor = "0";
    } else if (tile1.innerText === "X" && tile4.innerText === "X" && tile7.innerText === "X") {
    alert(`O jogador X venceu!`);
    estadoDoJogo = false;
    exibirVencedor.innerHTML = "<span>X</span>"
    jogadorVencedor = "X";
  } else if (tile2.innerText === "X" && tile5.innerText === "X" && tile8.innerText === "X") {
    jogadorVencedor = "X";
    alert(`O jogador X venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>X</span>"
    jogadorVencedor = "X";
  } else if (tile3.innerText === "X" && tile6.innerText === "X" && tile9.innerText === "X") {
    alert(`O jogador X venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>X</span>"
    jogadorVencedor = "X";
  } else if (tile1.innerText === "O" && tile4.innerText === "O" && tile7.innerText === "O") {
    alert(`O jogador 0 venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>0</span>"
    jogadorVencedor = "0";
  } else if (tile2.innerText === "O" && tile5.innerText === "O" && tile8.innerText === "O") {
    alert(`O jogador 0 venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>0</span>"
    jogadorVencedor = "0";
  } else if (tile3.innerText === "O" && tile6.innerText === "O" && tile9.innerText === "O") {
    alert(`O jogador 0 venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>0</span>"
    jogadorVencedor = "0";
  }
    else if (tile1.innerText === "X" && tile5.innerText === "X" && tile9.innerText === "X") {
    alert(`O jogador X venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>X</span>"
    jogadorVencedor = "X";
  } else if (tile3.innerText === "X" && tile5.innerText === "X" && tile7.innerText === "X") {
    alert(`O jogador X venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>X</span>"
    jogadorVencedor = "X";
  } else if (tile1.innerText === "O" && tile5.innerText === "O" && tile9.innerText === "O") {
    alert(`O jogador 0 venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>0</span>"
    jogadorVencedor = "0";
  } else if (tile3.innerText === "O" && tile5.innerText === "O" && tile7.innerText === "O") {
    alert(`O jogador O venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>0</span>"
    jogadorVencedor = "0";
  } 
  


}