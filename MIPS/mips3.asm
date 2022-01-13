.data
	number1: .asciiz "\nIngrese el primer numero: "
	number2: .asciiz "\nIngrese el segundo numero: "
	result_message: .asciiz "\nEl resultado es: "
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
		# this makes de arimetic operation by adding $t0 and $t1 to $t2 that is the total of the sum
		add $t2, $t0, $t1
		# load the value of the $v0 
		li $v0, 4
		la $a0 result_message 
		syscall # this print the string storage in result_message ("El resultado es: ")
		
		li $v0, 1 
		move $a0, $t2 # the value is moving from $t2 to $a0
		syscall # print the value of $a0 that it contains the sum 