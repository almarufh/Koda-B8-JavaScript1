# Perulangan / Iterasi

Perulangan ini berfungsi untuk mencetak bintang berbentuk segitiga

```mermaid

flowchart TD

A@{ shape: circle, label: Start }
B@{ shape: rect, label: "bintang = 1" }
C@{ shape: rect, label: "x = 1"}
D@{ shape: diamond, label: "x < 5 " }
E@{ shape: dbl-circ, label: Stop}
F@{ shape: rect, label: 'cetak = ""' }
G@{ shape: rect, label: "y = 1" }
H@{ shape: lean-r, label: '"{cetak}"' }
I@{ shape: diamond, label: "y <= bintang" }
J@{ shape: rect, label: 'cetak += "* "' }
K@{ shape: rect, label: "y++"}
L@{ shape: rect, label: "bintang +=1"}
M@{ shape: rect, label: "x++" }


A --> B --> C --> D --false--> E
D --true--> F --> G
G --> I --false--> H --> L --> M --> D
I --true--> J --> K --> I 
```