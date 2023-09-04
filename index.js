function showProperties(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        console.log(key +':' + obj[key]);
      }
    }
  }
  
  // Example usage:
  const person = {
    name: 'John',
    age: 30,
    address: '123 Main St',
    email: 'john@example.com'
  };
  
  showProperties(person);
  

