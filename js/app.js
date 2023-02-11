const form = document.querySelector("form");
const productsQuantity = document.getElementById("products");
const ordersQuantity = document.getElementById("orders");
const packageSelect = document.querySelector(".select__input");
const selectOptions = document.querySelector(".select__dropdown");
const checkboxAccounting = document.getElementById("accounting");
const checkboxTerminal = document.getElementById("terminal");
const costOfSelectedProducts = document.querySelector('[data-id="products"]');
const costOfSelectedOrders = document.querySelector('[data-id="orders"]');
const costOfSelectedPackage = document.querySelector('[data-id="package"]');
const costOfAccounting = document.querySelector('[data-id="accounting"]');
const costOfTerminal = document.querySelector('[data-id="terminal"]');
let costTotal = document.querySelector(".total__price");
document.querySelectorAll(".list__item").forEach(function (element) {
    element.style.display = "flex";
});
productsQuantity.addEventListener('change', function () {
    costOfSelectedProducts.children[1].innerText = this.value + " * $0.5";
    costOfSelectedProducts.children[2].innerText =  "$" + this.value * 0.5;
});

productsQuantity.addEventListener('keyup', function () {
    costOfSelectedProducts.children[1].innerText = this.value + " * $0.5";
    costOfSelectedProducts.children[2].innerText =  "$" + this.value * 0.5;
});

ordersQuantity.addEventListener('change', function () {
    costOfSelectedOrders.children[1].innerText = this.value + " * $2";
    costOfSelectedOrders.children[2].innerText = "$" + this.value * 2;
    });

ordersQuantity.addEventListener('keyup', function () {
    costOfSelectedOrders.children[1].innerText = this.value + " * $2";
    costOfSelectedOrders.children[2].innerText = "$" + this.value * 2;
});

packageSelect.addEventListener('click', function () {
    selectOptions.style.display = "block";
})

selectOptions.children[0].addEventListener('click', function () {
    costOfSelectedPackage.children[1].innerText = "Basic";
    costOfSelectedPackage.children[2].innerText =  "$" + 10;
    packageSelect.innerText = "Basic";
    selectOptions.style.display = "none";
})

selectOptions.children[1].addEventListener('click', function () {
    costOfSelectedPackage.children[1].innerText = "Professional";
    costOfSelectedPackage.children[2].innerText =  "$" + 20;
    packageSelect.innerText = "Professional";
    selectOptions.style.display = "none";
})

selectOptions.children[2].addEventListener('click', function () {
    costOfSelectedPackage.children[1].innerText = "Premium";
    costOfSelectedPackage.children[2].innerText = "$" + 30;
    packageSelect.innerText = "Premium";
    selectOptions.style.display = "none";
})

checkboxAccounting.addEventListener('change', function () {
    if (this.checked) {
        costOfAccounting.children[1].innerText = "$20";
    } else {
        costOfAccounting.children[1].innerText = "$0";
    }
});

checkboxTerminal.addEventListener('change', function () {
    if (this.checked) {
        costOfTerminal.children[1].innerText = "$30";
    } else {
        costOfTerminal.children[1].innerText = "$0";
    }
});
form.addEventListener('change', function() {
    const packageValue = parseInt(costOfSelectedPackage.children[2].innerText.replace("$", ""));
    const AccountingValue = parseInt(costOfAccounting.children[1].innerText.replace("$", ""));
    const TerminalValue = parseInt(costOfTerminal.children[1].innerText.replace("$", ""));

    costTotal.innerText = "$" + (productsQuantity.value * 0.5 +
        ordersQuantity.value * 2 + packageValue + AccountingValue + TerminalValue);
});