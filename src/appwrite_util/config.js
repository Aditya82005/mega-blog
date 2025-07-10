import { Client,ID,Databases,Storage,Query } from "appwrite";
import conf from "../conf/conf";

export class DataService{
client= new Client();
databases;
bucket;



constructor() {
    this.client = new Client()
        .setEndpoint(conf.appwriteurl)
        .setProject(conf.appwriteprojectid);
    this.databases= new Databases(this.client);
    this.bucket= new Storage(this.client);
}

async createpost ({title,content,featuredimage,status,userId,slug}) {//create a post
    try {
        return await this.databases.createDocument(
            conf.appwritedatabaseid,
            conf.appwritecollectionid,
            slug,
            { title,content,featuredimage,status,userId }
        );
       
      } catch (error) {
        console.log("appwrite no respond");
        throw error;
      }
}
async updatepost (slug,{title,content,featuredimage,status,}) {//update post
    try {
        return await this.databases.updateDocument(
            conf.appwritedatabaseid,
            conf.appwritecollectionid,
            slug,
            { title,content,featuredimage,status }
        );
       
      } catch (error) {
        console.log("appwrite no respond");
        throw error;
      }
}
async deletepost (slug) {
    try {
         await this.databases.deleteDocument(
            conf.appwritedatabaseid,
            conf.appwritecollectionid,
            slug,
        );
       return true;
      } catch (error) {
        console.log("appwrite no respond",error);
        return false;
      }
}
async getpost (slug) {
    try {
        return await this.databases.getDocument(
            conf.appwritedatabaseid,
            conf.appwritecollectionid,
            slug
        );
       
      } catch (error) {
        console.log("appwrite no respond");
        throw error;
      }
}
async getposts(query=Query.equal("status",["Active"])){//get all aactive post
    try {
        return await this.databases.listDocuments(
            conf.appwritedatabaseid,
            conf.appwritecollectionid,
            query
        );
    } catch (error) {
        console.log("appwrite no respond");
        throw error;  
    }
}
async uploadfile(file){
    try {
        return await this.bucket.getFile(
            conf.appwritebucketid,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("appwrite no respond",error);
    }
}
async deletefile(fileID){
    try {
        await this.bucket.deleteFile(
            conf.appwritebucketid,
            fileID
        );
        return true;
    } catch (error) {
        console.log("appwrite no respond",error);
        return false;
    }
}
getfilepreview(fileID){
    return this.bucket.getFilePreview(
        conf.appwritebucketid,
        fileID
    )
}
}

const dataservice= new DataService();
export default dataservice;