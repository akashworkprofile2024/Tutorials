import numpy as np
arr = np.array([1,2,3,4,5,6,7])

print(arr[1:5]) # include 1 and exclude 5 pos


print(arr[3:]) # Exclude 3 element from array from the start
 
print(arr[:3]) # Exclude 3 element from array from thr end



# Negative
print(arr[-3:-1]) # -1 exclude and -4 -5 -6 -7 exculded



print(arr[1:5:2])


print(arr[::2])  # Exclude element every 2nd position


# 2D array

arr2d = np.array([[1,2,3,4,5],[6,7,8,9,10]])
print('2d array: ',arr2d[1 , 1:4])  # 1 is index and 1 and 4 element is excluded

print('2D array: ',arr2d[0:2 , 2])   # return 2nd pos from both array

print('2D Array: ',arr2d[0:2, 1:4]) # exclude 1 and 4 pos from the both array







