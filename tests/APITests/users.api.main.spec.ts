import {test,expect} from '../../src/fixtures/APIFixtures.js'
let AUTH_TOKEN={'Authorization':process.env.API_TOKEN!}
let userId:number;
test("Get All USers API Test",async({apiHelper})=>
{
   console.log(await apiHelper.getResource("public/v2/users",AUTH_TOKEN))
})
test("Get Single User API Test",async({apiHelper})=>
{
   console.log(userId)
   console.log(await apiHelper.getResource(`public/v2/users/${userId}`,AUTH_TOKEN))
})
test("Add User",async({apiHelper})=>
{
   let response=await apiHelper.postResource("public/v2/users",
      {
      'name': 'Aslesha',
      'email': `banerjee_aslesha${Date.now()}@daugherty.example`,
      'gender': 'female',
      'status': 'active'
   },AUTH_TOKEN)
   console.log(response)
   userId=await response.reponseBody.id;
   console.log(userId)
})
test("Partial User Update",async({apiHelper})=>
{
   console.log(await apiHelper.updateResourcePartially(`public/v2/users/${userId}`,{
      'name': 'Tanu Gadu2'
   },AUTH_TOKEN))
})
