/**
 * Created by DALEK on 11.07.2017.
 */



jQuery(document).ready(function ($) {
    $('a[data-rel^=lightcase]').lightcase({
        maxHeight: null
    });
});


var projects = document.querySelector(".projects");
var projectsList = projects.querySelector(".projects__list");
var projectsElems = projects.querySelectorAll(".projects__item");
var projectsWidth = 327;
var projectsCount = projectsElems.length;
var projectsPosition = 0;

projects.querySelector(".projects__arrow--left").addEventListener("click", function () {
    projectsPosition = Math.min(projectsPosition + projectsWidth, 0);
    projectsList.style.marginLeft = projectsPosition + "px";
});

projects.querySelector(".projects__arrow--right").addEventListener("click", function () {
    if (document.documentElement.clientWidth >= 980) {
        projectsPosition = Math.max(projectsPosition - projectsWidth, -projectsWidth * (projectsCount - 3));
    }
    else if (document.documentElement.clientWidth >= 660) {
        projectsPosition = Math.max(projectsPosition - projectsWidth, -projectsWidth * (projectsCount - 2));
    }
    else {
        projectsPosition = Math.max(projectsPosition - projectsWidth, -projectsWidth * (projectsCount - 1));
    }
    projectsList.style.marginLeft = projectsPosition + "px";
});


var cases = document.querySelector(".cases");
var casesList = cases.querySelector(".cases__list");
var casesElems = cases.querySelectorAll(".cases__item");
var casesWidth = 990;
var casesCount = casesElems.length;
var casesPosition = 0;

cases.querySelector(".cases__arrow--left").addEventListener("click", function () {
    if (document.documentElement.clientWidth >= 990) {
        casesPosition = Math.min(casesPosition + casesWidth, 0);
    }
    else {
        casesWidth = document.documentElement.clientWidth;
        casesPosition = Math.min(casesPosition + casesWidth, 0);
        casesWidth = 990;
    }
    casesList.style.marginLeft = casesPosition + "px";
});

cases.querySelector(".cases__arrow--right").addEventListener("click", function () {
    if (document.documentElement.clientWidth >= 990) {
        casesPosition = Math.max(casesPosition - casesWidth, -casesWidth * (casesCount - 1));
    }
    else {
        casesWidth = document.documentElement.clientWidth;
        casesPosition = Math.max(casesPosition - casesWidth, -casesWidth * (casesCount - 1));
        casesWidth = 990;
    }
    casesList.style.marginLeft = casesPosition + "px";
});


$(".header__burger").click(function () {
    $(".header__nav").toggle("slow");
});


// /*  Форма заказа звонка  */
//
// var orderCallHeader = document.querySelector(".header__order-call");
// var orderForm = document.querySelector(".order-form__wrapper");
// var orderClose = document.querySelector(".order-form__close");
//
// orderCallHeader.addEventListener("click", function () {
//     orderForm.classList.toggle("order-form__wrapper--show");
// });
// orderClose.addEventListener("click", function () {
//     orderForm.classList.toggle("order-form__wrapper--show");
// });
//
//
// function orderCallValidate() {
//     var nameOrderCall = document.querySelector("#order-form__name");
//     var phoneOrderCall = document.querySelector("#order-form__phone");
//     var nameOrderCallWrapper = document.querySelector(".order-form__input-wrapper--name");
//     var phoneOrderCallWrapper = document.querySelector(".order-form__input-wrapper--phone");
//
//     var nameOrderCall_regexp = /[a-zа-я_A-ZА-Я]/i;
//     if (!nameOrderCall_regexp.test(nameOrderCall.value)) {
//         nameOrderCallWrapper.classList.add("order-form__input-wrapper--wrong");
//         // return false;
//     }
//     else {
//         nameOrderCallWrapper.classList.add("order-form__input-wrapper--right");
//     }
//
//     var phoneOrderCall_regexp = /8[0-9]{10}/i;
//     if (!phoneOrderCall_regexp.test(phoneOrderCall.value)) {
//         phoneOrderCallWrapper.classList.add("order-form__input-wrapper--wrong");
//         return false;
//     }
//     else {
//         phoneOrderCallWrapper.classList.add("order-form__input-wrapper--right");
//     }
//
// }


/*  Форма заказа звонка  */

var orderCallHeader = document.querySelector(".header__order-call");
var orderForm = document.querySelector(".order-form__wrapper");
var orderClose = document.querySelector(".order-form__close");

orderCallHeader.addEventListener("click", function () {
    orderForm.classList.toggle("order-form__wrapper--show");
});
orderClose.addEventListener("click", function () {
    orderForm.classList.toggle("order-form__wrapper--show");
});


var nameOrderCall = document.querySelector("#order-form__name");
var phoneOrderCall = document.querySelector("#order-form__phone");
var nameOrderCallWrapper = document.querySelector(".order-form__input-wrapper--name");
var phoneOrderCallWrapper = document.querySelector(".order-form__input-wrapper--phone");

function checkNameOrderCall() {
    nameOrderCallWrapper.classList.remove("order-form__input-wrapper--wrong");
    nameOrderCallWrapper.classList.remove("order-form__input-wrapper--right");
    var nameOrderCall_regexp = /[a-zа-я_A-ZА-Я]/i;
    if (!nameOrderCall_regexp.test(nameOrderCall.value)) {
        nameOrderCallWrapper.classList.add("order-form__input-wrapper--wrong");
        return false;
    }
    else {
        nameOrderCallWrapper.classList.add("order-form__input-wrapper--right");
        return true;
    }
}

function checkPhoneOrderCall() {
    phoneOrderCallWrapper.classList.remove("order-form__input-wrapper--wrong");
    phoneOrderCallWrapper.classList.remove("order-form__input-wrapper--right");
    var phoneOrderCall_regexp = /8[0-9]{10}/i;
    if (!phoneOrderCall_regexp.test(phoneOrderCall.value)) {
        phoneOrderCallWrapper.classList.add("order-form__input-wrapper--wrong");
        return false;
    }
    else {
        phoneOrderCallWrapper.classList.add("order-form__input-wrapper--right");
        return true;
    }
}

function checkAllOrderCall() {
    checkNameOrderCall();
    checkPhoneOrderCall();
}

// /*  Форма заказа проекта  */
//
// var orderProjectButton = document.querySelector(".about__button--left");
// var orderFormProject = document.querySelector(".project-form__wrapper");
// var orderCloseProject = document.querySelector(".project-form__close");
//
// orderProjectButton.addEventListener("click", function () {
//     orderFormProject.classList.toggle("project-form__wrapper--show");
// });
// orderCloseProject.addEventListener("click", function () {
//     orderFormProject.classList.toggle("project-form__wrapper--show");
// });
//
//
// function orderProjectValidate() {
//     var nameOrderProject = document.querySelector("#project-form__name");
//     var emailOrderProject = document.querySelector("#project-form__email");
//     var phoneOrderProject = document.querySelector("#project-form__phone");
//     var nameOrderProjectWrapper = document.querySelector(".project-form__input-wrapper--name");
//     var emailOrderProjectWrapper = document.querySelector(".project-form__input-wrapper--email");
//     var phoneOrderProjectWrapper = document.querySelector(".project-form__input-wrapper--phone");
//
//     var nameOrderProject_regexp = /[a-zа-я_A-ZА-Я]/i;
//     if (!nameOrderProject_regexp.test(nameOrderProject.value)) {
//         nameOrderProjectWrapper.classList.add("project-form__input-wrapper--wrong");
//         // return false;
//     }
//     else {
//         nameOrderProjectWrapper.classList.add("project-form__input-wrapper--right");
//     }
//
//     var emailOrderProject_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
//     if (!emailOrderProject_regexp.test(emailOrderProject.value)) {
//         emailOrderProjectWrapper.classList.add("project-form__input-wrapper--wrong");
//         // return false;
//     }
//     else {
//         emailOrderProjectWrapper.classList.add("project-form__input-wrapper--right");
//     }
//
//     var phoneOrderProject_regexp = /8[0-9]{10}/i;
//     if (!phoneOrderProject_regexp.test(phoneOrderProject.value)) {
//         phoneOrderProjectWrapper.classList.add("project-form__input-wrapper--wrong");
//         return false;
//     }
//     else {
//         phoneOrderProjectWrapper.classList.add("project-form__input-wrapper--right");
//     }
//
// }


/*  Форма заказа проекта  */

var orderProjectButton = document.querySelector(".about__button--left");
var orderProjectButtonApplication = document.querySelector(".application__button--left");
var orderFormProject = document.querySelector(".project-form__wrapper");
var orderCloseProject = document.querySelector(".project-form__close");

orderProjectButton.addEventListener("click", function () {
    orderFormProject.classList.toggle("project-form__wrapper--show");
});
orderProjectButtonApplication.addEventListener("click", function () {
    orderFormProject.classList.toggle("project-form__wrapper--show");
});
orderCloseProject.addEventListener("click", function () {
    orderFormProject.classList.toggle("project-form__wrapper--show");
});
var nameOrderProject = document.querySelector("#project-form__name");
var emailOrderProject = document.querySelector("#project-form__email");
var phoneOrderProject = document.querySelector("#project-form__phone");
var fileOrderProject = document.querySelector("#project-form__file");
var nameOrderProjectWrapper = document.querySelector(".project-form__input-wrapper--name");
var emailOrderProjectWrapper = document.querySelector(".project-form__input-wrapper--email");
var phoneOrderProjectWrapper = document.querySelector(".project-form__input-wrapper--phone");
var fileOrderProjectWrapper = document.querySelector(".project-form__label--file");


function checkNameOrderProject() {
    nameOrderProjectWrapper.classList.remove("project-form__input-wrapper--wrong");
    nameOrderProjectWrapper.classList.remove("project-form__input-wrapper--right");
    var nameOrderProject_regexp = /[a-zа-я_A-ZА-Я]/i;
    if (!nameOrderProject_regexp.test(nameOrderProject.value)) {
        nameOrderProjectWrapper.classList.add("project-form__input-wrapper--wrong");
        return false;
    }
    else {
        nameOrderProjectWrapper.classList.add("project-form__input-wrapper--right");
        return true;
    }
}

function checkEmailOrderProject() {
    emailOrderProjectWrapper.classList.remove("project-form__input-wrapper--wrong");
    emailOrderProjectWrapper.classList.remove("project-form__input-wrapper--right");
    var emailOrderProject_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
    if (!emailOrderProject_regexp.test(emailOrderProject.value)) {
        emailOrderProjectWrapper.classList.add("project-form__input-wrapper--wrong");
        return false;
    }
    else {
        emailOrderProjectWrapper.classList.add("project-form__input-wrapper--right");
        return true;
    }
}

function checkPhoneOrderProject() {
    phoneOrderProjectWrapper.classList.remove("project-form__input-wrapper--wrong");
    phoneOrderProjectWrapper.classList.remove("project-form__input-wrapper--right");
    var phoneOrderProject_regexp = /8[0-9]{10}/i;
    if (!phoneOrderProject_regexp.test(phoneOrderProject.value)) {
        phoneOrderProjectWrapper.classList.add("project-form__input-wrapper--wrong");
        return false;
    }
    else {
        phoneOrderProjectWrapper.classList.add("project-form__input-wrapper--right");
        return true;
    }
}

function checkFileOrderProject() {
    fileOrderProjectWrapper.classList.remove("project-form__label--file--right");
    if (fileOrderProject.value === 0 && fileOrderProject.value === undefined && fileOrderProject.value === "") {
        fileOrderProjectWrapper.classList.remove("project-form__label--file--right");
        return false;
    }
    else {
        fileOrderProjectWrapper.classList.add("project-form__label--file--right");
        return true;
    }
}

function checkAllOrderProject() {
    // alert(fileOrderProject.value);
    checkNameOrderProject();
    checkEmailOrderProject();
    checkPhoneOrderProject();
    checkFileOrderProject();
}


// /*  Форма заказа рассчета  */
//
// var orderCalculationButton = document.querySelector(".about__button--right");
// var orderFormCalculation = document.querySelector(".calculation-form__wrapper");
// var orderCloseCalculation = document.querySelector(".calculation-form__close");
//
// orderCalculationButton.addEventListener("click", function () {
//     orderFormCalculation.classList.toggle("calculation-form__wrapper--show");
// });
// orderCloseCalculation.addEventListener("click", function () {
//     orderFormCalculation.classList.toggle("calculation-form__wrapper--show");
// });
//
//
// function orderCalculationValidate() {
//     var nameOrderCalculation = document.querySelector("#calculation-form__name");
//     var emailOrdercalculation = document.querySelector("#calculation-form__email");
//     var phoneOrderCalculation = document.querySelector("#calculation-form__phone");
//     var nameOrderCalculationWrapper = document.querySelector(".calculation-form__input-wrapper--name");
//     var emailOrderCalculationWrapper = document.querySelector(".calculation-form__input-wrapper--email");
//     var phoneOrderCalculationWrapper = document.querySelector(".calculation-form__input-wrapper--phone");
//
//     var nameOrderCalculation_regexp = /[a-zа-я_A-ZА-Я]/i;
//     if (!nameOrderCalculation_regexp.test(nameOrderCalculation.value)) {
//         nameOrderCalculationWrapper.classList.add("calculation-form__input-wrapper--wrong");
//         // return false;
//     }
//     else {
//         nameOrderCalculationWrapper.classList.add("calculation-form__input-wrapper--right");
//     }
//
//     var emailOrderCalculation_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
//     if (!emailOrderCalculation_regexp.test(emailOrdercalculation.value)) {
//         emailOrderCalculationWrapper.classList.add("calculation-form__input-wrapper--wrong");
//         // return false;
//     }
//     else {
//         emailOrderCalculationWrapper.classList.add("calculation-form__input-wrapper--right");
//     }
//
//     var phoneOrderCalculation_regexp = /8[0-9]{10}/i;
//     if (!phoneOrderCalculation_regexp.test(phoneOrderCalculation.value)) {
//         phoneOrderCalculationWrapper.classList.add("calculation-form__input-wrapper--wrong");
//         return false;
//     }
//     else {
//         phoneOrderCalculationWrapper.classList.add("calculation-form__input-wrapper--right");
//     }
//
// }


/*  Форма заказа рассчета  */

var orderCalculationButton = document.querySelector(".about__button--right");
var orderCalculationButtonApplication = document.querySelector(".application__button--right");
var orderFormCalculation = document.querySelector(".calculation-form__wrapper");
var orderCloseCalculation = document.querySelector(".calculation-form__close");

orderCalculationButton.addEventListener("click", function () {
    orderFormCalculation.classList.toggle("calculation-form__wrapper--show");
});
orderCalculationButtonApplication.addEventListener("click", function () {
    orderFormCalculation.classList.toggle("calculation-form__wrapper--show");
});
orderCloseCalculation.addEventListener("click", function () {
    orderFormCalculation.classList.toggle("calculation-form__wrapper--show");
});


var nameOrderCalculation = document.querySelector("#calculation-form__name");
var emailOrdercalculation = document.querySelector("#calculation-form__email");
var phoneOrderCalculation = document.querySelector("#calculation-form__phone");
var nameOrderCalculationWrapper = document.querySelector(".calculation-form__input-wrapper--name");
var emailOrderCalculationWrapper = document.querySelector(".calculation-form__input-wrapper--email");
var phoneOrderCalculationWrapper = document.querySelector(".calculation-form__input-wrapper--phone");

function checkNameOrderCalculation() {
    nameOrderCalculationWrapper.classList.remove("calculation-form__input-wrapper--wrong");
    nameOrderCalculationWrapper.classList.remove("calculation-form__input-wrapper--right");
    var nameOrderCalculation_regexp = /[a-zа-я_A-ZА-Я]/i;
    if (!nameOrderCalculation_regexp.test(nameOrderCalculation.value)) {
        nameOrderCalculationWrapper.classList.add("calculation-form__input-wrapper--wrong");
        return false;
    }
    else {
        nameOrderCalculationWrapper.classList.add("calculation-form__input-wrapper--right");
        return true;
    }
}

function checkEmailOrderCalculation() {
    emailOrderCalculationWrapper.classList.remove("calculation-form__input-wrapper--wrong");
    emailOrderCalculationWrapper.classList.remove("calculation-form__input-wrapper--right");
    var emailOrderCalculation_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
    if (!emailOrderCalculation_regexp.test(emailOrdercalculation.value)) {
        emailOrderCalculationWrapper.classList.add("calculation-form__input-wrapper--wrong");
        return false;
    }
    else {
        emailOrderCalculationWrapper.classList.add("calculation-form__input-wrapper--right");
        return true;
    }
}

function checkPhoneOrderCalculation() {
    phoneOrderCalculationWrapper.classList.remove("calculation-form__input-wrapper--wrong");
    phoneOrderCalculationWrapper.classList.remove("calculation-form__input-wrapper--right");
    var phoneOrderCalculation_regexp = /8[0-9]{10}/i;
    if (!phoneOrderCalculation_regexp.test(phoneOrderCalculation.value)) {
        phoneOrderCalculationWrapper.classList.add("calculation-form__input-wrapper--wrong");
        return false;
    }
    else {
        phoneOrderCalculationWrapper.classList.add("calculation-form__input-wrapper--right");
        return true;
    }
}

function checkAllOrderCalculation() {
    checkNameOrderCalculation();
    checkEmailOrderCalculation();
    checkPhoneOrderCalculation();
}



/*  Форма заказа звонка в футере  */

var orderCallFooterButton = document.querySelector(".footer__call");
var orderFormCallFooter = document.querySelector(".call-form__wrapper");
var orderCloseCallFooter = document.querySelector(".call-form__close");

orderCallFooterButton.addEventListener("click", function () {
    orderFormCallFooter.classList.toggle("call-form__wrapper--show");
});
orderCloseCallFooter.addEventListener("click", function () {
    orderFormCallFooter.classList.toggle("call-form__wrapper--show");
});


var nameOrderCallFooter = document.querySelector("#call-form__name");
var emailOrderCallFooter = document.querySelector("#call-form__email");
var phoneOrderCallFooter = document.querySelector("#call-form__phone");
var nameOrderCallFooterWrapper = document.querySelector(".call-form__input-wrapper--name");
var emailOrderCallFooterWrapper = document.querySelector(".call-form__input-wrapper--email");
var phoneOrderCallFooterWrapper = document.querySelector(".call-form__input-wrapper--phone");

function checkNameOrderCallFooter() {
    nameOrderCallFooterWrapper.classList.remove("call-form__input-wrapper--wrong");
    nameOrderCallFooterWrapper.classList.remove("call-form__input-wrapper--right");
    var nameOrderCallFooter_regexp = /[a-zа-я_A-ZА-Я]/i;
    if (!nameOrderCallFooter_regexp.test(nameOrderCallFooter.value)) {
        nameOrderCallFooterWrapper.classList.add("call-form__input-wrapper--wrong");
        return false;
    }
    else {
        nameOrderCallFooterWrapper.classList.add("call-form__input-wrapper--right");
        return true;
    }
}

function checkEmailOrderCallFooter() {
    emailOrderCallFooterWrapper.classList.remove("call-form__input-wrapper--wrong");
    emailOrderCallFooterWrapper.classList.remove("call-form__input-wrapper--right");
    var emailOrderCallFooter_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
    if (!emailOrderCallFooter_regexp.test(emailOrderCallFooter.value)) {
        emailOrderCallFooterWrapper.classList.add("call-form__input-wrapper--wrong");
        return false;
    }
    else {
        emailOrderCallFooterWrapper.classList.add("call-form__input-wrapper--right");
        return true;
    }
}

function checkPhoneOrderCallFooter() {
    phoneOrderCallFooterWrapper.classList.remove("call-form__input-wrapper--wrong");
    phoneOrderCallFooterWrapper.classList.remove("call-form__input-wrapper--right");
    var phoneOrderCallFooter_regexp = /8[0-9]{10}/i;
    if (!phoneOrderCallFooter_regexp.test(phoneOrderCallFooter.value)) {
        phoneOrderCallFooterWrapper.classList.add("call-form__input-wrapper--wrong");
        return false;
    }
    else {
        phoneOrderCallFooterWrapper.classList.add("call-form__input-wrapper--right");
        return true;
    }
}

function checkAllOrderCallFooter() {
    checkNameOrderCallFooter();
    checkEmailOrderCallFooter();
    checkPhoneOrderCallFooter();
}