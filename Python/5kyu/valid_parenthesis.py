def valid_parentheses(string):
    counter = 0
    for char in string:
        if char == '(':
            counter +=1
            
        if char == ')':
            counter -= 1
            
        if counter < 0:
            return False
            
    return counter == 0