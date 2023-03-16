const body = document.querySelector(".blur");
const appleIcon = document.querySelector(".headerLink0");
const sib = document.querySelector(".headerIcons");
const Shop = document.querySelector(".headerLink1");
const smShop = document.querySelector(".submenuH-Shop");
const sm1 = document.querySelector(".submenuHeaderContainerShop");
const mac = document.querySelector(".headerLink2");
const sm2 = document.querySelector(".submenuHeaderContainerMac");
const ipad = document.querySelector(".headerLink3");
const sm3 = document.querySelector(".submenuHeaderContainerIpad");
const iphone = document.querySelector(".headerLink4");
const sm4 = document.querySelector(".submenuHeaderContainerIphone");
const watch = document.querySelector(".headerLink5");
const sm5 = document.querySelector(".submenuHeaderContainerWatch");
const airpods = document.querySelector(".headerLink6");
const sm6 = document.querySelector(".submenuHeaderContainerAirpods");
const tv = document.querySelector(".headerLink7");
const sm7 = document.querySelector(".submenuHeaderContainerTv");
const entertainment = document.querySelector(".headerLink8");
const sm8 = document.querySelector(".submenuHeaderContainerEntertainment");
const accessories = document.querySelector(".headerLink9");
const sm9 = document.querySelector(".submenuHeaderContainerAccessories");
const support = document.querySelector(".headerLink10");
const sm10 = document.querySelector(".submenuHeaderContainerSupport");
const searchIcon = document.querySelector(".headerLink11");
const sm11 = document.querySelector(".submenuHeaderContainerSearch");
const bagIcon = document.querySelector(".headerLink12");
const sm12 = document.querySelector(".submenuHeaderContainerBag");

appleIcon.addEventListener("mouseenter", function () {
    smShop.classList.remove("submenuH-ShopScaled");
    sib.classList.add("headerIconsColor");
    body.classList.remove("blur1");
});

Shop.addEventListener("mouseenter", function () {
    smShop.classList.add("submenuH-ShopScaled");
    sm1.classList.remove("hidden");
    sm1.classList.add("submenuHeaderContainerShopScaled");
    sm2.classList.add("hidden");
    sm3.classList.add("hidden");
    sm4.classList.add("hidden");
    sm5.classList.add("hidden");
    sm6.classList.add("hidden");
    sm7.classList.add("hidden");
    sm8.classList.add("hidden");
    sm9.classList.add("hidden");
    sm10.classList.add("hidden");
    sm11.classList.add("hidden");
    sm12.classList.add("hidden");
    body.classList.add("blur1");
});

mac.addEventListener("mouseenter", function () {
    smShop.classList.add("submenuH-ShopScaled");
    sm2.classList.remove("hidden");
    sm2.classList.add("submenuHeaderContainerMacScaled");
    sm1.classList.add("hidden");
    sm3.classList.add("hidden");
    sm4.classList.add("hidden");
    sm5.classList.add("hidden");
    sm6.classList.add("hidden");
    sm7.classList.add("hidden");
    sm8.classList.add("hidden");
    sm9.classList.add("hidden");
    sm10.classList.add("hidden");
    sm11.classList.add("hidden");
    sm12.classList.add("hidden");
    body.classList.add("blur1");
});


ipad.addEventListener("mouseenter", function () {
    smShop.classList.add("submenuH-ShopScaled");
    sm3.classList.remove("hidden");
    sm3.classList.add("submenuHeaderContainerIpadScaled");
    sm1.classList.add("hidden");
    sm2.classList.add("hidden");
    sm4.classList.add("hidden");
    sm5.classList.add("hidden");
    sm6.classList.add("hidden");
    sm7.classList.add("hidden");
    sm8.classList.add("hidden");
    sm9.classList.add("hidden");
    sm10.classList.add("hidden");
    sm11.classList.add("hidden");
    sm12.classList.add("hidden");
    body.classList.add("blur1");
});

iphone.addEventListener("mouseenter", function () {
    smShop.classList.add("submenuH-ShopScaled");
    sm4.classList.remove("hidden");
    sm4.classList.add("submenuHeaderContainerIphoneScaled");
    sm1.classList.add("hidden");
    sm2.classList.add("hidden");
    sm3.classList.add("hidden");
    sm5.classList.add("hidden");
    sm6.classList.add("hidden");
    sm7.classList.add("hidden");
    sm8.classList.add("hidden");
    sm9.classList.add("hidden");
    sm10.classList.add("hidden");
    sm11.classList.add("hidden");
    sm12.classList.add("hidden");
    body.classList.add("blur1");
});

watch.addEventListener("mouseenter", function () {
    smShop.classList.add("submenuH-ShopScaled");
    sm5.classList.remove("hidden");
    sm5.classList.add("submenuHeaderContainerWatchScaled");
    sm1.classList.add("hidden");
    sm2.classList.add("hidden");
    sm3.classList.add("hidden");
    sm4.classList.add("hidden");
    sm6.classList.add("hidden");
    sm7.classList.add("hidden");
    sm8.classList.add("hidden");
    sm9.classList.add("hidden");
    sm10.classList.add("hidden");
    sm11.classList.add("hidden");
    sm12.classList.add("hidden");
    body.classList.add("blur1");
});

airpods.addEventListener("mouseenter", function () {
    smShop.classList.add("submenuH-ShopScaled");
    sm6.classList.remove("hidden");
    sm6.classList.add("submenuHeaderContainerAirpodsScaled");
    sm1.classList.add("hidden");
    sm2.classList.add("hidden");
    sm3.classList.add("hidden");
    sm4.classList.add("hidden");
    sm5.classList.add("hidden");
    sm7.classList.add("hidden");
    sm8.classList.add("hidden");
    sm9.classList.add("hidden");
    sm10.classList.add("hidden");
    sm11.classList.add("hidden");
    sm12.classList.add("hidden");
    body.classList.add("blur1");
});

tv.addEventListener("mouseenter", function () {
    smShop.classList.add("submenuH-ShopScaled");
    sm7.classList.remove("hidden");
    sm7.classList.add("submenuHeaderContainerTvScaled");
    sm1.classList.add("hidden");
    sm2.classList.add("hidden");
    sm3.classList.add("hidden");
    sm4.classList.add("hidden");
    sm5.classList.add("hidden");
    sm6.classList.add("hidden");
    sm8.classList.add("hidden");
    sm9.classList.add("hidden");
    sm10.classList.add("hidden");
    sm11.classList.add("hidden");
    sm12.classList.add("hidden");
    body.classList.add("blur1");
});

entertainment.addEventListener("mouseenter", function () {
    smShop.classList.add("submenuH-ShopScaled");
    sm8.classList.remove("hidden");
    sm8.classList.add("submenuHeaderContainerEntertainmentScaled");
    sm1.classList.add("hidden");
    sm2.classList.add("hidden");
    sm3.classList.add("hidden");
    sm4.classList.add("hidden");
    sm5.classList.add("hidden");
    sm6.classList.add("hidden");
    sm7.classList.add("hidden");
    sm9.classList.add("hidden");
    sm10.classList.add("hidden");
    sm11.classList.add("hidden");
    sm12.classList.add("hidden");
    body.classList.add("blur1");
});

accessories.addEventListener("mouseenter", function () {
    smShop.classList.add("submenuH-ShopScaled");
    sm9.classList.remove("hidden");
    sm9.classList.add("submenuHeaderContainerAccessoriesScaled");
    sm1.classList.add("hidden");
    sm2.classList.add("hidden");
    sm3.classList.add("hidden");
    sm4.classList.add("hidden");
    sm5.classList.add("hidden");
    sm6.classList.add("hidden");
    sm7.classList.add("hidden");
    sm8.classList.add("hidden");
    sm10.classList.add("hidden");
    sm11.classList.add("hidden");
    sm12.classList.add("hidden");
    body.classList.add("blur1");
});

support.addEventListener("mouseenter", function () {
    smShop.classList.add("submenuH-ShopScaled");
    sm10.classList.remove("hidden");
    sm10.classList.add("submenuHeaderContainerSupportScaled");
    sm1.classList.add("hidden");
    sm2.classList.add("hidden");
    sm3.classList.add("hidden");
    sm4.classList.add("hidden");
    sm5.classList.add("hidden");
    sm6.classList.add("hidden");
    sm7.classList.add("hidden");
    sm8.classList.add("hidden");
    sm9.classList.add("hidden");
    sm11.classList.add("hidden");
    sm12.classList.add("hidden");
    body.classList.add("blur1");
});

searchIcon.addEventListener("click", function () {
    smShop.classList.toggle("submenuH-ShopScaled");
    sm11.classList.remove("hidden");
    sm11.classList.add("submenuHeaderContainerSearchScaled");
    sm1.classList.add("hidden");
    sm2.classList.add("hidden");
    sm3.classList.add("hidden");
    sm4.classList.add("hidden");
    sm5.classList.add("hidden");
    sm6.classList.add("hidden");
    sm7.classList.add("hidden");
    sm8.classList.add("hidden");
    sm9.classList.add("hidden");
    sm10.classList.add("hidden");
    sm12.classList.add("hidden");
    body.classList.toggle("blur1");
});

searchIcon.addEventListener("mouseenter", function () {
    smShop.classList.remove("submenuH-ShopScaled");
    body.classList.remove("blur1");
});

bagIcon.addEventListener("click", function () {
    smShop.classList.toggle("submenuH-ShopScaled");
    sm12.classList.remove("hidden");
    sm12.classList.add("submenuHeaderContainerBagScaled");
    sm1.classList.add("hidden");
    sm2.classList.add("hidden");
    sm3.classList.add("hidden");
    sm4.classList.add("hidden");
    sm5.classList.add("hidden");
    sm6.classList.add("hidden");
    sm7.classList.add("hidden");
    sm8.classList.add("hidden");
    sm9.classList.add("hidden");
    sm10.classList.add("hidden");
    sm11.classList.add("hidden");
    body.classList.toggle("blur1");
});

bagIcon.addEventListener("mouseenter", function () {
    smShop.classList.remove("submenuH-ShopScaled");
    body.classList.remove("blur1");
});

smShop.addEventListener("mouseleave", function () {
    smShop.classList.remove("submenuH-ShopScaled");
    sm1.classList.remove("submenuHeaderContainerShopScaled");
    sm2.classList.remove("submenuHeaderContainerMacScaled");
    sm3.classList.remove("submenuHeaderContainerIpadScaled");
    sm4.classList.remove("submenuHeaderContainerIphoneScaled");
    sm5.classList.remove("submenuHeaderContainerWatchScaled");
    sm6.classList.remove("submenuHeaderContainerAirpodsScaled");
    sm7.classList.remove("submenuHeaderContainerTvScaled");
    sm8.classList.remove("submenuHeaderContainerEntertainmentScaled");
    sm9.classList.remove("submenuHeaderContainerAccessoriesScaled");
    sm10.classList.remove("submenuHeaderContainerSupportScaled");
    sm11.classList.remove("submenuHeaderContainerSearchScaled");
    sm12.classList.remove("submenuHeaderContainerBagScaled");
    body.classList.remove("blur1");
})

$(document).ready(function () {
    $(".submenuHeaderContainerShop").css({
        'width': ($(".headerULContainer").width() + 'px')
    });
    $(".submenuHeaderContainerMac").css({
        'width': ($(".headerULContainer").width() + 'px')
    });
    $(".submenuHeaderContainerIpad").css({
        'width': ($(".headerULContainer").width() + 'px')
    });
    $(".submenuHeaderContainerIphone").css({
        'width': ($(".headerULContainer").width() + 'px')
    });
    $(".submenuHeaderContainerWatch").css({
        'width': ($(".headerULContainer").width() + 'px')
    });
    $(".submenuHeaderContainerAirpods").css({
        'width': ($(".headerULContainer").width() + 'px')
    });
    $(".submenuHeaderContainerTv").css({
        'width': ($(".headerULContainer").width() + 'px')
    });
    $(".submenuHeaderContainerEntertainment").css({
        'width': ($(".headerULContainer").width() + 'px')
    });
    $(".submenuHeaderContainerAccessories").css({
        'width': ($(".headerULContainer").width() + 'px')
    });
    $(".submenuHeaderContainerSupport").css({
        'width': ($(".headerULContainer").width() + 'px')
    });
    $(".submenuHeaderContainerSearch").css({
        'width': ($(".headerULContainer").width() + 'px')
    });
    $(".submenuHeaderContainerBag").css({
        'width': ($(".headerULContainer").width() + 'px')
    });
});

const lineContainer = document.querySelector(".menu-icon-container")
const lineOne = document.querySelector(".line1");
const lineTwo = document.querySelector(".line2");
const appleSmFadeOut = document.querySelector(".appleIcons");
const searchSmFadeOut = document.querySelector(".SearchSmIcon");
const bagSmFadeOut = document.querySelector(".bagSmIcon");
const smUlContainer = document.querySelector(".smUlContainer");
const headerSmIconLink1 = document.querySelector(".headerSmIconLink1");
const headerSmIconLink2 = document.querySelector(".headerSmIconLink2");
const headerSmIconLink3 = document.querySelector(".headerSmIconLink3");
const subSm = document.querySelector(".submenuH-ShopSm");
const subSmStore = document.querySelector(".subSmStore");
const subSmMac = document.querySelector(".subSmMac");
const subSmIpad = document.querySelector(".subSmIpad");
const subSmIphone = document.querySelector(".subSmIphone");
const subSmWatch = document.querySelector(".subSmWatch");
const subSmAirpods = document.querySelector(".subSmAirpods");
const subSmTv = document.querySelector(".subSmTv");
const subSmEntertainment = document.querySelector(".subSmEntertainment");
const subSmAccessories = document.querySelector(".subSmAccessories");
const subSmSupport = document.querySelector(".subSmSupport");
const subSmSearch = document.querySelector(".subSmSearch");
const subSmBag1 = document.querySelector(".subSmBag1");
const chevL = document.querySelector(".chevL");
const smUlContainerStore = document.querySelector(".smUlContainerStore");
const smUlContainerMac = document.querySelector(".smUlContainerMac");
const smUlContainerIpad = document.querySelector(".smUlContainerIpad");
const smUlContainerIphone = document.querySelector(".smUlContainerIphone");
const smUlContainerWatch = document.querySelector(".smUlContainerWatch");
const smUlContainerAirpods = document.querySelector(".smUlContainerAirpods");
const smUlContainerTv = document.querySelector(".smUlContainerTv");
const smUlContainerEntertainment = document.querySelector(".smUlContainerEntertainment");
const smUlContainerAccessories = document.querySelector(".smUlContainerAccessories");
const smUlContainerSupport = document.querySelector(".smUlContainerSupport");
const smUlContainerSearch1 = document.querySelector(".smUlContainerSearch1");
const smUlContainerBag1 = document.querySelector(".smUlContainerBag1");

lineContainer.addEventListener("click", function () {
    smUlContainer.classList.remove("hidden");
    lineOne.classList.toggle("line1Click");
    lineTwo.classList.toggle("line2Click");
    chevL.classList.toggle("hiddenCursor");
    chevL.classList.add("hidden");
    headerSmIconLink1.classList.toggle("hiddenCursor");
    headerSmIconLink2.classList.toggle("hiddenCursor");
    headerSmIconLink3.classList.toggle("hiddenCursor");
    if (subSm.classList.contains("submenuH-ShopScaled")) {
        smUlContainer.classList.remove("smUlContainerScaledTop");
        subSm.classList.remove("submenuH-ShopScaled");
        smUlContainerStore.classList.remove("smUlContainerStoreFadeIn");
        smUlContainerMac.classList.remove("smUlContainerMacFadeIn");
        smUlContainerIpad.classList.remove("smUlContainerIpadFadeIn");
        smUlContainerIphone.classList.remove("smUlContainerIphoneFadeIn");
        smUlContainerWatch.classList.remove("smUlContainerWatchFadeIn");
        smUlContainerAirpods.classList.remove("smUlContainerAirpodsFadeIn");
        smUlContainerTv.classList.remove("smUlContainerTvFadeIn");
        smUlContainerEntertainment.classList.remove("smUlContainerEntertainmentFadeIn");
        smUlContainerAccessories.classList.remove("smUlContainerAccessoriesFadeIn");
        smUlContainerSupport.classList.remove("smUlContainerSupportFadeIn");
        smUlContainer.classList.remove("hidden");
    }
    else {
        subSm.classList.add("submenuH-ShopScaled");
        smUlContainer.classList.add("smUlContainerScaledTop");

    }
    smUlContainerSearch1.classList.remove("smUlContainerSearch1FadeIn");
    smUlContainerBag1.classList.remove("smUlContainerBag1FadeIn");
    chevL.classList.add("remove");
});

lineContainer.addEventListener("click", function () {
    if (appleSmFadeOut.classList.contains("fadeOut")) {
        appleSmFadeOut.classList.remove("fadeOut");
        appleSmFadeOut.classList.add("fadeIn");
    }
    else if (appleSmFadeOut.classList.contains("fadeIn")) {
        appleSmFadeOut.classList.remove("fadeIn");
        appleSmFadeOut.classList.add("fadeOut");
    }
    else {
        appleSmFadeOut.classList.add("fadeOut");
    }
});

lineContainer.addEventListener("click", function () {
    if (searchSmFadeOut.classList.contains("fadeOut")) {
        searchSmFadeOut.classList.remove("fadeOut");
        searchSmFadeOut.classList.add("fadeIn");
    }
    else if (searchSmFadeOut.classList.contains("fadeIn")) {
        searchSmFadeOut.classList.remove("fadeIn");
        searchSmFadeOut.classList.add("fadeOut");
    }
    else {
        searchSmFadeOut.classList.add("fadeOut");
    }
});

lineContainer.addEventListener("click", function () {
    if (bagSmFadeOut.classList.contains("fadeOut")) {
        bagSmFadeOut.classList.remove("fadeOut");
        bagSmFadeOut.classList.add("fadeIn");
    }
    else if (bagSmFadeOut.classList.contains("fadeIn")) {
        bagSmFadeOut.classList.remove("fadeIn");
        bagSmFadeOut.classList.add("fadeOut");
    }
    else {
        bagSmFadeOut.classList.add("fadeOut");
    }
});

lineContainer.addEventListener("mouseenter", function () {
    lineOne.classList.add("lineColor");
    lineTwo.classList.add("lineColor");
});

lineContainer.addEventListener("mouseleave", function () {
    lineOne.classList.remove("lineColor");
    lineTwo.classList.remove("lineColor");
});

subSmStore.addEventListener("click", function () {
    chevL.classList.remove("chevLFadeOut");
    chevL.classList.add("chevLFadeIn");
    chevL.classList.remove("hiddenCursor");
    smUlContainer.classList.add("hidden");
    smUlContainerStore.classList.remove("hidden");
    smUlContainerStore.classList.add("smUlContainerStoreFadeIn");
    chevL.classList.remove("hidden");
});


subSmMac.addEventListener("click", function () {
    chevL.classList.remove("chevLFadeOut");
    chevL.classList.add("chevLFadeIn");
    chevL.classList.remove("hiddenCursor");
    smUlContainer.classList.add("hidden");
    smUlContainerMac.classList.remove("hidden");
    smUlContainerMac.classList.add("smUlContainerMacFadeIn");
    chevL.classList.remove("hidden");
});

subSmIpad.addEventListener("click", function () {
    chevL.classList.remove("chevLFadeOut");
    chevL.classList.add("chevLFadeIn");
    chevL.classList.remove("hiddenCursor");
    smUlContainer.classList.add("hidden");
    smUlContainerIpad.classList.remove("hidden");
    smUlContainerIpad.classList.add("smUlContainerIpadFadeIn");
    chevL.classList.remove("hidden");
});

subSmIphone.addEventListener("click", function () {
    chevL.classList.remove("chevLFadeOut");
    chevL.classList.add("chevLFadeIn");
    chevL.classList.remove("hiddenCursor");
    smUlContainer.classList.add("hidden");
    smUlContainerIphone.classList.remove("hidden");
    smUlContainerIphone.classList.add("smUlContainerIphoneFadeIn");
    chevL.classList.remove("hidden");
});

subSmWatch.addEventListener("click", function () {
    chevL.classList.remove("chevLFadeOut");
    chevL.classList.add("chevLFadeIn");
    chevL.classList.remove("hiddenCursor");
    smUlContainer.classList.add("hidden");
    smUlContainerWatch.classList.remove("hidden");
    smUlContainerWatch.classList.add("smUlContainerWatchFadeIn");
    chevL.classList.remove("hidden");
});

subSmAirpods.addEventListener("click", function () {
    chevL.classList.remove("chevLFadeOut");
    chevL.classList.add("chevLFadeIn");
    chevL.classList.remove("hiddenCursor");
    smUlContainer.classList.add("hidden");
    smUlContainerAirpods.classList.remove("hidden");
    smUlContainerAirpods.classList.add("smUlContainerAirpodsFadeIn");
    chevL.classList.remove("hidden");
});

subSmTv.addEventListener("click", function () {
    chevL.classList.remove("chevLFadeOut");
    chevL.classList.add("chevLFadeIn");
    chevL.classList.remove("hiddenCursor");
    smUlContainer.classList.add("hidden");
    smUlContainerTv.classList.remove("hidden");
    smUlContainerTv.classList.add("smUlContainerTvFadeIn");
    chevL.classList.remove("hidden");
});

subSmEntertainment.addEventListener("click", function () {
    chevL.classList.remove("chevLFadeOut");
    chevL.classList.add("chevLFadeIn");
    chevL.classList.remove("hiddenCursor");
    smUlContainer.classList.add("hidden");
    smUlContainerEntertainment.classList.remove("hidden");
    smUlContainerEntertainment.classList.add("smUlContainerEntertainmentFadeIn");
    chevL.classList.remove("hidden");
});

subSmAccessories.addEventListener("click", function () {
    chevL.classList.remove("chevLFadeOut");
    chevL.classList.add("chevLFadeIn");
    chevL.classList.remove("hiddenCursor");
    smUlContainer.classList.add("hidden");
    smUlContainerAccessories.classList.remove("hidden");
    smUlContainerAccessories.classList.add("smUlContainerAccessoriesFadeIn");
    chevL.classList.remove("hidden");
});

subSmSupport.addEventListener("click", function () {
    chevL.classList.remove("chevLFadeOut");
    chevL.classList.add("chevLFadeIn");
    chevL.classList.remove("hiddenCursor");
    smUlContainer.classList.add("hidden");
    smUlContainerSupport.classList.remove("hidden");
    smUlContainerSupport.classList.add("smUlContainerSupportFadeIn");
    chevL.classList.remove("hidden");
});

chevL.addEventListener("click", function () {
    chevL.classList.add("hiddenCursor");
    chevL.classList.remove("chevLFadeIn");
    chevL.classList.add("chevLFadeOut");
    smUlContainer.classList.remove("hidden");
    smUlContainerStore.classList.remove("smUlContainerStoreFadeIn");
    smUlContainerMac.classList.remove("smUlContainerMacFadeIn");
    smUlContainerIpad.classList.remove("smUlContainerIpadFadeIn");
    smUlContainerIphone.classList.remove("smUlContainerIphoneFadeIn");
    smUlContainerWatch.classList.remove("smUlContainerWatchFadeIn");
    smUlContainerAirpods.classList.remove("smUlContainerAirpodsFadeIn");
    smUlContainerTv.classList.remove("smUlContainerTvFadeIn");
    smUlContainerEntertainment.classList.remove("smUlContainerEntertainmentFadeIn");
    smUlContainerAccessories.classList.remove("smUlContainerAccessoriesFadeIn");
    smUlContainerSupport.classList.remove("smUlContainerSupportFadeIn");
});

subSmSearch.addEventListener("click", function () {
    subSm.classList.toggle("submenuH-ShopScaled");
    smUlContainer.classList.toggle("smUlContainerScaledTop");
    smUlContainer.classList.add("hidden");
    smUlContainerSearch1.classList.toggle("smUlContainerSearch1FadeIn");
    lineOne.classList.toggle("line1Click");
    lineTwo.classList.toggle("line2Click");
    chevL.classList.add("hidden");
    headerSmIconLink1.classList.toggle("hiddenCursor");
    headerSmIconLink2.classList.toggle("hiddenCursor");
    headerSmIconLink3.classList.toggle("hiddenCursor");
    if (appleSmFadeOut.classList.contains("fadeOut")) {
        appleSmFadeOut.classList.remove("fadeOut");
        appleSmFadeOut.classList.add("fadeIn");
    }
    else if (appleSmFadeOut.classList.contains("fadeIn")) {
        appleSmFadeOut.classList.remove("fadeIn");
        appleSmFadeOut.classList.add("fadeOut");
    }
    else {
        appleSmFadeOut.classList.add("fadeOut");
    }
    if (searchSmFadeOut.classList.contains("fadeOut")) {
        searchSmFadeOut.classList.remove("fadeOut");
        searchSmFadeOut.classList.add("fadeIn");
    }
    else if (searchSmFadeOut.classList.contains("fadeIn")) {
        searchSmFadeOut.classList.remove("fadeIn");
        searchSmFadeOut.classList.add("fadeOut");
    }
    else {
        searchSmFadeOut.classList.add("fadeOut");
    }
    if (bagSmFadeOut.classList.contains("fadeOut")) {
        bagSmFadeOut.classList.remove("fadeOut");
        bagSmFadeOut.classList.add("fadeIn");
    }
    else if (bagSmFadeOut.classList.contains("fadeIn")) {
        bagSmFadeOut.classList.remove("fadeIn");
        bagSmFadeOut.classList.add("fadeOut");
    }
    else {
        bagSmFadeOut.classList.add("fadeOut");
    }
    smUlContainerBag1.classList.remove("smUlContainerBag1FadeIn");
});

subSmBag1.addEventListener("click", function () {
    subSm.classList.toggle("submenuH-ShopScaled");
    smUlContainer.classList.toggle("smUlContainerScaledTop");
    smUlContainer.classList.add("hidden");
    smUlContainerBag1.classList.toggle("smUlContainerBag1FadeIn");
    lineOne.classList.toggle("line1Click");
    lineTwo.classList.toggle("line2Click");
    chevL.classList.add("hidden");
    headerSmIconLink1.classList.toggle("hiddenCursor");
    headerSmIconLink2.classList.toggle("hiddenCursor");
    headerSmIconLink3.classList.toggle("hiddenCursor");
    if (appleSmFadeOut.classList.contains("fadeOut")) {
        appleSmFadeOut.classList.remove("fadeOut");
        appleSmFadeOut.classList.add("fadeIn");
    }
    else if (appleSmFadeOut.classList.contains("fadeIn")) {
        appleSmFadeOut.classList.remove("fadeIn");
        appleSmFadeOut.classList.add("fadeOut");
    }
    else {
        appleSmFadeOut.classList.add("fadeOut");
    }
    if (searchSmFadeOut.classList.contains("fadeOut")) {
        searchSmFadeOut.classList.remove("fadeOut");
        searchSmFadeOut.classList.add("fadeIn");
    }
    else if (searchSmFadeOut.classList.contains("fadeIn")) {
        searchSmFadeOut.classList.remove("fadeIn");
        searchSmFadeOut.classList.add("fadeOut");
    }
    else {
        searchSmFadeOut.classList.add("fadeOut");
    }
    if (bagSmFadeOut.classList.contains("fadeOut")) {
        bagSmFadeOut.classList.remove("fadeOut");
        bagSmFadeOut.classList.add("fadeIn");
    }
    else if (bagSmFadeOut.classList.contains("fadeIn")) {
        bagSmFadeOut.classList.remove("fadeIn");
        bagSmFadeOut.classList.add("fadeOut");
    }
    else {
        bagSmFadeOut.classList.add("fadeOut");
    }
});

const footerAcrTitle = document.querySelectorAll(".smFooterUlAcr");
const verticalLine = document.querySelectorAll(".verticalLine");
const horizontalLine = document.querySelectorAll(".horizontalLine");
const acrUl = document.querySelectorAll(".acrUl");
const acrUlScale = document.querySelectorAll(".acrUL");

footerAcrTitle[0].addEventListener("click", function () {
    verticalLine[0].classList.toggle("verticalLineRotate");
    horizontalLine[0].classList.toggle("horizontalLineRotate");
    acrUl[0].classList.toggle("acrUlClick");
    acrUlScale[0].classList.toggle("acrULScale");
});

footerAcrTitle[1].addEventListener("click", function () {
    verticalLine[1].classList.toggle("verticalLineRotate");
    horizontalLine[1].classList.toggle("horizontalLineRotate");
    acrUl[1].classList.toggle("acrUlClick");
    acrUlScale[1].classList.toggle("acrULScale");
});

footerAcrTitle[2].addEventListener("click", function () {
    verticalLine[2].classList.toggle("verticalLineRotate");
    horizontalLine[2].classList.toggle("horizontalLineRotate");
    acrUl[2].classList.toggle("acrUlClick");
    acrUlScale[2].classList.toggle("acrULScale");
});

footerAcrTitle[3].addEventListener("click", function () {
    verticalLine[3].classList.toggle("verticalLineRotate");
    horizontalLine[3].classList.toggle("horizontalLineRotate");
    acrUl[3].classList.toggle("acrUlClick");
    acrUlScale[3].classList.toggle("acrULScale");
});

footerAcrTitle[4].addEventListener("click", function () {
    verticalLine[4].classList.toggle("verticalLineRotate");
    horizontalLine[4].classList.toggle("horizontalLineRotate");
    acrUl[4].classList.toggle("acrUlClick");
    acrUlScale[4].classList.toggle("acrULScale");
});

footerAcrTitle[5].addEventListener("click", function () {
    verticalLine[5].classList.toggle("verticalLineRotate");
    horizontalLine[5].classList.toggle("horizontalLineRotate");
    acrUl[5].classList.toggle("acrUlClick");
    acrUlScale[5].classList.toggle("acrULScale");
});

footerAcrTitle[6].addEventListener("click", function () {
    verticalLine[6].classList.toggle("verticalLineRotate");
    horizontalLine[6].classList.toggle("horizontalLineRotate");
    acrUl[6].classList.toggle("acrUlClick");
    acrUlScale[6].classList.toggle("acrULScale");
});

footerAcrTitle[7].addEventListener("click", function () {
    verticalLine[7].classList.toggle("verticalLineRotate");
    horizontalLine[7].classList.toggle("horizontalLineRotate");
    acrUl[7].classList.toggle("acrUlClick");
    acrUlScale[7].classList.toggle("acrULScale");
});

footerAcrTitle[8].addEventListener("click", function () {
    verticalLine[8].classList.toggle("verticalLineRotate");
    horizontalLine[8].classList.toggle("horizontalLineRotate");
    acrUl[8].classList.toggle("acrUlClick");
    acrUlScale[8].classList.toggle("acrULScale");
});

footerAcrTitle[9].addEventListener("click", function () {
    verticalLine[9].classList.toggle("verticalLineRotate");
    horizontalLine[9].classList.toggle("horizontalLineRotate");
    acrUl[9].classList.toggle("acrUlClick");
    acrUlScale[9].classList.toggle("acrULScale");
});

footerAcrTitle[10].addEventListener("click", function () {
    verticalLine[10].classList.toggle("verticalLineRotate");
    horizontalLine[10].classList.toggle("horizontalLineRotate");
    acrUl[10].classList.toggle("acrUlClick");
    acrUlScale[10].classList.toggle("acrULScale");
});