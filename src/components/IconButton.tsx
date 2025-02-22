import type { ComponentProps } from 'react'

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton(props: IconButtonProps) {
  return (
    <button
      className="bg-gray-500 p-1.5 h-12 rounded-md text-blue cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
      {...props}
    />
  )
}
