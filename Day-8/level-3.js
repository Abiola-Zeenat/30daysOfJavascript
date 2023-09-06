const users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]

/*
Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which 
allows user to add to the collection. If user exists, inform the user that he has already an account.
b. Create a function called signIn which allows user to sign in to the application

The products array has three elements and each of them has six properties. a. Create a function called rateProduct which 
rates the product b. Create a function called averageRating which calculate the average rating of a product

Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like 
if it was liked.
*/

//Question 1

//Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has 
//totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and 
//its description and expenses is a set of incomes and its description.

const personAccount ={
  firstName : 'Abiola',
  lastName : 'Abdulsalam',
  incomes : {
    salary: 5000,
    bonus : 200,
    incentives : 150
  },
  expenses : {
    rents: 1000,
    groceries : 500,
    transport : 200
  },
  totalIncome : function (){
  let totalIncome = this.incomes['salary'] + this.incomes['bonus'] + this.incomes['incentives']
    return totalIncome;
  },
  totalExpense : function (){
    let totalExpense = this.expenses['rent'] + this.expenses['groceries'] + this.expenses['transport']
      return totalExpense;
    }
}
//Question 2



//Question 3
 
 
//Question 4
function likeProduct() {
  for (const product in products){
    let likes = products[product].likes;
    
    if(likes.length == 0){
      products[product].likes = ['fg12cy']
    }else if(likes.length > 0){
      products[product].likes = []
    }

    console.log(likes);
  }
}
likeProduct()



