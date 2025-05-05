import * as aws from "@pulumi/aws";

const firstBucket = new aws.s3.BucketV2("primeiro-bucket", {
  bucket: "primeiro-bucket-pos-360",
  tags:{
    IAC: 'true'
  }
});

const ecr = new aws.ecr.Repository("primeiro-ecr", {
  name: "primeiro-ecr",
  imageTagMutability: "IMMUTABLE",
  tags:{
    IAC: 'true'
  }
})

export const bucketName = firstBucket.id;
export const bucketRegion = firstBucket.region;
export const bucketArn = firstBucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
