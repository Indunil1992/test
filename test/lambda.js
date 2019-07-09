let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);

exports.handler = function (event, context, callback) {

    sqs.receiveAndDeleteMessages({
        QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/check.fifo`,
        AttributeNames: ['All'],
        MaxNumberOfMessages: '10',
        VisibilityTimeout: '50',
        WaitTimeSeconds: '10',
        MessageAttributeNames: ['a', 'b']
    }, function (receivedMessages) {
        console.log("receivedMessages");
                 console.log( receivedMessages );
        // implement received message filtering logic here and return filtered set of messages which 
        // are allowed to delete in the next step
        return receivedMessages;
    }, function (deleteSuccessData) {
        console.log("deleteSuccessData");
                 console.log( deleteSuccessData );
        // implement delete success state here
    }, function (error) {
        console.log("not Success");
                 console.log( error );
        // implement error handling logic here
    });


    callback(null, { "message": "Successfully executed - FIFO nw" });
}