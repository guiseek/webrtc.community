import { TestBed } from '@angular/core/testing'

import { UserProfileGuard } from './user-profile.guard'

describe('UserProfileGuard', () => {
  let guard: UserProfileGuard

  beforeEach(() => {
    TestBed.configureTestingModule({})
    guard = TestBed.inject(UserProfileGuard)
  })

  it('should be created', () => {
    expect(guard).toBeTruthy()
  })
})
