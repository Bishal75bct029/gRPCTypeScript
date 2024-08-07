import * as grpc from "@grpc/grpc-js";
import { WalletService } from "./protos-out/protos/message_grpc_pb";
import { walletInfo } from ".";
const server = new grpc.Server();

function main() {
  server.addService(WalletService, { walletInfo });
  server.bindAsync(
    `localhost:4299`,
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.log("Failed to start gRPC server", error);
        return;
      }
      console.log(`gRPC server started on port ${port}`);
    }
  );
}

main();
