# Made by Emil Öhman (emilohman.nu)
# Forbidden to publish or use in a comercial use

fileCont = open('toBinNum.js', 'a')
first = """STRING""".split(',')
second = range("""RANGE""")

c = 0

for i in second:
    if c == 0:
        fileCont.write('data = {\n')
    fileCont.write('    ' + str(first[c]) + ':' + '"' + str(i) + '",\n')
    c = c + 1

fileCont.write('};')

print('Done!')
