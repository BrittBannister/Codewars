def capitalize(s):
    odds = ''
    evens = ''
    for i, char in enumerate(s):
        if i % 2:
            odds += char.upper()
            evens += char
        else:
            odds += char
            evens += char.upper()
    return [evens, odds]