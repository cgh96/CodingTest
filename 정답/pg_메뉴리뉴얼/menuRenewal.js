function solution(orders, course) {
    let foodList = [];
    let answer = [];

    for(let order of orders) {
        for(let f of order.split("")) {
            const food = foodList.find(elem => elem.name === f)
           if(food) {
                food.count++;
           } else {
            foodList.push({ name: f, count: 1 })
           }
        }
    }

    foodList = foodList.filter(elem => elem.count < 2).map(elem => elem.name)
    orders = orders.map(elem => elem.split("").filter(e => !foodList.includes(e)))

    const getCombinations = (selectNumber, order) => {
        const results = [];
        if(selectNumber === 1) return order.map(el => [el]);

        order.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1);
            const combinations = getCombinations(selectNumber - 1, rest);
            const attached = combinations.map(el => [fixed, ...el]);
            results.push(...attached);
        });

        return results;
    }

    
    for(let c of course) {
        let max = 0;
        foodList = [];

        for(let o of orders) {
            getCombinations(c, o).map(elem => {
                const word = elem.sort().join("");
                const tmp = foodList.find(el => el.name === word);
               
                if(tmp) {
                    tmp.cnt++;
                } else {
                    foodList.push({ name: word, cnt: 1 })
                }
            })
        }
        
        foodList.forEach(elem => {
            if(max < elem.cnt) {
                max = elem.cnt;
            }
        })
        if(max > 1) {
            answer.push(...foodList.filter(elem => elem.cnt === max).map(elem => elem.name));
        }

    }
    return answer.sort()
}

solution(
    ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"],
    [2,3,5]
)