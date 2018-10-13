from collections import deque

graph = {}
root = "you"
graph["you"] = ["bob", "alice", "charlie"]
graph["bob"] = ["anuij", "peggy"]
graph["alice"] = ["you", "peggy"]
graph["charlie"] = ["thom", "johnny"]
graph["peggy"] = ["bob", "alice"]
graph["anuij"] = []
graph["johnny"] = []
graph["thom"] = []

def bfs(name):
    # for checking already searched names (avoid looping search)
    searched = []
    search_queue = deque()
    # initially put one-level connections from root
    search_queue += graph[root]
    while search_queue:
        person = search_queue.popleft()
        if not person in searched:
            if name == person:
                print person + " is found."
                return True
            else:
                searched.append(person)
                # adding all adjacent-level connections from current node
                search_queue += graph[person]
    print name + " could not be found."                
    return False

def person_is_seller(name):
    return name[-1] == "m"

bfs("johnny")
bfs("dummy")