/**
 * PlayerColor: Color of the player. Used for determining board color and piece color/owner.
 */
export enum PlayerColor {
    green,
    red
}

/**
 * Piece: enum for the pieces on the game. Used for tiles and captured pieces.
 */
export enum Piece {
    greenKing,
    greenRook,
    greenBishop,
    greenQueen,
    greenPawn,
    redKing,
    redRook,
    redBishop,
    redQueen,
    redPawn,
    empty
}