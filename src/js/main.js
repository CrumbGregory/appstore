const switcher = document.querySelector('.switch');

function nightMode() {
    if(night === false) {
      night = true;  

      document.body.classList.add('night');
      
      document.querySelector('.header > h1').style.color = '#fff';

      document.querySelector('.header-text').style.color = '#fff';

      document.querySelector('.header').classList.add('header-night__mod');

      document.querySelectorAll('.wrap-block').forEach(item => {
          item.classList.add('wrap-block__night');
      });

      document.querySelectorAll('.btn-block').forEach(item => {
          item.style.backgroundColor = 'rgb(75, 0, 130, 0.4)';
          item.style.color = '#fff';
      });

      document.querySelectorAll('.wrap-block > h2').forEach(item => {
          item.style.color = '#fff';
      });

      document.querySelectorAll('.btn-size').forEach(item => {
          item.style.backgroundColor = 'rgb(75, 0, 130, 0.4)';
          item.classList.add('btn-size__nigt-mod');
          item.style.color = '#fff';
      });

      document.querySelectorAll('.price').forEach(item => {
          item.style.color = '#fff';
      });

      document.querySelector('.btn-add').classList.add('btn-add__night');

    }else {
       night = false;
       
       document.body.classList.remove('night');

       document.querySelector('.header > h1').style.color = '#000';

       document.querySelector('.header-text').style.color = '#000';

       document.querySelector('.header').classList.remove('header-night__mod');

       document.querySelectorAll('.wrap-block').forEach(item => {
        item.classList.remove('wrap-block__night');
    });

        document.querySelectorAll('.btn-block').forEach(item => {
            item.style.backgroundColor = 'rgb(0,0,0, 0.15)';
            item.style.color = '#000';
        });
        
        document.querySelectorAll('.wrap-block > h2').forEach(item => {
            item.style.color = '#000';
        });

        document.querySelectorAll('.btn-size').forEach(item => {
            item.style.backgroundColor = '#fff';
            item.classList.remove('btn-size__nigt-mod');
            item.style.color = '#000';
        });

        document.querySelectorAll('.price').forEach(item => {
            item.style.color = '#000';
        });

        document.querySelector('.btn-add').classList.remove('btn-add__night');
    }
 }

let night = false;

switcher.addEventListener('change', () => {
    nightMode();
})

function imgChange() { 

    document.getElementById('btn-black__XR').addEventListener('click', () => {
        document.getElementById('iPhoneXR').src = '/img/1.png'
    });

    document.getElementById('btn-red__XR').addEventListener('click', () => {
        document.getElementById('iPhoneXR').src = '/img/2.png'
    });

    document.getElementById('btn-yellow__XR').addEventListener('click', () => {
        document.getElementById('iPhoneXR').src = '/img/3.png'
    });

    document.getElementById('btn-black__X').addEventListener('click', () => {
        document.getElementById('iPhoneX').src = '/img/4.png'
    });

    document.getElementById('btn-white__X').addEventListener('click', () => {
        document.getElementById('iPhoneX').src = '/img/5.png'
    });

    document.getElementById('btn-white__8').addEventListener('click', () => {
        document.getElementById('iPhone8').src = '/img/8.png'
    });

    document.getElementById('btn-black__8').addEventListener('click', () => {
        document.getElementById('iPhone8').src = '/img/6.png'
    });

    document.getElementById('btn-gold__8').addEventListener('click', () => {
        document.getElementById('iPhone8').src = '/img/7.png'
    });

    document.getElementById('btn-white__XS').addEventListener('click', () => {
        document.getElementById('iPhoneXS').src = '/img/11.png'
    });

    document.getElementById('btn-black__XS').addEventListener('click', () => {
        document.getElementById('iPhoneXS').src = '/img/9.png'
    });

    document.getElementById('btn-gold__XS').addEventListener('click', () => {
        document.getElementById('iPhoneXS').src = '/img/10.png'
    });

    document.getElementById('btn-white__SE').addEventListener('click', () => {
        document.getElementById('iPhoneSE').src = '/img/12.png'
    });

    document.getElementById('btn-black__SE').addEventListener('click', () => {
        document.getElementById('iPhoneSE').src = '/img/14.png'
    });

    document.getElementById('btn-gold__SE').addEventListener('click', () => {
        document.getElementById('iPhoneSE').src = '/img/13.png'
    });

    document.getElementById('btn-white__12').addEventListener('click', () => {
        document.getElementById('iPhone12').src = '/img/15.png'
    });

    document.getElementById('btn-black__12').addEventListener('click', () => {
        document.getElementById('iPhone12').src = '/img/16.png'
    });

    document.getElementById('btn-blue__12').addEventListener('click', () => {
        document.getElementById('iPhone12').src = '/img/17.png'
    });
 }

imgChange();

const pricesXR = ['799$', '899$', '999$'],
      pricesX = ['499$', '599$', '699$'],
      prices8 = ['400$', '429$', '529$'],
      pricesXS = ['1000$', '1100$', '1200$'],
      pricesSE = ['150$', '200$', '259$'],
      prices12 = ['729$', '779$', '879$'];

function btnSize(btn64, btn128, btn256, text_block, pricesBlock) { 

    document.querySelector(btn64).addEventListener('click', () => {
        document.querySelector(text_block).innerHTML = pricesBlock[0];
    });

    document.querySelector(btn128).addEventListener('click', () => {
        document.querySelector(text_block).innerHTML = pricesBlock[1];
    });

    document.querySelector(btn256).addEventListener('click', () => {
        document.querySelector(text_block).innerHTML = pricesBlock[2];
    });

 }

function priceChange() { 

    btnSize('#btn64XR', '#btn128XR', '#btn256XR', '#iPhoneXR-text', pricesXR);
    btnSize('#btn64X', '#btn128X', '#btn256X', '#iPhoneX-text', pricesX);
    btnSize('#btn64__8', '#btn128__8', '#btn256__8', '#iPhone8-text', prices8);
    btnSize('#btn64__XS', '#btn128__XS', '#btn256__XS', '#iPhoneXS-text', pricesXS);
    btnSize('#btn64__SE', '#btn128__SE', '#btn256__SE', '#iPhoneSE-text', pricesSE);
    btnSize('#btn64__12', '#btn128__12', '#btn256__12', '#iPhone12-text', prices12);
 }

priceChange();

const btnAdd = document.querySelector('.btn-add');

function addItems() { 
    btnAdd.addEventListener('click', () => {
        document.querySelectorAll('#newiPhone').forEach(item => {
            item.classList.remove('display-none');
        });
        btnAdd.remove();
    })
 }

addItems();