const origin = {x: 0, y: 0}
// robots always start at 0,0 

var housesTotal = document.querySelector('.houses-total')


var currentPosition = document.querySelector('.current-position')

var robbieRobot = {
    name: "Robbie",
    lastMove: origin,
}
// declare a unique variable
// name property to use in html
// lastmove = origin , all robots always start at 0,0


function move(robot, direction){
     if (direction  == 'up'){
        robot.lastMove = {
            x: robot.lastMove.x,
            y: robot.lastMove.y +1
        }
        // adding to the y coordinate by 1 (moves up)
        addToVisited(housesVisited, robot.lastMove)
        displayLastMove(robot.lastMove.x, robot.lastMove.y)
        // pushes to the array of houses visited, if no duplicates
    } else if(direction == 'down'){
        robot.lastMove = {
            x: robot.lastMove.x,
            y: robot.lastMove.y -1
        }
        addToVisited(housesVisited, robot.lastMove)
        displayLastMove(robot.lastMove.x, robot.lastMove.y)
    } else if (direction == 'left'){
        robot.lastMove = {
            x: robot.lastMove.x -1,
            y: robot.lastMove.y
        }
        addToVisited(housesVisited, robot.lastMove)
        displayLastMove(robot.lastMove.x, robot.lastMove.y)
    }else if (direction == 'right'){
        robot.lastMove = {
            x: robot.lastMove.x +1,
            y: robot.lastMove.y 
        }
        addToVisited(housesVisited, robot.lastMove)
        displayLastMove(robot.lastMove.x, robot.lastMove.y)
    }else {}
    
}
      
function addToVisited(houses, lastMove){
    var exists = houses.filter(function(house){
        return house.x == lastMove.x &&
               house.y == lastMove.y 
    })
    if (exists.length ==0){
        housesVisited.push(lastMove)
    }
    housesTotal.innerHTML = housesVisited.length
    // force update anytime function runs
}


function clickNext() {
    move(robbieRobot, "up")
    setTimeout(function(){ move(robbieRobot, "up"); }, 2000);
    setTimeout(function(){ move(robbieRobot, "down"); }, 3000);
    setTimeout(function(){ move(robbieRobot, "down"); }, 4000);
    setTimeout(function(){ move(robbieRobot, "left"); }, 5000);
    setTimeout(function(){ move(robbieRobot, "right"); }, 6000);
  }
//set timeout function to show each coordinate

var housesVisited = []

function displayLastMove(x,y){
    return currentPosition.innerHTML = "x: " + x + " y: " + y
}



