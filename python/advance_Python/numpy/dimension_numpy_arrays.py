# value in an array is a 0-D -> array

import numpy as np
arr = np.array(42)
print('0-D Array: ' , arr , type(arr))

# An array that has 0-D array containing its element is -> 1 D array

#  1-D array
arr1 = np.array([1,'Akash','python','Css','Java'])
print('1-D Array: ',arr1 , type(arr),'\n')

#2-D array
arr2 = np.array([['fname','lname','age'] , ['Rahul','Kumar',45]])
print('2-D Array: ' , arr2 , type(arr2))
print(f'2-D Array 1st Index: {arr2[0]} \n')

#3-D array

arr3 = np.array([[['html','Css','Java'],['python','Ruby','C++'],['QBasic' , 'Javascript' ,'Rels']]])
print(f'3-D Array{arr3} , {type(arr3)}\n')


arr4 = np.array([[[1,2,3],[4,5,6]],[[7,8,9],[10,11,12]]])
print(arr4[0], '\n')

# Check Number of Dimension
print(f'Dimension: {arr.ndim}')
print(f'Dimension: {arr1.ndim}')
print(f'Dimension: {arr2.ndim}')
print(f'Dimension: {arr3.ndim}')
print(f'Dimension: {arr4.ndim}')


# Higher Dimensional Arrays
arr5 = np.array([1, 2, 3, 4], ndmin=6)

print(arr5)
print('number of dimensions :', arr5.ndim)