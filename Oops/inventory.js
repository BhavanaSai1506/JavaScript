var fileStream=require('fs');
var UtilityOops=require('../Oops/oopsUtility');
var input=fileStream.readFileSync('inventory.json');
var object=JSON.parse(input);
var sum=0;
var d=object.Rice;
var e=object.Wheat;
var f=object.Pulses;
for(let i in d)
{
    var name=d[i].name;
    var weight=d[i].weight;
    var price=d[i].price;
    var total=d[i].weight*d[i].price
    console.log("The total value of ",d[i].name,"is",total);
    sum=sum+total;
    i=new UtilityOops.Rice(name,weight,price)
}
console.log(sum);
console.log();
for(let j in e)
{
    var name=e[j].name;
    var weight=e[j].weight;
    var price=e[j].price;
    var total=e[j].weight*e[j].price;
    console.log("The total value of "+e[j].name+" is ",total);
    sum=sum+total;
    j=new UtilityOops.Wheat(name,weight,price)
}
console.log(sum);
console.log();
for(let k in f)
{
    var name=f[k].name;
    var weight=f[k].weight;
    var price=f[k].price;
    var total=f[k].weight*f[k].price;
    console.log("The total value of "+f[k].name+" is "+total);
    sum=sum+total;
    k=new UtilityOops.Pulses(name,weight,price)
}
console.log(sum);
console.log();