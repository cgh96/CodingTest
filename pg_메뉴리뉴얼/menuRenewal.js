function solution(orders, course) {
    let foodList = [];
    let courseList = [];
    let answer = [];

    orders = orders.map(order => order.split("") );

    for(let order of orders) {
        for(let f of order) {
            const food = foodList.find(elem => elem.name === f)
           if(food) {
                food.count++;
           } else {
            foodList.push({ name: f, count: 1 })
           }
        }
    }

    foodList = foodList.filter(elem => elem.count < 2).map(elem => elem.name)
    orders = orders.map(elem => elem.filter(e => !foodList.includes(e)))

    const combination = (selectNumber, order, fixed) => {
        const tmp = fixed.split("").sort().join("")
        if(selectNumber === fixed.length && !courseList.includes(tmp)) {
            courseList.push(tmp);
            return;
        }

        order.forEach( elem => {
            if(!fixed.split("").includes(elem)) {
                combination(selectNumber, order, fixed + elem);
            }
        })
    }

    for(let c of course) {
        let result = [];
        for(let o of orders) {
            combination(c, o, "");
            result.push(...courseList)
            courseList = [];
        }
        let tmp = [];
        for(let r of result) {
            const cnt = result.filter(elem => elem === r).length;
            if(!tmp.find(elem => elem.course === r) && cnt > 1) {
                tmp.push({
                    course: r,
                    count: cnt
                })
            }
        }
        let max = 0;
        for(let t of tmp) {
            if(t.count > max) {
                max = t.count;
            }
        }
        answer.push(...tmp.filter(elem => elem.count === max).map(elem => elem.course));
    }
    return answer.sort()
}

solution(
    ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"],
    [2,3,5]
)