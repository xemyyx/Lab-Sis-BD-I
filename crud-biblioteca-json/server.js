const { createApp } = require("./src/app");

const PORT = process.env.PORT || 3000;
const app = createApp();

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Biblioteca (JSON) en http://localhost:${PORT}`);
  console.log(`📡 También disponible en tu IP local en el puerto ${PORT}`);
});