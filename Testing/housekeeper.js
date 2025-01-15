function HouseKeeper(yearsOfExp, name, cleaningRepertoire){
    this.yearsOfExp = yearsOfExp;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper1 = new HouseKeeper(12, 'Angela', ['bathroom', 'kitchen']);
console.log(houseKeeper1);