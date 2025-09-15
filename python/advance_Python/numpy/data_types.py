# Checking the Data type of an array

import numpy as np 
arr  = np.array([1,2,3,4,5,6])
print(f'Array Data type: {arr.dtype}')   # dtype return Data Type

arr1  = np.array(['python','java','Ruby'])
print(f'Array Data type: {arr1.dtype}')   # dtype return Data Type


arr2  = np.array(['python','java','Ruby'] , dtype='S')
print(arr2)
print(f"arr2.dtype: {arr2.dtype}")


arr3 = np.array([1,2,3,4,5,6], dtype='i1')
print(arr3)
print(f"arr2.dtype: {arr3.dtype}")




