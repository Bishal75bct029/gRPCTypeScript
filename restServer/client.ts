import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

const client = new grpc.Client(
  `localhost:4299`,
  grpc.credentials.createInsecure()
);

export default client;
