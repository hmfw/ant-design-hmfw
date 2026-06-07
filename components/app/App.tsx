import { defineComponent, provide, ref, shallowReactive } from 'vue'
import { APP_KEY } from './context'
import { message } from '../message'
import { notification } from '../notification'
import { Modal } from '../modal'
import type { AppConfig } from './types'

interface ModalState {
  open: boolean
  type: 'confirm' | 'info' | 'success' | 'warning' | 'error'
  props: Record<string, unknown>
}

export const App = defineComponent({
  name: 'App',
  setup(_, { slots }) {
    const modalState = shallowReactive<ModalState>({
      open: false,
      type: 'info',
      props: {},
    })

    function showModal(type: ModalState['type'], props: Record<string, unknown>) {
      modalState.type = type
      modalState.props = props
      modalState.open = true
    }

    const appConfig: AppConfig = {
      message,
      notification,
      modal: {
        confirm: (props) => showModal('confirm', props),
        info: (props) => showModal('info', props),
        success: (props) => showModal('success', props),
        warning: (props) => showModal('warning', props),
        error: (props) => showModal('error', props),
      },
    }

    provide(APP_KEY, appConfig)

    return () => (
      <>
        {slots.default?.()}
        <Modal
          open={modalState.open}
          {...modalState.props}
          onUpdate:open={(val: boolean) => {
            modalState.open = val
          }}
          onCancel={() => {
            modalState.open = false
          }}
        />
      </>
    )
  },
})
