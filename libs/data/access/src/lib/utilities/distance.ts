import { Observable, Observer } from 'rxjs'

/**
 * @internal
 * @dynamic
 * @class Distance
 */
export class Distance {
  position$!: Observable<GeolocationPosition>

  getCurrentPosition(): Observable<GeolocationPosition> {
    return new Observable((observer: Observer<GeolocationPosition>) => {
      window.navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          observer.next(position)
          observer.complete()
        },
        (error: GeolocationPositionError) => {
          console.log('Geolocation service: ' + error.message)
          observer.error(error)
        }
      )
    })
  }

  getCoordToRadians(diffCoord: number): number {
    return diffCoord * (Math.PI / 180)
  }

  getDistance(
    originCoords: GeolocationCoordinates,
    targetCoords: GeolocationCoordinates
  ): number {
    const R = 6371
    let diffLatitude = this.getCoordToRadians(
      originCoords.latitude - targetCoords.latitude
    )
    let diffLongitude = this.getCoordToRadians(
      originCoords.longitude - targetCoords.longitude
    )
    let a =
      Math.sin(diffLatitude / 2) * Math.sin(diffLatitude / 2) +
      Math.cos(this.getCoordToRadians(originCoords.latitude)) *
        Math.cos(this.getCoordToRadians(targetCoords.latitude)) *
        Math.sin(diffLongitude / 2) *
        Math.sin(diffLongitude / 2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    let d = R * c
    return d
  }
  getMetersOrKilometers(distance: number): string {
    if (distance >= 1) {
      return `${distance.toFixed(1)}km`
    } else {
      return `${(distance * 1000).toFixed(0)}m`
    }
  }
}
