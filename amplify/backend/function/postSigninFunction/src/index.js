import { AWS } from "aws-sdk";
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  
  // Get user attributes from Cognito event
  const { email, sub: cognitoId, name } = event.request.userAttributes;
  
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: cognitoId, 
      name: name,         // Name from user attributes
      email: email,       // Email from user attributes
      createdAt: new Date().toISOString()
    },
  };
  
  try {
    await dynamodb.put(params).promise();
    console.log("Success", params.Item);
  } catch (error) {
    console.error("Error", error);
  }
  
  return event;
};
