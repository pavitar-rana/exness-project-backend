import WebSocket, { WebSocketServer } from "ws";
import { Queue } from "bullmq";
// import express from "express";
// const app = express();
//const httpServer = app.listen(3000);
const myQueue = new Queue("pricePooler");
const socket = new WebSocket(
// "wss://stream.binance.com:9443/stream?streams=btcusdt@kline_1s/solusdt@kline_1/ethusdt@kline_1s",
"wss://stream.binance.com:9443/stream?streams=btcusdt@kline_1s");
socket.onopen = () => {
    console.log("WebSocket is connected");
};
socket.onmessage = async (e) => {
    const data = JSON.parse(e.data.toString());
    await myQueue.add("priceToDB", data.data.k.c);
};
//# sourceMappingURL=index.js.map