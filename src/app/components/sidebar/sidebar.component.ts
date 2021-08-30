import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  searchText!: string;

  conversations = [
    {
      name: 'Robayy',
      time: '13.19 AM',
      latestMessage: 'Oke aku otewe ya jangan lama lama kali',
      latestMessageRead: true,
      messages: [
        {
          id: 1,
          body: 'Oke aku otewe ya jangan lama lama kali',
          time: '13.19',
          me: true,
        },
        {
          id: 2,
          body: 'Nangkring yok di tempat biasa',
          time: '13.17',
          me: false,
        },
        { id: 3, body: 'Aku lagi dirumah, kenapa?', time: '13.10', me: true },
        { id: 4, body: 'Dimana Nug?', time: '12.00', me: false },
      ],

      nameroom: [
        {
          name: 'Robayy',
        },
      ],
    },

    {
      name: 'Reynaldi',
      time: '12.20 AM',
      latestMessage: 'Ko dimana rey? biar aku jemput',
      latestMessageRead: false,
      messages: [
        {
          id: 1,
          body: 'Ko dimana rey? biar aku jemput',
          time: '12:20',
          me: true,
        },
        {
          id: 2,
          body: 'Oke, bentar',
          time: '12:00',
          me: false,
        },
        {
          id: 3,
          body: 'Bagi aku rey, sebagai referensi aja, ga aku contek.',
          time: '11:45',
          me: true,
        },
        {
          id: 4,
          body: 'Belum, cuma dikit lagi beres',
          time: '8:30',
          me: false,
        },
        {
          id: 5,
          body: 'Rey tugasmu udah kelar belum?',
          time: '8:21',
          me: true,
        },
      ],

      nameroom: [
        {
          name: 'Reynaldi',
        },
      ],
    },

    {
      name: 'Afnand',
      time: '11.05 AM',
      latestMessage: 'Cepat dikit nand',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],

      nameroom: [
        {
          name: 'Afnand',
        },
      ],
    },

    {
      name: 'Fandi',
      time: '10.34 AM',
      latestMessage: 'Udah kw fan?',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],

      nameroom: [
        {
          name: 'Fandi',
        },
      ],
    },

    {
      name: 'Alex',
      time: '09.19 AM',
      latestMessage: 'Gapake lama ya!',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],

      nameroom: [
        {
          name: 'Alex',
        },
      ],
    },

    {
      name: 'Roby',
      time: '08.20 AM',
      latestMessage: 'Udah siap UI nya?',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],

      nameroom: [
        {
          name: 'Roby',
        },
      ],
    },

    {
      name: 'Marzuki',
      time: '07.05 AM',
      latestMessage: 'Okee',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],

      nameroom: [
        {
          name: 'marzuki',
        },
      ],
    },

    {
      name: 'Ridho',
      time: '06.34 AM',
      latestMessage: 'Sip sippp',
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],

      nameroom: [
        {
          name: 'Ridho',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
