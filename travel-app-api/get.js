

export async function main(event, context) {
  const params = {
    TableName: "flights",
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      flightId: event.pathParameters.id
    }
  };

  try {
    const result = await dynamoDbLib.call("get", params);
    if (result.Item) {
      return success(result.Item);
    } else {
      return failure({ status: false, error: "Item not found." });
    }
  } catch (e) {
    return failure({ status: false });
  }
}