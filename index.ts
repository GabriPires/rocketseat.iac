import * as aws from "@pulumi/aws";

const bucket = new aws.s3.BucketV2("my-bucket");

export const bucketName = bucket.id;
