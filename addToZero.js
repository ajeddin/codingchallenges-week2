arr = [1, 4, 11, 2, 37, -4]



let equalZero= false


for ( i =0 ; i< arr.length; i++){
    for ( j=i+1; j< arr.length;j++){
    if (arr[i]+arr[j]==0){
         equalZero= true
         break;
    }
    }}
    
    if (equalZero== true){
        console.log(true);
    }else{
        console.log(false); 
    }