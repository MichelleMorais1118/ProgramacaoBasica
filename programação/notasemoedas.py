valor = float(input()) 
dinheiro = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00,1.00,0.5,0.25,0.10,0.05,0.01]

for c in dinheiro: 
    if valor >= c: 
        if valor>1:
            resto = float( (valor/c)-((valor%c)/c) )
            print(resto, "nota(s) de R$", c)
            print()
            valor = valor % c 
            c += 1
        else:
            resto = float( (valor/c) -((valor%c)/c))
            print(resto, "moeda(s) de R$", c)
            print()
            valor = valor % c 
            c += 1 
    else: 
        if valor>1:
            print("0 nota(s) de R$", c)
            print()
            c += 1
        else:
            print("0 moeda(s) de R$", c)
            print()
            c += 1
        
    