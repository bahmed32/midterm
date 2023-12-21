
async function categorizeText(text) {

  const document = {
    "content": text,
    "language": "",
    "type": "PLAIN_TEXT",
    }

  // Imports the Language library
  const {LanguageServiceClient} = require('@google-cloud/language').v2;

  // Instantiates a client
  const languageClient = new LanguageServiceClient();

  async function callClassifyText() {
    // Construct request
    const request = {
      document,
    };

    // Run request
    const response = await languageClient.classifyText(request);
    console.log(response[0].categories);
    return response[0].categories;
  }
  let response = false;
  try{response = await callClassifyText();}
  catch(e){console.log(e);}
  return response;
}

module.exports = {
  categorizeText,
};

categorizeText("Christina Aguilera");