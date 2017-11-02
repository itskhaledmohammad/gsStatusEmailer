# Google Sheet Status Emailer.

## What does the Script do?
This is a script written in app script(Google's own twist on Javascript for interacting with Google Services). The script very simply emails any update of status of an item to an email address. This can be helpful if you are using Google Sheet to keep track of deadlines and you want to notify your teammates about the status update. Google has bultin notification system but it is turned off by default, so if you have team members who are not very technically equipped it can be hard for them to setup the notification system as there is a certain friciton. So this is where ***Google Sheet Status Emailer*** comes in, it will email to specified email addresses whenever you update the status of an item. 

## Setup. 
Setting up is pretty easy. Lets do it:
1. Open the sheet you want to use ***Google Sheet Status Emailer*** on.
2. Open ***Script Editor*** by going to ***Tools>Script Editor...*** 
3. Paste the code from ***emailStatus.gs*** from this repo to the ***Code.js*** in ***Script Editor...***.
4. Now just change the variable `statusClm` in the code to the coloumn number which holds the status. 
5. We are done.

**NOTE: If this is your first time adding a script to this Google Sheet, it may require you give permission, give it the permission to make it work. And make sure the script is set to bound**

The script works out of the box for the following spread sheet setup:
**FIRST TWO ROWS OF THE SCRIPT ARE SKIPPED FOR DIFFERENT USAGE.(variable `rowsUsed` can be modified to set the number of rows being used.)**

| ITEMS    | DEADLINE      | STATUS    |
|----------|:-------------:|----------:|
| item1    |9/12/2040      |  PENDING  |
| item2    |6/5/2030       |  OVER DUE |
| item3    |24/04/2032     | SUBMITTED |
| item4    |15/05/2050     | PENDING   |


# Happy Coding. :D 