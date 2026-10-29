import { APIRequestContext } from "@playwright/test";

export class APIHelper
{
    public readonly request:APIRequestContext
    public readonly URL:string
    constructor(request:APIRequestContext,URL:string)
    {
        this.request=request
        this.URL=URL
    }

    async getResource(endpoint:string,headers?:Record<string,string>)
    {
        let response=await this.request.get(`${this.URL}${endpoint}`,{headers:headers})
        return {
            statusCode:response.status(),
            reponseBody:await response.json()
        };
    }
    async postResource(endpoint:string,bodyData:object,headers?:Record<string,string>)
    {
        let response=await this.request.post(`${this.URL}${endpoint}`,{headers:headers,data:bodyData})
        return {
            statusCode:response.status(),
            reponseBody:await response.json(),
            statusText:response.statusText()
        };
    }
    async updateResource(endpoint:string,bodyData:object,headers?:Record<string,string>)
    {
        let response=await this.request.put(`${this.URL}${endpoint}`,{headers:headers,data:bodyData})
        return {
            statusCode:response.status(),
            reponseBody:await response.json()
        };
    }
    async updateResourcePartially(endpoint:string,bodyData:object,headers?:Record<string,string>)
    {
        let response=await this.request.patch(`${this.URL}${endpoint}`,{headers:headers,data:bodyData})
        return {
            statusCode:response.status(),
            reponseBody:await response.json()
        };
    }
    async delteResource(endpoint:string,headers?:Record<string,string>)
    {
        let response=await this.request.get(`${this.URL}${endpoint}`,{headers:headers})
        return {
            statusCode:response.status(),
            reponseBody:response.statusText()
        };
    }
}