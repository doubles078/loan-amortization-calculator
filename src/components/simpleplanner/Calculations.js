export default function calculatePayment (principal, years, rate) {
    var monthlyRate = rate / 100 / 12;
    var monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1/(1 + monthlyRate), years * 12)));
    var balance = principal;
    var amortization = [];
    for (let y=0; y<years; y++) {
        let interestY = 0;  //Interest payment for year y
        let principalY = 0; //Principal payment for year y
        for (let m=0; m<12; m++) {
            let interestM = balance * monthlyRate;       //Interest payment for month m
            let principalM = monthlyPayment - interestM; //Principal payment for month m
            interestY = Math.round(interestY + interestM);
            principalY = Math.round(principalY + principalM);
            balance = Math.round(balance - principalM);
          }
        let percent = 100 - Math.round((interestY / (interestY + principalY)) * 100);
        amortization.push({year: y + 1, principalY: principalY, interestY: interestY, balance: balance, percent: percent });
    }
    return {monthlyPayment: monthlyPayment, amortization: amortization};
};
