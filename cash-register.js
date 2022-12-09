function checkCashRegister(price, cash, cid) {
  function floatPrecisionCorrection(x){
    return Math.round(x*100)/100;
  }
  let result={status:null,change:[]};

  let changeTotal=floatPrecisionCorrection(cash-price);

  let cidTotal=floatPrecisionCorrection(cid.reduce((a,e)=>a+e[1],0));

  if(changeTotal==cidTotal){
    result.status="CLOSED";
    result.change=cid;
    return result;
  }

  if(changeTotal>cidTotal){
    result.status="INSUFFICIENT_FUNDS";
    return result;
  }

     let hash=Object.create(null);
        hash["PENNY"]=0.01;
        hash["NICKEL"]=0.05;
        hash["DIME"]=0.1;
        hash["QUARTER"]=0.25;
        hash["ONE"]=1;
        hash["FIVE"]=5;
        hash["TEN"]=10;
        hash["TWENTY"]=20;
        hash["ONE HUNDRED"]=100;
