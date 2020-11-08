def disemvowel(string):
    vowels = 'aeiouAEIOU'
    final_str = ''.join([ch for ch in string if ch not in vowels])
    return final_str