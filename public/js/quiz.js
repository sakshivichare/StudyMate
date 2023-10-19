
const Quiz = [
    {
        Question:"0Questionerr?",
        Option1:"Questionerr?",
        val1:"0",
        Option2:"Questionerr?",
        val2:"0",
        Option3:"Questionerr?",
        val3:"1",
        Option4:"Questionerr?",
        val4:"0"
    },
    {
        Question:"What is the primary purpose of an operating system?",
        Option1:"Running applications",
        val1:"0",
        Option2:"Managing hardware resources",
        val2:"1",
        Option3:"Enhancing network security",
        val3:"0",
        Option4:"Playing multimedia content",
        val4:"0"
    },
    {
        Question:"Which of the following is not an essential function of an operating system",
        Option1:"Process Management",
        val1:"0",
        Option2:"Memory Management",
        val2:"0",
        Option3:"Keyboard Input Handling",
        val3:"1",
        Option4:"File System Management",
        val4:"0"
    },
    {
        Question:"Which of the following are CPU scheduling algorithm ?",
        Option1:"Priority scheduling",
        val1:"0",
        Option2:"round robin",
        val2:"0",
        Option3:"Shortest job first",
        val3:"0",
        Option4:"all of the above",
        val4:"1"
    },
    {
        Question:"ullu hai kya tu?",
        Option1:"Bhavya?",
        val1:"0",
        Option2:"Hardika?",
        val2:"0",
        Option3:"Nilesh?",
        val3:"1",
        Option4:"Sakshi?",
        val4:"0"
    }
]

var currentIndex = 0; // Initialize the index to 0
// const radios = document.querySelectorAll('op');
const cutter = document.getElementById('cross');
const Quest = document.getElementById('qp');
const radio1 = document.getElementById('op1');
const radio2 = document.getElementById('op2');
const radio3 = document.getElementById('op3');
const radio4 = document.getElementById('op4');
const Output = document.getElementById('oup');
const radio1v = document.getElementById('op1v');
const radio2v = document.getElementById('op2v');
const radio3v = document.getElementById('op3v');
const radio4v = document.getElementById('op4v');

const selectedRadioButton = document.querySelector('input[name="list-radio"]:checked');
// const radioButtons = document.querySelectorAll('input[type="radio"]');

var radiosss = document.getElementsByName('list-radio');



var sum = 0;

function adder(){
    console.log("adder clicked");

    radiosss.forEach(rado => {
        if (rado.checked){
            sum += parseInt(rado.value);
        }
    }); 


    currentIndex++;  
    if(currentIndex==5){
        cutter.click();
        backer();
    }
    // for(let i=0;i<Quiz.length;i++){
        Quest.innerHTML=Quiz[currentIndex].Question;
        radio1.innerHTML=Quiz[currentIndex].Option1;
        radio2.innerHTML=Quiz[currentIndex].Option2;
        radio3.innerHTML=Quiz[currentIndex].Option3;
        radio4.innerHTML=Quiz[currentIndex].Option4;

    // }
    let ab=0;
    radiosss.forEach(rado => {
            rado.value=Quiz[currentIndex]['val'+(ab+1)];
            // console.log("Option "+ab+" "+rado.value);
            ab++;
      });  

}

function backer() {
    currentIndex = 0;
    if(sum>0){
        Output.innerHTML = sum;
    }
}

function sumzero() {
    sum=0;
}