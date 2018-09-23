# Selection Sort
Imagine sorting your song list with most played times in order to find your top favourite songs. In **Selection Sort**, firstly you will loop through the entire song list. Then, you **select** the song with the most played times. This operation is repeated until your sorted out for all the songs in the entire list. Finally, you get your favourite list.

## Running Time
For every `n` item in the list, you need to loop thorough `n` items to find the most/least target count. Thus, execution time is `n x n` i.e `O(n^2)`.


### Note
* Although, everytime we loop through the list, there will be `n-1` items since, we **select** out one item from the list in previous iteration. So actually it is `O(n x 1/2 x n)` execution time. But *constants* like `1/2` are neglected in Big-O notation. (read about Big-O notation, constants for more details)