def better_than_average(class_points, your_points):
    all_students = total_points = 0.0
    for a in class_points:
        total_points += a
        all_students += 1
    return your_points > total_points / all_students