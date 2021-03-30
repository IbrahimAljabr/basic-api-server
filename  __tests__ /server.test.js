"use strict"


const supertest = require("supertest");
const server = require("../src/server.js");

const request = supertest(server.server);



describe("Server", () => {

  it("invalid routes", async() => {
    const response = await request.get("/aya klam");
    expect(response.status).toEqual(404);
  });

});


//food testing
let id;
describe("Food Testing", () => {

    it("Post", async() => {
      const response = await request.post("/api/v1/food/").send({
          data : 'shawerma'
      });
      expect(response.body.data.data).toEqual('shawerma');
      id =response.body.id;
      
    });
    
    it(' PUT ', async () => {
        const response = await request.put(`/api/v1/food/${id}`).send({
          data: 'test'
        });
        expect(response.status).toEqual(200);
        expect(response.body.data.data).toEqual('test');
      });

      it(' Get ', async () => {
        const response = await request.get(`/api/v1/food/${id}`)
        expect(response.status).toEqual(200);
        expect(response.body.data.data).toEqual('test');
      });

      it(' Delete ', async () => {
        const response = await request.delete(`/api/v1/food/${id}`)
        expect(response.status).toEqual(200);
        expect(response.body.data).toEqual(undefined);
      });
  
  });


  //clothes testing


 
describe("Clothes Testing", () => {

    it("Post", async() => {
      const response = await request.post("/api/v2/clothes/").send({
          data : 'boots'
      });
      expect(response.body.data.data).toEqual('boots');
      id =response.body.id;
      
    });
    
    it(' PUT ', async () => {
        const response = await request.put(`/api/v2/clothes/${id}`).send({
          data: 'test'
        });
        expect(response.status).toEqual(200);
        expect(response.body.data.data).toEqual('test');
      });

      it(' Get ', async () => {
        const response = await request.get(`/api/v2/clothes/${id}`)
        expect(response.status).toEqual(200);
        expect(response.body.data.data).toEqual('test');
      });

      it(' Delete ', async () => {
        const response = await request.delete(`/api/v2/clothes/${id}`)
        expect(response.status).toEqual(200);
        expect(response.body.data).toEqual(undefined);
      });
  
  });