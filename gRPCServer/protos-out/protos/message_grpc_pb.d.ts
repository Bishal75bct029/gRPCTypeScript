// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: protos/message.proto

import * as protos_message_pb from "../protos/message_pb";
import * as grpc from "@grpc/grpc-js";

interface IWalletService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createAddress: grpc.MethodDefinition<protos_message_pb.CreateAddressRequest, protos_message_pb.CreateAddressResponse>;
  transaction: grpc.MethodDefinition<protos_message_pb.TransactionRequest, protos_message_pb.TransactionResponse>;
  balance: grpc.MethodDefinition<protos_message_pb.BalanceRequest, protos_message_pb.BalanceResponse>;
  walletInfo: grpc.MethodDefinition<protos_message_pb.WalletInfoRequest, protos_message_pb.WalletInfoResponse>;
}

export const WalletService: IWalletService;

export interface IWalletServer extends grpc.UntypedServiceImplementation {
  createAddress: grpc.handleUnaryCall<protos_message_pb.CreateAddressRequest, protos_message_pb.CreateAddressResponse>;
  transaction: grpc.handleUnaryCall<protos_message_pb.TransactionRequest, protos_message_pb.TransactionResponse>;
  balance: grpc.handleUnaryCall<protos_message_pb.BalanceRequest, protos_message_pb.BalanceResponse>;
  walletInfo: grpc.handleUnaryCall<protos_message_pb.WalletInfoRequest, protos_message_pb.WalletInfoResponse>;
}

export class WalletClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createAddress(argument: protos_message_pb.CreateAddressRequest, callback: grpc.requestCallback<protos_message_pb.CreateAddressResponse>): grpc.ClientUnaryCall;
  createAddress(argument: protos_message_pb.CreateAddressRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<protos_message_pb.CreateAddressResponse>): grpc.ClientUnaryCall;
  createAddress(argument: protos_message_pb.CreateAddressRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<protos_message_pb.CreateAddressResponse>): grpc.ClientUnaryCall;
  transaction(argument: protos_message_pb.TransactionRequest, callback: grpc.requestCallback<protos_message_pb.TransactionResponse>): grpc.ClientUnaryCall;
  transaction(argument: protos_message_pb.TransactionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<protos_message_pb.TransactionResponse>): grpc.ClientUnaryCall;
  transaction(argument: protos_message_pb.TransactionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<protos_message_pb.TransactionResponse>): grpc.ClientUnaryCall;
  balance(argument: protos_message_pb.BalanceRequest, callback: grpc.requestCallback<protos_message_pb.BalanceResponse>): grpc.ClientUnaryCall;
  balance(argument: protos_message_pb.BalanceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<protos_message_pb.BalanceResponse>): grpc.ClientUnaryCall;
  balance(argument: protos_message_pb.BalanceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<protos_message_pb.BalanceResponse>): grpc.ClientUnaryCall;
  walletInfo(argument: protos_message_pb.WalletInfoRequest, callback: grpc.requestCallback<protos_message_pb.WalletInfoResponse>): grpc.ClientUnaryCall;
  walletInfo(argument: protos_message_pb.WalletInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<protos_message_pb.WalletInfoResponse>): grpc.ClientUnaryCall;
  walletInfo(argument: protos_message_pb.WalletInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<protos_message_pb.WalletInfoResponse>): grpc.ClientUnaryCall;
}
