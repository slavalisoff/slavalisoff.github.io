function copy(str) {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function copyDiscord() {
  copy("s1ava.lisoff#7182")
  alert("Username copied. Please continue in Discord!")
}

function openVK() {
  alert("Now you are being redirected to VK")
  window.open("https://vk.com/s1ava.lisoff")
}

function openTelegram() {
  alert("Now you are being redirected to Telegram")
  window.open("https://t.me/s1avalisoff")
}

function openGitHub() {
  alert("Now you are being redirected to GitHub")
  window.open("https://github.com/s1avalisoff")
}

function copyMailOne() {
  copy("s1ava.lisoff@yandex.ru")
  alert("E-Mail copied!")
}

function copyMailTwo() {
  copy("slavalisoff06@gmail.com")
  alert("E-Mail copied!")
}
