// Программа для подсчета баллов за матчи
let headBtn = document.getElementById('button'),
    resWeek = document.getElementsByClassName('week_numbers'),
    resAll = document.getElementsByClassName('all_numbers');

headBtn.addEventListener('click', function() {

    alert('done!');
    let allRes = { //Текущая таблица результатов - весь сезон
        Lev: 45,
        Ryk: 43,
        Tit: 34,
        Pas: 35,
    };

    let gamesResults = [], LevResults = [], RykResults = [], TitResults = [], PasResults = [];
    let gamesIncome = document.getElementById('scores').value,
        LevIncome = document.getElementById('Lev_score').value,
        RykIncome = document.getElementById('Ryk_score').value,
        TitIncome = document.getElementById('Tit_score').value,
        PasIncome = document.getElementById('Pas_score').value;
    
        function income() { //переводим строки в массив массивов
            arr = gamesIncome.split(" ");
                for (let i = 0; i<arr.length; ++i) {
                gamesResults.push(gamesIncome.split(" ")[i].split(""));
                LevResults.push(LevIncome.split(" ")[i].split(""));
                RykResults.push(RykIncome.split(" ")[i].split(""));
                TitResults.push(TitIncome.split(" ")[i].split(""));
                PasResults.push(PasIncome.split(" ")[i].split(""));
                }
        };
        income(); //Запуск перевода
        
        function pointsCalc(real, player) { //Считает баллы за матчи
        weekPoints = 0;
            for (let i = 0; i<real.length ; ++i) {
                let realDif = real[i][0] - real[i][1],
                    playerDif = player[i][0] - player[i][1];
                if (isNaN(realDif) || isNaN(playerDif)) {
                    weekPoints += 0;
                } else if (real[i].toString() == player[i].toString()) {
                    weekPoints += 3;
                } else if ((realDif) == (playerDif)) {
                    weekPoints += 2;
                } else if (Math.sign(realDif) == Math.sign(playerDif)) {
                    weekPoints += 1;
                }
            }
            return weekPoints;
        };
        
        function calcAll () { // запуск рассчетов
            let weekRes = {
                Lev: 0,
                Ryk: 0,
                Tit: 0,
                Pas: 0,
            }
            let LevWeek = function() { //замыкания - рассчеты для всех
                allRes.Lev += pointsCalc(gamesResults, LevResults),
                weekRes.Lev = pointsCalc(gamesResults, LevResults);
                },
                RykWeek = function() {
                allRes.Ryk += pointsCalc (gamesResults, RykResults),
                weekRes.Ryk = pointsCalc (gamesResults, RykResults);
                },
                TitWeek = function() {
                allRes.Tit += pointsCalc (gamesResults, TitResults),
                weekRes.Tit = pointsCalc (gamesResults, TitResults);
                },
                PasWeek = function() {
                allRes.Pas += pointsCalc (gamesResults, PasResults),
                weekRes.Pas = pointsCalc (gamesResults, PasResults);
                };
            LevWeek(), RykWeek(), TitWeek(), PasWeek();

            resWeek[0].textContent = weekRes.Lev;
            resWeek[1].textContent = weekRes.Ryk;
            resWeek[2].textContent = weekRes.Pas;
            resWeek[3].textContent = weekRes.Tit;
        }
        calcAll(); // Запуск проги
    
        resAll[0].textContent = allRes.Lev;
        resAll[1].textContent = allRes.Ryk;
        resAll[2].textContent = allRes.Pas;
        resAll[3].textContent = allRes.Tit;
    

});


















// Анимации и действия на странице



// let points = document.querySelector('.points')[0];
// function alertit() {
//     alert("Привет");
//     points.style.display = "none";
// }

// let animBtn = document.getElementById("anim"),
//     square = document.querySelector('.square');
// function animate() {
//     let pos = 0;

//     let id = setInterval(frame, 10);
//     function frame() {
//         if(pos = 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             square.style.left = pos + 'px';
//         }
//     }
// }
// animBtn.addEventListener('click', animate);