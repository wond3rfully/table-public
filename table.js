
for (let number=2; number<=10; number++){
    const container = document.createElement("div")
    document.body.append(container)
    container.classList.add("container")

    const red = document.querySelectorAll(".container")
    for (var i = 0; i<red.length; i++){
        if (number%2===0) {
            container.style.backgroundColor= "red"
        }
        else {
            container.style.backgroundColor= "blue"
        }    
      }
    
    const title = document.createElement("p")
    title.classList.add("title")
    container.append(title)
    title.textContent="Table de " + number

        for (let i=0; i<=10; i++){
            const table = document.createElement("p")
            container.append(table)
            table.classList.add("table")
            const result = number*i
            table.textContent = number+" * "+i+" = "+result
        }
    }

    

