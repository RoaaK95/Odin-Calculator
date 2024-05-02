class Calculator {
 constructor(previousOperandTextElement,currentOperandTextElement)
 {
    this.previousOperandTextElement=previousOperandTextElement;
    this.currentOperandTextElement=currentOperandTextElement;
    this.clear();
 }
  
 clear()
 {
    this.currentOperand = '';
    this.previousOperand= '';
    this.operation= undefined;
 }

 delete()
 {
    this.currentOperand = this.currentOperand.toString().slice(0,-1);
 }
 
}
const numberButtons=document.querySelectorAll('[data-number]');
const operationButtons=document.querySelectorAll('[data-operation]');
const equalsButton=document.querySelector('[data-equals]');
const deleteButton=document.querySelector('[data-delete]');
const clearButton=document.querySelector('[data-clear]');
const previousOperandTextElement=document.querySelector('[data-previous-operand]');
const currentOperandTextElement=document.querySelector('[data-current-operand]');

const calculator=new Calculator(previousOperandTextElement,currentOperandTextElement);


clearButton.addEventListener('click',button=>{
    calculator.clear();
});

deleteButton.addEventListener('click', button=>{
    calculator.delete();
})