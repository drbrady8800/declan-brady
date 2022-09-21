import theme from '../theme/theme';
var root = document.getElementsByTagName("html")[0];

export function mountBodyDarkMode() {
  document.body.style.backgroundColor = theme.colors.black;
  root.style.backgroundColor = theme.colors.black;
}
export function unmountBodyDarkMode() {
  document.body.style.backgroundColor = "";
  root.style.backgroundColor = "";
}