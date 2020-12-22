declare global {
  interface RTCStatsReport {
    get(stats: string): any
  }
}
export class PeerStats implements RTCStats {
  id: string
  ip: string
  port: number
  protocol: string
  timestamp: number
  type: RTCStatsType
}
