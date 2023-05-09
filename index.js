let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById('stage');
let btnFight = document.getElementById('btn');

function pickFight(){
    let emoji1 = Math.floor(Math.random() *fighters.length);
    let emoji2 = Math.floor(Math.random() *fighters.length);
    stageEl.textContent = fighters[emoji1] + ' '+ 'VS' + ' ' + fighters[emoji2];
    console.log(fighters[emoji1] + fighters[emoji2]);
   
}
