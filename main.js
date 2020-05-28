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
    const target = event.target;
    console.log(target);
    if (target.closest('.tv-card')) {
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
