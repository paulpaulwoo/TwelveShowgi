import { Component, Input, OnInit, ElementRef, Renderer2, AfterViewInit, HostListener } from '@angular/core';
import { Tile } from '../class-definitions/tile';
import { Piece } from "../class-definitions/gamePieces";

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})


/** Component for Game board. Handles player input, and also stores tile information. */
export class GameBoardComponent {
  @Input() isGreen: boolean = true;
  squares: Tile[][] = [];
  tileWidth: number = 50;
  tileHeight: number = 50;


  /**
   * Initialization of the component. Initializes all the tiles with appropriate pieces, 
   * and assigns the appropriate coordinate. If player is green, bottom row becomes green.
   * If not, bottom row becomes red.
   */
  ngOnInit(): void {
    this.squares[0] = []
    for (let col = 0; col < 3; col++) {
      const x = col;
      const y = 0;
      const fill = this.isGreen? "red" : "green";
      const occupant = Piece.empty
      var tile: Tile = new Tile(x, y, fill, occupant)
      this.squares[0][col] = tile;
    }
    
    for (let row = 1; row < 3; row++) {
      this.squares[row] = []
      for (let col = 0; col < 3; col++) {
        const x = col;
        const y = row;
        const fill = "beige";
        const occupant = Piece.empty
        var tile: Tile = new Tile(x, y, fill, occupant)
        this.squares[row][col] = tile;
      }
    }
    this.squares[3] = []
    for (let col = 0; col < 3; col++) {
      const x = col;
      const y = 3;
      const fill = this.isGreen? "green" : "red";
      const occupant = Piece.empty
      var tile: Tile = new Tile(x, y, fill, occupant);
      this.squares[3][col] = tile;
    }

    if (this.isGreen) {
      this.squares[0][0].changeOccupant(Piece.redRook);
      this.squares[0][1].changeOccupant(Piece.redKing);
      this.squares[0][2].changeOccupant(Piece.redBishop);
      this.squares[1][1].changeOccupant(Piece.redPawn);

      this.squares[3][2].changeOccupant(Piece.greenRook);
      this.squares[3][1].changeOccupant(Piece.greenKing);
      this.squares[3][0].changeOccupant(Piece.greenBishop);
      this.squares[2][1].changeOccupant(Piece.greenPawn);

    } else {

      this.squares[0][0].changeOccupant(Piece.greenRook);
      this.squares[0][1].changeOccupant(Piece.greenKing);
      this.squares[0][2].changeOccupant(Piece.greenBishop);
      this.squares[1][1].changeOccupant(Piece.greenPawn);

      this.squares[3][2].changeOccupant(Piece.redRook);
      this.squares[3][1].changeOccupant(Piece.redKing);
      this.squares[3][0].changeOccupant(Piece.redBishop);
      this.squares[2][1].changeOccupant(Piece.redPawn);

    }
  }


  ngAfterViewInit() {

  }

  @HostListener('window:resize')
  onWindowResize() {
    this.getTileSize();
  }

  /**
   * Gets the desired tile width / height that scales with the viewport.
   */
  getTileSize(): number {
    return (window.innerHeight * 0.046) + (window.innerHeight * 0.02);
  }

  /**
   * TODO: Action that should be performed on tile click.
   * @param {Tile} [square] - Tile that has been clicked
   */
  onSquareClick(square: Tile): void {
    console.log("Tile at row: " + square.y + " column: " + square.x + "clicked");
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

}
