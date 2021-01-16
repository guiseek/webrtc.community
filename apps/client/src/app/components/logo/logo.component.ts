import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: inline-flex;
        max-width: inherit;
        height: inherit;
        svg {
          width: inherit;
          height: inherit;
        }
      }
    `,
  ],
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 486.695 486.695">
      <defs>
        <clipPath id="clip-path">
          <path id="Caminho_16" data-name="Caminho 16" d="M438.025,0H48.669A48.813,48.813,0,0,0,0,48.669V486.695l97.339-97.339H438.025a48.813,48.813,0,0,0,48.67-48.669V48.669A48.813,48.813,0,0,0,438.025,0Z" transform="translate(71 92)" fill="rgba(255,255,255,0.75)"/>
        </clipPath>
      </defs>
      <g id="Grupo_de_máscara_1" data-name="Grupo de máscara 1" transform="translate(-71 -92)" clip-path="url(#clip-path)">
        <g id="Grupo_1" data-name="Grupo 1" transform="translate(-225.649 -257.96)">
          <path id="Caminho_1" data-name="Caminho 1" d="M345.6-205.45v269.8H75.8L-194,334.153H75.8v269.8l269.8,269.8v-269.8H615.4l269.8-269.8H615.4V64.351Z" transform="translate(194 243.994)" opacity="0.2"/>
          <path id="Caminho_2" data-name="Caminho 2" d="M345.6,223.648H-194L75.8-46.153H345.6" transform="translate(194 315.954)" fill="#fec006"/>
          <path id="Caminho_3" data-name="Caminho 3" d="M177.694,307.6V-232L447.5,37.8V307.6" transform="translate(361.909 232)" fill="#f34235"/>
          <path id="Caminho_4" data-name="Caminho 4" d="M-8.153,139.694V409.5l269.8,269.8v-539.6" transform="translate(277.954 399.909)" fill="#4bae4f"/>
          <path id="Caminho_5" data-name="Caminho 5" d="M177.694,139.694H717.3L447.5,409.5h-269.8" transform="translate(361.909 399.909)" fill="#2095f2"/>
          <path id="Caminho_6" data-name="Caminho 6" d="M177.694,139.694l38.542,38.544H678.753L717.3,139.694Z" transform="translate(361.909 399.909)" fill="#fff" opacity="0.2"/>
          <path id="roxo" d="M177.694,223.648l269.8-269.8v269.8Z" transform="translate(361.909 315.954)" fill="#9c27b0"/>
          <path id="green" d="M261.648,139.694-8.153,409.5v-269.8Z" transform="translate(277.954 399.909)" fill="#1ea362"/>
          <path id="indigo" d="M447.5,409.5l-269.8-269.8V409.5Z" transform="translate(361.909 399.909)" fill="#3e50b4"/>
          <path id="laranja" d="M-8.153-46.153l269.8,269.8v-269.8Z" transform="translate(277.954 315.954)" fill="#fe9700"/>
          <path id="Caminho_11" data-name="Caminho 11" d="M345.6-232v38.544l269.8,269.8V37.8ZM75.8,37.8-194,307.6h38.544L75.8,76.344H345.6V37.8Z" transform="translate(194 232)" fill="#fff" opacity="0.2"/>
          <g id="Grupo_2" data-name="Grupo 2">
            <path id="Caminho_12" data-name="Caminho 12" d="M225.668,60.045,177.489,166.039,71.5,214.218,177.489,262.4,225.668,368.39,273.847,262.4,379.84,214.218,273.847,166.039Z" transform="translate(313.935 363.928)" opacity="0.2"/>
            <path id="Caminho_13" data-name="Caminho 13" d="M225.668,33.5,177.489,139.489,71.5,187.668l105.993,48.179L225.668,341.84l48.179-105.993L379.84,187.668,273.847,139.489Z" transform="translate(313.935 351.935)" fill="#fff"/>
            <path id="Caminho_14" data-name="Caminho 14" d="M71.5,139.694l105.993,48.179,48.179,105.993V139.694Z" transform="translate(313.935 399.909)" fill="#ebebeb"/>
            <path id="Caminho_15" data-name="Caminho 15" d="M331.866,139.694,225.873,187.873,177.694,293.866V139.694Z" transform="translate(361.909 399.909)" fill="#dfdfdf"/>
          </g>
        </g>
      </g>
    </svg>
  `,
})
export class LogoComponent {}
