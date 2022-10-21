import { observer } from 'mobx-react-lite'

import UserStore from 'stores/UserStore'
import { UserBar } from './UserBar'
import { AuthButtonsGroup } from './AuthButtonsGroup'

export const HeaderUserMenu = observer(() => (UserStore.user ? <UserBar {...UserStore.user} /> : <AuthButtonsGroup />))
