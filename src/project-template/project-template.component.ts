import { Component } from '@angular/core';

@Component({
  selector: 'app-project-template',
  templateUrl: './project-template.component.html',
  styleUrls: ['./project-template.component.css']
})
export class ProjectTemplateComponent {
    constructor() {}

    ngOnInit() {
        const logoGradients = document.querySelectorAll('.logo-gradient');
        const logoExtraSize = 0.35
        // @ts-ignore
        logoGradients.forEach((gradient: HTMLElement) => {
            // @ts-ignore
            const logoText = gradient.nextElementSibling.textContent;
            // @ts-ignore
            const fontSize = parseFloat(window.getComputedStyle(gradient.nextElementSibling).fontSize);
            // @ts-ignore
            const [textWidth, textHeight] = this.getTextSize(logoText, fontSize); // Adjust as needed
            console.log("width: ", textWidth)
            console.log("height: ", textHeight)

            gradient.style.width = textWidth + textWidth*logoExtraSize + 'px';
            gradient.style.height = textHeight + textHeight*logoExtraSize + 'px';
            });
    }

    getTextSize(text: string, fontSize: number): number[] {
        const span = document.createElement('span');
        span.textContent = text;
        span.style.fontSize = fontSize + 'px';
        span.style.visibility = 'hidden';
        span.style.whiteSpace = 'nowrap';
        document.body.appendChild(span);
        const rect = span.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        document.body.removeChild(span);
        return [width, height];
    }
}
