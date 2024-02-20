export const first = (names,nums) => {
    console.log("first",names[0])
    console.log("first",nums[0])}

export const removeLast = (names,nums) => {
    let bufferNames = names
    let bufferNums = nums
    let newNames = bufferNames.slice(0,-1)
    let newNums = bufferNums.slice(0,-1)
    console.log("removeLast", newNames)
    console.log("removeLast", newNums)
}

export const onlyLast = (names,nums) => {
    let bufferNames = names
    let bufferNums = nums
    let newNames = bufferNames.pop()
    let newNums = bufferNums.pop()
    console.log("onlyLast",newNames)
    console.log("onlyLast",newNums)
}

export const removeFirst = (names,nums) => {
    console.log("names", names)
    let bufferNames = names
    let bufferNums = nums
    let newNames = bufferNames.slice(1,(names.length -1))
    let newNums = bufferNums.slice(1,(nums.length -1))
    console.log("removeFirst",newNames)
    console.log("removeFirst",newNums)
}

// export const removeLast = (names,nums) => {
    
// }