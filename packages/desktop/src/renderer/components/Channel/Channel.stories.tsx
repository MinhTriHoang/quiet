import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { withTheme } from '../../storybook/decorators'

import ChannelComponent, { ChannelComponentProps } from './ChannelComponent'
import { DisplayableMessage } from '@quiet/state-manager'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { UploadFilesPreviewsProps } from '../widgets/channels/UploadedFilesPreviews'

const mockMessages = (message: DisplayableMessage | null = null) => {
  let placeholder: DisplayableMessage = {
    id: '32',
    type: 1,
    media: null,
    message: '*heavy breathing*',
    createdAt: 0,
    date: '12:46',
    nickname: 'vader'
  }

  if (message !== null) {
    placeholder = message
  }

  const messages: {
    count: number
    groups: { [day: string]: DisplayableMessage[][] }
  } = {
    count: undefined,
    groups: {
      '26 Oct': [
        [
          {
            id: '1',
            type: 1,
            message: 'Messages more there should be',
            createdAt: 0,
            date: '12:46',
            nickname: 'yoda'
          }
        ],
        [
          {
            id: '2',
            type: 1,
            message: 'I Agree',
            createdAt: 0,
            date: '12:46',
            nickname: 'obi'
          },
          {
            id: '3',
            type: 1,
            message: 'Of course, I Agree',
            createdAt: 0,
            date: '12:46',
            nickname: 'obi'
          }
        ],
        [
          {
            id: '4',
            type: 1,
            message: 'Wrough!',
            createdAt: 0,
            date: '12:46',
            nickname: 'wookie'
          }
        ],
        [
          {
            id: '5',
            type: 1,
            message: 'Yeah!',
            createdAt: 0,
            date: '12:46',
            nickname: 'leah'
          }
        ],
        [
          {
            id: '6',
            type: 1,
            message: 'The more messages the better',
            createdAt: 0,
            date: '12:46',
            nickname: 'luke'
          }
        ],
        [
          {
            id: '7',
            type: 1,
            message: 'We cannot grant you the rank of messager',
            createdAt: 0,
            date: '12:46',
            nickname: 'windoo'
          }
        ],
        [
          {
            id: '8',
            type: 1,
            message:
              'deathhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhstarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrdeathstartttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
            createdAt: 0,
            date: '12:46',
            nickname: 'vader'
          }
        ]
      ],
      '27 Oct': [
        [
          {
            id: '9',
            type: 1,
            message: 'Luck, I am your father!',
            createdAt: 0,
            date: '12:40',
            nickname: 'chad'
          },
          {
            id: '10',
            type: 1,
            message: "That's impossible!",
            createdAt: 0,
            date: '12:41',
            nickname: 'chad'
          },
          {
            id: '11',
            type: 1,
            message: 'Nooo!',
            createdAt: 0,
            date: '12:45',
            nickname: 'chad'
          }
        ],
        [
          {
            id: '12',
            type: 1,
            message: 'Uhuhu!',
            createdAt: 0,
            date: '12:46',
            nickname: 'anakin'
          }
        ],
        [
          {
            id: '13',
            type: 1,
            message: 'Why?',
            createdAt: 0,
            date: '12:46',
            nickname: 'anakin'
          }
        ],
        [
          {
            id: '14',
            type: 1,
            message: 'Messages more there should be',
            createdAt: 0,
            date: '12:46',
            nickname: 'yoda'
          }
        ],
        [
          {
            id: '15',
            type: 1,
            message: 'I Agree',
            createdAt: 0,
            date: '12:46',
            nickname: 'obi'
          },
          {
            id: '16',
            type: 1,
            message: 'Of course, I Agree',
            createdAt: 0,
            date: '12:46',
            nickname: 'obi'
          }
        ],
        [
          {
            id: '17',
            type: 1,
            message: 'Wrough!',
            createdAt: 0,
            date: '12:46',
            nickname: 'wookie'
          }
        ],
        [
          {
            id: '18',
            type: 1,
            message: 'Yeah!',
            createdAt: 0,
            date: '12:46',
            nickname: 'leah'
          }
        ],
        [
          {
            id: '19',
            type: 1,
            message: 'The more messages the better',
            createdAt: 0,
            date: '12:46',
            nickname: 'luke'
          }
        ],
        [
          {
            id: '20',
            type: 1,
            message: 'We cannot grant you the rank of messager',
            createdAt: 0,
            date: '12:46',
            nickname: 'windoo'
          }
        ],
        [
          {
            id: '21',
            type: 1,
            message:
              'deathhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhstarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrdeathstartttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
            createdAt: 0,
            date: '12:46',
            nickname: 'vader'
          }
        ]
      ],
      '28 Oct': [
        [
          {
            id: '22',
            type: 1,
            message: 'Hello',
            createdAt: 0,
            date: '28 Oct, 10:00',
            nickname: 'alice'
          },
          {
            id: '23',
            type: 1,
            message:
              "How are you? My day was awesome. I removed a lot of unused props from container and I simplified code a lot. I like coding, coding is like building things with LEGO. I could admit it's a little bit harder and there's a lot that can go wrong but I like it anyway.",
            createdAt: 0,
            date: '28 Oct, 10:01',
            nickname: 'alice'
          }
        ],
        [
          {
            id: '24',
            type: 1,
            message: 'Great, thanks!',
            createdAt: 0,
            date: '28 Oct, 10:02',
            nickname: 'john'
          }
        ]
      ],
      Today: [
        [
          {
            id: '25',
            type: 1,
            message: 'Luck, I am your father!',
            createdAt: 0,
            date: '12:40',
            nickname: 'chad'
          },
          {
            id: '26',
            type: 1,
            message: "That's impossible!",
            createdAt: 0,
            date: '12:41',
            nickname: 'chad'
          },
          {
            id: '27',
            type: 1,
            message: 'Nooo!',
            createdAt: 0,
            date: '12:45',
            nickname: 'chad'
          }
        ],
        [
          {
            id: '28',
            type: 1,
            message: 'Uhuhu!',
            createdAt: 0,
            date: '12:46',
            nickname: 'anakin'
          }
        ],
        [
          {
            id: '29',
            type: 1,
            message: 'Why?',
            createdAt: 0,
            date: '12:46',
            nickname: 'anakin'
          }
        ],
        [
          {
            id: '30',
            type: 1,
            message: 'Messages more there should be',
            createdAt: 0,
            date: '12:46',
            nickname: 'yoda'
          }
        ],
        [
          {
            id: '31',
            type: 1,
            message: 'I Agree',
            createdAt: 0,
            date: '12:46',
            nickname: 'obi'
          }
        ],
        [placeholder],
        [
          {
            id: '33',
            type: 1,
            message: 'Use the force, look!',
            createdAt: 0,
            date: '12:46',
            nickname: 'vader'
          }
        ]
      ]
    }
  }

  return messages
}

const Template: ComponentStory<typeof ChannelComponent> = args => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <ChannelComponent {...args} />
      </DndProvider>
    </>
  )
}

export const Component = Template.bind({})
export const Pending = Template.bind({})
export const ImagePreview = Template.bind({})
export const ImagePlaceholder = Template.bind({})
export const SentImage = Template.bind({})

const args: Partial<ChannelComponentProps & UploadFilesPreviewsProps> = {
  user: {
    id: 'id',
    nickname: 'vader',
    hiddenService: {
      onionAddress: 'onionAddress',
      privateKey: 'privateKey'
    },
    peerId: {
      id: 'id',
      privKey: 'privKey',
      pubKey: 'pubKey'
    },
    dmKeys: {
      publicKey: 'publicKey',
      privateKey: 'privateKey'
    },
    userCsr: {
      userCsr: 'userCsr',
      userKey: 'userKey',
      pkcs10: {
        publicKey: 'publicKey',
        privateKey: 'privateKey',
        pkcs10: 'pkcs10'
      }
    },
    userCertificate: 'userCertificate'
  },
  channelSettingsModal: {
    open: false,
    handleOpen: function (_args?: any): any {},
    handleClose: function (): any {}
  },
  channelInfoModal: {
    open: false,
    handleOpen: function (_args?: any): any {},
    handleClose: function (): any {}
  },
  uploadedFileModal: {
    open: false,
    handleOpen: function (_args?: any): any {},
    handleClose: function (): any {},
    src: 'images/butterfly.jpeg'
  },
  unsupportedFileModal: {
    open: false,
    handleOpen: function (_args?: any): any {},
    handleClose: function (): any {},
    sendOtherContent: '',
    textContent: '',
    title: '',
    tryZipContent: '',
    unsupportedFiles: []
  },
  messages: mockMessages(),
  pendingMessages: {},
  channelAddress: 'general',
  channelName: 'general',
  lazyLoading: function (_load: boolean): void {},
  onDelete: function (): void {},
  onInputChange: function (_value: string): void {},
  onInputEnter: function (_message: string): void {},
  mutedFlag: false,
  notificationFilter: '',
  openNotificationsTab: function (): void {},
  filesData: {}
}

Component.args = args
Pending.args = {
  ...args,
  pendingMessages: {
    33: {
      id: '33',
      status: 0
    }
  }
}
ImagePreview.args = {
  ...args,
  filesData: {
    file_id: {
      path: 'images/test-image.png',
      name: 'test-image',
      ext: '.png'
    }
  }
}
ImagePlaceholder.args = {
  ...args,
  messages: mockMessages({
    id: '32',
    type: 2,
    media: {
      cid: 'QmWUCSApiy76nW9DAk5M9QbH1nkW5XCYwxUHRSULjATyqs',
      message: {
        channelAddress: 'general',
        id: 'wgtlstx3u7'
      },
      ext: '.png',
      name: 'test-image',
      width: 1200,
      height: 580,
      path: null
    },
    message: '',
    createdAt: 0,
    date: '12:46',
    nickname: 'vader'
  })
}
SentImage.args = {
  ...args,
  messages: mockMessages({
    id: '32',
    type: 2,
    media: {
      cid: 'QmWUCSApiy76nW9DAk5M9QbH1nkW5XCYwxUHRSULjATyqs',
      message: {
        channelAddress: 'general',
        id: 'wgtlstx3u7'
      },
      ext: '.png',
      name: 'test-image',
      width: 1200,
      height: 580,
      path: 'images/test-image.png'
    },
    message: '',
    createdAt: 0,
    date: '12:46',
    nickname: 'vader'
  })
}

const component: ComponentMeta<typeof ChannelComponent> = {
  title: 'Components/ChannelComponent',
  decorators: [withTheme],
  component: ChannelComponent
}

export default component