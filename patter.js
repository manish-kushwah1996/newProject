// // let make=[12,44,55,66,779,66,4,55];
// //    let make2=[56,57,58,59]
// // // const sum=(make) =>
// // // make.reduce((x,y) => Math.max(x,y));
// // // console.log(sum(make))
// // let arr3=[...make,...make2];
function BankAccount(customerName,balance=0){
    this.customerName=customerName;
    this.AccountNumber=Date.now();
    this.balance=balance
    this.deposite=(Amount)=>{
        this.balance=this.balance+Amount
        this.withdrwal=(Amount)=>{
            this.balance=this.balance-Amount
        }
    }

}
// const AccountHolder=new BankAccount('manish kushwah',2000)
// const SbitHolder=new BankAccount('kapil kushwah kushwah',2000)
// AccountHolder.deposite(5000);
// AccountHolder.withdrwal(1000)
// console.log(AccountHolder);


//=======================================================================
const accounts=[];
const accountForm=document.querySelector('#accountForm');
const customerName=document.querySelector('#customerName');
const balance=document.querySelector('#balance');
const depositeForm=document.querySelector('#DepositeForm')
const AccountNumber=document.querySelector('#AccountNumber');
const Amount=document.querySelector('#Amount')
accountForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const account=new BankAccount(customerName.value,balance.value)

    accounts.push(account);
    console.log(account);
});
depositeForm.addEventListener('submit',(e)=> {
    e.preventDefault();
    const account=accounts.find((account) =>account.AccountNumber=== +AccountNumber.value
    );
    account.deposite(Amount.value)
     console.log(accounts);
    
})
