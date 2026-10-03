const express = require('express');
const path = require('path');

const routes = require('./routes/index');

const app = express();
const PORT = 3000;

// Kích hoạt static files từ public
app.use(express.static(path.join(__dirname, 'public')));

// Cấu hình view engine EJS (hỗ trợ cả views và view)
app.set('view engine', 'ejs');
app.set('views', [path.join(__dirname, 'views'), path.join(__dirname, 'view')]);

// Sử dụng routes chính
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server chạy tại http://localhost:${PORT}`);
});