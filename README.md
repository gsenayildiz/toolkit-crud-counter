## REDUX-TOOLKİT

- Kurulum
npm install @reduxjs/toolkit
npm install react-redux
store ve reducer ı oluştur
- Redux Toolkit
Klasik reduxa göre daha az kod yazarak aynı sonucu elde edebileceğiz.

Dahili olarak thunk paketi içerisinde geliyor.

Proje içerisindeki statei yönetmek bizim için daha kolay olacak.

Devtools eklentisi sayesinde proje geliştirirken store u reducerları, dispatch edilen aksiyonları an ve an izleyebiliyoruz.

- Slice
Redux toolkitin içerisinde yer alan tek bir noktada hem reducer hemde actionları tanımlamamızı sağlayan yapıdır.

Klasik reduxta aksiyonları ayrı reducerları ayrı dosyalarda tanımlıyorduk.

Toolkit ile birlikte slice içerisinde ikisinide eskiye göre daha az kod yazarak tek noktada oluşturabiliyoruz.

- splice:
Belirtilen indeksten başlayarak belirtilen sayıda öğeyi diziden siler ve bu konuma yeni öğeler ekler.