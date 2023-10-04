//break and continue
// for(let k=1;k<=10;k++)
// {
//     if(k==8)
//     break; //if we need to break the looping we use break statment even if for loop conditions has pass
// console.log(k);
// }

//continue
for(let r=1;r<=10;r++)
{
  if(r==6 || r==7 || r==8 ||r==10) // if we no need some values we can use continue key word
    continue;
   
  console.log(r);
}