class Lotto {
    constructor() {
        // 로또 번호를 저장할 배열
        this.numbers = [];
    }

    generateRandomNumber(arr, target) {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === target){
                return i;
            }
        }
        return this.numbers.push(target);
    }

    createNumbers() {
        while(true){
            let num = Math.floor(Math.random() * 45) + 1;

            if(this.numbers.length === 6){
                break;
            }
            this.generateRandomNumber(this.numbers, num);
        }
    }

    displayNumbers() {
        this.numbers.sort((a, b) => a - b);  //정렬 오름차순
    }

    get NumberLottery(){
        return this.numbers;
    }
}

const lottery = (req, res) =>{
    const lotto = new Lotto();
    lotto.createNumbers(); // 로또 번호 생성
    lotto.displayNumbers(); // 생성된 로또 번호 출력
    number = lotto.NumberLottery;
    
    res.render('view.html', {number});
}

module.exports = {
    lottery
}