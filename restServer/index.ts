import express from "express";
import * as grpc from "@grpc/grpc-js";
import { WalletInfoRequest } from "../gRPCServer/protos-out/protos/message_pb";
import { WalletClient } from "../gRPCServer/protos-out/protos/message_grpc_pb";
const app = express();

app.get("/", (req, res) => {
  const client = new WalletClient(
    "localhost:4299",
    grpc.credentials.createInsecure()
  );
  const gReq = new WalletInfoRequest();
  gReq.setAddress("1");
  client.walletInfo(gReq, (err, gRes) => {
    res.send(gRes?.toObject());
  });
});

app.listen(3000, () => {
  console.log("Rest Server started successfully");
});
