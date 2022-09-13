function solution(s) {
    return s = s.split(" ")
                .map( word => {
                    return word
                    .replace(/[A-Z]/g, char => char.toLowerCase())
                    .replace(/^[a-z]/, char => char.toUpperCase());
                })
                .join(" ");
}

solution(" I have A 3Cars    whatThe E");