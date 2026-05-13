print("calculadora")
n1= int(input("primer numero: "))
n2= int(input("segundo numero: "))
print("""
      1=sumar
      2=restar
      3=multiplicar
      4=dividir
      """)
opcion= input("ingrese una opcion: ")
if opcion=="1":
    print("la suma es: ", n1+n2)
elif opcion=="2":
    print("la resta es: ", n1-n2)
elif opcion=="3":
    print("la multiplicacion es: ", n1*n2)
elif opcion=="4":   if n2==0:
        print("no se puede dividir por cero")
    else:        print("la division es: ", n1/n2)