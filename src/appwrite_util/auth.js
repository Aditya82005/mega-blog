import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class Authservice {
  client = new Client();
  Account;

  constructor() {
    this.client = new Client()
        .setEndpoint(conf.appwriteurl)
        .setProject(conf.appwriteprojectid);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {//signup & login
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        this.login(email,password);
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("appwrite no respond");
      throw error;
    }
  }
  async login({ email, password }) {//login
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return session;
      
    } catch (error) {
      console.log("appwrite no respond");
      throw error;
    }
  }
  async getAccount(){//check account
    try {
        const user = await this.account.get();
        return user;
    } catch (err) {
        console.log(err);
    }
    return null;
    
  }
  async logout(){//logout
    try {
        const result = await this.account.deleteSession(
            'current' 
        );
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }

  }
}

const authservice = new Authservice();

export default authservice;
