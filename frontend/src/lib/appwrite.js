import { Client, Account } from 'appwrite';

export const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('66e54f2c0029782c61f9');

export const account = new Account(client);
export { ID } from 'appwrite'; 