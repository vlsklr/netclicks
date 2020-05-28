const hamburger = document.querySelector(".hamburger");
const lMenu = document.querySelector(".left-menu");
const tvList = document.querySelector('.tv-shows__list');
const modalWin = document.querySelector('.modal');

hamburger.addEventListener('click',function () {
    lMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});

document.addEventListener('click',function (event) {
    if(!event.target.closest('.left-menu')) {
        hamburger.classList.remove('open');
        lMenu.classList.remove('openMenu');
        document.querySelector('.dropdown').classList.remove('active');
    }
});

lMenu.addEventListener('click', function (event) {
   let target = event.target;
   let dropDown = target.closest('.dropdown');
   if (dropDown) {
       dropDown.classList.toggle('active');
       lMenu.classList.add('openMenu');
       hamburger.classList.add('open');
   }
});
tvList.addEventListener('click',event => {
    event.preventDefault();
    if (event.target.closest('.tv-card')) {
        modalWin.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    /*console.log('lol');
    console.log(event);
    if (event.target.closest('.tv-card')) {
        let item = event.target.closest('.tv-card');
        let temp = item.querySelector('.tv-card__img').getAttribute('data-backdrop');
        let temp2 = item.querySelector('.tv-card__img').getAttribute('src');
        item.querySelector('.tv-card__img').setAttribute('data-backdrop', temp2);
        item.querySelector('.tv-card__img').setAttribute('src', temp);
    }*/

});
modalWin.addEventListener('click', event => {
    if (event.target.closest('.cross')||(event.target.classList.contains('modal'))) {
        document.body.style.overflow = '';
        modalWin.classList.add('hide');
    }
});


const changeImage = event => {
    let target = event.target.closest('.tv-shows__item');

    if(target) {
        let img = target.querySelector('.tv-card__img');
        if (img.dataset.backdrop) {
            [img.dataset.backdrop, img.src] = [ img.src, img.dataset.backdrop];
            /*let temp = target.querySelector('.tv-card__img').getAttribute('data-backdrop');
            let temp2 = target.querySelector('.tv-card__img').getAttribute('src');
            target.querySelector('.tv-card__img').setAttribute('data-backdrop', temp2);
            target.querySelector('.tv-card__img').setAttribute('src', temp);*/
        }
    }
};

tvList.addEventListener('mouseover', changeImage);
tvList.addEventListener('mouseout',changeImage);
/*let tvShowsItemList = document.querySelectorAll(".tv-shows__item");
for(idItem in tvShowsItemList) {
    tvShowsItemList.item(idItem).addEventListener('mouseenter', function (event) {
        console.log(event)
        let temp = tvShowsItemList.item(idItem).querySelector('.tv-card__img').getAttribute('data-backdrop');
        let temp2 = tvShowsItemList.item(idItem).querySelector('.tv-card__img').getAttribute('src');
        tvShowsItemList.item(idItem).querySelector('.tv-card__img').setAttribute('data-backdrop', temp2);
        tvShowsItemList.item(idItem).querySelector('.tv-card__img').setAttribute('src', temp);
        console.log(tvShowsItemList.item(idItem).querySelector('.tv-card__img').getAttribute('data-backdrop'));

    });
    tvShowsItemList.item(idItem).addEventListener('mouseout', function (event) {
        console.log('2');
    });
    console.log("item" + tvItem);
    console.log(tvItem);
    tvItem.addEventListener('mouseenter', function (event) {
        console.log('1');
    });
}*/
