// nested function

const global = "global"

const parent = ()=>{
    let parentVariable = "PARENT"
    console.log(`parent variable is ${parentVariable}`);
    // console.log(`child variable is ${childVariable}`);
    // console.log(`global property is ${global}`);

    const child = ()=>{
        let childVariable = "CHILD"
        console.log(`parent variable is ${parentVariable}`);

        console.log(`child variable is ${childVariable}`);
        // console.log(`global property is ${global}`);

    }
    child()

}
parent()