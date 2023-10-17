import { Component } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent {
  isDarkMode: boolean = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      this.applyDarkModeStyles();
    } else {
      this.applyLightModeStyles();
    }
  }

  private applyDarkModeStyles() {
    document.documentElement.style.setProperty('--color-background', '#181a1e');
    document.documentElement.style.setProperty('--color-white', '#202528');
    document.documentElement.style.setProperty('--color-dark', '#edeffd');
    document.documentElement.style.setProperty('--color-dark-variant', '#a3bdcc');
    document.documentElement.style.setProperty('--color-light', 'rgba(0, 0, 0, 0.4)');
    document.documentElement.style.setProperty('--box-shadow', '0 2rem 3rem var(--color-light)');
  }

  private applyLightModeStyles() {
    document.documentElement.style.setProperty('--color-background', '#f6f6f9');
    document.documentElement.style.setProperty('--color-white', '#fff');
    document.documentElement.style.setProperty('--color-dark', '#363949');
    document.documentElement.style.setProperty('--color-dark-variant', '#677483');
    document.documentElement.style.setProperty('--color-light', 'rgba(132, 139, 200, 0.18)');
    document.documentElement.style.setProperty('--box-shadow', '0 2rem 3rem var(--color-light)');
  }
}
