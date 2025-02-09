describe("Requests",()=>{
    it("GET Request",()=>{
        cy.request('GET','https://api.restful-api.dev/objects/7')
        .its('status')
        .should('equal',200);
    })
    it("POST Request",()=>{
        cy.request({
            method:'POST',
            url:'https://api.restful-api.dev/objects',
            body:{
                    year: 2019,
                    price: 1849.99,
                    CPU_model: "Intel Core i9",
                    Hard_disk_size: "1 TB"
            }
        })
        .its('status')
        .should('equal',200);
    })
    it("PUT Request",()=>{
        cy.request({
            method:'PUT',
            //need to add new id after'https://api.restful-api.dev/objects/
            url:'https://api.restful-api.dev/objects/ff808181932badb60194e8f738ce7323',
            body:{
                name:'lenovo 16',
                year:2020,
                price:1899
            }
        })
        .its('status')
        .should('equal',200);
    })
    it("DELETE Request",()=>{
        cy.request({
            method:'DELETE',
            //need to add new id after'https://api.restful-api.dev/objects/
            url:'https://api.restful-api.dev/objects/ff808181932badb60194e8f738ce7323',
        })
        .its('status')
        .should('equal',200);
    })
})