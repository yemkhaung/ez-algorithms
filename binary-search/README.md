# Binary Search

Imagine a phonebook where friends or coworkers' contacts can be found.

In normal or linear way, from letter A to Z, page-by-page searching is done until the contact is found.

In a more effective way, **Binary Search** way, suppose phone no. for *John Wick* is to be searched. First, open at exactly the half of the phone book, at Letter *M* page probably. Not our word. Since *J* comes before *M*, go to 1st half of the book and open at the middle again i.e at a quater of the book. This halfing the contacts is continued until our *John Wick* contact is found. That is **Binary Search** for you.

## Running Time

For any list of *n*, binary search will take `log2 n` steps to run in worst case (Remember logarithms which are flip of exponentials, `10^2 = 100` while `log10 100 = 2`). Thus, `O(log2 n)` in Big-O notation.

### Note
* Binary search only works when your list is in sorted order, ascending or descending. For example, in a phone book, all the contacts are always sorted alphabetically.