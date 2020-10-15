import { injectable } from "inversify";
import "reflect-metadata";
import { IGreeterServer } from "../server/protos/schema_grpc_pb";
import { HelloReply } from "../server/protos/schema_pb";

@injectable()
export class Controller implements IGreeterServer {
  public static type: string = "Controller";

  sayHello(call, callback) {
    console.log("controller");
    // call.on("data", (name) => {
    //   console.log(name);
    // });

    // call.on("end", () => {
    //   call.end();
    // });

    const reply = new HelloReply();

    reply.setMessage(`Hello: ${call.request.getMessage()}`);

    callback(null, reply);
  }
}
