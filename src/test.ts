// test.ts
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

socket.on("connect", () => {
    console.log("✅ Connected with ID:", socket.id);
    socket.emit("callUser", {
        userToCall: "some-socket-id",
        signalData: "test-signal-data",
        from: socket.id,
        name: "Hammani"
    });
});

socket.on("callUser", (data) => {
    console.log("📞 Received incoming call:", data);
});

socket.on("callAccepted", (signal) => {
    console.log("✅ Call accepted with signal:", signal);
});

socket.on("disconnect", () => {
    console.log("❌ Disconnected");
});
