def identify_weapon(character):
    weapon = {
        'Laval': 'Laval-Shado Valious',
        'Cragger': 'Cragger-Vengdualize',
        'Lagravis': 'Lagravis-Blazeprowlor',
        'Crominus': 'Crominus-Grandorius',
        'Tormak': 'Tormak-Tygafyre',
        'LiElla': 'LiElla-Roarburn'
    }
    if character not in weapon:
        return 'Not a character'
    else:
        return weapon[character]