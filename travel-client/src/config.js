export default {
    s3: {
      REGION: "us-west-2",
      BUCKET: "trip-planner-bucket"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://987ahsbe35.execute-api.us-west-2.amazonaws.com/prod/flights"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_RP4XJHGKN",
      APP_CLIENT_ID: "2ln6a58q14g1g3303pjvhqekm8",
      IDENTITY_POOL_ID: "us-west-2:78aa70bc-b679-4cfa-b212-733e21fce28b"
    }
  };