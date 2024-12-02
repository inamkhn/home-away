/* eslint-disable @typescript-eslint/no-var-requires */
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  
  // Validate environment variables
  if (!process.env.DYNAMODB_TABLE) {
    throw new Error('DYNAMODB_TABLE environment variable is not set');
  }

  if (event.triggerSource === "PostConfirmation_ConfirmSignUp") {
    console.log("Processing PostConfirmation_ConfirmSignUp");
    
    // Validate required attributes
    const { email, sub: cognitoId, preferred_username } = event.request.userAttributes;
    
    if (!email || !cognitoId) {
      throw new Error('Missing required user attributes');
    }

    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        id: cognitoId,
        email: email,
        user_name: preferred_username || email.split('@')[0], // Fallback if username not provided
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'ACTIVE'
      },
      // Optional: Ensure the item doesn't already exist
      ConditionExpression: 'attribute_not_exists(id)'
    };

    try {
      console.log("Writing to DynamoDB:", JSON.stringify(params, null, 2));
      await dynamodb.put(params).promise();
      console.log("Successfully created user record for:", email);
    } catch (error) {
      if (error.code === 'ResourceNotFoundException') {
        console.error(`DynamoDB table ${process.env.DYNAMODB_TABLE} not found`);
        throw new Error(`DynamoDB table ${process.env.DYNAMODB_TABLE} not found`);
      } else if (error.code === 'ConditionalCheckFailedException') {
        console.warn(`User record already exists for ${email}`);
        // Depending on your requirements, you might want to update the existing record
        // or just return success since the user already exists
        return event;
      }
      
      console.error("DynamoDB Error:", {
        message: error.message,
        code: error.code,
        requestId: error.requestId,
        statusCode: error.statusCode,
        time: error.time
      });
      throw error;
    }
  }

  return event;
};