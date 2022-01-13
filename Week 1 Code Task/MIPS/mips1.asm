.data
	number1: .asciiz "\nIngrese el primer numero: "
	number2: .asciiz "\nIngrese el segundo numero: "
.text
	main:
		#printing number1 string
		li $v0, 4
		la $a0, number1
		syscall
		# input by the user 
		li $v0, 5
		syscall
		# the input is storage in a register called $v0 and the value is moved to $t0 ( this is not editable later)
		move $t0, $v0
		# we ask for the number 2
		li $v0, 4
		la $a0, number2
		syscall
		#input by the user of number 2
		li $v0, 5
		syscall
		# value of number 2 is storage in $t1
		move $t1, $v0
	
		li $v0, 1 # this is for print a number
		move $a0, $t0 # this indicates where is the locations of the value of the number 1
		syscall #print the number by execute the action