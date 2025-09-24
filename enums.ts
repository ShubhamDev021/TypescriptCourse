// Numeric enum with default value
enum Direction {
    Up,     // 0
    Down,   // 1
    Left,   // 2
    Right,  // 3
}
console.log(`Up: ${Direction.Up}`)
console.log(`Left: ${Direction.Left}`)

// Numeric enum with custom value
enum Status {
    Active = 1,
    Inactive = 3,
    Pending = 7,
}
console.log(`Active: ${Status.Active}`)
console.log(`Inactive: ${Status.Inactive}`)
console.log(`Pending: ${Status.Pending}`)