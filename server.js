const express = require('express');
const path = require('path'); // ← bu eklenecek

const app = express();
const PORT = process.env.PORT || 10000;

// Bu satırla public klasörünü statik hale getiriyoruz
app.use(express.static(path.join(__dirname, 'public'))); // ← BU ÇOK ÖNEMLİ

app.get('/', (req, res) => {
  res.send('Merhaba Dünya!');
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
