function solution(phone_number) {
   return phone_number = phone_number
   .split("")
   .reverse()
   .map( (elem, index) => elem = index > 3 ? "*" : elem )
   .reverse()
   .join("");
}

solution("01033334444");