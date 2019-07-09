let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);

exports.handler = function (event, context, callback) {


    sqs.receiveMessage({
        QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/test`,
        AttributeNames: ['All'],
        MaxNumberOfMessages: '9',
        VisibilityTimeout: '30',
        WaitTimeSeconds: '10',
        MessageAttributeNames: ['']
    }).promise()
        .then(receivedMsgData => {
            if (!!(receivedMsgData) && !!(receivedMsgData.Messages)) {
                let receivedMessages = receivedMsgData.Messages;
                receivedMessages.forEach(message => {
                    console.log("Success");
                    console.log(data);
                    // your logic to access each message through out the loop. Each message is available under variable message 
                    // within this block
                });
            } else {
                console.log("No messages");
                //console.log( No messages );
                // No messages to process
            }
        })
        .catch(err => {
            console.log("not Success");
            console.log(err);
            // error handling goes here
        });


    callback(null, { "message": "Successfully executed ex put" });
}