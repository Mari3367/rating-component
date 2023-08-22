
function createDivs(number) {
    for(let i = 1; i <= number; i++) {
        let div = document.createElement('div');
        div.className = 'number';
        div.tabIndex = i.toString();
        div.textContent = i;
        div.addEventListener('click', setClassSelected);
        document.getElementsByClassName('numbers')[0].appendChild(div);
    }
}

// replaced id='selected' with class='selected'

function setClassSelected() {

    // this.setAttribute('class', 'selected');
    // let number = document.getElementsByClassName('selected')[0].textContent;
    // console.log(number);
    // this.classList.remove('selected'); 
    // this.onclick = ""; //allow one click only

    //testing
    
    //check if the clicked element has 'selected' class?
    // if (this.classList.contains('selected')) {
    //     this.classList.remove('selected');
    // }

    console.log(typeof document.getElementsByClassName('selected'));
    
    [...document.getElementsByClassName('selected')].forEach(element => {
        element.classList.remove('selected');
    });

    this.classList.toggle('selected'); //add class = 'selected' to the clicked element
    let number = this.textContent;


    //adding selected number to the  target sentence
    document.getElementById('target').textContent = `You selected ${number} out of 5`;

    
    return; //this should allow one-time work only. (replaced with this.onclick = '')
}

function showThanks() {
    document.getElementsByClassName('rating')[0].style.display = 'none';
    document.getElementById('thanks').style.display = 'block';
}




