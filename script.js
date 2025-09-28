const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu__icon");

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });

  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu")) {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("lock");
    }
  });

  menu.querySelectorAll(".menu__link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("lock");
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("lock");
    }
  });
}

// При нажатии подсвечивается другим светом

const linksContainer = document.querySelector(".menu__list");

linksContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    const links = linksContainer.querySelectorAll(".menu__link");
    links.forEach((link) => {
      link.classList.remove("link__active");
    });

    e.target.classList.add("link__active");
  }
});

// Accordeon

const headersAccordeon = document.querySelectorAll(".accordeon__header");
const contentsAccordeon = document.querySelectorAll(".accordeon__content");

headersAccordeon.forEach((item) =>
  item.addEventListener("click", () => {
    const activeContent = document.querySelector("#" + item.dataset.tab);

    if (activeContent.classList.contains("show")) {
      activeContent.classList.remove("show");
      item.classList.remove("show");
      activeContent.style.maxHeight = 0;
    } else {
      contentsAccordeon.forEach((el) => {
        el.classList.remove("show");
        el.style.maxHeight = 0;
      });

      headersAccordeon.forEach((el) => el.classList.remove("show"));

      item.classList.add("show");
      activeContent.classList.add("show");
      activeContent.style.maxHeight = activeContent.scrollHeight + "px";
    }

    if (item.classList.contains("show")) {
      item.classList.add("color--aqua");
    } else {
      item.classList.remove("color--aqua");
    }
  })
);

document.querySelector('[data-tab="tab-3"]').classList.add("show");
document.querySelector("#tab-3").classList.add("show");
document.querySelector("#tab-3").style.maxHeight =
  document.querySelector("#tab-3").scrollHeight + "px";

// Input Range

const rangeSum = document.querySelector(".sum__range-input");
const rangeValueSum = document.querySelector(".sum__range");
const sumLoanInfo = document.querySelector(".take__info");
const sumReturnInfo = document.querySelector(".sum-return__info");
const rangeSumLoanRightNow = document.querySelector(
  ".sum__range-input-loan-right-now"
);
const rangeValueSumLoanRightNow = document.querySelector(
  ".sum__loan-right-now"
);
const resultSumRangeLoan = document.querySelector(
  ".sum__group-result-len-right-now"
);
const rangeTrem = document.querySelector(".term__range-input");
const rangeValueTrem = document.querySelector(".term__range");
const rangeTremLoanRightNow = document.querySelector(
  ".trem__range-input-loan-right-now"
);
const rangeValueTremLoanRightNow = document.querySelector(
  ".trem__loan-right-now"
);

function rangeSumInput() {
  rangeSum.addEventListener("input", () => {
    rangeValueSum.textContent = rangeSum.value;
  });
}

function rangeTremInput() {
  rangeTrem.addEventListener("input", () => {
    rangeValueTrem.textContent = rangeTrem.value;
  });
}

function sumReturInfo() {
  rangeSum.addEventListener("input", () => {
    sumReturnInfo.textContent = Number(rangeSum.value) + 2000 + " руб";
  });
}

function rangeSumInputLoanRightNow() {
  rangeSumLoanRightNow.addEventListener("input", () => {
    rangeValueSumLoanRightNow.textContent = rangeSumLoanRightNow.value;
  });
}

function ResultSumReturnLoan() {
  rangeSumLoanRightNow.addEventListener("input", () => {
    resultSumRangeLoan.textContent =
      Number(rangeSumLoanRightNow.value) + 2000 + " руб";
  });
}

function rangeTremInputLoanRightNow() {
  rangeTremLoanRightNow.addEventListener("input", () => {
    rangeValueTremLoanRightNow.textContent = rangeTremLoanRightNow.value;
  });
}

function resultSumReturnInfo() {
  rangeSum.addEventListener("input", () => {
    sumLoanInfo.textContent = rangeSum.value + " руб";
  });
}

rangeSumInputLoanRightNow();

resultSumReturnInfo();

sumReturInfo();

rangeSumInput();

rangeTremInput();

ResultSumReturnLoan();

rangeTremInputLoanRightNow();

sumReturnInfo.textContent = Number(rangeSum.value) + 2000 + " руб";

resultSumRangeLoan.textContent =
  Number(rangeSumLoanRightNow.value) + 2000 + " руб";
sumLoanInfo.textContent = rangeSum.value + " руб";

// Btn Submit

const btnsSubmit = document.querySelectorAll(
  '[data-tab-btn-submit="btnSubmit"]'
);
const inputNameModal = document.querySelector(".name__input");
const inputNumberModal = document.querySelector(".number__input");
const modal = document.querySelector(".modal__window");
const modalSubmitBtn = document.querySelector(".submit__modal-form");
const succesBid = document.querySelector(".success__bid");
const textContentSuccessBid = document.querySelector(".text__success-bid");
const form = document.querySelector(".form__modal");
const btnDisabled = document.querySelector(".submit__modal-form-disable");
const titleModal = document.querySelector(".title__modal");
const closeModalElement = document.querySelector(".close__modal-el");
const textInfoSuccesBid = document.querySelector(
  ".text__info-content-success-bid"
);
const phonePattern = /^\+?\d{10,15}$/;
const titleInputNameModal = document.querySelector(".title__input-name");
const titleInputNumberModal = document.querySelector(".title__input-number");
const modalContent = document.querySelector(".modal__content");

btnsSubmit.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("show-modal");
    body.classList.add("lock");
    window.scrollTo(0, 0);
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("show-modal");
    body.classList.remove("lock");
  }
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("show-modal")) {
    modal.classList.remove("show-modal");
    body.classList.remove("lock");
  }
});

modalSubmitBtn.addEventListener("click", () => {
  modal.classList.remove("show-modal");
  succesBid.classList.add("show__success-bid");
  body.classList.remove("lock");
  if (
    inputNumberModal.value.length !== 11 ||
    !phonePattern.test(inputNumberModal.value.trim())
  ) {
    textContentSuccessBid.textContent = "Заявка не отправлена ❌";
    succesBid.style.backgroundColor = "#dd3737";
    textInfoSuccesBid.style.display = "block";
  } else {
    textContentSuccessBid.textContent = "Заявка успешно отправлена ✅";
    succesBid.style.backgroundColor = "#2eb52e";
    btnDisabled.style.display = "block";
    modalSubmitBtn.style.display = "none";
    titleModal.textContent = "Ваша заявка отправлена";
    textInfoSuccesBid.style.display = "none";
    inputNameModal.style.display = "none";
    inputNumberModal.style.display = "none";
    titleInputNameModal.style.display = "none";
    titleInputNumberModal.style.display = "none";
    modalContent.style.padding = "15px";
  }

  form.reset();
  setTimeout(() => {
    succesBid.classList.remove("show__success-bid");
  }, 2000);
});

closeModalElement.addEventListener("click", () => {
  modal.classList.remove("show-modal");
  body.classList.remove("lock");
});

// Modal money

const modalVisitMoney = document.querySelector(".modal__visit-money");
const closeBtnModal = document.querySelector(".close__modal-visit-money");
const inputCard = document.querySelector(".input__visit-money-card");
const inputCardExpirationDate = document.querySelector(".input__visit-money-card-expiration-date");
const inputCardSvv = document.querySelector(".input__visit-money-svv-card");
const modalBtnSubmitVisitMoney = document.querySelector(".btn__submit-visit-money");
const btnOpenModal = document.querySelector(".btn__loan-rught-now");
const subtitleSuccessBid = document.querySelector('.text__info-content-success-bid')
const formVisitMoney = document.querySelector('.form__money-visit-modal')
const btnSubmitVisitMoneyDisabled = document.querySelector('.submit__modal-visit-money-disable')
const titleInputVisitCardOne = document.querySelector('.title__modal-visit-money-svv-card')
const titleInputVisitCardTwo = document.querySelector('.title__modal-visit-money-expiration-date')
const titleInputVisitCardThree = document.querySelector('.title__modal-visit-money-card')
const titleVisitModal = document.querySelector('.title__visit-money-modal')
const textVisitModal = document.querySelector('.text__visit-money-modal')

btnOpenModal.addEventListener("click", () => {
  modalVisitMoney.classList.add("show-modal-visit-money");
  body.classList.add("lock");
});

modalVisitMoney.addEventListener("click", (e) => {
  if (e.target.classList.contains("show-modal-visit-money")) {
    modalVisitMoney.classList.remove("show-modal-visit-money");
    body.classList.remove("lock");
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalVisitMoney.classList.remove("show-modal-visit-money");
    body.classList.remove("lock");
  }
});

closeBtnModal.addEventListener("click", () => {
  modalVisitMoney.classList.remove("show-modal-visit-money");
  body.classList.remove("lock");
});

modalBtnSubmitVisitMoney.addEventListener("click", () => {
  modalVisitMoney.classList.remove("show-modal-visit-money");
  succesBid.classList.add("show__success-bid");
  body.classList.remove("lock");
  if (
    inputCard.value.length < 19 || inputCardExpirationDate.value.length < 5 || inputCardSvv.value.length < 3) {
    textContentSuccessBid.textContent = "Заявка не отправлена ❌";
    succesBid.style.backgroundColor = "#dd3737";
    textInfoSuccesBid.style.display = "block";
    subtitleSuccessBid.textContent = '(Введите коректные данные)'
  } else {
    textContentSuccessBid.textContent = "Ваша заявка успешно отправлена ✅";
    succesBid.style.backgroundColor = "#2eb52e";
    btnSubmitVisitMoneyDisabled.style.display = "block";
    btnSubmitVisitMoneyDisabled.style.marginTop = "0px";
    modalBtnSubmitVisitMoney.style.display = "none";
    titleVisitModal.textContent = "Ваша заявка на займ отправлена 💸";
    titleVisitModal.style.marginBottom = '5px'
    textInfoSuccesBid.style.display = "none";
    textVisitModal.style.display = 'block'
    textVisitModal.style.marginBottom = '0px'
    inputCard.style.display = "none";
    inputCardExpirationDate.style.display = "none";
    inputCardSvv.style.display = "none";
    titleInputVisitCardOne.style.display = "none";
    titleInputVisitCardTwo.style.display = "none";
    titleInputVisitCardThree.style.display = "none";
  }

  formVisitMoney.reset();
  setTimeout(() => {
    succesBid.classList.remove("show__success-bid");
  }, 2000);
});


inputCardExpirationDate.addEventListener('input', function ()  {
  let digits = this.value.replace(/\D/g, "")
  digits = digits.slice(0, 4)
  let formated = digits.match(/.{1,2}/g)?.join('/') || ""
  this.value = formated
})

inputCard.addEventListener('input', function () {
  let digits = this.value.replace(/\D/g, "")
  digits = digits.slice(0, 19)
  let formated = digits.match(/.{1,4}/g)?.join('-') || ""
  this.value = formated
})
