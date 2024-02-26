
    const jogadas = ["pedra", "papel","tesoura"];
    let ganhou = 0;
    let perdeu = 0;
    function jogar(jogausu){
        
        const jogasorte = Math.floor(Math.random()*3);
        const jogacomp = jogadas[jogasorte];
        

        if(jogacomp === jogausu){
            alert("Empatou! Você e o computador jogaram o mesmo");
        } else if( jogacomp === "pedra"){
            if(jogausu === "papel"){
                alert("Ganhou! O computador jogou pedra");
                ganhou = ganhou + 1;
            }
            else{
                alert("Perdeu :( O computador jogou pedra");
                perdeu = perdeu + 1;
            }
        } else if(jogacomp === "papel"){
            if(jogausu === "tesoura"){
                alert("Ganhou! O computador jogou pedra");
                ganhou = ganhou + 1;
            }
            else{
                alert("Perdeu :( O computador jogou pedra");
                perdeu = perdeu + 1;
            } 
        } else if(jogacomp === "tesoura"){
            if(jogausu === "pedra"){
                alert("Ganhou! O computador jogou pedra");
                ganhou = ganhou + 1;
            }
            else{
                alert("Perdeu :( O computador jogou pedra");
                perdeu = perdeu + 1;
            } 
        }
        document.querySelector("#pontosusu").innerText = ganhou;
        document.querySelector("#pontoscomp").innerText = perdeu;
    }