import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent  implements OnInit {
    // @ts-ignore
    @ViewChild('logoCanvas', { static: true }) logoCanvas: ElementRef;
    constructor(private renderer: Renderer2) {}

    ngOnInit() {
        const canvas: HTMLCanvasElement = this.logoCanvas.nativeElement;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
        // Create an image element
        const image: HTMLImageElement = new Image();
        image.src = '../assets/JVL-Logo.png'; // Replace with the actual path to your local image
        console.log(image)
        // Wait for the image to load
        image.onload = () => {

            //Scale for the canvas
            canvas.width = 250;
            canvas.height = 250;
            const scale = Math.min(canvas.width / image.width, canvas.height / image.height);
            const scaledWidth = image.width * scale;
            const scaledHeight = image.height * scale;

            // Draw the image on the canvas
            // @ts-ignore
            ctx.drawImage(image, 0, 0, scaledWidth, scaledHeight);
        };

        // Add a click event listener to the canvas
        canvas.addEventListener('click', () => {
            window.location.href = '#'; // Replace with the URL of the page you want to link to
        });
    }
}
