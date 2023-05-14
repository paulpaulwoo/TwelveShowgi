import { empty } from "rxjs";
import { Piece } from "./gamePieces";

/**
 * An interface for each of the 12 tiles in the game board.
 * @param x: column index of the tile on the 3x4 board.
 * @param y: row index of the tile on the 3x4 board.
 * @param fill: color of the tile.
 * @param occupant: the piece that is currently on the tile.
 */
export class Tile {
    /**
     * column index of the tile on the 3x4 board.
     */
    x: number;
    /**
     * row index of the tile on the 3x4 board.
     */
    y: number;
    /**
     * color of the tile.
     */
    fill: string;

    /**
     * the piece that is currently on the tile.
     * Private because changing directly will lead to bugs
     */
    private occupant: Piece;

    /**
     * the appropriate image path according to the occupant.
     */
    imageSrc: string;

    /**
    * An interface for each of the 12 tiles in the game board.
    * @param x: column index of the tile on the 3x4 board.
    * @param y: row index of the tile on the 3x4 board.
    * @param fill: color of the tile.
    * @param occupant: the piece that is currently on the tile.
    */ 
    constructor(x: number, y: number, fill: string, occupant: Piece) {
        this.x = x;
        this.y = y;
        this.fill = fill;
        this.occupant = occupant;
        this.imageSrc = "";
        this.changeSrc();
    }

    /**
     * Method that changes the image path depending on the piece on the tile.
     */
    changeSrc(): void {
        if (this.occupant === Piece.empty) {
            this.imageSrc = "";            
        } else if (this.occupant === Piece.greenBishop) {
            this.imageSrc = "./assets/pieces/whiteBishop.png";
        } else if (this.occupant === Piece.greenRook) {
            this.imageSrc = "./assets/pieces/whiteRook.png";
        } else if (this.occupant === Piece.greenKing) {
            this.imageSrc = "./assets/pieces/whiteKing.png";
        } else if (this.occupant === Piece.greenPawn) {
            this.imageSrc = "./assets/pieces/whitePawn.png";
        } else if (this.occupant === Piece.greenQueen) {
            this.imageSrc = "./assets/pieces/whiteQueen.png";
        } else if (this.occupant === Piece.redBishop) {
            this.imageSrc = "./assets/pieces/blackBishop.png";
        } else if (this.occupant === Piece.redRook) {
            this.imageSrc = "./assets/pieces/blackRook.png";
        } else if (this.occupant === Piece.redKing) {
            this.imageSrc = "./assets/pieces/blackKing.png";
        } else if (this.occupant === Piece.redPawn) {
            this.imageSrc = "./assets/pieces/blackPawn.png";
        } else if (this.occupant === Piece.redQueen) {
            this.imageSrc = "./assets/pieces/blackQueen.png";
        } else {
            console.log("Error on method changeSrc of Tile class");
        }


    
    }

    /**
     * Method to change the occupant of the tile. 
     * @param newOccupant: the new occupant that will be on the tile
     */
    changeOccupant(newOccupant: Piece) {
        this.occupant = newOccupant;
        this.changeSrc()
    }


}