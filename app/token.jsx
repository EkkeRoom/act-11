
fetch('https://dummyjson.com/auth/RESOURCE', {
  method: 'GET', /* or POST/PUT/PATCH/DELETE */
  headers: {
    'Authorization': 'Bearer /* YOUR_ACCESS_TOKEN_HERE */', 
    'Content-Type': 'application/json'
  }, 
})
.then(res => res.json())
.then(console.log);