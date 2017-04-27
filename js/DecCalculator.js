import {
    Calculator
} from "./Calculator";


class DecCalculator extends Calculator {
    constructor(settings) {
        super(settings);
        console.log(this.getName());
    }

    changeNumber(root) {
        super.changeNumber();
        let activeElement = root.find('.active');
        activeElement.attr('contentEditable', 'true');
        activeElement.text('');
        activeElement.blur(function() {
            if (activeElement.text().length > 1) {
                activeElement.text(0);
            } else {}
        });
    }


    initEvents() {
        super.initEvents();
        this.$calculatorDOMElement.find(".operator-bar").on('click', (event) => {
            this.checkNumber();
        });
    }

    checkNumber() {
        super.checkNumber();
        this.updateResult();
    }

    updateResult() {
        super.updateResult();
        let root = this.$calculatorDOMElement;
        let $resultNumber = root.children(".group-number").children(".result-bit");

        for (let i = this.resultNumberArray.length - 1, j = 0; i >= 0; i--, j++) {
            let valueResult = $($resultNumber).eq(j).find('.active').text(this.resultNumberArray[i]);
        }

    }

    add(numberX, numberY) {
        let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = numberX.length - 1; i >= 0; i--) {
            let carryBit = numberX[i] + numberY[i] + result[i];
            if (carryBit > 9) {
                result[i] = carryBit % 10;
                result[i - 1] = 1;
            } else {
                result[i] = carryBit;
            }
        }
        return result;
    }

}

export {
    DecCalculator
};
