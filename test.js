const text = '2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk';

const arr = text.split(' ');

let string='';
arr.forEach((data)=>{
        if(!isNaN(data)||data.toUpperCase().includes('KMS')){
            string+=`<span className='greyish-brown'>${data}</span>`;
        }else{
            string+=`<span className='greyish' >${data}</span>`;
        }
})
console.log(isNaN('7,4'));