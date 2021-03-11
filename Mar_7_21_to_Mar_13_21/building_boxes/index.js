var minimumBoxes = function(n) {
    
};

/*
f(x) = f(x-1) + x + 1 where f(-1) = 0
f(0) = 1, f(1) = 3, f(2) = 6, f(3) = 10, f(4) = 15
1 = 1 
1 3 = 4 
1 3 6 = 10 
1 3 6 10 = 20
1 3 6 10 15 = 35

If n is greater than "current boxes" add another level until "cb" >= to n

*/