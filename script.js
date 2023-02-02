
function createDivs(number) {
    for(let i = 1; i <= number; i++) {
        let div = document.createElement('div');
        div.className = 'number';
        div.tabIndex = i.toString();
        div.textContent = i;
        div.addEventListener('click', setId);
        document.getElementsByClassName('numbers')[0].appendChild(div);
    }
}

function setId() {

    let target = document.getElementById('target').textContent;

    this.setAttribute('id', 'selected');
    let number = document.getElementById('selected').textContent;
    console.log(number);
    this.removeAttribute('id'); //replace id with class='selected' will return an array
    this.onclick = ""; //allow one click only

    //adding selected number to the  target sentence

    let index = target.indexOf('out') - 1;   
    let result = [target.slice(0, index), number, target.slice(index)].join('');
    console.log(result);
    //testing
    document.getElementById('target').textContent = `You selected ${number} out of 5`;
}

function showThanks() {
    document.getElementsByClassName('rating')[0].style.display = 'none';
    document.getElementById('thanks').style.display = 'block';
}




