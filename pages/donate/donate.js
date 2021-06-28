const amountWrapper = document.querySelector('.amount-wrapper');
const amountWrapperItem = amountWrapper.querySelectorAll('.amount-item');
const priceInput = document.querySelector('.price input');
function pushPrice (e) {
    if(e.target.value != undefined) {
        priceInput.value = e.target.value;
    }
}
function changePrice () {
    amountWrapperItem.forEach(label => {
        label.querySelector('input').checked = false;
        if(this.value.length > this.maxLength) {
            this.value = this.value.slice(0, this.maxLength);
        }
        if(label.querySelector('input').value === this.value) {
             label.querySelector('input').checked = true;
        }
    })
}
amountWrapper.addEventListener("click", pushPrice);
priceInput.addEventListener("input",changePrice);
