export default class UserInputs {
  constructor(handleFormSubmit) {
    this._formDiv = document.querySelector(".userForm");
    this._form = this._formDiv.querySelector(".form");
    this._formInputs = document.querySelectorAll("input");
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    this._formDiv.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this.getInputValues());
    });
  }

  resetValues() {
    this._form.reset();
  }

  getInputValues() {
    const inputObject = [];

    this._formInputs.forEach((input) => {
      inputObject.push(input.value);
    });

    return inputObject;
  }
}
