var imageBucketName = "the-nope-bucket";
var bucketRegion = "eu-central-1";
var IdentityPoolId = "e4a1a454-fb77-49c5-b5a8-ad1b5ba42187";

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: albumBucketName }
});

// Initialize the Amazon Cognito credentials provider
 CognitoCachingCredentialsProvider credentialsProvider = new CognitoCachingCredentialsProvider( getApplicationContext(), "eu-central-1:e4a1a454-fb77-49c5-b5a8-ad1b5ba42187", // Identity pool ID // Region );