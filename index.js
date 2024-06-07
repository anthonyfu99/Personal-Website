const redbutton = document.getElementsByClassName('red-button')[0];
redbutton.addEventListener('click', function() {
  const color = '#cf0030';
  const textcolor = '#FFFFFF';
  document.body.style.backgroundColor = color;
  document.body.style.color = textcolor;
  document.querySelector('.interactive-style-container').style.color = 'initial';

  const thirdCodeLine = document.getElementsByClassName('code-line')[2]; 
  const regex = /color:\s*#[a-fA-F0-9]+/;
  thirdCodeLine.textContent = thirdCodeLine.textContent.replace(regex, 'color: #cf0030');
});

const orangebutton = document.getElementsByClassName('orange-button')[0];
orangebutton.addEventListener('click', function() {
    const color = '#FFA500';
    const textColor = '#000000'
    document.body.style.backgroundColor = color;
    document.body.style.color = textColor;

    const thirdCodeLine = document.getElementsByClassName('code-line')[2]; 
    const regex = /color:\s*#[a-fA-F0-9]+/;
    thirdCodeLine.textContent = thirdCodeLine.textContent.replace(regex, 'color: #FFA500');
});

const greenbutton = document.getElementsByClassName('green-button')[0];
greenbutton.addEventListener('click', function() {
    const color = '#00AC8A';
    const textColor = '#000000'
    document.body.style.backgroundColor = color;
    document.body.style.color = textColor;

    const thirdCodeLine = document.getElementsByClassName('code-line')[2]; 
    const regex = /color:\s*#[a-fA-F0-9]+/;
    thirdCodeLine.textContent = thirdCodeLine.textContent.replace(regex, 'color: #00AC8A');
});

const navybutton = document.getElementsByClassName('navy-button')[0];
navybutton.addEventListener('click', function() {
    const color = '#202A44';
    const textColor = '#FFFFFF';
    document.body.style.backgroundColor = color;
    document.body.style.color = textColor;
    document.querySelector('.interactive-style-container').style.color = 'initial';

    const thirdCodeLine = document.getElementsByClassName('code-line')[2]; 
    const regex = /color:\s*#[a-fA-F0-9]+/;
    thirdCodeLine.textContent = thirdCodeLine.textContent.replace(regex, 'color: #202A44');
});

const brownbutton = document.getElementsByClassName('brown-button')[0];
brownbutton.addEventListener('click', function() {
    const color = '#A47449';
    const textColor = '#FFFFFF';
    document.body.style.backgroundColor = color;
    document.body.style.color = textColor;
    document.querySelector('.interactive-style-container').style.color = 'initial';

    const thirdCodeLine = document.getElementsByClassName('code-line')[2]; 
    const regex = /color:\s*#[a-fA-F0-9]+/;
    thirdCodeLine.textContent = thirdCodeLine.textContent.replace(regex, 'color: #A47449');
});

const whitebutton = document.getElementsByClassName('white-button')[0];
whitebutton.addEventListener('click', function() {
    const color = '#FFFFFF';
    const textColor = '#000000'
    document.body.style.backgroundColor = color;
    document.body.style.color = textColor;

    const thirdCodeLine = document.getElementsByClassName('code-line')[2]; 
    const regex = /color:\s*#[a-fA-F0-9]+/;
    thirdCodeLine.textContent = thirdCodeLine.textContent.replace(regex, 'color: #FFFFFF');
});


document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    const animateUpElements = document.querySelectorAll('.animate-up');
    animateUpElements.forEach(element => observer.observe(element));
});






