# and , or , not 


#and

#or 
# firstName = "veer"
# age = 17
# print(firstName == "veer" or age == 1)
# if(firstName == "veer" or age == 17):
#     print("firstname")

# str1 = "veer is good boy"

# print("ajay" in str1)

# ajaysinghbhati052001@gmail.com  console.log("singhbhatisinghbhatisinghbhatisinghbhatisinghtbhatisinghtbhatisinghtbhatisinghtibi")
# What will be the output of the following code?



# x = 10
# y = 20
# print(x == y)
# Evaluate the expression:

# x = 15
# print(x > 10 and x < 20)
# Identify the correct operator to use for "less than or equal to."

# What is the result of:

# a = 5
# b = 5
# print(a != b)
# Write a  condition to check if a variable z is both greater than 10 and less than or equal to 50.

# Logical Operators
# What will this expression evaluate to?

# x = 3
# print(x < 5 or x > 10)
# Predict the output of the following code:

# x = 7
# y = 12
# print(not(x > y or y < 15))

# Which logical operator would you use to ensure two conditions are both true?  

# What does the not operator do when applied to a boolean expression?

# Simplify this statement using logical operators:
# x = 8
# if (x > 10 and x < 20):
#     print("Valid")

# Identity Operators
# Determine the output:

# a = [1, 2, 3]
# b = [1, 2, 3]
# print(a is b)

# What will x is not y return if x and y refer to different objects with the same value?
# a = [1, 2, 3]
# b = [1, 2, 3]

# print(a is  b )

# Is it possible for x == y to return True but x is y to return False? Explain with an example.
# a = [1, 2, 3]
# b = [1, 2, 3]
# print(a  ==  b )
# print(a is  b )

# Write a condition to check if two variables a and b point to the same object in memory.

# a = [1, 2, 3]
# b = a

# Membership Operators   in ,not in 
# Predict the output:
# text = "Hello, World!"
# print("Hello" in text)
# fruits = ["apple","banana","apple",1,2,3,4,"True",True]
# print(fruits)
# html  - css  - javascript  - reactjs(frontend)/angular   - nodejs expresjs mongodb   6 -7    git  
# mern  
# ram - 8 gb  ssd - 512 
# mean

# print(data)
# data[1:4] = ["veer"] 
# # ["apple","veer","gupta","grapes"]
# print(data)  

# data =["reading","gaming","coding"]  #list

# i = 0

# while i < len(data):
#     print(f'I like {data[i]}')
#     i = i+1

# Question 1: Basic For Loop
# fruits = ["apple", "orange", "grape"]
# Write a for loop to print each fruit in the list.

# Question 2: Looping with Index Numbers
# Write a program that uses the range() function to loop through the list below and prints the index and the corresponding item.
# animals = ["cat", "dog", "rabbit"]

# Question 3: While Loop
# Use a while loop to print each element in the list until the end.
# colors = ["red", "green", "blue"]

# Question 4: List Comprehension
# Rewrite the following code using list comprehension:

# numbers = [1, 2, 3, 4]
# for num in numbers:
#     print(num)

# Question 5: Custom Message in Loop
# Write a loop (any type) to print each item from the list along with a custom message: "I like <item>".
# hobbies = ["reading", "gaming", "coding"]

#  before comprehension
# fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
# newlist = []
# for x in fruits:
#   if "w" in x:
#     newlist.append(x)

# print(newlist)

# after comprehension
# fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

# newlist = [x for x in fruits]

# print(newlist)

# import random
# print(random.randrange(1,6))

# print(range(1,6))

# newList = [x for x in range(10) if x < 5 ]
# print(newList)

# lsit  = ['b','a','c']
# lsit.reverse()

# list = ["orange", "mango", "mor","kiwi", "pineapple", "banana"]
# print("before reverse")
# print(list)
# list.reverse()
# print("after reverse")
# print(list)
# 1. What will be the value of newlist?
# python
# Copy code
# fruits = ['apple', 'banana', 'cherry']
# newlist = [x for x in fruits if x != 'banana']
# 2. What will be the value of squared?
# python
# Copy code
# numbers = [1, 2, 3, 4, 5]
# squared = [x**2 for x in numbers if x % 2 == 0]
# 3. What will be the value of filtered?
# python
# Copy code
# words = ['python', 'java', 'c++', 'ruby']
# filtered = [word for word in words if len(word) > 4]
# 4. What will be the value of multiplied?
# python
# Copy code
# nums = [2, 4, 6, 8]
# multiplied = [x * 2 for x in nums if x > 4]
# 5. What will be the result of the following code?
# python
# Copy code
# thislist = ["banana", "apple", "Apple", "cherry"]
# thislist.sort()
# print(thislist)
# 6 sort this list assending order
# thislist = [10, 20, 15, 30, 25]
# 7 sort this list descening order
# thislist = [10, 20, 15, 30, 25]
# 8 reverse this list
# thislist = [10, 20, 15, 30, 25]
# words = ['python', 'java', 'c++', 'ruby']
# filtered = [x for x in words if len(x) > 4]
#task 106
# fruits = ['apple','banana','cherry']
# newlist = [x for x in fruits if x !='banana']
# print(newlist)
#task 107
# numbers = [1, 2, 3, 4, 5]
# squared = [x**2 for x in numbers if x % 2 == 0]
# print(squared)
#task 108
# words = ['python','java','c++','ruby']
# filtered = [x for x in words if len(x) > 4]
# print(filtered)      #@!output = "python" - because python size is more than 4#@!
#task 109
# nums = [2, 4, 6, 8]
# multiplied = [x * 2 for x in nums if x > 4]
# print(multiplied)
#task 110
# thislist = ["banana", "apple", "Apple", "cherry"]
# thislist.sort()
# print(thislist)
#task 111
# thislist = [10, 20, 15, 30, 25]
# thislist.sort()
# print(thislist)
#task 112
# thislist = [10, 20, 15, 30, 25]
# thislist.sort(reverse=True)
# print(thislist)
#task 113
# thislist = [10,20,15,30,25]
# thislist.reverse()
# print(thislist)
# premitive data type   reference data type 
# list1 = [1,2,3,4,5]
# list2 = list1[:]
# list1.append(6)
# print(list1)
# print(list2)

# fruits = ('apple','banana','mango','kiwi')
# print(fruits)

# del (fruits)

# print(fruits)

# fruits = ('apple','banana','cherry')

# print(newtuple)

# thisset = {"apple", "banana", "cherry", "apple"}
# thisset = set(("apple", "banana", "cherry", True, 1, 2))

# # print(thisset)

# print(thisset)

# thisset = ["apple", "banana", "cherry"]
# mylist = ("kiwi", "orange")

# thisset.update(mylist)

# print(thisset)

#task 157      # Use symmetric_difference_update() to update set A with non-overlapping items from set B.

#task 161      # Find the common elements between two lists using sets: [1, 2, 3, 4] and [3, 4, 5, 6].

#task 159      #Convert a string "hello" into a set of unique characters.
# str = {"h","e","l","l","o","l","l"}
# print(str)
# str = "prograamming"

# thisSet = set()
# for x in str:
#     if x in "aeiou":
#         thisSet.add(x)

# print(thisSet)

#task 160  #Create a set of all unique vowels from the string "programming".

#task 150     # Remove all even numbers from a set .

# thisSet = {1, 2, 3, 4, 5, 6, 7, 8}

# for x in thisSet:
#     if x%2 == 0:
#         thisSet.remove(x)
# print(thisSet)

#task 155      # Use intersection_update() to update set A to only include common items with set B.
# setx={"apple","banana"}
# sety={"banana","cheery"}
# setx.intersection_update(sety)
# print(setx)

#task 156      #Use difference_update() to remove items in set B from set A.
# x = {1,2,3,4}
# y = {3,4,5}
# x.difference(y)
# print(x)

#task 153      # Find the symmetric difference between {1, 2, 3} and {3, 4, 5}.     
# x = {1,2,3,4}
# y = {3,4,5}
# x.symmetric_difference_update(y)
# print(x)

# #task 148     # Loop through the set {"python", "java", "c++"} and print each item.
# thisset={"python", "java", "c++"}
# for x in thisset:
#     print(x)

# thisdict["model"] = "TaTa"
# thisdict.update({"model":"Tata"})
# print(thisdict)

# if "model" in thisdict:
#     print("yes")
# else:
#     print("No")

# thisdict["nwtWorth"] = "1000$"
# thisdict.update({
#     "colors":"blue"
# })

# del thisdict["year"]
# thisdict.clear()
# print(thisdict)

# thisdict = dict(brand =  "Ford",
#   model =  "Mustang",
#  year = 1964,
#   colors = "red"
#   )

# thisdict2 = dict(thisdict)
# print(thisdict2)

# thisdict["name"]="veer"
# print(thisdict2)

# myfamily = {
#   "child1" : {
#     "name" : "Emil",
#     "year" : 2004
#   },
#   "child2" : {
#     "name" : "Tobias",
#     "year" : 2007
#   },
#   "child3" : {
#     "name" : "Linus",
#     "year" : 2011
#   }
# }

# for x in myfamily:
#     print(myfamily[x]["name"])
    
# a = {'name' : 'John', 'age' : 20}
# b = {'name' : 'May', 'age' : 23}
# customers = {'c1' : a, 'c2' : b}
# for x, obj in customers.items():
#   print(x)
    
#   for y in obj:
#     print(y,obj[y])


# user ki age 6 milk , 6 se 18 coffee , 18 drink 

# if x > 10 {
#      print("yes")
# }
# x = 101

# if x < 6:
#     print("Milk")
# elif x > 6 and x < 18 :
#     print("coffee")
# elif x > 18 and x < 100 : 
#     print("drink")
# else:
#     print("no")


# x  = 10

# # if x > 5 :
# #     print("yes")
# # else:
# #     print("no")

# print("Yes") if x > 5 else print("no")

#and , or , not
# a = 200
# b = 33
# c = 500
# if not a > b:
#   print("a is NOT greater than b")

# if a > b or c > a:
#   print("atleast one  condition are True")

# if a > b and c > a :
#   print("Both conditions are True")

#nested if 

# x  = 40 

# if x > 20 :
#     if x < 30:
#         print("yes")

# while loop 

# x = 1 
# print(x)
# print(x+1)
# print(x+1+1)
# print(x+1+1+1)
# print(x+1+1+1+1)

# x = 1
# while x < 10:



    # es5







# i =1 
# while i< 6:
#     if i ==3:
#         i+=1
#         continue
#     print(i)
#     i+=1

# i = 1
# while i < 6:
#     print(i)
#     i += 1
# else:
#     print("i is no longer less than 6")