import { Component } from '@angular/core';
import Backpack from './backpack';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Palindrome Program';
  public inputBox:number = 0;
  public inputs = {};
  public freezeInputs = {};
  public result = {};

  // Backpack Attributes
  private backpack;
  public itemName = '';
  public backpackItems = [];

  constructor(){
    this.backpack = new Backpack([]);
  }

  createInputs(){
    let inputLength = this.inputBox;
    let inputs = {};

    for(let index = 0; index < inputLength; index++){
      inputs[index] = '';
    }

    this.inputs = inputs;
  }

  calculateResult(){
    let results = {};
    this.freezeInputs = Object.assign({}, this.inputs);
    Object.keys(this.freezeInputs).map(key => {
      let input = this.freezeInputs[key];
      let palindrome = this.isPalindrome(input);

      results[key] = palindrome;
    })

    this.result = results;
  }

  isPalindrome(inputText){
    let word = inputText.replace(/[_\W]+/g, '').toLowerCase();
    let chars = word.split('');
    let countChars = {};
    let isValid = true;

    chars.map(char => {
      let count = countChars[char] || 0;
      count = count + 1;
      countChars[char] = count; 
    })

    let keys = Object.keys(countChars);
    if((chars.length % 2) === 0){
      for(let index = 0; index < keys.length; index++){
        let key = keys[index];
        let currentChar: number = parseInt(countChars[key]);
        if((currentChar % 2) !== 0){
          isValid = false
        }
      }
    } else {
      let oneTimeAllowed = false;

      for(let index = 0; index < keys.length; index++){
        let key = keys[index];
        let currentChar: number = parseInt(countChars[key]);
        if((currentChar % 2) !== 0){
          if(!oneTimeAllowed){
            oneTimeAllowed = true;
          }else{
            isValid = false
          }
        }
      }
    }

    return isValid;
  }

  clearResults(){
    this.inputBox = 0;
    this.inputs = {};
    this.result = {};
  }

  // Backpack Functions
  addItemToBackpack(){
    this.backpack.add(this.itemName);
    this.itemName = '';
    this.refreshBackpackItems();
  }

  removeItemFromBackpack(itemId){
    this.backpack.remove(itemId);
    this.refreshBackpackItems();
  }

  refreshBackpackItems(){
    this.backpackItems = this.backpack.all();
  }
}
