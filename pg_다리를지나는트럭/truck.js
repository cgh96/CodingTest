function solution(bridge_length, weight, truck_weights) {
    let bridge = new Array(bridge_length).fill(0);
    let seconds = 0;
    let weightInBridge = 0;
    let truckNum = 0;

    truck_weights.reverse();

    let totalWeight = 0;
    let totalNumber = 0;

    while(truck_weights.length > 0 || bridge.filter(elem => elem > 0).length > 0) {
        if(bridge[0] > 0) {
            totalWeight -= bridge[0];
            totalNumber--;
        }
        bridge.splice(0, 1);

        if(
            totalNumber < bridge_length && 
            totalWeight + truck_weights[truck_weights.length - 1] <= weight
        ) {
            bridge.push(truck_weights.pop());
            totalNumber++;
            totalWeight+=bridge[bridge.length - 1];
        } else {
            bridge.push(0);
        }
        seconds++;
    }
    
    return seconds;    
}

solution(7, 7, [1, 1, 1, 1, 1, 3, 3]);

/** 
 * 2 - - - -
 * 2 2 - - -
 * - 2 2 - -
 * - - 2 2 -
 * - - - 2 2
 * - - - - 2
 * 2 - - - 2
 * 2 2 - - -
 * 2 2 
 * 2 2
 * 1 1 1 1 1
 */