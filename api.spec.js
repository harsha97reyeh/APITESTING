import{test, expect} from'@playwright/test';

test('API GET Request', async({request})=>{
    const response = await request.get('https://api.restful-api.dev/objects/7')
    expect(response.status()).toBe(200)
    const text = await response.text();
    expect(text).toContain('Apple MacBook Pro 16')
    console.log(await response.json());
})
test('API POST Request', async({request}) =>{
    const response = await request.post('https://api.restful-api.dev/objects',{
        
        "data": {
            "name": "Apple MacBook Pro 17",
           "year": 2023,
           "price": 14559.99,
           "CPU model": "Intel Core i9",
           "Hard disk size": "1 TB"}
    })
    expect(response.status()).toBe(200)
    const text = await response.text();
    expect(text).toContain('Apple MacBook Pro 17')
    console.log(await response.json());
})
test('API PUT Request', async({request}) =>{
    const response = await request.put('https://api.restful-api.dev/objects/ff808181932badb60194e8ef91d47319',{
      //need to add new id after'https://api.restful-api.dev/objects/  
   "data": {
    "name": "Apple MacBook Pro 16",  
    "year": 2019,
      "price": 2049.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
      "color": "silver"}
    })
    const text = await response.text();
    expect(text).toContain('Apple MacBook Pro 16')
    console.log(await response.json());
})
test('API DELETE Request', async({request}) =>{

    const response = await request.delete('https://api.restful-api.dev/objects/ff808181932badb60194e8ef91d47319')//need to add new id after'https://api.restful-api.dev/objects/
    expect(response.status()).toBe(200)
})
