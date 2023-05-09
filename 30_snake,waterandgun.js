let user = prompt("Enter Snake, Water or Gun: ");
let cpui = Math.random * 3;
cpui = Math.round(cpui);

let cpu = ["S","W","G"][cpui];

const match = (cpu,user) =>{
    if(cpu === user){
        return 0;
    }
    else if(cpu === "S" && user === "W"){
        return "cpu";
    }
    else if(cpu === "G" && user === "W"){
        return "user";
    }
    else if(cpu === "S" && user === "G"){
        return "user";
    }
    else if(cpu === "G" && user === "S"){
        return "cpu";
    }
    else if(cpu === "W" && user === "G"){
        return "cpu";
    }
    else if(cpu === "W" && user === "S"){
        return "user";
    }
}

let result = match(user,cpu);
document.write("Result is: " , result);