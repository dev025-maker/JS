const accNum = 123456
let bankName = "ICICI Bank";
var branchCity = "Gurugram";

if(accNum==123456){
    bankName = "Canara";
    branchCity="Agra";
    let phoneNum = 9917045399
}

// let bankName="SBI"  we cannot declare as it is block level scoped. 
var branchCity = "Aligarh" // can do re declaration as var has global scoped that's why for security purpose use let 
let phoneNum = 7417604406

console.table([accNum,bankName,branchCity,phoneNum]);