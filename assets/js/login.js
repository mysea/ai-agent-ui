const $ = (s) => document.querySelector(s);

const form = $("#loginForm");
const tip = $("#tip");
const pwd = $("#password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    tip.style.color = getComputedStyle(document.documentElement).getPropertyValue("--danger").trim() || "#f04438";
    tip.textContent = "";

    const username = $("#username").value.trim();
    const password = $("#password").value.trim();

    if (!username) return tip.textContent = "请输入账号";
    if (!password) return tip.textContent = "请输入密码";
    if (password.length < 6) return tip.textContent = "密码至少 6 位";

    setTimeout(() => {
        location.href = "/index.html";
    }, 500);
});
