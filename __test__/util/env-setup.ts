import configuration from "../../server/config";
import context from "../../server/context";
import create from "../../server/create";

const { endpoint, port } = configuration.get("server");

console.log(`============ env-setup Loaded ===========`);

const server = create(context);

(global as any).server = server;
(global as any).server.start();
