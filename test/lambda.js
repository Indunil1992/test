let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);

exports.handler = function (event, context, callback) {
    sqs.receiveMessage({
        QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/test`,
        AttributeNames: ['SequenceNumber'],
        MaxNumberOfMessages: '10',
        VisibilityTimeout: '30',
        WaitTimeSeconds: '10',
        MessageAttributeNames: ['saaaaa', 'kaa']
    }).promise()
        .then(receivedMsgData => {
            if (!!(receivedMsgData) && !!(receivedMsgData.Messages)) {
                let receivedMessages = receivedMsgData.Messages;
                receivedMessages.forEach(message => {
                    // your logic to access each message through out the loop. Each message is available under variable message 
                    // within this block
                    console.log("message");
                    console.log(message);
                });
            } else {
                // No messages to process
                console.log("No messages");
                // console.log( message );
            }
        })
        .catch(err => {
            // error handling goes here
            console.log("err");
            console.log(err);
        });



    callback(null, { "message": "Successfully LLL executed" });
}