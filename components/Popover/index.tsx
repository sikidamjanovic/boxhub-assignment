import { Popover as HeadlessPopover, Transition } from '@headlessui/react'
import { Checkbox } from 'components/Checkbox'
import { TableContext } from 'contexts/TableContext'
import { capitalizeReplaceDash } from 'helpers/format'
import { useContext } from 'react'

interface PopoverProps {
  row: string
  filterOptions?: string[]
  children: React.ReactNode
}

export const Popover:React.FC<PopoverProps> = ({ row, filterOptions, children }) => {
  const { hidden, addHidden, removeHidden } = useContext(TableContext)

  return (
    <HeadlessPopover className="relative">
      <HeadlessPopover.Button>
        {children}
      </HeadlessPopover.Button>
      <HeadlessPopover.Overlay className="fixed inset-0 bg-black opacity-50" />
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <HeadlessPopover.Panel className="absolute z-10">
          <div className="p-5 bg-neutral-900 flex flex-col rounded-lg border border-neutral-800 shadow-lg gap-4">
            {filterOptions?.map((filter,index) =>
              <Checkbox 
                key={`filter-option-${index}`}
                checked={hidden?.filter((hid) => hid?.value === filter).length === 0}
                onChange={(checked) => checked
                  ? removeHidden(filter)
                  : addHidden(row, filter)
                }
                label={capitalizeReplaceDash(filter)}
              />
            )}
          </div>
        </HeadlessPopover.Panel>
      </Transition>
    </HeadlessPopover>
  )
}