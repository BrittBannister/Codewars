def delete_nth(order,max_e):
    ans = []
    for num in order:
        if ans.count(num) < max_e: ans.append(num)
    return ans