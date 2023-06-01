import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void 
}

export const Modal:React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  return (
    <Transition 
      appear 
      show={isOpen} 
      as={Fragment}
    >
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-neutral-900 p-6 text-left align-middle shadow-lg transition-all">
                <div>
                  {children}
                </div>
                <div className="mt-10 flex justify-end">
                  <button
                    type="button"
                    className="outline-none inline-flex justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
                    onClick={onClose}
                  >
                    Close modal
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
