export default class UserHistory {
  constructor(inputs, feedback) {
    this._inputs = inputs;
    this._feedback = feedback;
    this._historyLog = document.querySelector(".historyLog");
    this._template = document.querySelector("#historyInput-template");
  }

  _getTemplate() {
    return document
      .querySelector("#historyInput-template")
      .content.firstElementChild.cloneNode(true);
  }

  generateHistoryInput() {
    this._element = this._getTemplate();
    console.log(this._element)

    const input = this._element.querySelector(".historyInput__nums");
    input.innerText = this._inputs;

    const feedback = this._element.querySelector(".historyInput__feedback");
    feedback.innerText = this._feedback;

    return this._element;
  }

  addHistory() {
    this._historyLog.append(this.generateHistoryInput());
  }
}
