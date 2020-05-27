const hamburger = document.querySelector(".hamburger");
const lMenu = document.querySelector(".left-menu");

hamburger.addEventListener('click',function () {
    lMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});

document.addEventListener('click',function (event) {
    if(!event.target.closest('.left-menu')) {
        hamburger.classList.remove('open');
        lMenu.classList.remove('openMenu');
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
document.querySelector(".tv-shows__list").addEventListener('click',function (event) {
    event.preventDefault();
    console.log(event);
    console.log('lol');

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
