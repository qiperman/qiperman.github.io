// https://github.com/Pikaday/Pikaday

import Pikaday from "pikaday";

import $moment from "moment";

const defaultValues = {
  dateFrom: new Date(),
  dateTo: $moment(new Date()).add(1, "week").toDate(),
  guests: 3
};

const dateFromInput = document.querySelector(".js-date-from");
const dateToInput = document.querySelector(".js-date-to");

// eslint-disable-next-line import/no-mutable-exports
let dateFrom = null;
// eslint-disable-next-line import/no-mutable-exports
let dateTo = null;

const setDateFrom = (date) => {
  const parent = dateFromInput.parentElement;
  const selectedText = parent.querySelector(".page-booking__input-selected");
  const selectedSubText = parent.querySelector(".page-booking__input-select-text");
  selectedText.textContent = $moment(date).format("DD");
  selectedSubText.textContent = $moment(date).format("MMM");
};

const setDateTo = (date) => {
  const parent = dateToInput.parentElement;
  const selectedText = parent.querySelector(".page-booking__input-selected");
  const selectedSubText = parent.querySelector(".page-booking__input-select-text");
  selectedText.textContent = $moment(date).format("DD");
  selectedSubText.textContent = $moment(date).format("MMM");
};

if (dateFromInput) {
  dateFromInput.value = new Date();

  dateFrom = new Pikaday({
    field: dateFromInput,
    defaultDate: defaultValues.dateFrom,
    setDefaultDate: true,
    firstDay: 1,
    minDate: new Date(),
    onSelect(date) {
      setDateFrom(date);
    }
  });
}
if (dateToInput) {
  dateTo = new Pikaday({
    field: dateToInput,
    defaultDate: defaultValues.dateTo,
    setDefaultDate: true,
    minDate: $moment(dateFromInput.value)
      .add(1, "day").toDate(),
    onSelect(date) {
      setDateTo(date);
    }
  });
}


const select = document.querySelector(".js-date-guests");
const selectWrapper = select.parentElement;
const selectedText = selectWrapper.querySelector(".page-booking__input-selected");
const selectedSubText = selectWrapper.querySelector(".page-booking__input-select-text");

const selectSetValue = (value) => {
  selectedText.textContent = value;
  selectedSubText.textContent = value;
};

select.addEventListener("change", () => {
  selectSetValue(select.value);
});

const setDefaultValues = () => {
  select.value = defaultValues.guests;
  selectSetValue(defaultValues.guests);

  setDateFrom(defaultValues.dateFrom);
  setDateTo(defaultValues.dateTo);
};

setDefaultValues();


export { dateFrom, dateTo };
