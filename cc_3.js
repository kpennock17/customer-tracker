let customers = [
    {name:"Carmen",email:"carmenola@gmail.com",purchases:("socks","TV","Ethernet")},
    {name:"Miguel",email:"migueloncho@gmail.com",purchases:("shoes","Pokemon Card","Plunger")},
    {name:"Jorge",email:"georginho@gmail.com",purchases:("Apple","Watch","Towel")},
];
customers.push({name:"Zach",email:"Zarchman@gmail.com",purchases:("Football","Anime","Glasses"})
customers.shift("Carmen")

customers[0].email = "miguelthebell@gmail.com"
customers[3].purchases.push =("Bag")

customers.forEach(customer => {console.log(`${customer.name} | Email: ${customer.email} | Total Purchases: ${customer.purchases.length}`)});