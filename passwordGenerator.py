def genNPass(n):
    import random

    letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    chars = ['@','#','/','=','?', '%', '!', '&', '.']

    password = []

    for q in range(n):
        temp = ''
        for i in range(random.randint(8, 15)):
            if i % random.randint(2, 8) == 0 and not i == 0:
                temp = temp + chars[random.randint(0, 7)]
            else:
                temp = temp + letters[random.randint(0, 51)]
        password.append(temp)

    return password
