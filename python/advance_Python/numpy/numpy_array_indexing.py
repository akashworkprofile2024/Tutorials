import numpy as np

arr = np.array([[1,2,4,5],[3,5,6,7]])
print(f'{arr[0]} , {arr[1]}')
print(f'{arr[0] , arr[1]} \n')


arr1=np.array([1,2,3,4])
print(f'Adding Two Elements of Array: {arr1[2] + arr1[3]}\n')  # Add two elements from array


persondetails=np.array([['Name','Address','Age'],['Akash Biswas' , 'Kolkata' , 25]])

for x in range(len(persondetails[0])):
    print(persondetails[0][x] , persondetails[1][x])
print('\n')

# Accessing element for specific element from Specific Dimension 
arr3 = np.array([['Pinky' , 'Rina' , 'Priya'],['Akash' , 'Soumodeep' , 'Gaurav']])

print(f"Female Employee: {arr3[0,2]}\nMale Employee: {arr3[1,1]}")
