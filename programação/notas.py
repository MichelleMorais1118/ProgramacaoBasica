valor = int(input()) 
notas = [100, 50, 20, 10, 5, 2, 1] 

for c in notas: 
    if valor >= c: 
        resto = int( valor/c )
        print(resto, "nota(s) de R$", c, end=',00')
        valor = valor % c 
        c += 1 
    else: 
        print("0 nota(s) de R$", c, end=',00')
        c += 1