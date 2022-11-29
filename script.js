//Asynchronoud programming
//Async / Await

//You order tomato soup
// Meanwhile you continue your convo with a friend
//RESOLVED- your server brings your soup
//REJECTED- No soup today

//const orderSoup = () => console.log('soup is ready')
//console.log('You start the convo with your friend')
//start your request
//setTimeout(orderSoup,2000)//1000ms is 1s
//console.log('still speaking')



const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      isReady = [true, false][Math.floor(Math.random() * 2)]
      isReady ? resolve('soup is ready') : reject('No soup today')
    }, 2000)
  })
  
  /*console.log(promise1
    .then(success => console.log({ success }))
    .catch(error => console.log({ error }))
  )*/
  
  //RESOLVED- if waiter brings soup 
  //tip the waiter
  //you pay for soup
  
  //REJECTED-leave a bad review,no tip
  const getSoup = async () => {
    //null / undefinied
    const data ={rating:null,tip:null,pay:null,review:null}
  
    
    try{ const soup =await promise1
    console.log(soup)
    data.rating =5
    data.tip = .2
    data.pay= 10
    data.review = 5
        return data
  }catch (error){
    console.log(error)
    data.rating =1
    data.tip = 0
    data.pay= 0
    data.review = 1
      return data
  }
  }
  console.log(getSoup().then(value => console.log(value)))
  const sum = async(a,b) => a+b
  
  // console.log('fetch:',
   // fetch('https://dog.ceo/api/breeds/image/random')//promise
    //  .then(response =>response.json())//promise
   //   .then(data => console.log(data))
  // )
  
  
  //Async / Await
  //Rules for creating async/ await
  //1- you must create a function
  //2- you must use keyword async
  //3-use the word await
  /* const getDog = async () => {
     const url ='https://dog.ceo/api/breeds/image/random'
     const response = await fetch(url)
     const data = await response.json()
     console.log(data)
   }
  getDog()*/
  
  