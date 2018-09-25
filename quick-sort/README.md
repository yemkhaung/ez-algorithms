# Quick Sort

Quick sort is quite used a lot in real-world libaries e.g `C` library `qsort` uses **Quick Sort** internally. Quick sort used **Divide & Conquer** algorithm to recursively apply sorting logic.

In Quick Sort, the main logic is *partitioning*, where

* pick a *pivot*
* get all elements smaller than *pivot* and put them into an array
* do the same for bigger elements, too.
* apply quicksort onto two sub-arrays *recursively*.

```
quicksort([5,3,7,1,12,4])
# pick a **pivot**
=> 5
# smaller sub-array + pivot + larger sub-array
quicksort([3,1,4]) + 5 + quicksort([7,12])
...
...
quicksort([7,12])
pivot = 7
quicksort([]) + 7 + quicksort([12])
```

In that way, `D&C` is applied recursively until there is only *ONE* element to sort which is our **BASE** case of D&C algorithm. After that, **Quick Sort** will merge everything from *SMALLER* and *LARGER* sides again in sorted order.