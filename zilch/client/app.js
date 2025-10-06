const dice = document.querySelectorAll(".die");

function rollDie() {
    dice.forEach((die) => {
        const x = 90 * Math.floor(Math.random() * 8); // 0, 90, 180, 270
        const y = 90 * Math.floor(Math.random() * 8);
        die.style.transform = `rotateX(${x}deg) rotateY(${y}deg) scale3d(.5, .5, .5)`;
        setTimeout(() => {
            die.style.transform = `rotateX(${x}deg) rotateY(${y}deg) scale3d(1, 1, 1)`;
        }, 500)
    });
}

async function loadFaces() {
    // grab the template and stringify
    const response = await fetch("./face.svg")
    const svgTemplate = await response.text()

    // convert to DOM
    const parser = new DOMParser()
    const parsedSvg = parser.parseFromString(svgTemplate, "image/svg+xml")
    const svgTag = parsedSvg.documentElement

    // get the target faces for each die
    const faces = document.querySelectorAll(".face")

    // pip combinations - map on a 9x9 grid
    pipCombos = {
        1: [5],
        2: [1, 9],
        3: [1, 5, 9],
        4: [1, 3, 7, 9],
        5: [1, 3, 5, 7, 9],
        6: [1, 3, 4, 6, 7, 9]
    }

    faces.forEach((face) => {
        // clone the svgElement and add a child
        const clone = svgTag.cloneNode(true)
        face.appendChild(clone)

        const faceValue = parseInt(face.dataset.value)
        const pipMap = pipCombos[faceValue]
        
        // svg is now available for use
        const circles = clone.querySelectorAll("circle[data-pos]")
        circles.forEach((circle) => {
            const pos = parseInt(circle.dataset.pos)

            if (pipMap.includes(pos)) {
                circle.setAttribute("fill", "black")
            } else {
                circle.setAttribute("fill", "none")
            }
        })
    })
}

loadFaces()