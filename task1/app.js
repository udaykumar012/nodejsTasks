const[,,operation,type,...args]=process.argv;
flag=1;
//console.log(operation)
function onlyNumbers(array) {
    return array.every(element => {
      return !isNaN(Number(element))
    });
}
function ischeckArgLength(args){
    if(args.length===2){
        return true;
    }
    console.log("The argument length should be 2");
    return false;
}
function subtraction(args){
    if(ischeckArgLength(args)){
        ans=args[0]-args[1]+0;
        console.log(ans);
    }
}
function division(args){
    if(ischeckArgLength(args)){
        if(args[1]===0){
            console.log("Division by zero ")
        }
        else{
            ans=args[0]/args[1];
            ans+=0
            console.log(ans);
        }
    }
}
function addition(args){
    ans=args.reduce((total,ele)=>{
        return total+ele
    })
    ans+=0
    console.log(ans)
}
function multiply(args){
    ans=args.reduce((total,ele)=>{
        return total*ele
    })
    ans+=0;
    console.log(ans);
}
if( operation!=='--operation'){
    console.log("The command should follow the pattern :");
    console.log("node app.js --operation {type} {...values...}")
}
else if(!onlyNumbers(args)){
    flag=0;
    console.log("There are invalid values")
}
else{
    args.map((ele,i,args)=>{
        args[i]=Number(ele)
    })
   // console.log(args)
    if(type==='subtraction' && flag ){
        //s=0
       subtraction(args)
    }
    else if(type==='division' && flag){
        //s=0
        division(args);
    }
    else if(type==='addition' && flag){
        //s=0
       addition(args);
    }
    else if(type==='multiply' && flag ){
        //s=0
       multiply(args);
    }
    else{
        console.log("Type of operation should be addition, subtraction, multiply or division")
    }
}
//console.log(flag)
