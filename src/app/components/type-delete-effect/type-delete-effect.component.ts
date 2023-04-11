import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

/**
 * https://stackblitz.com/edit/medium-type-delete-demo?file=src%2Fapp%2Ftype-delete%2Ftype-delete.component.html
 */
@Component({
  selector: 'app-type-delete-effect',
  templateUrl: './type-delete-effect.component.html',
  styleUrls: ['./type-delete-effect.component.scss']
})
export class TypeDeleteEffectComponent implements AfterViewInit {
  @ViewChild("textElement") textElement!: ElementRef;
  @ViewChild("blinkElement") blinkElement!: ElementRef;

  @Input() wordArray: string[] = [
    "You Can...",
    "Write Anything You want...",
  ];
  @Input() typingSpeedMs = 100;
  @Input() typingDelMs = 100;
  @Input() typingBreakMs = 1500;

  private i = 0;

  constructor() {}

  ngAfterViewInit(): void {
    this.typingEffect();
  }

  private typingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const callDeleteEffectAsync = () => {
        this.deletingEffect()
    }
    const loopTyping = () => {
      if (word.length > 0) {
        this.textElement.nativeElement.innerHTML += word.shift();
      } else {
        setTimeout(callDeleteEffectAsync, this.typingBreakMs);
        return;
      }
      setTimeout(loopTyping, this.typingSpeedMs);
    };
    loopTyping();
  }

  private deletingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        this.textElement.nativeElement.innerHTML = word.join("");
      } else {
        if (this.wordArray.length > this.i + 1) {
          this.i++;
        } else {
          this.i = 0;
        }
        this.typingEffect();
        return false;
      }
      setTimeout(loopDeleting, this.typingDelMs);
      return true;
    };
    loopDeleting();
  }
}
