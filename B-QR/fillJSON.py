# Made by Emil Öhman (emilohman.nu)
# Forbidden to publish or use in a comercial use

fileCont = open('toBinNum.js', 'a')
first = '0,1,2,3,4,5,6,7,8,9'.split(',')
second = range(48, 58)

c = 0

for i in second:
    if c == 0:
        fileCont.write('data = {\n')
    fileCont.write('    ' + str(first[c]) + ':' + '"' + str(i) + '",\n')
    c = c + 1

fileCont.write('};')

print('Done!')
