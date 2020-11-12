def decodeMorse(morse_code):
    return ' '.join(
        ''.join(MORSE_CODE[value] for value in item.split(' ')) for item
        in morse_code.strip().split('   '))
#     return morse_code.replace('.', MORSE_CODE['.']).replace('-', MORSE_CODE['-']).replace(' ', '')