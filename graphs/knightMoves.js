function knightMoves(start, end) {
    
    const directions = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    const isValid = ([x, y]) =>
        x >= 0 && x <= 7 && y >= 0 && y <= 7;

    const queue = [[start]];
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        const path = queue.shift();
        const current = path[path.length - 1];

        console.log("Dequeued path:", path);
        console.log("Queue now:", queue);

        if (current[0] === end[0] && current[1] === end[1]) {
            console.log("Reached destination!");
            return path;
        }

        for (const [dx, dy] of directions) {
            const next = [current[0] + dx, current[1] + dy];
            const key = next.toString();

            if (isValid(next) && !visited.has(key)) {
                visited.add(key);
                const newPath = [...path, next];
                queue.push(newPath);
                console.log("Added path to queue:", newPath);
            }
        }

    }

    return null;
}

console.log(knightMoves([0,0], [3,3]));