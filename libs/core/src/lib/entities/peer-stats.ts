declare global {
  interface RTCStatsReport {
    get(stats: string): any
  }
}
export interface PeerStats extends RTCStats {
  id: string
  ip: string
  port: number
  protocol: string
  timestamp: number
  type: RTCStatsType
}
