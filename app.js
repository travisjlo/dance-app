 // pair.html logic
  let originalList1 = [];
  let originalList2 = [];
  let availableList1 = [];
  let availableList2 = [];
  let isInitialized = false;

  const list1Input = document.getElementById("list1Input");
  const list2Input = document.getElementById("list2Input");
  const list1Display = document.getElementById("list1Display");
  const list2Display = document.getElementById("list2Display");
  const result = document.getElementById("result");

  function initializeLists() {
    originalList1 = list1Input.value.split("\n").filter(Boolean);
    originalList2 = list2Input.value.split("\n").filter(Boolean);

    availableList1 = [...originalList1];
    availableList2 = [...originalList2];

    isInitialized = true;
    result.textContent = "";
  }

  function getRandomItem(list) {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
  }

  document.getElementById("pairBtn").addEventListener("click", () => {
  // Initialize lists if not already initialized
   if (!isInitialized) {
    initializeLists();
  }

  if (availableList1.length === 0 || availableList2.length === 0) {
    result.textContent = "No more pairs available.";
    return;
  }

  const item1 = getRandomItem(availableList1);
  const item2 = getRandomItem(availableList2);

  availableList1 = availableList1.filter(item => item !== item1);
  availableList2 = availableList2.filter(item => item !== item2);

  result.textContent =`${item1} ❤️ ${item2}`;

});

  document.getElementById("resetBtn").addEventListener("click", () => {
    availableList1 = [...originalList1];
    availableList2 = [...originalList2];
    result.textContent = "Lists reset.";

  });

  document.getElementById("clearBtn").addEventListener("click", () => {
    list1Input.value = "";
    list2Input.value = "";
    originalList1 = [];
    originalList2 = [];
    availableList1 = [];
    availableList2 = [];
    isInitialized = false;
    list1Display.innerHTML = "";
    list2Display.innerHTML = "";
    result.textContent = "Lists cleared.";
  });
