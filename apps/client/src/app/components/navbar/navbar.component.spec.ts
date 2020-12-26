import { RouterTestingModule } from '@angular/router/testing'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'

import { NavbarComponent } from './navbar.component'
import { MatSidenavModule } from '@angular/material/sidenav'
import { NO_ERRORS_SCHEMA } from '@angular/core'

describe('NavbarComponent', () => {
  let component: NavbarComponent
  let fixture: ComponentFixture<NavbarComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatToolbarModule,
          LayoutModule,
          MatIconModule,
          MatSidenavModule,
        ],
        declarations: [NavbarComponent],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})
