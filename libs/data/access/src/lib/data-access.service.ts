import { HttpClient } from '@angular/common/http'
import { Inject, Injectable, Optional } from '@angular/core'
import { DataAccessConfig, DATA_ACCESS_CONFIG } from './data-access-injectors'

@Injectable({
  providedIn: 'root',
})
export class DataAccessService {
  protected endpoint = ''
  constructor(
    protected http: HttpClient,
    @Optional()
    @Inject(DATA_ACCESS_CONFIG)
    protected config?: DataAccessConfig
  ) {
    console.log(this.config)
    if (config) {
      this.endpoint = config.endpoint
    }
    this.http.get(`${this.endpoint}/ping`, { params: { timestamp: `${Date.now()}` } }).subscribe((diff) => console.log(diff))
  }
}
