function HouseKeeper(yearsOfExp, name, cleaningRepertoire){
    this.yearsOfExp = yearsOfExp;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("cleaning in progress");
    }
}

var houseKeeper1 = new HouseKeeper(12, 'Angela', ['bathroom', 'kitchen']);
console.log(houseKeeper1);