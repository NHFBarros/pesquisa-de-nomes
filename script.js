function searchName() {
    var input = document.querySelector('#searchInput').value;
    var nomes = document.querySelectorAll('ol#nameList li');

    for (var i = 0; i < nomes.length; i++) {
        if(input == '') {
            nomes[i].style.fontWeight = 'normal';
        } else if (nomes[i].innerHTML.toLowerCase().includes(input.toLowerCase())) {
            nomes[i].style.fontWeight = 'bold';
        } else {
            nomes[i].style.fontWeight = 'normal';
        }
    }
}
