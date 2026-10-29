import {test,expect} from '@playwright/test'
import { request } from 'node:http'

let AUTH_TOKEN={'Authorization':'Bearer b8dfbe8aa402145805ecdc67affd141e7c0c165f7e0a024731d3b6258171ef82'}

test("Fetch Single User Data",async({request})=>
{
    let response=await request.get("https://gorest.co.in/public/v2/users/8689579",{headers:AUTH_TOKEN})
    //console.log(response)
    let responseBody=await response.json()
    console.log(responseBody)
    console.log("Response code is : "+response.status())
    console.log("Response status txt is : "+response.statusText())


})
test("Fetch all Users Data",async({request})=>
{
    let response=await request.get("https://gorest.co.in/public/v2/users",{headers:AUTH_TOKEN})
    //console.log(response)
    let responseBody=await response.json()
    console.log(responseBody)
    console.log("Response code is : "+response.status())
    console.log("Response status txt is : "+response.statusText())


})
test("Create a User",async({request})=>{
    let userData={
            "name": "Vandu Gadu",
            "email": `vandu${Date.now()}@gmail.com`,
            "gender": "female",
            "status": "inactive"
        }
    let response=await request.post("https://gorest.co.in/public/v2/users",{headers:AUTH_TOKEN,data:userData})
    //console.log(response)
    let responseBody=await response.json()
    console.log(responseBody)
    console.log("Response code is : "+response.status())
    console.log("Response status txt is : "+response.statusText())


})
test("Update User with put-full data should be provided",async({request})=>{
    let userData={
            "name": "Vandu Gadu",
            "email": `vandu${Date.now()}@gmail.com`,
            "gender": "male",
            "status": "active"
        }
    let response=await request.put("https://gorest.co.in/public/v2/users/8689570",{headers:AUTH_TOKEN,data:userData})
    //console.log(response)
    let responseBody=await response.json()
    console.log(responseBody)
    console.log("Response code is : "+response.status())
    console.log("Response status txt is : "+response.statusText())


})
test("Update User with patch-complete data need not to be provided",async({request})=>{
    let userData={
            "gender": "female"
            
        }
    let response=await request.put("https://gorest.co.in/public/v2/users/8689570",{headers:AUTH_TOKEN,data:userData})
    //console.log(response)
    let responseBody=await response.json()
    console.log(responseBody)
    console.log("Response code is : "+response.status())
    console.log("Response status txt is : "+response.statusText())
})
test("Delete user: 8689570",async({request})=>{

    let response=await request.delete("https://gorest.co.in/public/v2/users/8689579",{headers:AUTH_TOKEN})
    //console.log(response)
    console.log("Response code is : "+response.status())
    console.log("Response status txt is : "+response.statusText())
})