////////////////////////java script 101//////////////////////////
//array
let colors = ['red','green','blue ']
console.log(colors.push('purple'))
console.log(colors.unshift("black"));
console.log(colors.shift());
console.log(colors.pop());

// split and join
let str ='hello my name is jawad'
console.log(str.split(' ' ));
console.log(colors.join(' '));

//for loop
let colors = ['red','green','blue','black']
for(let i = 0 ; i < colors.length;i++)
{
    console.log(colors[i]);
}

//forof loop
let colors = ['red','green','blue','black']
for(let color of colors)
{
    console.log(color);
}

//forof loop with strings 
let message = 'new message ';
for (let cha of message)
{
    console.log(cha)
};

//while loop 
let colors = ['red','green','blue','black']
let i = 0;
while (i< colors.length)
{ console.log(colors[i])
i++;
}

//do-while loop
let colors = ['red','green','blue','black']
let i = 2;
do
{ console.log(colors[i])
i++;
}while (i< colors.length);

//if-else
let age = 12;
if(age>12)
{
console.log('you can play ')
}
else if(age<12) {
    console.log('you can not play ')
}

//switch 
let colors = ['red','green','blue','black'];
let colornumber=2;
switch(colornumber)
{
    case 1,5:
        console.log(colors[1]);
        break;
    case 2:
        console.log(colors[2]);
        break;
    default:
        console.log('the color does not exits ')
}
//function
 function calc( x,y,a){if (a=='+'){return x+y;}
if (a=='-'){return x-y;}
if (a=='*'){return x*y;}
if (a=='/' && y!=0){return x/y;}
return 'please enter valid oppration';}
let x=100;
let y =0;
console.log(calc(x,y,'+'));

//expression function
let myFunc=function(number) {
    console.log(number+" x "+number+ " = " + number * number)
    return number * number
  }
  myFunc(2)

