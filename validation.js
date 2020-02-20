/* Password validation rules:
    * Letters & numbers & only these symbols !@#$&*
    * Must have at least 1 letter, 1 number and 1 of the above symbols
    * Can't have 3 consecutive numbers in accending order, example 123 or 890
*/
var MyInput = class extends HTMLElement {
  constructor() {
    super();

    const template = document.getElementById('my-input');
    const templateContent = template.content;

    this.el = this.attachShadow({mode: 'open'});
    this.el.appendChild(templateContent.cloneNode(true));

    this.inputEl = this.el.querySelector('#input');
  }

  connectedCallback() {
    this.el.querySelector('#input').addEventListener('keyup', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    const isValid = this.validate();
    if (!isValid) {
      if (this.el.querySelector('[name=validation-type]:checked').value === 'number') {
        this.inputEl.setCustomValidity('Only numbers');
      } 
      if (this.el.querySelector('[name=validation-type]:checked').value === 'letter') {
        this.inputEl.setCustomValidity('Only letters');
      } 
      if (this.el.querySelector('[name=validation-type]:checked').value === 'password') {
        this.inputEl.setCustomValidity('Only password');
      } 

      
      
      // else {
      //   this.inputEl.setCustomValidity('Only letters');
      // }
      this.inputEl.reportValidity();
    } else {
      this.inputEl.setCustomValidity('');
      this.inputEl.reportValidity();
    }
  }

  validate() {
    if (this.el.querySelector('[name=validation-type]:checked').value === 'number') {
      if (/[^0-9]/.test(this.inputEl.value)) return false;
    } else if(this.el.querySelector('[name=validation-type]:checked').value === 'letter') {
      if (/[^a-zA-Z]/.test(this.inputEl.value)) return false;
    }
    else{
      let value = this.inputEl.value;
      let inputValue = value.split('');
      let charCount=0;
      console.log(inputValue);
      for(let i=0;i<inputValue.length;i++){
        if(inputValue[i]=='!' || inputValue[i]=='@' || inputValue[i]=='#'|| inputValue[i]=='$'||inputValue[i]=='&')
        charCount++;
      }
      if((/[^!@#$&*0-9a-zA-Z]/.test(this.inputEl.value))|| /(?=(\d{3}))/.test(this.inputEl.value)||charCount==0 )
      return false;

    }
    return true;
  }
}
customElements.define('my-input', MyInput);