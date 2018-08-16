def smallestlist(list):
    biggest = 0
    for x in list:
        if x > biggest:
            biggest = x
    print(biggest)
