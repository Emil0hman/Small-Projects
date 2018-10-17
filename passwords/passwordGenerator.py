def genNPass(n=1, l=[8, 14]):
    import random

    letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    chars = ['@','#','/','=','?', '%', '!', '&', '.', '_', '-']

    password = []

    for q in range(n):
        temp = ''
        for i in range(random.randint(l[0], l[1])):
            if i % random.randint(2, 8) == 0 and not i == 0:
                temp = temp + chars[random.randint(0, len(chars) - 1)]
            else:
                temp = temp + letters[random.randint(0, len(letters) - 1)]
        password.append(temp)

    return password
