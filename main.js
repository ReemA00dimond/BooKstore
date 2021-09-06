const BookArr =[
    [1, 'Start with why'    ,'Simon Sinek'         ,80.0   ,13],
    [2, 'But how do it know','J. Clark Scott'      ,59.9   ,22],
    [3, 'Clean Code'        , 'Robert Cecil Martin', 50.0  ,5 ],
    [4, 'Zero to One'       , 'Peter Thiel'        ,  45.0 ,12],
    [5, 'You don\'t know JS', 'Kyle Simpson'       ,39.9   ,9 ]

];


//add a new book
BookArr[5] = [6, "A New Earth", "	Eckhart Tolle", 61, 3];
console.log(BookArr[5]);

//edit a book
BookArr[1][3] = 50;
console.log(BookArr[1]);

//delete a book
BookArr.shift();

//display BookArr
console.log(BookArr);


//query of a book 
for(let book of BookArr){
   console.log(book);
}
//buying book chick

let customer =[
              ['Anew Earth',120]
             ,['clean code',220 ]
            ]
function is_exist(BookArr,search)
{
for(let i =0;i<BookArr.length;i++)
{
    for(let j =0;j<3;j++)
    {
           if(search==BookArr[i][j])
           {
               return "The books exist";
           }
    }
}
}
console.log(is_exist(BookArr,'Kyle Simpson'))
function sell(BookArr,name,numberofbook,balance)
{
    let exist=true;
    for(let i =0;i<BookArr.length;i++)
    {
        for(let j =0;j<BookArr[i].length;j++)
        {
               if(name==BookArr[i][j])
               {
                   if(numberofbook<=BookArr[i][4])
                   {
                       let cost =numberofbook*BookArr[i][3];
                    console.log("you buy "+numberofbook+" of "+BookArr[i][1]
                   +"\n book cost = "+BookArr[i][3]
                   +"\n your balance = "+balance
                   +"\n your balance after buy "+numberofbook+" book/books = "+(balance-cost)
                   );
                   BookArr[i][4]=BookArr[i][4]-numberofbook;
                   balance=balance-cost
                   console.log("we stil have "+BookArr[i][4]+" books");
                   exist=false;
                   }
                   else{
                       console.log("we do not hava enogh book we just hava "+BookArr[i][4]+" book/books");
                       exist=false;
                   }
                   
               }
        }
        if(exist && i==BookArr.length-1){
            console.log("this book does not exist");
            exist=false;
        } 
    }
}
sell(BookArr,"Clean Code",2,120);


