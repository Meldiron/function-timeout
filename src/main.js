import { Client, Databases } from 'node-appwrite';

export default async ({ req, res, log, error }) => {
  const client = new Client()
     .setEndpoint('https://cloud.appwrite.io/v1')
     .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
     .setKey(process.env.APPWRITE_API_KEY);

  const databases = new Databases(client);

  log('Start');
  const response = await databases.listDocuments('main', 'servers', [ Query.limit(100) ]);
  log(response.documents.length);
  log('Finish');

  return res.send('OK');
};
