"use strict";
// input
const userName = document.querySelector("#text");
const userPassword = document.querySelector("#password");
const btn = document.querySelector(".login-btn");
const sidebar = document.querySelector(".sidebar");
const insight = document.querySelector(".insights");
const logOut = document.querySelector(".log-out");

const currentName = "bappy";
const currentPassword = 1111;

const adminBtn = document.querySelector("#admin");
const form = document.querySelector(".user-input");

function formShow() {
  form.style.opacity = 1;
}

function sidebarShow() {
  sidebar.style.opacity = 1;
  sidebar.style.visibility = "visible";
}

function sidebarHide() {
  sidebar.style.opacity = 0;
  sidebar.style.visibility = "hidden";
}

function insightShow() {
  insight.style.opacity = 1;
  insight.style.visibility = "visible";
}

function insightHide() {
  insight.style.opacity = 0;
  insight.style.visibility = "hidden";
}

adminBtn.addEventListener("click", function () {
  formShow();
});

btn.addEventListener("click", function () {
  if (userName.value === currentName) {
    if (Number(userPassword.value) === currentPassword) {
      sidebarShow();
      insightShow();
      form.style.display = "none";
    }
  }
});

logOut.addEventListener("click", function () {
  sidebarHide();
  insightHide();
});
