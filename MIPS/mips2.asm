.data
	result_message: .asciiz "\nEl resultado es: "
.text
	main:
		#li stands for load inmediate
		#this is for load the numbers register in $t0 and $t1
		li $t0, 30
		li $t1, 50
		# this makes de arimetic operation by adding $t0 and $t1 to $t2 that is the total of the sum
		add $t2, $t0, $t1
		# load the value of the $v0 
		li $v0, 4
		la $a0 result_message 
		syscall # this print the string storage in result_message ("El resultado es: ")

		li $v0, 1 
		move $a0, $t2 # the value is moving from $t2 to $a0
		syscall # print the value of $a0 that it contains the sum 