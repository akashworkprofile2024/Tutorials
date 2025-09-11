# value in an array is a 0-D -> array

import numpy as np
arr = np.array(42)
print('0-D Array: ' , arr , type(arr))

# An array that has 0-D array containing its element is -> 1 D array

arr1 = np.array([1,'Akash','python','Css','Java'])
print('1-D Array: ',arr1 , type(arr))

arr2 = np.array([['fname','lname','age'] , ['Rahul','Kumar',45]])
print('2-D Array: ' , arr2 , type(arr2))
print(f'${arr2[0]}')
