import { io , server } from "./app.js";

const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
  socket.emit('me', socket.id);
  console.log('a user connected', socket.id);

  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', socket.id);
    console.log('user disconnected', socket.id);
  });

  socket.on('callUser', ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit('callUser', { signal: signalData, from, name })
    console.log('callUser', { signal: signalData, from, name });
  });

  socket.on('answerCall', (data) => {
    io.to(data.to).emit('callAccepted', data.signal)
    console.log('answerCall', data);
  });
});


server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});