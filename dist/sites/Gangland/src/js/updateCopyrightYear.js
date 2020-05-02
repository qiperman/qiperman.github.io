const dateWrapper = document.getElementById("currentYear");

if (dateWrapper) {
  dateWrapper.innerText = new Date().getFullYear();
}
