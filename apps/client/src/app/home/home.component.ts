import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { code } from '@quertc/controls'
import { SignalingChannel } from '@quertc/core'
import * as io from 'socket.io-client'
import { uuid } from '../utilities'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  form = new FormGroup({
    control: new FormControl(''),
    code: new FormControl(''),
  })

  code = new FormControl('')
  io: SocketIOClient.Socket
  constructor(private signaling: SignalingChannel) {
    console.log(this.signaling)
    this.io = io.connect('http://localhost:3000/chat')
    this.io.on('connect', console.log)
  }

  createRoom() {
    const room = code()
    this.io.emit('joinRoom', room)
    this.io.on('joinedRoom', console.log)
  }

  ngOnInit(): void {}
}
