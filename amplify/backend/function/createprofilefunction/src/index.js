/* eslint-disable @typescript-eslint/no-var-requires */
const AWS = require('aws-sdk')
const dynamoDB = new AWS.DynamoDB.DocumentClient()

exports.handler = async (event) => {
  console.log('event result', event)
  try {
    await dynamoDB
      .put({
        TableName: `${process.env.UserTable}-${process.env.ENV}`,
        Item: {
          id: event.request.userAttributes.sub,
          email: event.request.userAttributes.email,
          username: event.request.userAttributes.preferred_username,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      })
      .promise()
    console.info(`Successfully executed put in ${process.env.UserTable}`)
    return event
  } catch (err) {
    console.error(err)
    throw err
  }
}