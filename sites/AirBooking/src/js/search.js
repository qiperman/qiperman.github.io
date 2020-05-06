const search = document.querySelector(".header-search");
const searchIcon = document.querySelector(".header-search__icon");
const searchInput = search.querySelector("input");
const activeClass = "header-search_active";

const clickOutside = (event) => {
  if (!(event.target === search || search.contains(event.target))) {
    // eslint-disable-next-line no-use-before-define
    closeInput();
  }
};

const closeInput = () => {
  search.classList.remove(activeClass);
  searchInput.value = "";
  searchInput.blur();
  window.removeEventListener("click", clickOutside);
};

const openInput = () => {
  search.classList.add(activeClass);
  searchInput.focus();
};

if (search) {
  searchIcon.addEventListener("click", () => {
    if (!search.classList.contains(activeClass)) {
      openInput();
      window.addEventListener("click", clickOutside);
    }
  });
}
