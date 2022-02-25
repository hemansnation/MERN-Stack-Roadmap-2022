window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition // for chrome


// create a Speech object

const s = new SpeechRecognition();
s.lang = 'en-US';
s.interimResults = true;
//intrim

// create html element
const p = document.createElement('p');
const d = document.querySelector('.words');
d.appendChild(p);


// eventlisterner
s.addEventListener('result', e => {

    let transcript = Array.from(e.results)
                        .map(result => result[0])
                        .map(result => result.transcript)
                        .join("");

   

    if(e.results[0].isFinal){
        const p = document.createElement('p');
        p.textContent = transcript;
    }

    console.log(transcript);
})

s.addEventListener('end', s.start);

s.start();
// console.log(s);

// start 

