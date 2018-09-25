# Checker Search

 

Simple algorithm to find out the maximum beating steps that a SINGLE pawn can take for the game **CHECKERS**.

 

Considering two# Checker Search

Simple algorithm to find out the maximum beating steps that a SINGLE pawn can take for the game **CHECKERS**.

 

Considering two players ‘X’ and ‘O’. ‘X’ has may pawns than ‘O’ and ‘O’ needs to take out as much pawns as possible from ‘X’s side.

 

For example, in following case, ‘O’ can take out _TWO_ of ‘X’s pawns as maximum.

 

| . X . . . |

| X . . X . |

| . . . . . |

| . X . X . |

| . . O . . |

 

Or, none in this case.

 

| . X . . X |

| X . . X . |

| . . O . . |

| . X . X . |

| . . . . . |

 

An array of strings will be represented as the **Board** as similar to follows.

 

B[0] = [.X…]

B[1] = [X..X.]

B[2] = [.X…]

B[3] = [.X.X.]

B[5] = [..O..]

 

\### Assumptions

 players 'X' and 'O'. 'X' has may pawns than 'O' and 'O' needs to take out as much pawns as possible from 'X's side.

 

For example, in following case, 'O' can take out *TWO* of 'X's pawns as maximum.

 

| . X . . . |

| X . . X . |

| . . . . . |

| . X . X . |

| . . O . . |

 

Or, none in this case.

 

| . X . . X |

| X . . X . |

| . . O . . |

| . X . X . |

| . . . . . |

 

An array of strings will be represented as the **Board** as similar to follows.

 

B[0] = [.X...]

B[1] = [X..X.]

B[2] = [.X...]

B[3] = [.X.X.]

B[5] = [..O..]

 

### Assumptions

* Board dimensions are in `N x N` size.
* Pawn movement is only upward.
* Pawn can only move diagonally.
* Pawn take ONE step at a time basically. (TWO steps when beating opponent's pawn)
 