// random functions
function computerChoice1(){

        const randomNumber=Math.random();
        if(randomNumber >=0 && randomNumber<1/2){
        computerChoice='Mwala';
        }else if(randomNumber >=1/2 && randomNumber<2/3){
        computerChoice='Pepala';
        }else{
        computerChoice='Sizasi';
        }
         return computerChoice;
            }

function computerChoice2(yourChoice){
        const computerChoice = computerChoice1();

        let result='';
        if(yourChoice === 'Sizasi'){
            if(computerChoice === 'Mwala'){
        result='Waluza!';

        }else if(computerChoice === 'Pepala'){
            result='Wawina!';

        }else{
            result='Mukufana Mphamvu!';

        }
            }
            // for paper
            else if(yourChoice === 'Pepala'){

            if(computerChoice === 'Mwala'){
            result='Wawina!';

            }else if(computerChoice === 'Pepala'){
                result='Mukufana Mphamvu!';

            }else{
                result='Waluza!';

                        }

            }
            else if(yourChoice === 'Mwala'){
                if(computerChoice === 'Mwala'){
                    result='Mukufana Mphamvu!';

                }else if(computerChoice === 'Pepala'){
                    result='Waluza!';

                }else{
                    result='Wawina!';

                }
            }

        alert('Mwasankha: '+yourChoice+' Makina asankha: ' + computerChoice + '\n' + result);
        }

const button=document.getElementById('mwala-btn')?.addEventListener('click', function() {
    const computerChoice = computerChoice1();
    computerChoice2('Mwala');
});
const button2=document.getElementById('pepala-btn')?.addEventListener('click', function() {
    const computerChoice = computerChoice1();
    computerChoice2('Pepala');
});

const button3=document.getElementById('sizasi-btn')?.addEventListener('click', function() {
    const computerChoice = computerChoice1();
    computerChoice2('Sizasi');
});