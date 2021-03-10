# farhan_backendProject
Seharusnya menggunakan Swagger untuk menampilkan fungsi API pada frontend <br/>
karena waktunya tidak mencukupi jadi saya sertakan screenshot hasil dari API <br/>

untuk menggunakan API menggunakan aplikasi Postman <br/>

**1. API login (localhost:3003/api/login)**<br/>
login disini untuk mendapatkan token, dimana token tersebut untuk mengakses API lainnya
![ScreenShot](https://github.com/farhanalih/farhan_backendProject/blob/main/img/Login.PNG)
<br/>

**2. API Create Account (localhost:3003/api/account/create)**<br/>
API ini digunakan untuk menambahkan data account
![Screenshot](https://github.com/farhanalih/farhan_backendProject/blob/main/img/createAccount.PNG)<br/>
-karna disini menggunakan redis, jadi setiap kali menambahkan data harus menggunakan perintah **"flushall"**
pada redis-cli
![Screenshot](https://github.com/farhanalih/farhan_backendProject/blob/main/img/flush.PNG)

**3. API get data Account (localhost:3003/api/account/read)**<br/>
API ini digunakan untuk mendapatkan data account yang sudah di buat, untuk get data membutuhkan token<br/>
![Screenshot](https://github.com/farhanalih/farhan_backendProject/blob/main/img/getAccount.PNG)

**4. API Find by Account Number (localhost:3003/api/account/{accountNumber})**<br/>
API ini digunakan untuk mencari data account berdasarkan accountNumber, pada API ini membutuhkan parameter accountNumber<br/>
![Screebshot](https://github.com/farhanalih/farhan_backendProject/blob/main/img/findbyAN.PNG)

**5. API Find by Identity Number (localhost:3003/api/account/findbyIn/{identityNumber})**<br/>
API ini digunakan untuk mencari data account berdasarkan identityNumber<br/>
![Screenshot](https://github.com/farhanalih/farhan_backendProject/blob/main/img/findbyIN.PNG)

**6. API Update Account (localhost:3003/api/account/{id})** <br/>
Pada API ini kita bisa mengubah data account berdasarkan id pada data account <br/>
**- Data sebelum diubah** <br/>
![Screenshot](https://github.com/farhanalih/farhan_backendProject/blob/main/img/pre-update.PNG)<br/>
**- Ubah data** <br/>
![Screenshot](https://github.com/farhanalih/farhan_backendProject/blob/main/img/updateSuccess.PNG)<br/>
**- Data berhasil diubah**<br/>
![Screenshot](https://github.com/farhanalih/farhan_backendProject/blob/main/img/updated.PNG)<br/>

**7. API Delete Account (localhost:3003/api/account/delete/{id})**<br/>
API ini digunakan untuk menghapus data account pada database, membutuhkan id sebagai paramater <br/>
![Screenshot](https://github.com/farhanalih/farhan_backendProject/blob/main/img/deleted.PNG)
<br/>
<br/>

**Catatan** <br/>
-Setiap melakukan perubahan pada data harus menggunakan flush untuk clear cache, seperti pada point **2**

