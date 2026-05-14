# Perulangan / Iterasi

## Mencetak segitiga bintang

Perulangan ini untuk menampilkan bintang berbentuk segitiga

```mermaid
flowchart TD

A@{shape: circle, label: Start}
B@{shape: diamond, label: "x <= 4"}
C@{shape: rect, label: 'star = ""'}
D@{shape: dbl-circ, label: Stop}
E@{shape: rect, label: "y=1"}
F@{shape: diamond, label: "y <= x"}
G@{shape: diamond, label: 'star += "*"'}
H@{shape: rect, label: "y++"}
I@{shape: lean-r, label: '"{star}"'}
J@{shape: rect, label: "x++"}
K@{shape: rect, label: "x = 1"}



A --> K --> B
B --true--> C --> E --> F
F --true--> G --> H --> F
F --false--> I --> J --> B
B --false--> D
```