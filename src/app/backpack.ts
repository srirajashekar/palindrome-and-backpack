import Item from './item';

export default class Backpack{
    private itemSequenceId = 0;
    private items = [];

    constructor(items: []){
        items.forEach(item => {
            this.add(item);
        });
    }

    add(itemName){
        let newItem = new Item(this.itemSequenceId, itemName);
        this.items.push(newItem);
        this.itemSequenceId = this.itemSequenceId + 1;
    }

    find(itemId){
        return this.items.filter(item => {
            return item.id === itemId;
        })
    }

    remove(itemId){
        this.items = this.items.filter(item => {
            return item.id !== itemId;
        })
    }

    all(){
        return this.items;
    }
}