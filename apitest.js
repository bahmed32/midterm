// async function quickstart() {
//   // Imports the Google Cloud client library
//   const language = require('@google-cloud/language');

//   // Instantiates a client
//   const client = new language.LanguageServiceClient();

//   // The text to analyze
//   const text = 'Top Gun';

//   const document = {
//     "document": {
//       "content": "Nike",
//       "language": "",
//       "type": "PLAIN_TEXT"
//     },
//     "classificationModelOptions": {
//       "v2Model": {
//         "contentCategoriesVersion": "V2"
//       }
//     }
//   }


//   // Detects the sentiment of the text
//   const [result] = await client.classifyText({document: document});
//   console.log(result);
//   // const sentiment = result.documentSentiment;

//   // console.log(`Text: ${text}`);
//   // console.log(`Sentiment score: ${sentiment.score}`);
//   // console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
// }
// quickstart();