import {
  Transaction,
  WalletInfoRequest,
  WalletInfoResponse,
} from "./protos-out/protos/message_pb";
import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";

export async function walletInfo(
  call: ServerUnaryCall<WalletInfoRequest, WalletInfoResponse>,
  callback: sendUnaryData<WalletInfoResponse | null>
) {
  const { address } = call.request.toObject();
  console.log(address);
  const result = {
    total: 100,
    available: 80,
  };

  const transactions = [
    {
      toAddress: "0x1234567890",
      value: 10,
      timestamp: Date.now(),
      metadata: "metaData1",
    },
    {
      toAddress: "0x0987654321",
      value: 20,
      timestamp: Date.now(),
      metadata: "metaData11",
    },
  ];

  const res = new WalletInfoResponse();
  res.setTransactionList(
    transactions.map((transaction) => {
      const transactionProto = new Transaction();
      transactionProto.setMetadata(transaction.metadata);
      transactionProto.setToAddress(transaction.toAddress);
      transactionProto.setPoints(transaction.value);

      return transactionProto;
    })
  );
  res.setTotal(result.total);
  res.setAvailable(result.available);

  console.log(res);

  callback(null, res);
}
