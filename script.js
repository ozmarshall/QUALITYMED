let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText() {
    hideText.clasList.toggle('show');
    
    if(hideText.classList.contains('show')){
       hideText_btn.innerHTML = 'Read less';
    }
    else {
        hideText_btn.innerHTML = 'Read More';
    }
}
