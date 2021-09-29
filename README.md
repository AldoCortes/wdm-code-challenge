# Willdom Code Challenge

This code is trying to resolve the following problem:

Create a Rest API that outputs the string la of numbers from 1 to n.

But for multiples of three it should output *“Big”* instead of the number, for the multiples of five output *“Bang”* and for the multiples of seven output *“Theory”*. 
For numbers which are multiples of both three and five output *“BigBang”*, for numbers which are multiples of three and seven output *“BigTheory”*, for numbers which are multiples of five and seven output *“BangTheory”*,  for multiples of three, five and seven output *“BigBangTheory”* and so on.

Once you complete your API  you must create a web client where users can enter a *“n”* value and show the result of the API.

Plus: 

- Implement the necessary unit tests to validate correct working of the API.
- Highlight the special numbers like Big, Bang and so on.
- Implement a log process to save all requests into the database.


*****


### Sample

For the input n = 21

Response:
```json
[
    "1",
    "2",
    "Big",
    "4",
    "Bang",
    "Big",
    "Theory",
    "8",
    "Big",
    "Bang",
    "11",
    "Big",
    "13",
    "Theory",
    "BigBang",
    "16",
    "17",
    "Big",
    "19",
    "Bang",
    "BigTheory"
]
```

*****
The code is separated in two main branches:
### codelive:
Contains the back end using NodeJs.

### wdm-test-interface:
Is the repository for the front end using VueJs.



## Thanks!
