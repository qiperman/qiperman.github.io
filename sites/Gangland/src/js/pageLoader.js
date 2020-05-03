document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".page-loading_active");

  setTimeout(() => {
    document.body.style.overflow = "auto";

    if (wrapper) {
      wrapper.classList.remove("page-loading_active");

      setTimeout(() => {
        wrapper.remove();
      }, 310);
    }
  }, 1000);
});
