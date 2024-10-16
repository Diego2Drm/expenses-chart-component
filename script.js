const items = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const container = document.querySelector(".container");
const newList = document.createElement("ul");

container.appendChild(newList);

items.forEach((item) => {
  const listItems = document.createElement("li");
  const percentage = document.createElement("div");
  const span = document.createElement("span");
  span.classList.add("percentage");

  listItems.textContent = item.day;
  percentage.style.height = item.amount * 3 + "px";
  span.textContent = `$${item.amount}`;

  percentage.appendChild(span)
  listItems.appendChild(percentage);
  newList.appendChild(listItems);
});
