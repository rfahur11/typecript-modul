// Fungsi untuk mengambil elemen
const getElement = <T extends HTMLElement>(id: string): T => {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Element dengan id ${id} tidak ditemukan`);
  }
  return element as T;
};

//Mengambil dari HTML
const num1Input = getElement<HTMLInputElement>("num1");
const num2Input = getElement<HTMLInputElement>("num2");
const resultSpan = getElement<HTMLSpanElement>("result");

const addButton = getElement<HTMLButtonElement>("tambah");
const subtractButton = getElement<HTMLButtonElement>("kurang");
const multiplyButton = getElement<HTMLButtonElement>("kali");
const divideButton = getElement<HTMLButtonElement>("bagi");

//Fungsi Kalkulator
const calculate = (operator: string): void => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultSpan.textContent = "Fak ini bukan angka";
  }

  let result: number;

  switch (operator) {
    case "tambah":
      result = num1 + num2;
      break;
    case "kurang":
      result = num1 - num2;
      break;
    case "kali":
      result = num1 * num2;
      break;
    case "bagi":
      result = num1 / num2;
      break;

    default:
      resultSpan.textContent = "Operator tidak dikenal";
      return;
  }

  resultSpan.textContent = result.toString();
};

// Tambahkan event listener pada elemen tombol
addButton.addEventListener("click", () => {
  calculate("tambah");
});

subtractButton.addEventListener("click", () => {
  calculate("kurang");
});

multiplyButton.addEventListener("click", () => {
  calculate("kali");
});

divideButton.addEventListener("click", () => {
  calculate("bagi");
});
