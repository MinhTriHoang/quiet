
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { storybookLog } from '../../utils/functions/storybookLog/storybookLog.function'

import { JoinCommunity } from './JoinCommunity.component'

storiesOf('JoinCommunity', module)
  .add('Default', () => <JoinCommunity openUsernameRegistration={storybookLog('Opening username registration!')} />)
