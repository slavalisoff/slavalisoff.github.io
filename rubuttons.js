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
  alert("Имя пользователя скопировано. Пожалуйста продолжите в Discord!")
}

function openVK() {
  alert("Сейчас вас перенаправит во ВКонтакте")
  window.open("https://vk.com/s1ava.lisoff")
}

function openTelegram() {
  alert("Сейчас вас перенаправит в Телеграм")
  window.open("https://t.me/s1avalisoff")
}

function openGitHub() {
  alert("Сейчас вас перенаправит в GitHub")
  window.open("https://github.com/s1avalisoff")
}

function copyMailOne() {
  copy("s1ava.lisoff@yandex.ru")
  alert("E-Mail скопирован!")
}

function copyMailTwo() {
  copy("slavalisoff06@gmail.com")
  alert("E-Mail скопирован!")
}
