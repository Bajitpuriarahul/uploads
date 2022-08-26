let srn = document.getElementById('screen');
let btn = document.querySelectorAll('button');
for(item of btn){
item.addEventListener('click', (e)=>{
    btnText = e.target.innerText;
    if(btnText == '*'){
        srn.innerText += btnText;
    }
 else if(btnText == "="){
        srn.innerText = eval(srn.innerText);
    }
    else if ( btnText == 'C'){
        srn.innerText = '';
    }
    else if( btnText == '%'){
        srn.innerText = srn.innerText*1/100;
    }
    else if(btnText =='<'){
        let string = srn.innerText.toString();
        srn.innerText = string.substr(0, string.length - 1);
    }
    else{
        srn.innerText += btnText;
    }
})
};



