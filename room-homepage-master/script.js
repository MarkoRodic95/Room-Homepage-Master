"use strict";

let tracker = 1;
let topLeftDiv = document.querySelector(".top-left");
let topRightTitle = document.querySelector("h1");
let topRightText = document.querySelector("#topRightText");

function backgroundImage(param) {
  return `url('images/desktop-image-hero-${param}.jpg')`;
}

function setTitle(param) {
  if (param === 2) {
    return "We are available all across the globe";
  } else if (param === 3) {
    return "Manufactured with the best materials";
  } else {
    return "Discover innovative ways to decorate";
  }
}

function setText(param) {
  if (param === 2) {
    return `With stores all over the world, it's easy for you to find furniture for your
            home or place of business. Locally, we’re in most major cities throughout
            the country. Find the branch nearest you using our store locator. Any
            questions? Don't hesitate to contact us today.`;
  } else if (param === 3) {
    return `Our modern furniture store provide a high level of quality. Our company has
                invested in advanced technology to ensure that every product is made as
                perfect and as consistent as possible. With three decades of experience in
                this industry, we understand what customers want for their home and office.`;
  } else {
    return "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
  }
}

function pageChange(param) {
  topLeftDiv.style.backgroundImage = backgroundImage(param);
  topRightTitle.innerHTML = setTitle(param);
  topRightText.innerHTML = setText(param);
}

document.getElementById("rightArrow").addEventListener("click", function () {
  if (tracker === 1) {
    pageChange(2);
    tracker = 2;
  } else if (tracker === 2) {
    pageChange(3);
    tracker = 3;
  } else if (tracker === 3) {
    pageChange(1);
    tracker = 1;
  }
});

document.getElementById("leftArrow").addEventListener("click", function () {
  if (tracker === 1) {
    pageChange(3);
    tracker = 3;
  } else if (tracker === 3) {
    pageChange(2);
    tracker = 2;
  } else if (tracker === 2) {
    pageChange(1);
    tracker = 1;
  }
});

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
