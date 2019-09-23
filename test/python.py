import boto3
s3 = boto3.client("s3")

def handler(event, context):
    try:
        data = s3.list_objects(
            Bucket='as2-test-lahiru',
            MaxKeys=10,
            Prefix='1'
        )
    
        """
        data = {
            "Contents": [
               {
                  "ETag": "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"",
                  "Key": "example1.jpg",
                  "LastModified": "<Date Representation>",
                  "Owner": {
                     "DisplayName": "myname",
                     "ID": "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
                  },
                  "Size": 11,
                  "StorageClass": "STANDARD"
               },
               # {...}
           ]
        }
        """
    except BaseException as e:
        print(e)

    print("hello world");
    return {"message": "Successfully executed"}
