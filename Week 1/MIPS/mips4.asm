  .data
    message: .asciiz "\nHello, Julio Nunez How you doing?!\n"
  .text
    main:
      li $v0, 4
      la $a0, message
      syscall