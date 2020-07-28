const setColorSchema = (evt) => {
  if (evt.matches) {
    document.getElementById("menu").classList.remove("light");
    document.querySelector("body").classList.remove("light");
    document.querySelector("#switch-theme").checked = false;
    setImageMode({ isDark: true });
  } else {
    document.getElementById("menu").classList.add("light");
    document.querySelector("body").classList.add("light");
    document.querySelector("#switch-theme").checked = true;
    setImageMode({ isDark: false });
  }
};

export const setImageMode = ({ isDark = false } = {}) => {
  const $manComputing = document.getElementById("wrapper-img");
  const $editor = document.getElementById("wrapper-img-github");
  let url = $manComputing.getAttribute("data-src");
  let urlGithub = $editor.getAttribute("data-src");
  url = !isDark ? url.replace("code", "code-light") : url;
  urlGithub = !isDark
    ? urlGithub.replace("hacker_mindset", "hacker_mindset_ligth")
    : urlGithub;
  $manComputing.setAttribute("src", url);
  $editor.setAttribute("src", urlGithub);
};

const initColorSchema = () => {
  const userPrefersDark =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
  const colorSchema = window.matchMedia("(prefers-color-scheme: dark)");

  setColorSchema(userPrefersDark);
  colorSchema.addListener(setColorSchema);
};

export default initColorSchema;
export const isSafari = navigator.userAgent.indexOf("Safari") != -1;
