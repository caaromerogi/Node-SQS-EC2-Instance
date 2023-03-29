import "dotenv/config";

import { User } from '../Interfaces/User';
import { SendMessageCommand, SQS, SQSClientConfig } from "@aws-sdk/client-sqs";

// const sqsClientConfig:SQSClientConfig = {
//   apiVersion : '2008-10-17',
//   region: 'us-east-1'
// };
const sqsConfig:SQSClientConfig ={
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.ACCESS_KEY!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!
  }
}
const client = new SQS(sqsConfig);

const sender = async (param:User) => {
    const params ={
        QueueName:'SimpleAPIQueue',
        MessageBody: JSON.stringify(param),
        QueueUrl: process.env.QUEUE_URL!,
        MessageAttributes: {
          name: {
            DataType: 'String',
            StringValue: param.name
          },
          age: {
            DataType: 'Number',
            StringValue: param.age.toString()

          }
        }
    }

    console.log(params)
    
    await client.send(new SendMessageCommand(params));
}

export {sender};