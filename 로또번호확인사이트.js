const handleCheckButton = () => {
  const trElements = document.querySelectorAll(
    "#sometime tr:not(:first-child) td:not(:first-child), #cachi tr:not(:first-child) td:not(:first-child), #tenz tr:not(:first-child) td:not(:first-child)"
  );

  let hasMatchingNumbers = false;

  const storedPostMalone = JSON.parse(localStorage.getItem("postMalone"));

  for (let i = 0; i < storedPostMalone.length; i++) {
    const lottoNumbers = storedPostMalone[i];

    let matchedCount = 0;

    const tdElements = trElements[i].querySelectorAll("td:not(:first-child)");
    for (let j = 0; j < tdElements.length; j++) {
      const tdNumber = parseInt(tdElements[j].innerText.trim());
      if (!isNaN(tdNumber) && lottoNumbers.includes(tdNumber)) {
        matchedCount++;
      }
    }

    if (matchedCount === 7) {
      hasMatchingNumbers = true;
      break;
    }
  }
  if (hasMatchingNumbers) {
    setTimeout(function () {
      alert("와 이게 당첨 된가고???");
    }, 1500);
  } else {
    setTimeout(function () {
      alert("까비요~");
    }, 1500);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  handleCheckButton();
  const buttonclick = document.querySelector(".즈하맘");
  if (buttonclick) {
  }
});
