import grpc from "grpc";
import configuration from "../../server/config";
import { GreeterClient } from "../../server/protos/schema_grpc_pb";
import { HelloRequest } from "../../server/protos/schema_pb";

const { address, port } = configuration.get("server");

const URL = `${address}:${port}`;

describe("funding client", () => {
  test("Should return a response with code 200", async () => {
    const client = new GreeterClient(URL, grpc.credentials.createInsecure());

    const request = new HelloRequest();

    request.setName("Godoberto");

    client.sayHello(request, (err, response) => {
      console.log(err);
      console.log(`Greetings: ${response.getMessage()}`);
    });
  });
});
