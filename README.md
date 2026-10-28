# FISI Lernen Admin Center V1

## Dosyalar
- `public/admin/index.html`
- `public/admin/admin.css`
- `public/admin/admin.js`
- `admin-api.js`
- `data/*.json`

## Mevcut server.js dosyasına eklenecek satırlar
`express.json(...)` satırından sonra:

```js
const createAdminApi = require('./admin-api');
app.use('/api/admin', createAdminApi({
  dataDir: path.join(__dirname, 'data'),
  adminToken: process.env.ADMIN_TOKEN
}));
```

Bu satırlar `express.static(PUBLIC_DIR)` satırından önce olmalıdır.

## Render ayarı
Render > Environment bölümünde `ADMIN_TOKEN` isimli güçlü bir gizli değer oluştur.

## Açılış
- Site: `/`
- Admin: `/admin/`

İlk açılışta panel `ADMIN_TOKEN` değerini ister. Token yalnızca tarayıcının localStorage alanında tutulur.
